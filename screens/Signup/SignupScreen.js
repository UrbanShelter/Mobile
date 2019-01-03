import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity, ActivityIndicator, StyleSheet, AsyncStorage} from "react-native";
import {Text, Item, Input } from "native-base";
import Toast from 'react-native-whc-toast'
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import { signUp, logIn } from './../../service/auth';




class LoginScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : '',
			visible : false,
			signedIn: false, 
			name: "", 
			photoUrl: "",
			emailValidation:true,
			uid:'',
			loader : false
		}
	}
	
	signIn = async () => {
		try {
		  const result = await Expo.Google.logInAsync({
			androidClientId: '913702132538-l0lu96ms1csabdhv5aiimpvabv3uvtcg.apps.googleusercontent.com',
			scopes: ["profile", "email"]
		  })
		  if (result.type === "success") {
			this.setState({
			  signedIn: true,
			  name: result.user.name,
				photoUrl: result.user.photoUrl,
				loader : false
			})
		  } else {
			console.log("cancelled")
		  }
	} catch (e) {
		  console.log("error", e)
		}
	}


	signUpBtnHandler = () => {
		let Emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

		if(Emailregex.test(this.state.email) === false){
			this.setState({emailValidation : false});
		}else {
			this.setState({emailValidation : true});
		}
		if(this.state.email != '' && this.state.password != '') {
			if(this.state.emailValidation == false){
				//Toast.show('Please enter valid Email address.');
				this.refs.toast.showBottom('Please Enter valid Email address.');
			}else {
				this.popupDialog.show();
			}
			
		} else if (this.state.email == '' ) {
			//Toast.show('Please enter Email address');
			this.refs.toast.showBottom('Please Enter Email address.');
		} else if (this.state.password == '') {
			//Toast.show('Please Enter Password');
			this.refs.toast.showBottom('Please Enter Password.');
		}
		
	}


	registerUser = async () => {
		var data = await signUp(this.state.email, this.state.password );
		console.log(data);
		if(data.operationType == 'signIn'){
			this.setState({loader : false});
			this.props.navigation.navigate("SignupTwo",{uid:data.user.uid});
		} else {
			this.setState({loader : false});
			//Toast.show(data.message);
			this.refs.toast.showBottom(data.message);
		}
	}


	render() {
		if(this.state.loader == true) {
			return (
				<View style={[style.container, style.horizontal]}>
					<ActivityIndicator size="large" color="#F55057" />
				</View>
			)
		} else {
			return (
				<View style={styles.signinbg}>					
					<StatusBar backgroundColor={'transparent'} translucent />
					<Text style={styles.headtext}>Sign Up</Text>
					<Text style={styles.headescriptionText}>SIGN UP WITH EMAIL</Text>
					<View style={{width:'100%'}}>
						<Item style={styles.borderInput}>
							<Input style={styles.inputStyle} placeholder="Email Address" onChangeText={(text) => this.setState({email:text})} keyboardType="email-address" placeholderTextColor="#9b9b9b" />
						</Item>
						<Item style={styles.borderInput}>
							<Input style={styles.inputStyle} placeholder="Password" onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} placeholderTextColor="#9b9b9b" />
						</Item>
					</View>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress = {this.signUpBtnHandler} >
						<Image style={[styles.btnimg]} source={require("../../assets/images/btnimg.png")}/> 
					</TouchableOpacity>

					<View style={styles.orholder}>
						<Image style={styles.orimage} source={require("../../assets/images/or.png")}/>
					</View>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={() => logIn()} >
						<Image style={styles.btnimg} source={require("../../assets/images/signfacebook.png")}/> 
					</TouchableOpacity>
					{/* <TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/signtele.png")}/> 
					</TouchableOpacity> */}
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.signIn} >
						<Image style={styles.btnimg} source={require("../../assets/images/signgoogle.png")}/> 
					</TouchableOpacity>
					
					<View style={styles.loginFooter}>
						<Text style={styles.notRegister}>Already signed up?</Text>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Login")} ><Text style={styles.footerbtn} uppercase={true}> LOG IN </Text></TouchableOpacity>
					</View>
					<PopupDialog width={300} height={150} show={this.state.visible} ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
						<View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15,paddingTop:25}}>							 
							<Text style={styles.recovery}>TERMS & CONDITIONS</Text>
							<Text style={styles.recoveryDes}>
								By clicking ‘accept’ button you agree to the UrbanShelter <Text style={styles.btex}> Terms and Conditions</Text>  
								 and  <Text style={styles.btex}> Privacy Policy </Text>
							</Text>
						</View>
						<View style={{flex: 1, flexDirection: 'row',marginTop:16}}>
							<TouchableOpacity onPress={()=>this.setState({visible:false})}><Image style={styles.btnAceptDecline} source={require("../../assets/images/decline.png")}/></TouchableOpacity>
							<TouchableOpacity onPress={() => {
								this.setState({loader : true});
								this.registerUser();
								}}><Image style={styles.btnAceptDecline} source={require("../../assets/images/accept.png")}/></TouchableOpacity>
						</View>
					</PopupDialog>
					<View style={styles.container}>
						<Toast ref="toast"/>
					</View>	
				</View>
			);
		}
	}
}

const style = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center'
	},
	horizontal: {
	  flexDirection: 'row',
	  justifyContent: 'space-around',
	  padding: 10
	}
  })

export default LoginScreen;

