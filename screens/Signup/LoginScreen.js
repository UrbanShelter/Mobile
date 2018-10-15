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
					{/* <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
					<StatusBar backgroundColor={'transparent'} translucent />

					<KeyboardAvoidingView behavior="padding" style={{ width: '100%', borderWidth: 0,}}>
						<ScrollView style={styles.scrollpadding} keyboardDismissMode='on-drag'> 
							<View><Text style={styles.signupHeading}>Sign In</Text></View>
							<View style={{width:'100%'}}>
								<Item style={[styles.itemMargin, this.state.emailError ? { borderColor: '#FF0000' } : null]}>
									<Input style={styles.inputStyle} placeholder="Email Address" keyboardType="email-address" placeholderTextColor="#ffffff" autoFocus onChangeText={this.emailHandler} value={this.state.email} onSubmitEditing={() => this.pinRef._root.focus()} />
								</Item>
								<Item style={[styles.itemMargin, this.state.pinError ? { borderColor: '#FF0000' } : null]}>
									<Input style={styles.inputStyle} placeholder="4 digit PIN code" keyboardType="numeric" placeholderTextColor="#ffffff" onChangeText={this.pinHandler} value={this.state.pin} secureTextEntry={true} maxLength={4} ref={pinRef => this.pinRef = pinRef} onSubmitEditing={this.customerLogin.bind(this)} />
								</Item>
							</View>
							<Text style={styles.or}>Or</Text>
							<Button light bordered block style={styles.blank}><Text light style={styles.button} uppercase={false}> Continue w/ Google  </Text></Button>
							<Button onPress={this.customerLogin.bind(this)} light block style={styles.fill}><Text style={styles.button} uppercase={false}> Continue  </Text></Button>
						</ScrollView>
					</KeyboardAvoidingView>  */}
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
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={()=>this.props.navigation.navigate("LoginTwo")}>
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

