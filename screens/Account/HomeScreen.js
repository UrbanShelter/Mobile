import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input, Icon, ListItem } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';


class HomeScreen extends Component {
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
				<View style={styles.HomeScreen}>					
					<StatusBar backgroundColor="blue" barStyle="dark-content"/>
					
					
					<View style={styles.relativeHeader}>
						<View>
							<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
						</View>
						<View style={styles.flexOneline}>
							<Image style={styles.headerImg} source={require("../../assets/images/search_inactive.png")}/>
							<Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/Shape.png")}/>
						</View>	
					</View>

					<ScrollView showsVerticalScrollIndicator={false}>
						<Text style={styles.headtext}>Home Rentals in Waterloo </Text>
						<View style={styles.homeCategoryBox}>
							<Text style={styles.homeCategoryButton}> Duration</Text>
							<Text style={styles.homeCategoryButton}> Home Type</Text>
							<Text style={styles.homeCategoryButton}> Rooms</Text> 
						</View>
						<TouchableOpacity style={styles.homeImgCat} onPress={()=>this.props.navigation.navigate("Listing")} >
							<View style={styles.imgeOver}>
								<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
								<Image style={styles.heartImg} source={require("../../assets/images/heart.png")}/>
							</View>
							

							<Image style={styles.homeImg} source={require("../../assets/images/flat-with-yellow.png")}/>
							<View style={styles.propertDesOuter}>
								<View>
									<Text style={styles.homePropertyName}> 85 Young St </Text>
									<Text style={styles.homePropertyDes}> Downtown, Kitchener, ON </Text>
								</View>
								<View style={styles.priceButton}>
									<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
								</View>
							</View>
							<View style={styles.homeCategoryBox}>
								<Text style={styles.homeCategorylebel}> Available from Nov 15</Text>
								<Text style={styles.homeCategorylebel}> 1 Bedroom Available </Text>
								<Text style={styles.homeCategorylebel}> Furnished </Text> 
								<Text style={styles.homeCategorylebel}> Air-Conditioned </Text> 
							</View>
							<View style={styles.homeFacilityOuter}>
								<View style={styles.ratings}>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>									
									<Icon name='ios-star-half' style={{fontSize: 14, color: '#EF4F67'}}/>
									<View><Text style={styles.countText}>(86)</Text></View>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bed.png")}/>
									<Text style={styles.countText}>2 Beds</Text>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bath.png")}/>
									<Text style={styles.countText}>2 Baths</Text>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/size.png")}/>
									<Text style={styles.countText}>1240 Sqft</Text>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.homeImgCat} onPress={()=>this.props.navigation.navigate("Listing")} >
							<View style={styles.imgeOver}>
								<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
								<Image style={styles.heartImg} source={require("../../assets/images/heart.png")}/>
							</View>
							

							<Image style={styles.homeImg} source={require("../../assets/images/flat-with-yellow.png")}/>
							<View style={styles.propertDesOuter}>
								<View>
									<Text style={styles.homePropertyName}> 85 Young St </Text>
									<Text style={styles.homePropertyDes}> Downtown, Kitchener, ON </Text>
								</View>
								<View style={styles.priceButton}>
									<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
								</View>
							</View>
							<View style={styles.homeCategoryBox}>
								<Text style={styles.homeCategorylebel}> Available from Nov 15</Text>
								<Text style={styles.homeCategorylebel}> 1 Bedroom Available </Text>
								<Text style={styles.homeCategorylebel}> Furnished </Text> 
								<Text style={styles.homeCategorylebel}> Air-Conditioned </Text> 
							</View>
							<View style={styles.homeFacilityOuter}>
								<View style={styles.ratings}>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>									
									<Icon name='ios-star-half' style={{fontSize: 14, color: '#EF4F67'}}/>
									<View><Text style={styles.countText}>(86)</Text></View>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bed.png")}/>
									<Text style={styles.countText}>2 Beds</Text>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bath.png")}/>
									<Text style={styles.countText}>2 Baths</Text>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/size.png")}/>
									<Text style={styles.countText}>1240 Sqft</Text>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.homeImgCat} onPress={()=>this.props.navigation.navigate("Listing")} >
							<View style={styles.imgeOver}>
								<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
								<Image style={styles.heartImg} source={require("../../assets/images/heart.png")}/>
							</View>
							

							<Image style={styles.homeImg} source={require("../../assets/images/flat-with-yellow.png")}/>
							<View style={styles.propertDesOuter}>
								<View>
									<Text style={styles.homePropertyName}> 85 Young St </Text>
									<Text style={styles.homePropertyDes}> Downtown, Kitchener, ON </Text>
								</View>
								<View style={styles.priceButton}>
									<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
								</View>
							</View>
							<View style={styles.homeCategoryBox}>
								<Text style={styles.homeCategorylebel}> Available from Nov 15</Text>
								<Text style={styles.homeCategorylebel}> 1 Bedroom Available </Text>
								<Text style={styles.homeCategorylebel}> Furnished </Text> 
								<Text style={styles.homeCategorylebel}> Air-Conditioned </Text> 
							</View>
							<View style={styles.homeFacilityOuter}>
								<View style={styles.ratings}>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
									<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>									
									<Icon name='ios-star-half' style={{fontSize: 14, color: '#EF4F67'}}/>
									<View><Text style={styles.countText}>(86)</Text></View>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bed.png")}/>
									<Text style={styles.countText}>2 Beds</Text>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bath.png")}/>
									<Text style={styles.countText}>2 Baths</Text>
								</View>
								<View style={styles.homeFacilityFlex}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/size.png")}/>
									<Text style={styles.countText}>1240 Sqft</Text>
								</View>
							</View>
						</TouchableOpacity>
						
						
					</ScrollView>
				</View>
		);
	}
}

export default HomeScreen;

