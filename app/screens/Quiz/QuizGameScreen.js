import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableHighlight } from 'react-native';
import { getQuestions, answerQuestion } from '../../services/api';

export default function Quiz({ navigation }) {

  const [popUp, setPopUp] = useState(false);

  const [questions, setQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(function () {
    (async function () {
      let response = await getQuestions()
      setQuestions(response)
    })()

  }, [])

  const actualQuestion = questions[questionIndex]

  function nextQuestion() {
    if (questionIndex + 1 < questions.length)
      setQuestionIndex(questionIndex + 1)
    else
      navigation.navigate('End')
  }

  function showPopUp() {
    setPopUp(true);
  }

  function closePopUp() {
    setPopUp(false);
  }

  function buttonClick(answer) {
    showPopUp()
    answerQuestion(actualQuestion, answer).then(() => {
      nextQuestion()
      closePopUp()
    })
  }

  function PopUp(props) {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupText}>
          Carregando, aguarde ... 
        </Text>
      </View>
    )
  }

  function Header(props) {
    return (
      <View style={styles.header}>
        <Text style={styles.quizText}>
          {actualQuestion && actualQuestion.title}
        </Text>
      </View>
    );
  }

  function CustomCard(props) {

    return (
      <TouchableHighlight style={styles.card} onPress={() => buttonClick(props.answer)}>
        <View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{props.answer.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <>
      {popUp &&
        <PopUp />
      }
      <Header />
      <View style={styles.container}>
        {
          actualQuestion &&
          actualQuestion.answers.map((answer, index) => (
            <CustomCard
              key={index}
              answer={answer}
            />
          ))
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  popup: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    zIndex: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    opacity: 0.8
  },
  popupText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  popupButtonBox: {
    width: "50%"
  },
  container: {
    flex: 9,
    justifyContent: 'space-evenly',
    alignItems: "center",
    backgroundColor: '#ecf0f1',
    paddingTop: 10,
  },
  header: {
    flex: 4,
    justifyContent: "center",
    backgroundColor: '#6d17b0',
  },
  quizText: {
    padding: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "center"
  },
  card: {
    backgroundColor: "darkgrey",
    width: '90%',
    padding: 5,
    borderRadius: 15
  },
  titleBox: {
    paddingLeft: 5,
  },
  title: {
    color: 'grey',
    fontWeight: 'bold',
  },
  textBox: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
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
