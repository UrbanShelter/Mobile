import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
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
					<Text style={styles.headtext}>Sign Up</Text>
					<Text style={styles.headescriptionText}>SIGN UP WITH EMAIL</Text>
					<View style={{width:'100%'}}>
						<Item style={styles.borderInput}>
							<Input style={styles.inputStyle} placeholder="Email Address" keyboardType="email-address" placeholderTextColor="#9b9b9b" />
						</Item>
						<Item style={styles.borderInput}>
							<Input style={styles.inputStyle} placeholder="Password" keyboardType="numeric" placeholderTextColor="#9b9b9b" />
						</Item>
					</View>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={() => {this.popupDialog.show()}} >
						<Image style={styles.btnimg} source={require("../../assets/images/btnimg.png")}/> 
					</TouchableOpacity>

					<View style={styles.orholder}>
						<Image style={styles.orimage} source={require("../../assets/images/or.png")}/>
					</View>

					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/signfacebook.png")}/> 
					</TouchableOpacity>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/signtele.png")}/> 
					</TouchableOpacity>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/signgoogle.png")}/> 
					</TouchableOpacity>
					
					<View style={styles.loginFooter}>
						<Text style={styles.notRegister}>Already signed up?</Text>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Login")} ><Text style={styles.footerbtn} uppercase={true}> LOG IN </Text></TouchableOpacity>
					</View>
					<PopupDialog					
						width={300}
						height={150}
						ref={(popupDialog) => { this.popupDialog = popupDialog; }}
						>
						<View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15,paddingTop:25}}>							 
							<Text style={styles.recovery}>TERMS & CONDITIONS</Text>
							<Text style={styles.recoveryDes}>
								By clicking ‘accept’ button you agree to the UrbanShelter Terms and Conditions and Privacy Policy 
							</Text>
						</View>
						<View style={{flex: 1, flexDirection: 'row',marginTop:16}}>
							<TouchableOpacity><Image style={styles.btnAceptDecline} source={require("../../assets/images/decline.png")}/></TouchableOpacity>
							<TouchableOpacity onPress={()=>this.props.navigation.navigate("SignupTwo")}><Image style={styles.btnAceptDecline} source={require("../../assets/images/accept.png")}/></TouchableOpacity>
						</View>
					</PopupDialog>
				</View>
		);
	}
}

export default LoginScreen;

