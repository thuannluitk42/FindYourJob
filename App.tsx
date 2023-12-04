import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Detail} from './src/Detail';
import {Home} from './src/Home';

export type RootParams = {
  Home: {hello: string},
  Detail: undefined | {title: string};
};
const Stack = createStackNavigator<RootParams>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} initialParams={{hello: 'Choi em di 1'}}/>
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
