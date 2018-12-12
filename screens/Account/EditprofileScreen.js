import React, { Component } from "react";
import { Image, View,ScrollView, StatusBar,KeyboardAvoidingView, TouchableOpacity} from "react-native";
import {Text, Item, Input } from "native-base";
import styles from "./styles";
import {saveData, storeItem} from '../../service/service';
import {db} from '../../service/auth';
import { logOut } from './../../service/auth';



class SignupScreenTwo extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			uid : this.props.navigation.getParam('uid'),
			firstName : '',
			lastName : '',
		}

	}	

	saveDetails = async () => {
		console.log('firstname',this.state.firstName);
		console.log('lastname', this.state.lastName);
		console.log('UID', this.state.uid);
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
			<KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
				<View style={styles.ListScreen}>					
                    <StatusBar backgroundColor="#fff" barStyle="light-content"/>
                    <View elevation={5} style={[{borderWidth:0,	marginLeft:-5,marginRight:-5}]}>
                        <View style={[styles.relativeHeader,{paddingLeft:20,marginTop:30,marginBottom:10}]}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")} >
                                <Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
                            </TouchableOpacity>
                            <Text style={[{fontWeight:'600'}]}>Edit profile</Text>
                            <View style={styles.flexOneline}>
                                <TouchableOpacity onPress={()=>logOut()}><Text style={[styles.clearBtn]}>Log Out</Text></TouchableOpacity>
                            </View>	
                        </View>
                    </View>

				<ScrollView>
					<View style={styles.HomeScreen}>	
						<View style={[styles.profileImgCnt,{padding:0}]}>
							<View style={[{position:'relative'}]}>
								<TouchableOpacity>
									<Image style={styles.profileImg} source={require("../../assets/images/profile.jpg")}/>
								</TouchableOpacity>
								<Image style={[{width:25,height:25,position:'absolute',bottom:0,right:0,backgroundColor:'#fff'}]} source={require("../../assets/images/edit.png")}/>
							</View>
						</View>		
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
						<TouchableOpacity onPress={this.saveDetails}><Text style={styles.customBtn} uppercase={true}> save </Text></TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
		);
	}
}

export default SignupScreenTwo;

