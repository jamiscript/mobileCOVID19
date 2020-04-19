import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const navigation = function AppContainer() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen name="" component={} />
          <Stack.Screen name="" component={} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default navigation;
