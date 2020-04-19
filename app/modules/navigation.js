import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen name="login" component={require('../../screens/Login')} />
          <Stack.Screen name="" component={} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
