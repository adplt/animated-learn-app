import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';

export default class AnimatedLoader extends Component {

  state = {
    spinValue: new Animated.Value(0),
  }

  componentDidMount () {
    this.spin()
  }

  spin = () => {
    this.state.spinValue.setValue(0);
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{rotate: spin}] }}
            source={require('../../assets/images/group_566.png')}
        />
      </View>
    )
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
