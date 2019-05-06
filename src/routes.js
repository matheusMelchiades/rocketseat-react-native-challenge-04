import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './screens/Main';
import Details from './screens/Details';
import Cart from './screens/Cart';

const Home = createStackNavigator({
  Main: {
    screen: Main,
  },
  Details: {
    screen: Details,
  },
});

const Navigation = createBottomTabNavigator({ Home, Cart });

export default createAppContainer(Navigation);
