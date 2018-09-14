import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  ListView,
  View,
  Text,
  Animated,
  Dimensions,
} from 'react-native';

const {
  width,
  height,
} = Dimensions.get('window');
const GREY = 0;
const GREEN = 1;
const RED = 2;
const values = [1];
import AnimatedScrollView from '../../components/ScrollView/ScrollView.component';

export default class AnimatedScrollViewPage extends Component {

  state = {
    values: values,
    colors: values.map(() => new Animated.Value(GREY))
  }

  _animateScroll = (e, index) => {
    const threshold = height / 5;
    let y = e.nativeEvent.contentOffset.y;
    let target = null;

    if (y > 50 && this._target !== GREY) {
      target = GREY;
    } else if (y < 50 && y > threshold && this._target != GREEN) {
      target = GREEN;
    } else if (y < -threshold && this._target != RED) {
      target = RED;
    }

    if (target !== null) {
      this._target = target;
      this._targetIndex = index;
      Animated.timing(this.state.colors[index], {
        toValue: target,
        duration: 5000,
      }).start();
    }

  }

  _takeAction = () => {
    this.setState({
      action: true,
    });
  }

  _renderRow = (value, index) => {
    const bgColor = this.state.colors[index].interpolate({
      inputRange: [
        GREY,
        GREEN,
        RED
      ],
      outputRange: [
        'rgb(180, 180, 180)',
        'rgb(63, 236, 35)',
        'rgb(233, 19, 19)',
      ],
    });
    return (
        <View
          key={index}>
          <AnimatedScrollView
            directionalLockEnabled={false}
            style={[styles.animatedScrollView, {backgroundColor: bgColor}]}
            onScroll={(e) => this._animateScroll(e, index)}
            scrollEventThrottle={16}
            onMomentumScrollBegin={this._takeAction}
            contentContainerStyle={styles.container}>
            <View>
              <Text>{'Slide down the scrollview that way and release'}</Text>
            </View>
          </AnimatedScrollView>
        </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.values.map(this._renderRow)}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedScrollView: {
    width,
    height,
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});
