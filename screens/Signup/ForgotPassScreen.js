import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import {
	customerLogin
} from "../../js/api/commonApi";

class LoginScreenThree extends Component {
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
					<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Login")} ><Image style={styles.arrowBtn} source={require("../../assets/images/arrow.png")}/></TouchableOpacity>
					<KeyboardAvoidingView behavior="padding" style={{ width: '100%', borderWidth: 0,}}>
						<Text style={styles.headtext}>Forgot Password</Text>
						<Text style={styles.headescriptionText}>PLEASE ENTER YOUR EMAIL</Text>
						<View style={{width:'100%'}}>
							<Item style={styles.borderInput}>
								<Input style={styles.inputStyle} placeholder="Email Address" keyboardType="email-address" placeholderTextColor="#9b9b9b" />
							</Item>
						</View>
						<TouchableOpacity  style={styles.btnOptionLogin} onPress={() => {this.popupDialog.show()}} >
							<Image style={styles.btnimg} source={require("../../assets/images/recovery.png")}/> 
						</TouchableOpacity>						
					</KeyboardAvoidingView>
					<PopupDialog					
					width={300}
					height={200}
					ref={(popupDialog) => { this.popupDialog = popupDialog; }}
					>
					<View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15}}>
						<Image style={styles.mailsend} source={require("../../assets/images/msg.png")}/> 
						<Text style={styles.recovery}>RECOVERY EMAIL SENT</Text>
						<Text style={styles.recoveryDes}>
							Please follow the instructions we have sent your inbox for reseting your password. 
						</Text>
					</View>
				</PopupDialog>
					{/* <View style={styles.loginFooter}>
						<Text style={styles.notRegister}>Forgot Password</Text>
						<TouchableOpacity><Text style={styles.footerbtn} uppercase={true}> CLICK HERE </Text></TouchableOpacity>
					</View> */}
				</View>
		);
	}
}

export default LoginScreenThree;

