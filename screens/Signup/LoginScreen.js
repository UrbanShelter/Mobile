import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import styles from "./styles";


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
					<View style={styles.arrowBtn}></View>
					<Text style={styles.headtext2}>Log In</Text>
					<Text style={styles.headescriptionText2}>LOG IN TO START FINDING HOMES!</Text>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/facebook.png")}/> 
					</TouchableOpacity>
					{/* <TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/telegram.png")}/> 
					</TouchableOpacity> */}
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={this.onPress} >
						<Image style={styles.btnimg} source={require("../../assets/images/google.png")}/> 
					</TouchableOpacity>
					<TouchableOpacity  style={styles.btnOptionLogin} onPress={()=>this.props.navigation.navigate("LoginMain")}>
						<Image style={styles.btnimg} source={require("../../assets/images/email.png")}/> 
					</TouchableOpacity>
					<View style={styles.loginFooter}>
						<Text style={styles.notRegister}>Haven’t registered yet?</Text>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Signup")} ><Text style={styles.footerbtn2} uppercase={true}> SIGN UP </Text></TouchableOpacity>
					</View>
				</View>
		);
	}
}

export default LoginScreen;

