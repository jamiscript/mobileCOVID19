import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';


const CustomButton = (myProp) => {
    return (
        <View>
            <TouchableOpacity onPress={myProp.action}>
                <Text style={styles.button}>
                    {myProp.btnName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        //width: 105,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#757575',
        color: 'white',
        //no android funciona
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#757575',
    }
});

export default CustomButton;