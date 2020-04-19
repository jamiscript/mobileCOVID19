import * as React from 'react';
import {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';

export default Quiz = (props) => {

  function PopUp (props) {
    return(
      <View style={styles.popup}>
        <Text style={styles.popupText}>
          {props.acerto ? "Parabéns!! Você acertou!!": "Ops... Resposta errada..."}
        </Text>
        <View style={styles.popupButtonBox}>
          <Button color={props.acerto ? "green" : "red"} title="Continuar" onPress={() => closePopUp()}></Button>
        </View>
      </View>
    )
  }

  function Header(props) {
    return (
      <View style={styles.header}>
        <Text style={styles.quizText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          gravida porta euismod. Suspendisse malesuada, tortor eu aliquam?
        </Text>
      </View>
    );
  }

  function CustomCard(props) {

    const handleClick = (card) => {
      console.log(`${card} Card clicked! It's ${(props.value)}`)
      showPopUp(props.value)
    }

    return (
      <TouchableHighlight style={styles.card} onPress={() => handleClick(props.title)}>
        <View>
          <View style={styles.titleBox}>
            <Text style={[styles.title, {color: props.color}]}>{props.title}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  function Footer(props) {
    return (
      <View style={styles.footerBar}>
        <View style={styles.buttonBox}>
          <Button color="#555555" title="Ranking" />
        </View>
        <View style={styles.buttonBox}>
          <Button color="#555555" title="HOME" />
        </View>
        <View style={styles.buttonBox}>
          <Button color="#555555" title="Quiz" />
        </View>
      </View>
    );
  }

  const [popUp, setPopUp] = useState(false); 
  const [resposta, setResposta] = useState(false); 

  const showPopUp = (answer) => {
    setResposta(answer);
    setPopUp(true);
  }

  const closePopUp = () =>{
    setPopUp(false);
  }

  return (
    <>
      { popUp &&
          <PopUp acerto={resposta}/>
      }
      <Header />
      <View style={styles.container}>
        <CustomCard
          title="A" color="green"
          text="Duis porttitor pharetra ipsum quis luctus. "
          value={false}
        />
        <CustomCard
          title="B" color="#ff0066"
          text="Suspendisse commodo pharetra metus, eget ultrices velit egestas et."
          value={true}
        />
        <CustomCard
          title="C" color="darkcyan"
          text="Donec interdum nulla sit amet placerat volutpat."
          value={false}
        />
        <CustomCard
          title="D" color="yellow"
          text="Pellentesque sagittis vulputate lacus, id laoreet libero consequat eu."
          value={false}
        />
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  popup:{
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    zIndex: 500,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    opacity: 0.8
  },
  popupText:{
    color : "white",
    fontSize: "18px",
    fontWeight: "bold"
  },
  popupButtonBox:{
    width: "50%"
  },
  container: {
    flex: 9,
    justifyContent: 'space-evenly',
    alignItems: "center",
    backgroundColor: '#ecf0f1',
    paddingTop: '10px',
  },
  header: {
    flex: 4,
    justifyContent: "center",
    backgroundColor: '#222222',
    color: 'whitesmoke',
  },
  quizText: {
    padding: '10px',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: "darkgrey",
    width: '90%',
    padding: '5px',
    borderRadius: "15px"
  },
  titleBox: {
    paddingLeft: "5px",
  },
  title: {
    color: 'grey',
    fontWeight: 'bold',
  },
  textBox: {
    flex: 1,
    padding: "5px",
    justifyContent: 'center',
  },
  text: {
    fontSize: '14px',
    color: "white",
    textAlign: "center"
  },
  footerBar: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection: 'row',
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
    justifyContent: 'space-evenly',
  },
  buttonBox: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#1E88E5',
  },
});
