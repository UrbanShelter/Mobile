import React, { Component } from "react";
import { Image, View, StatusBar,KeyboardAvoidingView, TouchableOpacity} from "react-native";
import {Text, Item, Input } from "native-base";
import styles from "./styles";
import {saveData, storeItem} from '../../service/service';

class SignupScreenTwo extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			uid : this.props.navigation.getParam('uid'),
			firstName : '',
			lastName : ''
		}

	}	

	saveDetails = async () => {
		var obj = {
			firstName : this.state.firstName,
			lastName : this.state.lastName
		}
		var storeObj = {
			uId : this.state.uid
		}

		await Expo.SecureStore.setItemAsync('uId', this.state.uid)

		var data = await saveData("users",this.state.uid,obj);
		if(data == true) {
			this.props.navigation.navigate("Main");
		}
	}


	


	render() {
		

		return (
			<KeyboardAvoidingView style={{flex:1}}  behavior="padding" enabled>
				<View style={styles.signinbg}>					
					<StatusBar backgroundColor={'transparent'} translucent />
					<Text style={styles.headtext}>Continue Signing Up</Text>
					<View style={{width:'100%',marginBottom:15}}>
						<Text style={styles.labeltext}>FIRST NAME</Text>
						<Item style={styles.borderInput}>							
							<Input ref={(ref) => this.titleInput = ref} onChangeText={(text)=>{this.setState({firstName:text})}} style={styles.inputStyle} placeholder="First Name" placeholderTextColor="#9b9b9b" />
						</Item>
					</View>
					<View style={{width:'100%',marginBottom:15}}>
						<Text style={styles.labeltext}>LAST NAME</Text>
						<Item style={styles.borderInput}>							
							<Input onChangeText={(text)=>{this.setState({lastName:text})}} style={styles.inputStyle} placeholder="Last Name" placeholderTextColor="#9b9b9b" />
						</Item>
					</View>
					<View style={{width:'100%',height:90}}>
						<Text style={styles.labeltext}>DATE OF BIRTH</Text>

						<View style={styles.monthYear}>
						{/* <Picker
							selectedValue={this.state.language}
							style={[styles.borderInputWidth]}
							>
							<Picker.Item label="Java" value="java" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker> */}

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
					{/* <View style={{width:'100%',height:90}}>
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
						
						
					</View> */}
					<TouchableOpacity  style={styles.btnOptionLogin}  onPress={this.saveDetails} >
						<Image style={styles.btnimg} source={require("../../assets/images/next.png")}/> 
					</TouchableOpacity>

					
				</View>
				</KeyboardAvoidingView>
		);
	}
}

export default SignupScreenTwo;

