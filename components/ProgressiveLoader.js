import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default class Loader extends Component {
    constructor(props) {
		super(props)
	}
  render() {
    return (
        <Progress.Circle 
        size={80} 
        animated={true}
        thickness = {5}
        showsText = {true}
        progress = {this.props.percentage}
        color = '#4F3BF6' />
    )
  }
}
