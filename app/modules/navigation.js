import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen name="" component={} />
          <Stack.Screen name="" component={} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
