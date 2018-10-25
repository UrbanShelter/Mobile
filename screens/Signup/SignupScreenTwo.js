import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import {
	customerLogin
} from "../../js/api/commonApi";

class SignupScreenTwo extends Component {
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
					<Text style={styles.headtext}>Continue Signing Up</Text>
					<View style={{width:'100%',marginBottom:15}}>
						<Text style={styles.labeltext}>FULL NAME</Text>
						<Item style={styles.borderInput}>							
							<Input style={styles.inputStyle} placeholder="Full Name" placeholderTextColor="#9b9b9b" />
						</Item>
						
					</View>
					<View style={{width:'100%',height:90}}>
						<Text style={styles.labeltext}>DATE OF BIRTH</Text>

						<View style={styles.monthYear}>
							<Item style={[styles.borderInputWidth]}>							
								<Input style={styles.inputStyle} placeholder="Day" placeholderTextColor="#9b9b9b" />
							</Item>
							<Item style={styles.borderInputWidth}>							
								<Input style={styles.inputStyle} placeholder="Month" placeholderTextColor="#9b9b9b" />
							</Item>
							<Item style={styles.borderInputWidth}>							
								<Input style={styles.inputStyle} placeholder="Year" placeholderTextColor="#9b9b9b" />
							</Item>
						</View>
						
						
					</View>
					<View style={{width:'100%',height:90}}>
						<Text style={styles.labeltext}>GENDER</Text>

						<View style={styles.monthYear}>
							<Item style={[styles.borderInputWidth]}>							
								<Input style={styles.inputStyle} placeholder="Male" placeholderTextColor="#9b9b9b" />
							</Item>
							<Item style={styles.borderInputWidth}>							
								<Input style={styles.inputStyle} placeholder="Female" placeholderTextColor="#9b9b9b" />
							</Item>
							<Item style={styles.borderInputWidth}>							
								<Input style={styles.inputStyle} placeholder="Other" placeholderTextColor="#9b9b9b" />
							</Item>
						</View>
						
						
					</View>
					<TouchableOpacity  style={styles.btnOptionLogin}  onPress={()=>this.props.navigation.navigate("SignupThree")} >
						<Image style={styles.btnimg} source={require("../../assets/images/next.png")}/> 
					</TouchableOpacity>

					
				</View>
		);
	}
}

export default SignupScreenTwo;

