import { useNavigation } from '@react-navigation/native';
import {Text, TouchableHighlight} from 'react-native';
import { RootParams } from '../App';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export const Home = ({route, navigation}: any) => {
//   const _onPress = () => {
//     navigation.push('Detail', {
//       title: 'Hello from Home page',
//     });
//     console.log('clicked');
//   };
//   return (
//     <TouchableHighlight onPress={_onPress}>
//       {/* <Text>Phang em di</Text> */}
//       <Text>{route.params.hello}</Text>
//     </TouchableHighlight>
//   );
// };

//use Hook
type PropsStack = NativeStackNavigationProp<RootParams, "Detail">
export const Home = ({route}: any) => {
  const navigation = useNavigation<PropsStack>();
  const _onPress = () => {
    navigation.push('Detail', {title: "Hello Page Home"});
    console.log('clicked');
  };
  return (
    <TouchableHighlight onPress={_onPress}>
      {/* <Text>Phang em di</Text> */}
      <Text>{route.params.hello}</Text>
    </TouchableHighlight>
  );
};