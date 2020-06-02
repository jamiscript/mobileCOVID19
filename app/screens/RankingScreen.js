import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getRanking } from '../services/api';
import { getUserInformation } from '../services/api';

export default function ScreenRanking() {

    const [users, setUser] = useState([])
    const [username, setUserame] = useState("")
    const [myUser, setMyUser] = useState([])

   

    useEffect(function(){
        updateRanking();
    }, [])

        

    async function updateRanking() {
        try {
            setUserame((await getUserInformation()).username);
            let ranking = await getRanking();
            var result = [];

            for(var i in ranking){

                if( (ranking [i]).user === username){
                    let Myinfo = {
                        name : username,
                        points : (ranking [i]).points,
                        position : parseInt(i)+1
                    }
                    setMyUser(Myinfo);

                }

                let params = {
                    id: i,
                    name: (ranking [i]).user,
                    points: (ranking [i]).points,
                  }
                result.push(params);
            }

            setUser(result);
           
            
        } catch (err) {

            Alert.alert("Erro ao buscar ranking")
            console.log('Error', err)

        }
    }
   

    return (
        <>
            <Header user={myUser}></Header>
            <View style={styles.container}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => <ListTile name={item.name} points={item.points} position={users.indexOf(item) + 1}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
}

function Header({ user }) {
    return (
        <View style={styles.header}>
            <View style={{ justifyContent: "center" }}>
                <Text style={styles.heading}>Posição</Text>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginVertical: 10 }}>
    <Text style={styles.subHeading}>{user.position}</Text>
                </View>
            </View>
            <View style={{ justifyContent: "center" }}>
                <Avatar
                    size="large"
                    rounded
                    source={require('../assets/images/snack-icon.png')}
                />
                <View style={{ flexDirection: 'row', justifyContent: "center", marginVertical: 10 }}>
                    <Text style={styles.heading}>{user.name}</Text>
                </View>

            </View>

            <View style={{ justifyContent: "center" }}>
                <Text style={styles.heading}>Pontos</Text>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginVertical: 10 }}>
                    <Text style={styles.subHeading}>{user.points}</Text>
                </View>
            </View>

        </View>
    )
}

function ListTile({ name, points, position }) {
    return (
        <View style={styles.tile}>
            <Avatar rounded titleStyle={{ color: 'black' }} title={`${position}`} overlayContainerStyle={{ backgroundColor: 'yellow' }} />
            <Text style={styles.subHeadingBlack}>{name}</Text>
            <Text style={styles.subHeadingBlack}>{points}</Text>
        </View>
    );
}

function sortList(list){
    //sort and reverse
    list = list.sort((a, b) => {
        if (a.points < b.points)
          return -1;
        if (a.points > b.points)
          return 1;
        return 0;
      })
    list.reverse()

    return list
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'whitesmoke'
    },
    header: {
        backgroundColor: '#6d17b0',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        flex: 1
    },
    heading: {
        color: 'white',
        fontSize: 20,
    },
    subHeading: {
        fontSize: 20,
        color: 'yellow'
    },
    subHeadingBlack: {
        fontSize: 20,
        color: 'black'
    },

    tile: {
        borderRadius: 15,
        borderWidth: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "#6d17b0",
        backgroundColor: '#f0dcff'
    },
});