import {Text} from 'react-native';

export const Detail = ({route, navigation}:any) => {
  const {title} = route.params;
  return <Text>{title} Hello Detail Pages</Text>;
};
