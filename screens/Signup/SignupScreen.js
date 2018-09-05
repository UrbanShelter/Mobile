import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, AsyncStorage, ToastAndroid } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ValidationComponent from 'react-native-form-validator';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./styles";

import {
	customerSignup
} from "../../js/api/commonApi";

class SignupScreen extends ValidationComponent {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			pin: "",
			confirmPin: "",
			nameError: '',
			emailError: '',
			pinError: '',
			confirmPinError: '',
			loading: false
		}
	}

	componentDidMount() {

	}

	/** Name handler */
	nameHandler = (name) => {
		this.setState({
			name: name
		});
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

	/** confirm pin handler */
	confirmPinHandler = (confirmPin) => {
		this.setState({
			confirmPin: confirmPin
		});
	}

	/** customer signup */
	customerSignUp() {
		this.validate({
			name: { required: true },
			email: { email: true, required: true },
			pin: { numeric: true, minlength: 3 },
			confirmPin: { numeric: true, minlength: 3 },
		});

		if (this.isFormValid()) {
			const name = this.state.name.trim();
			const email = this.state.email.trim();
			const pin = this.state.pin.trim();
			const confirmPin = this.state.confirmPin.trim();

			if (pin == confirmPin) {
				this.setState({
					loading: true
				});

				const data = {
					name: name,
					email: email,
					pin: pin,
					re_enter_pin: confirmPin
				};

				customerSignup(data).then((res) => {
					this.setState({
						loading: false
					});
					if (res.data.Ack == 1) {

						Expo.SecureStore.setItemAsync("PlaytronUserDetails", JSON.stringify(res.data.response)).then((res) => {
							this.props.navigation.navigate("Home");
						});
					}
					else if (res.data.Ack == 0) {
						ToastAndroid.showWithGravity(
							"Email already exist.",
							ToastAndroid.SHORT,
							ToastAndroid.TOP
						);
					}
				}).catch((error) => {
					this.setState({
						loading: false
					});
					ToastAndroid.showWithGravity(
						"User signup failed.",
						ToastAndroid.SHORT,
						ToastAndroid.TOP
					);
				});
			} else {
				this.setState({
					loading: false
				});

				ToastAndroid.showWithGravity(
					"Pin does not matched.",
					ToastAndroid.SHORT,
					ToastAndroid.TOP
				);
			}
		} else {

			let nameError = this.isFieldInError('name');
			let emailError = this.isFieldInError('email');
			let pinError = this.isFieldInError('pin');
			let confirmPinError = this.isFieldInError('confirmPin');

			this.setState({
				nameError: nameError,
				emailError: emailError,
				pinError: pinError,
				confirmPinError: confirmPinError
			});
		}
	}

	render() {
		return (
			<ImageBackground style={styles.signupbg} source={require('../../assets/images/bgsignup.jpg')}>
				<Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
				<StatusBar backgroundColor={'transparent'} translucent />

				<KeyboardAvoidingView behavior="padding" enabled style={{ width: '100%', borderWidth: 0 }}>
					<ScrollView style={styles.scrollpadding}  keyboardDismissMode='on-drag'>
						<View><Text style={styles.signupHeading}>Sign Up</Text></View>
						<View style={{width:'100%'}}>
							<Item style={[styles.itemMargin, this.state.nameError ? { borderColor: '#FF0000' } : null]}>
								<Input style={styles.inputStyle} placeholder="First and Last Name" placeholderTextColor="#ffffff" autoFocus onChangeText={this.nameHandler} value={this.state.name} onSubmitEditing={() => this.emailRef._root.focus()} />
							</Item>
							<Item style={[styles.itemMargin, this.state.emailError ? { borderColor: '#FF0000' } : null]}>
								<Input style={styles.inputStyle} placeholder="Email Address" keyboardType="email-address" placeholderTextColor="#ffffff" onChangeText={this.emailHandler} value={this.state.email} ref={emailRef => this.emailRef = emailRef} onSubmitEditing={() => this.pinRef._root.focus()} />
							</Item>
							<Item style={[styles.itemMargin, this.state.pinError ? { borderColor: '#FF0000' } : null]}>
								<Input style={styles.inputStyle} placeholder="4 digit PIN code" keyboardType="numeric" placeholderTextColor="#ffffff" onChangeText={this.pinHandler} value={this.state.pin} secureTextEntry={true} maxLength={4} ref={pinRef => this.pinRef = pinRef} onSubmitEditing={() => this.confirmPinRef._root.focus()} />
							</Item>
							<Item style={[styles.itemMargin, this.state.confirmPinError ? { borderColor: '#FF0000' } : null]}>
								<Input style={styles.inputStyle} placeholder="Re-enter PIN code" keyboardType="numeric" placeholderTextColor="#ffffff" onChangeText={this.confirmPinHandler} value={this.state.confirmPin} secureTextEntry={true} maxLength={4} ref={confirmPinRef => this.confirmPinRef = confirmPinRef} onSubmitEditing={this.customerSignUp.bind(this)} />
							</Item>
						</View>
						<Text style={styles.or}>Or</Text>
						<Button light bordered block style={styles.blank}><Text light style={styles.button} uppercase={false}> Continue w/ Google  </Text></Button>
						<Button light block style={styles.fill} onPress={this.customerSignUp.bind(this)}><Text style={styles.button} uppercase={false}> Continue</Text></Button>
					</ScrollView>
				</KeyboardAvoidingView>
			</ImageBackground>
		);
	}
}

export default SignupScreen;

