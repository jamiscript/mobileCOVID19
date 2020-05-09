import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { YellowBox } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import { cos } from 'react-native-reanimated';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested'
]);

const step1 = [
  { value: 'username', label: 'Usuário', security: false },
  { value: 'email', label: 'E-mail', security: false },
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
  console.log("Submissão do cadastro.");
}

const handleTextChange = newValue => {
  console.log("Text change:");
  console.log(newValue);
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
