import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { vh, vw } from "react-native-expo-viewport-units"

export default function Quiz({ navigation }) {

    function PopUp() {
        return (
            <View style={styles.popup}>
                <Text style={styles.popupText}>
                    Para fazer um Quiz sobre Covid selecione a opção "Jogar".
                    No Quiz você responde 5 questões somando pontos e conhecimento sobre saúde!
                </Text>
                <View style={styles.popupButtonBox}>
                    <Button color="#6d17b0" title="Continuar" onPress={() => setPopUp(false)}></Button>
                </View>
            </View>
        )
    }

    function CustomCard(props) {

        return (
            <View style={styles.card}>
                <Button title={props.title} color={props.color} onPress={props.onPress}></Button>
            </View>
        );
    }

    const [popUp, setPopUp] = useState(false);

    return (
        <>
            {popUp &&
                <PopUp />
            }
            <View style={styles.header}>
                <Text style={styles.quizText}>
                    Quiz Corona Virus
                </Text>
            </View>
            <View style={styles.container}>
                <CustomCard title="Jogar" color="#6d17b0" onPress={() => { navigation.replace("Game") }} />
                <CustomCard title="Sobre" color="#777777" onPress={() => { setPopUp(true) }} />
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    popup: {
        position: "absolute",
        top: 0,
        height: vh(80),
        width: vw(90),
        zIndex: 1500,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#777777",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: vh(5),
        marginHorizontal: vw(5),
        paddingVertical: vh(5),
        paddingHorizontal: vw(5)
    },
    popupText: {
        color: "whitesmoke",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15
    },
    popupButtonBox: {
        width: "50%"
    },
    container: {
        flex: 9,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#ecf0f1',
        paddingTop: 10,
    },
    header: {
        flex: 2,
        justifyContent: "center",
        backgroundColor: '#6d17b0',
    },
    quizText: {
        padding: 10,
        color: 'white',
        fontSize: 24,
        textAlign: "center",
        fontWeight: 'bold',
    },
    card: {
        width: '70%',
        padding: 15,
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
