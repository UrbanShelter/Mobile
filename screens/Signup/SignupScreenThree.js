import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import {
	customerLogin
} from "../../js/api/commonApi";

class SignupScreenThree extends Component {
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
					<Text style={styles.headtext}>Find Your Community</Text>					
					<View style={{width:'100%'}}>
						<Item style={[styles.borderInput,styles.borderInputSearch]}>
							<Image style={styles.srchimg} source={require("../../assets/images/search-main.png")}/> 
							<Input style={[styles.inputStyle,styles.SearchStyle]} placeholder='Try "Waterloo"' keyboardType="email-address" placeholderTextColor="#9b9b9b" />
						</Item>					
					</View>
					<ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
						<Text style={styles.headescriptionText}>POPULAR CITIES NEAR YOUR</Text>
						<TouchableOpacity style={styles.city} onPress={()=>this.props.navigation.navigate("Home")}>
							<Image style={styles.cityImg} source={require("../../assets/images/photo.png")}/>
							<View style={styles.citypostion}>
								<Text style={styles.cityText}>Montreal</Text>
								<Text style={styles.cityTextTwo}>City in Québec</Text>
							</View>
						</TouchableOpacity>
						<View style={styles.cityTwo}>
							<View style={[styles.city, styles.cityHalf]}>
								<Image style={styles.cityImg} source={require("../../assets/images/photoone.png")}/>
								<View style={styles.citypostion}>
									<Text style={styles.cityText}>Montreal</Text>
									<Text style={styles.cityTextTwo}>City in Québec</Text>
								</View>
							</View>
							<View style={[styles.city, styles.cityHalf]}>
								<Image style={styles.cityImg} source={require("../../assets/images/phototwo.png")}/>
								<View style={styles.citypostion}>
									<Text style={styles.cityText}>Montreal</Text>
									<Text style={styles.cityTextTwo}>City in Québec</Text>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
		);
	}
}

export default SignupScreenThree;

