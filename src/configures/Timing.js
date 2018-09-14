import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Platform,
  Dimensions,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Timing extends Component {

  state = {
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
    animatedValue: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing( // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
        easing: Easing.ease,
        // delay
      }
    ).start(); // Starts the animation
  }

  render() {
    const {fadeAnim, animatedValue} = this.state;
    const movingMargin = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });
    return (
      <Animated.View
        style={[this.props.style, {opacity: fadeAnim, marginLeft: movingMargin}]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class App extends Component {

  render(value, index) {
    return (
      <View style={styles.container}>
        <Timing>
          <Text style={styles.welcome}>{'Welcome to React Native!'}</Text>
          <Text style={styles.instructions}>{'To get started, edit App.js'}</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </Timing>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
