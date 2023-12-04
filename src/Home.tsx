import {Text, TouchableHighlight} from 'react-native';

export const Home = ({route, navigation}: any) => {
  const _onPress = () => {
    navigation.push('Detail', {
      title: 'Hello from Home page',
    });
    console.log('clicked');
  };
  return (
    <TouchableHighlight onPress={_onPress}>
      {/* <Text>Phang em di</Text> */}
      <Text>{route.params.hello}</Text>
    </TouchableHighlight>
  );
};
