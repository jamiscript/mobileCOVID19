import React from 'react';
import { View ,StyleSheet ,Text} from 'react-native';
import { Avatar } from 'react-native-elements';


export default function Mission({ mission }) {
    return (
      <View style={styles.mission}>
        <View style={styles.missionPoints}>
          <Avatar size="small" source={require('./assets/snack-icon.png')} />
          <Text>{mission.points}</Text>
          <Text>pts</Text>
        </View>
        <View style={styles.missionInfo}>
          <Text style={styles.missionTitle}>
            {mission.title}
          </Text>
          <Text style={styles.missionInfo}>{mission.info}</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    missionTitle: {
      color: 'white',
      marginHorizontal: 10,
      fontSize: 20,
    },
    missionInfo: {
      marginHorizontal: 10,
    },
    missionPoints :{
      flexDirection:'column',
      justifyContent:'center',
      textAlign:'center',
    },
    mission: {
      backgroundColor: 'darkgray',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });