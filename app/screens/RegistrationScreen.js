import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { YellowBox } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import { registerUser } from '../providers/auth';

class StateForm extends React.Component {
  data = {
    userInfo: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      verifyPassword: '',
    },
    userLocation: {
      city: '',
      number: '',
      complement: '',
      borough: '',
      street: '',
      state: '',
      country: ''
    },
  }

  setFirstName(value) {
    this.data.userInfo.first_name = value
  }
  setLastName(value) {
    this.data.userInfo.last_name = value
  }
  setUsername(value) {
    this.data.userInfo.username = value
  }
  setEmail(value) {
    this.data.userInfo.email = value
  }
  setPassword(value) {
    this.data.userInfo.password = value
  }
  setVerifyPassword(value) {
    this.data.userInfo.verifyPassword = value
  }
  setCity(value) {
    this.data.userLocation.city = value
  }
  setNumber(value) {
    this.data.userLocation.number = value
  }
  setComplement(value) {
    this.data.userLocation.complement = value
  }
  setBorough(value) {
    this.data.userLocation.borough = value
  }
  setStreet(value) {
    this.data.userLocation.street = value
  }
  setState(value) {
    this.data.userLocation.state = value
  }
  setCountry(value) {
    this.data.userLocation.country = value
  }
}

var forminfo = new StateForm()


async function register(data) {
  console.log('data',data)

  try {
    await registerUser({
      "first_name": data.userInfo.first_name,
      "last_name": data.userInfo.last_name,
      "username": data.userInfo.username,
      "email": `${data.userInfo.username}@coronasavior.com`,//data.userInfo.email,
      "password": data.userInfo.password
    })
    console.info("Usuário registrado com sucesso!");
  } catch(error) {
    Alert.alert("Erro ao cadastrar usuário!");
    console.error("erro: ", error);
  }
  /*await axios.post('https://coronasavior.herokuapp.com/users', data.userInfo)
    .then((response) => console.log('response', response))*/
    
    /*await axios.post('https://coronasavior.herokuapp.com/profiles',data.userLocation)
    .then((response) => console.log('response',response)) */
}

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested'
]);

const step1 = [
  { value: 'first_name', label: 'Nome', security: false },
  { value: 'last_name', label: 'Sobrenome', security: false },
  { value: 'username', label: 'Usuário', security: false },
  //{ value: 'email', label: 'E-mail', security: false },
  { value: 'password', label: 'Senha', security: true },
  { value: 'verifyPassword', label: 'Confirmar Senha', security: true },
];

const header1 = (
  <Text style={{ marginBottom: 5 }} />
);

const step2 = [
  { value: 'endereco', label: 'Endereço', security: false },
  { value: 'numero', label: 'Nº', security: false },
  { value: 'complemento', label: 'Complemento', security: false },
  { value: 'bairro', label: 'Bairro', security: false },
  { value: 'cidade', label: 'Cidade', security: false },
  { value: 'estado', label: 'Estado', security: false },
  { value: 'pais', label: 'País', security: false },
];

const header2 = (
  <Text style={{ marginBottom: 5 }}>Está em casa?
    <Text
      onPress={() => handleOnPress()}
      style={{ color: 'red' }}
    > Conecte-se usando sua localização!</Text>
  </Text>
);


const handleOnPress = () => {
  console.log("Opção pegar localização clicada.");
}

const handleOnSubmit = () => {
  if (forminfo.data.password == forminfo.data.verifyPassword) {
    console.log("Submissão do cadastro.", forminfo.data);
    register(forminfo.data)
  }
  else {
    console.log('Passwords are different!')
  }

}
const handleTextChange = (newValue, option) => {
  console.log(`newValue: ${newValue} option: ${option}`)
  // newValue = JSON.stringify(newValue)
  if (option == 'first_name') forminfo.setFirstName(newValue)
  else if (option == 'last_name') forminfo.setLastName(newValue)
  else if (option == 'username') forminfo.setUsername(newValue)
  // else if (option == 'email') forminfo.setEmail(newValue)
  else if (option == 'password') forminfo.setPassword(newValue)
  else if (option == 'verifyPassword') forminfo.setVerifyPassword(newValue)
  else if (option == 'endereco') forminfo.setStreet(newValue)
  else if (option == 'numero') forminfo.setNumber(newValue)
  else if (option == 'complemento') forminfo.setComplement(newValue)
  else if (option == 'bairro') forminfo.setBorough(newValue)
  else if (option == 'cidade') forminfo.setCity(newValue)
  else if (option == 'estado') forminfo.setState(newValue)
  else if (option == 'pais') forminfo.setCountry(newValue)
}


const Content = props => {
  return (
    <View style={styles.container}>
      {props.header}
      {/*<View style={styles.hairline} />*/}
      <StepInfo data={props.data} columns={props.columns} style={props.style} />
    </View>
  );
}

const StepInfo = props => {
  return (
    <FlatList
      ListHeaderComponent={props.header}
      numColumns={props.columns}
      data={props.data}
      key={props.columns}
      keyExtractor={item => item.value}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={{ marginBottom: -5 }}>{item.label}:</Text>
            <CustomTextInput
              placeholder=''
              option={item.value}
              action={handleTextChange}
              isSensitive={item.security}
              style={props.style}
            />
          </View>
        );
      }}
    />
  );
};

export default function Stepper() {
  return (
    <View style={styles.container}>
      <Image
        style={{ top: 10, width: 70, height: 70 }}
        source={require('../assets/images/snack-icon.png')}
      />
      <ProgressSteps
        // Barra
        progressBarColor="transparent"
        completedProgressBarColor="transparent"

        // Stepper ativo
        activeLabelColor="darkgray"
        activeStepIconColor="gray"
        activeStepNumColor="gray"
        activeStepIconBorderColor="red"

        // Stepper desabilitado (incompleto)
        disabledStepIconColor="purple"
        disabledStepNumColor="orange"

        // Stepper completo
        completedLabelColor="blue"
        completedStepIconColor="black"
        completedStepNumColor="white"
      >
        <ProgressStep
          label="Dados básicos"
          nextBtnText="Próximo"
          nextBtnStyle={styles.stepBtn}
        >
          <Content data={step1} columns="1" header={header1} style={styles.input} />
        </ProgressStep>

        <ProgressStep
          label="Localização"
          previousBtnText="Voltar"
          previousBtnStyle={styles.stepBtn}
          nextBtnStyle={styles.stepBtn}
          finishBtnText="Criar conta"
          onSubmit={handleOnSubmit}
        >
          <Content data={step2} columns="2" header={header2} style={styles.input2} />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepBtn: {
    textAlign: 'center',
    padding: 0,
    margin: 0,
    color: 'pink',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
  },
  input2: {
    height: 40,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
  },
  hairline: {
    marginTop: 20,
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 300,
    marginBottom: 10,
  },
});
