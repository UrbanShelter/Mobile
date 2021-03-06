import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Item, Input } from "native-base";
import Toast from 'react-native-whc-toast'
import styles from "./styles";
import { signIn, logOut } from './../../service/auth';


class LoginScreenTwo extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			emailValidation : true,
			loader : false,
		}
	}

	login = async () => {
		let Emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		this.setState({loader:true});
		if(Emailregex.test(this.state.email) === false){
			this.setState({emailValidation : false});
		}else {
			this.setState({emailValidation : true});
		}

		if(this.state.email != '' && this.state.password != '') {
			if(this.state.emailValidation == false) {
				this.setState({loader:false});
				//Toast.show('Please Enter valid Email address.');
				this.refs.toast.showBottom('Please Enter valid Email address.');
			} else {
				const data  = await signIn(this.state.email,this.state.password);
				await Expo.SecureStore.setItemAsync('uId', data.user.uid);
				if( data.ack == 1) {
					this.props.navigation.navigate("Main")
				} else {
					//Toast.show('Invalid Login details.');
					this.refs.toast.showBottom('Invalid Login details.');
				}
				this.setState({loader:false});
			}
			
		} else if (this.state.email == '') {
			this.setState({loader:false});
			//Toast.show('Please Enter Email address.');
			this.refs.toast.showBottom('Please Enter Email address.');
		} else if (this.state.password == '') {
			this.setState({loader:false});
			//Toast.show('Please Enter Password.');
			this.refs.toast.showBottom('Please Enter Password.');
		}
		
		
	}


	render() {
		const {goBack} = this.props.navigation
		let loader =  this.state.loader;
		if(loader == true) {
			return (
				<View style={[style.container, style.horizontal]}>
					<ActivityIndicator size="large" color="#F55057" />
				</View>
			)
		} else {
			return (
				
				<View style={styles.signinbg}>				
					<StatusBar backgroundColor={'transparent'} translucent />
					<TouchableOpacity onPress={() => goBack()}><Image style={styles.arrowBtn} source={require("../../assets/images/arrow.png")}/></TouchableOpacity> 
					<KeyboardAvoidingView behavior="padding" style={{ width: '100%', borderWidth: 0,}}>
						<Text style={styles.headtext2}>Log In</Text>
						<Text style={styles.headescriptionText2}>LOG IN WITH EMAIL</Text>
						<View style={{width:'100%'}}>
							<Item style={styles.borderInput}>
								<Input style={styles.inputStyle} placeholder="Email Address" onChangeText={(text) => this.setState({email:text})} keyboardType="email-address" placeholderTextColor="#9b9b9b" />
							</Item>
							<Item style={styles.borderInput}>
								<Input style={styles.inputStyle} placeholder="Password" onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} placeholderTextColor="#9b9b9b" />
							</Item>
						</View>
						<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.login} >
							<Image style={styles.btnimg} source={require("../../assets/images/login.png")}/> 
						</TouchableOpacity>						
					</KeyboardAvoidingView>
					<View style={styles.loginFooter}>
						<Text style={styles.notRegister}>Forgot Password</Text>
						{/* <TouchableOpacity  onPress={()=>this.props.navigation.navigate("ForgotPass")}><Text style={styles.footerbtn} uppercase={true}> CLICK HERE </Text></TouchableOpacity> */}
						<TouchableOpacity  onPress={()=>logOut()}><Text style={styles.footerbtn2} uppercase={true}> CLICK HERE </Text></TouchableOpacity>
					</View>
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
});
export default LoginScreenTwo;

