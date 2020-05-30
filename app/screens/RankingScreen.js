import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function ScreenRanking() {
    // mock data remove later
    const users = [
        {
            id: '01',
            username: 'Ana',
            points: '3000',
        },
        {
            id: '02',
            username: 'Joao',
            points: '6000',
        },
        {
            id: '03',
            username: 'Carlos',
            points: '200',
        },
        {
            id: '04',
            username: 'Paulo',
            points: '100',
        },
    ]

    const myUser = {

        id: '01',
        username: 'Ana',
        points: '3000',
        position: '2' // find a way to discover this

    }

    // sorts users' list by points
    const sortedUsers = sortList(users)

    return (
        <>
            <Header user={myUser}></Header>
            <View style={styles.container}>
                <FlatList
                    data={sortedUsers}
                    renderItem={({ item }) => <ListTile username={item.username} points={item.points} position={sortedUsers.indexOf(item) + 1}/>}
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
                    <Text style={styles.heading}>{user.username}</Text>
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

function ListTile({ username, points, position }) {
    return (
        <View style={styles.tile}>
            <Avatar rounded titleStyle={{ color: 'black' }} title={`${position}`} overlayContainerStyle={{ backgroundColor: 'yellow' }} />
            <Text style={styles.subHeadingBlack}>{username}</Text>
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