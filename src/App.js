import {createStackNavigator} from 'react-navigation';
import TimingScreen from './configures/Timing';
import SpringScreen from './configures/Spring';
import AnimatedScrollViewScreen from './pages/AnimatedScrollView/AnimatedScrollView.page.js';
import AnimatedLoaderScreen from './pages/AnimatedLoader/AnimatedLoader.page.js';
import {AppRegistry} from 'react-native';

const Routes = createStackNavigator({
  AnimatedLoeader: {
    screen: AnimatedLoaderScreen,
  },
  AnimatedScrollView: {
    screen: AnimatedScrollViewScreen,
  },
  Spring: {
    screen: SpringScreen,
  },
  Timing: {
    screen: TimingScreen,
  },
}, {
  navigationOptions: {
    header: null,
  },
});

export default Routes;

// AppRegistry.registerComponent('animatedApp', () => Routes);
