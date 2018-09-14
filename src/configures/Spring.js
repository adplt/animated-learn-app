import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

class Spring extends Component {

  state = {
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing( // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    const {fadeAnim} = this.state;
    return (
      <Animated.View
        style={{...this.props.style, opacity: fadeAnim}}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Spring>
          <Text>{'Open up App.js to start working on your app!'}</Text>
          <Text>{'Changes you make will automatically reload.'}</Text>
          <Text>{'Shake your phone to open the developer menu.'}</Text>
        </Spring>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
