import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ValidationComponent from 'react-native-form-validator';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./styles";

import {
	customerLogin
} from "../../js/api/commonApi";

class LoginScreen extends ValidationComponent {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			pin: "",
			emailError: '',
			pinError: '',
			loading: false
		}
	}

	/** Email handler */
	emailHandler = (email) => {
		this.setState({
			email: email
		});
	}

	/** pin handler */
	pinHandler = (pin) => {
		this.setState({
			pin: pin
		});
	}

	/** customer login */
	customerLogin() {
		this.validate({
			email: { email: true, required: true },
			pin: { numeric: true, minlength: 3 }
		});

		if (this.isFormValid()) {
			const email = this.state.email.trim();
			const pin = this.state.pin.trim();

			const data = {
				email: email,
				pin: pin
			};

			this.setState({
				loading: true
			});

			customerLogin(data).then((res) => {
				this.setState({
					loading: false
				});
				if (res.data.Ack == 1) {
					
					Expo.SecureStore.setItemAsync("PlaytronUserDetails", JSON.stringify(res.data.response)).then((res) => {
						this.props.navigation.navigate("Home");
					});
				} else if (res.data.Ack == 0) {
					ToastAndroid.showWithGravity(
						"Please provide the correct credentials.",
						ToastAndroid.SHORT,
						ToastAndroid.TOP
					);
				}
			}).catch((error) => {
				this.setState({
					loading: false
				});
				ToastAndroid.showWithGravity(
					'User login failed.',
					ToastAndroidast.SHORT,
					ToastAndroid.TOP
				);
			});
		} else {
			let emailError = this.isFieldInError('email');
			let pinError = this.isFieldInError('pin');

			this.setState({
				emailError: emailError,
				pinError: pinError
			});
		}
	}

	render() {
		return (
			<ImageBackground style={styles.signupbg} source={require('../../assets/images/bgsignup.jpg')}>
				<Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
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
				</KeyboardAvoidingView> 
			</ImageBackground>
		);
	}
}

export default LoginScreen;

