import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const step1 = [
  { value: 'username', label: 'Usuário', security: false },
  { value: 'email', label: 'E-mail', security: false },
  { value: 'password', label: 'Senha', security: true },
  { value: 'verifyPassword', label: 'Confirmar Senha', security: true },
];

const header1 = <Button title="Cadastrar com o Facebook" />;

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
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Text>Está em casa? Conecte-se usando sua localização!</Text>
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/images/iconLocation.png')}
    />
    <Text>Ou preencha com seu endereço: </Text>
  </View>
);

const StepBody = props => {
  return (
    <ProgressStep label="Localização">
      <View style={{ alignItems: 'center' }}>
        <StepInfo
          data={props.data}
          columns={props.columns}
          header={props.header}
        />
      </View>
    </ProgressStep>
  );
};

const StepInfo = props => {
  return (
    <FlatList
      ListHeaderComponent={props.header}
      numColumns={props.columns}
      data={props.data}
      keyExtractor={item => item.value}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.label}:</Text>
            <TextInput
              style={styles.textInputStyle}
              secureTextEntry={item.security}
            />
          </View>
        );
      }}
    />
  );
};

export default function Stepper() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        style={{ width: 80, height: 80 }}
        source={require('../assets/images/snack-icon.png')}
      />
      <ProgressSteps
        activeStepIconColor="gray"
        completedStepIconColor="white"
        activeStepIconBorderColor="transparent"
        progressBarColor="gray"
        activeStepNumColor="gray"
        completedProgressBarColor="gray"
        disabledStepNumColor="#ebebe4">
        {/*
          <StepBody label="Dados básicos" data={step1} columns="2" header={header1} />
        */}
        <ProgressStep label="Dados básicos">
          <View style={{ alignItems: 'center' }}>
            {header1}
            <StepInfo data={step1} columns="2" />
          </View>
        </ProgressStep>
        {/*
          <StepBody label="Localização" data={step2} columns="2" header={header2} />
        */}
        <ProgressStep label="Localização">
          <View style={{ alignItems: 'center' }}>
            {header2}
            <StepInfo data={step1} columns="2" />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

const styles = StyleSheet.create({
  /*
  buttonTextStyle: {
    color: '#393939',
  },
  */
  textInputStyle: {
    height: 20,
    width: 100,
    alignItems: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});
