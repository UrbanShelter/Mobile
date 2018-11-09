import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";

import {
	customerLogin
} from "../../js/api/commonApi";

class LoginScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}


	render() {
		return (
				<View style={styles.signinbg}>
					<StatusBar backgroundColor={'transparent'} translucent />
					<Text style={styles.headtext}>Log In</Text>
					<Text style={styles.headescriptionText}>LOG IN TO START FINDING HOMES!</Text>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/facebook.png")}/> 
					</TouchableOpacity>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/telegram.png")}/> 
					</TouchableOpacity>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/google.png")}/> 
					</TouchableOpacity>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={()=>this.props.navigation.navigate("LoginMain")}>
						<Image style={styles.btnimg} source={require("../../assets/images/email.png")}/> 
					</TouchableOpacity>
					<View style={styles.loginFooter}>
						<Text style={styles.notRegister}>Haven’t registered yet?</Text>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Signup")} ><Text style={styles.footerbtn} uppercase={true}> SIGN UP </Text></TouchableOpacity>
					</View>
				</View>
		);
	}
}

export default LoginScreen;

