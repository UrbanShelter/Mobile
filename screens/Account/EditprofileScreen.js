import React, { Component } from "react";
import { Image, View,ScrollView, StatusBar,KeyboardAvoidingView, TouchableOpacity, 
	ActivityIndicator,Modal} from "react-native";
import {Text, Item, Input } from "native-base";
import styles from "./styles";
import {updateData} from '../../service/service';
import { logOut } from './../../service/auth';
import { db, firebaseInstances as firebase } from '../../service/auth';
import { ImagePicker, Permissions } from 'expo';
import Loader from '../../components/ProgressiveLoader';
 

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
			image : '',
			modal : false,
			imageUploadPercentage : 0 ,
		}
	}	


	_uploadImage = async (uri) => {
		var that = this;
		const response = await fetch(uri);
		const blob = await response.blob();
		var ref = firebase.storage().ref().child("profilePic/" + Math.random(99999));
		uploadTask = ref.put(blob);
		uploadTask.on('state_changed', function(snapshot){
			that.setState({modal : true});
			// Observe state change events such as progress, pause, and resume
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			that.setState({imageUploadPercentage : (snapshot.bytesTransferred / snapshot.totalBytes)});
			var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log('Upload is ' + progress + '% done');
			switch (snapshot.state) {
			case firebase.storage.TaskState.PAUSED: // or 'paused'
				console.log('Upload is paused');
				break;
			case firebase.storage.TaskState.RUNNING: // or 'running'
				console.log('Upload is running');
				break;
			}
		}, function(error) {
			// Handle unsuccessful uploads
		}, function() {
			// Handle successful uploads on complete
			// For instance, get the download URL: https://firebasestorage.googleapis.com/...
			uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
				that.setState({image : downloadURL});
				console.log(that.state.image);
				that.saveDetails();
				that.setState({modal : false});

				console.log('File available at', downloadURL);
			});
		});
	}
	

	_pickImage = async () => {

		this.getCameraAsync() ; 

		let result = await ImagePicker.launchImageLibraryAsync({
		  allowsEditing: true,
		  aspect: [4, 3],
		});
		console.log(result)
		if (!result.cancelled) {
			// this.setState({ image: result.uri });
			this._uploadImage(result.uri );
			console.log(result);
		}
	}

	getCameraAsync = async () => {
		// const permissions = Permissions.CAMERA_ROLL;
    	// const { status } = await Permissions.askAsync(permissions);
		const { Location, Permissions } = Expo;
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (status === 'granted') {
		  return true;
		} else {
		  throw new Error('Location permission not granted');
		}
	}


	async componentWillMount () {
        let uId = await Expo.SecureStore.getItemAsync('uId');
		this.setState({uId : uId});
		let uData = await db.collection("users").doc(uId).get()

		this.setState({users : uData.data()});
		this.setState({image : this.state.users.image});
		this.setState({firstName : this.state.users.firstName});
		this.setState({lastName : this.state.users.lastName});
		this.setState({day : this.state.users.day});
		this.setState({year : this.state.users.year});
		this.setState({month : this.state.users.month});
		this.setState({loading : false});
		
    }


	saveDetails = async () => {
		var obj = {
			firstName : this.state.firstName,
			lastName : this.state.lastName,
			day : this.state.day,
			month : this.state.month,
			year: this.state.year,
			image : this.state.image
		}

		var storeObj = {
			uId : this.state.uId,
		}

		var data = await updateData("users",storeObj.uId,obj);
		if(data == true) {
			this.props.navigation.navigate("Main");
		}
	}

	render() {
		if(this.state.loading == true ) {
			return (
				<View style={[styles.container, styles.horizontal]}>
					<ActivityIndicator size="large" color="#4F3BF6" />
				</View>
			);
		} else {
			let dayData =[{ value: '1'},{ value: '2'},{ value: '3'},{ value: '4'},{ value: '5'},]
		return (
			
			<KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
			<Modal 
				style={{flex:1,justifyContent:"space-between", alignItems:"center"}}
				transparent={true}
				animationType={'fade'}
				visible={this.state.modal}
				onRequestClose={() => {
					this.setState({modal:false})
				  }}
			>
			<View style={styles.modalBackground}>
				<View style={styles.activityIndicatorWrapper}>
					<Loader percentage = {this.state.imageUploadPercentage}/>
				</View>
			</View>
				
			</Modal>
			
				<View style={styles.ListScreen}>					
                    <StatusBar backgroundColor="#fff" barStyle="light-content"/>
                    <View style={[styles.boxShadow]}>
                        <View style={[styles.relativeHeader]}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")} >
                                <Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
                            </TouchableOpacity>
                            <Text style={[{fontWeight:'600'}]}>Edit profile</Text>
                            <View style={styles.flexOneline}>
                                <TouchableOpacity onPress={()=>logOut()}><Text style={[styles.clearBtn]}>Log Out</Text></TouchableOpacity>
                            </View>	
                        </View>
                    </View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.HomeScreen}>	
						<View style={[styles.profileImgCnt,{padding:0}]}>
							<View style={[{position:'relative'}]}>
								<TouchableOpacity onPress={this._pickImage}>
									<Image style={styles.profileImg} source={{uri:this.state.image}}/>
								</TouchableOpacity>
								{/* <TouchableOpacity> */}
									<Image style={[{width:25,height:25,position:'absolute',bottom:0,right:0,backgroundColor:'#fff'}]} source={require("../../assets/images/edit.png")}/>
								{/* </TouchableOpacity> */}
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

