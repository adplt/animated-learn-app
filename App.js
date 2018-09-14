import {createStackNavigator} from 'react-navigation';
import TimingScreen from './src/configures/Timing';
import SpringScreen from './src/configures/Spring';

export default createStackNavigator({
  Timing: {
    screen: TimingScreen,
  },
  Spring: {
    screen: SpringScreen,
  },
});
