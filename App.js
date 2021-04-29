import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './scr/screens/SearchScreen';
import DetailScreen from './scr/screens/DetailScreen';

const navigator = createStackNavigator(
  {
    Screen: SearchScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Screen',
    defaultNavigationOptions: {
      title: 'Bussines Search',
    },
  },
);

export default createAppContainer(navigator);
