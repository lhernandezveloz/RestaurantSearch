import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';
import DetailsScreen from './src/screens/datailsScreen';

const navigation = createStackNavigator({
  Home : SearchScreen,
  Details: DetailsScreen

},
{
  initialRouteName : 'Home',
  defaultNavigationOptions : {
    title : 'Restaurant Search'
  }
});

export default createAppContainer(navigation);

