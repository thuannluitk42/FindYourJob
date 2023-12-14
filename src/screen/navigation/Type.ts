
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NAME_NAVIGATION } from '../common/Const';
import { RouteProp } from '@react-navigation/native';


export type RootParams = {
    Home: undefined,
    Detail: undefined;
  };

  // TypeCheck Push to new page
export type PropStackDetail = NativeStackNavigationProp<RootParams, NAME_NAVIGATION.DETAIL>;

  // TypeCheck Get param from route
export type PropRouteDetail = RouteProp<RootParams, NAME_NAVIGATION.DETAIL>;
