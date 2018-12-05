import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input, Icon, ListItem, Tab, Tabs } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';


class TourScreen extends Component {
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
				<View style={styles.ExploreScreen}>					
					<StatusBar backgroundColor="#ffffff"/>
					
					<View elevation={5} style={[styles.relativeHeader,{paddingRight:20,paddingLeft:20,}]}>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
							<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
						</TouchableOpacity>
						<View style={styles.flexOneline}>
							<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
								<Image style={styles.headerImg} source={require("../../assets/images/heart-black.png")}/>
							</TouchableOpacity>
							<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
								<Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
							</TouchableOpacity>
						</View>	
					</View>
					<ScrollView showsVerticalScrollIndicator={false} style={[{paddingTop:30}]}>
						<View style={styles.tourPadding}>												
							<Text style={[styles.homePropertyName,{marginBottom:5}]}>Living Room </Text>
							<Text style={styles.listText}> 
							Netflix, DVD Player, Air conditioner, Sofa, Dining table, Stand lighting 
							</Text>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>	
							<Image style={styles.tourImg} source={require("../../assets/images/image2.png")}/>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>					
						</View>	
						<View style={styles.tourPadding}>												
							<Text style={[styles.homePropertyName,{marginBottom:5}]}>Layout </Text>
							<Text style={styles.listText}> 
							Netflix, DVD Player, Air conditioner, Sofa, Dining table, Stand lighting 
							</Text>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>	
							<Image style={styles.tourImg} source={require("../../assets/images/image2.png")}/>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>					
						</View>	
						<View style={styles.tourPadding}>												
							<Text style={[styles.homePropertyName,{marginBottom:5}]}>Full Kitchen </Text>
							<Text style={styles.listText}> 
							Open Kitchen, Electric Stove, Dishwasher, Microwave, Refridgerator 
							</Text>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>	
							<Image style={styles.tourImg} source={require("../../assets/images/image2.png")}/>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>					
						</View>
						
						<View style={styles.tourPadding}>												
							<Text style={[styles.homePropertyName,{marginBottom:5}]}>Bedroom </Text>
							<Text style={styles.listText}> 
							King bed, Air conditioning, Terrace 
							</Text>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>	
							<Image style={styles.tourImg} source={require("../../assets/images/image2.png")}/>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>					
						</View>
						<View style={styles.tourPadding}>												
							<Text style={[styles.homePropertyName,{marginBottom:5}]}>Full Bathroom • <Text style={{fontSize:14,fontFamily: 'Lato-Bold'}}>En suite </Text> </Text>
							<Text style={styles.listText}> 
							Sound system, Rain Shower
							</Text>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>	
							<Image style={styles.tourImg} source={require("../../assets/images/image2.png")}/>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>					
						</View>
						<View style={styles.tourPadding}>												
							<Text style={[styles.homePropertyName,{marginBottom:5}]}>Patio</Text>
							<Text style={styles.listText}></Text>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>	
							<Image style={styles.tourImg} source={require("../../assets/images/image2.png")}/>
							<Image style={styles.tourImg} source={require("../../assets/images/flat-with-yellow.png")}/>					
						</View>
					</ScrollView>
					<View style={styles.availablity}>
						<View>
							<View style={styles.flexBox}>
								<Text style={styles.availablityMonth}>1200/</Text>
								<Text style={styles.availablityPrefix}>Month</Text>
							</View>
							<View style={styles.ratings}>
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
								<Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<View><Text style={styles.countText}>(86)</Text></View>
							</View>
						</View>
						<View style={[styles.priceButton,{height:'auto'}]}>
							<Text style={[styles.price,{lineHeight:50,paddingLeft:15,paddingRight:15,color:'#fff'}]}>Check Availablity</Text>									
						</View>

					</View>
				</View>
		);
	}
}

export default TourScreen;

