import React, { Component } from "react";
import { Image, View,ScrollView, StatusBar,KeyboardAvoidingView, TouchableOpacity, ActivityIndicator,Picker} from "react-native";
import {Text, Item, Input } from "native-base";
import styles from "./styles";
import {updateData} from '../../service/service';
import { logOut } from './../../service/auth';
import {db} from '../../service/auth';
import { Dropdown } from 'react-native-material-dropdown';


class EditprofileScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			users : '',
			loading : true,
			uId : '',
			firstName : '',
			lastName : '',
			day : '',
			month : '',
			year : '',
		}
	}	


	async componentWillMount () {
        let uId = await Expo.SecureStore.getItemAsync('uId');
		this.setState({uId : uId});
		let uData = await db.collection("users").doc(uId).get()

		this.setState({users : uData.data()});
		this.setState({loading : false});
		console.log('uid',uId);
    }


	saveDetails = async () => {
		var obj = {
			firstName : this.state.firstName,
			lastName : this.state.lastName,
			day : this.state.day,
			month : this.state.month,
			year: this.state.year,
		}
		var storeObj = {
			uId : this.state.uId,

			
		}
		console.log('UID=>', storeObj.uId);

		var data = await updateData("users",storeObj.uId,obj);
		if(data == true) {
			this.props.navigation.navigate("Main");
		}
	}

	render() {
		if(this.state.loading == true ) {
			return (
				<View style={[styles.container, styles.horizontal]}>
					<ActivityIndicator size="large" color="#F55057" />
				</View>
			);
		} else {
			let dayData =[{ value: '1'},{ value: '2'},{ value: '3'},{ value: '4'},{ value: '5'},]
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
						<View>
							{/* <Text>{this.state.users.firstName}</Text> */}
						</View>
						<View style={{width:'100%',marginBottom:15}}>
							<Text style={styles.labeltext}>FIRST NAME</Text>
							<Item style={styles.borderInput}>							
								<Input defaultValue={this.state.users.firstName} ref={(ref) => this.titleInput = ref} onChangeText={(text)=>{this.setState({firstName:text})}} style={styles.inputStyle} placeholder="First Name" placeholderTextColor="#9b9b9b" />
							</Item>
						</View>
						<View style={{width:'100%',marginBottom:15}}>
							<Text style={styles.labeltext}>LAST NAME</Text>
							<Item style={styles.borderInput}>							
								<Input defaultValue={this.state.users.lastName} onChangeText={(text)=>{this.setState({lastName:text})}} style={styles.inputStyle} placeholder="Last Name" placeholderTextColor="#9b9b9b" />
							</Item>
						</View>
						<View style={{width:'100%',height:90}}>
							<Text style={styles.labeltext}>DATE OF BIRTH</Text>

							<View style={styles.monthYear}>
								<Item style={[styles.borderInputWidth]}>							
									<Input defaultValue={this.state.users.day} onChangeText={(text)=>{this.setState({day:text})}} style={styles.inputStyle} placeholder="Day" placeholderTextColor="#9b9b9b" />
								</Item>
								<Item style={styles.borderInputWidth}>							
									<Input defaultValue={this.state.users.month} onChangeText={(text)=>{this.setState({month:text})}} style={styles.inputStyle} placeholder="Month" placeholderTextColor="#9b9b9b" />
								</Item>
								<Item style={styles.borderInputWidth}>							
									<Input defaultValue={this.state.users.year} onChangeText={(text)=>{this.setState({year:text})}} style={styles.inputStyle} placeholder="Year" placeholderTextColor="#9b9b9b" />
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
}

export default EditprofileScreen;

