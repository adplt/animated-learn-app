import React, {Component} from 'react';
import {Animated, ScrollView} from 'react-native';
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

// const AnimatedScrollViewProps = (props) => (
//   <AnimatedScrollView {...props}>
//     {props.children}
//   </AnimatedScrollView>
// );

export default AnimatedScrollView;
