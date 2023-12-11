import {createStackNavigator} from "@react-navigation/stack";
import {RootParams} from "./Type";
import { NAME_NAVIGATION } from "../common/Const";
import HomePage from '../home/HomePage';
import DetailPage from "../detail/DetailPage";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator<RootParams>();

export function MainNavigation (){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name={NAME_NAVIGATION.HOME} component={HomePage}/>
                <Stack.Screen name={NAME_NAVIGATION.DETAIL} component={DetailPage}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}