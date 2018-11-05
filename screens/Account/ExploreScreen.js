import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input, Icon, ListItem, Tab, Tabs } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';


class ExploreScreen extends Component {
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
					<StatusBar backgroundColor="#fff" barStyle="dark-content"/>
					
					<View style={[styles.relativeHeader,{paddingRight:20,paddingLeft:20}]}>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
							<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
						</TouchableOpacity>
						<View style={styles.flexOneline}>
							<Image style={styles.headerImg} source={require("../../assets/images/heart-black.png")}/>
							<Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
						</View>	
					</View>
					<View style={styles.media}>
						<Image style={styles.mediaImage} source={require("../../assets/images/flat-with-yellow.png")}/>
						<View>
							<Text style={styles.mediaPropertyName}> 85 Young St </Text>
							<Text style={styles.mediaPropertyDes}> Downtown, Kitchener, ON </Text>
						</View>
						<View style={styles.mediapriceButton}>
							<Text style={styles.mediaprice}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
						</View>
					</View>

					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={styles.explorePadding}>												
							<Text style={[styles.homePropertyName,{marginBottom:10}]}>Nighbourhood </Text>
							<Text style={styles.listText}> 
								The interior of this apartment has been designed by Mark Anderson. The aparment has two restaurants at the base of the building and enjoys a central  location near both the universities. 
							</Text>								
						</View>	
						<Image style={styles.map} source={require("../../assets/images/map.png")}/>
						<Tabs tabBarUnderlineStyle={{height:0}}>
							<Tab heading="Essentials" textStyle={{ fontSize:16, fontFamily: 'Lato-Bold', color: '#000'}} activeTextStyle={{ fontSize:16, fontFamily: 'Lato-Bold', color: '#000'}} tabStyle={{ backgroundColor: '#F7F7F7',fontSize:14, fontWeight:'bold'}}
            				activeTabStyle={{ backgroundColor: '#ffffff'}} style={{borderBottomWidth:0}}>
								<View style={[styles.tabList,styles.tabListActive]}>
									<Image style={styles.tabImg} source={require("../../assets/images/school.png")}/>
									<View>
										<Text style={styles.TabHead}> Schools </Text>
										<Text style={styles.TabDes}> Wilfred Laurier University & 4 More </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/hospital.png")}/>
									<View>
										<Text style={styles.TabHead}> Hospitals </Text>
										<Text style={styles.TabDes}> Grand River Hospital & 2 More </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/groceries.png")}/>
									<View>
										<Text style={styles.TabHead}> Groceries </Text>
										<Text style={styles.TabDes}> KW Korean Market & 3 </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/gym.png")}/>
									<View>
										<Text style={styles.TabHead}> Gym </Text>
										<Text style={styles.TabDes}> Personal Edge Traini </Text>
									</View>
								</View>
							</Tab>
							<Tab heading="Commute" textStyle={{ fontSize:16, fontFamily: 'Lato-Bold', color: '#000'}} activeTextStyle={{ fontSize:16, fontFamily: 'Lato-Bold', color: '#000'}} tabStyle={{ backgroundColor: '#F7F7F7',fontSize:14, fontWeight:'bold'}}
            				activeTabStyle={{ backgroundColor: '#ffffff'}}>
								<View style={[styles.tabList,styles.tabListActive]}>
									<Image style={styles.tabImg} source={require("../../assets/images/bus.png")}/>
									<View>
										<Text style={styles.TabHead}> Bus Stops </Text>
										<Text style={styles.TabDes}> Wilfred Laurier University & 4 More </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/rail.png")}/>
									<View>
										<Text style={styles.TabHead}> Railway Stations </Text>
										<Text style={styles.TabDes}> Grand River Hospital & 2 More </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/airport.png")}/>
									<View>
										<Text style={styles.TabHead}> Airports </Text>
										<Text style={styles.TabDes}> KW Korean Market & 3 </Text>
									</View>
								</View>
								
							</Tab>
							<Tab heading="Life Style" textStyle={{ fontSize:16, fontFamily: 'Lato-Bold', color: '#000'}} activeTextStyle={{ fontSize:16, fontFamily: 'Lato-Bold', color: '#000'}} tabStyle={{ backgroundColor: '#F7F7F7',fontSize:14, fontWeight:'bold'}}
            				activeTabStyle={{ backgroundColor: '#ffffff'}}>
								<View style={[styles.tabList,styles.tabListActive]}>
									<Image style={styles.tabImg} source={require("../../assets/images/restaurant.png")}/>
									<View>
										<Text style={styles.TabHead}> Restaurants </Text>
										<Text style={styles.TabDes}> Wilfred Laurier University & 4 More </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/bars.png")}/>
									<View>
										<Text style={styles.TabHead}> Bars </Text>
										<Text style={styles.TabDes}> Grand River Hospital & 2 More </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/cafes.png")}/>
									<View>
										<Text style={styles.TabHead}> Cafés </Text>
										<Text style={styles.TabDes}> KW Korean Market & 3 </Text>
									</View>
								</View>
								<View style={styles.tabList}>
									<Image style={styles.tabImg} source={require("../../assets/images/malls.png")}/>
									<View>
										<Text style={styles.TabHead}> Malls </Text>
										<Text style={styles.TabDes}> Personal Edge Traini </Text>
									</View>
								</View>
							</Tab>
						</Tabs>

					</ScrollView>
				</View>
		);
	}
}

export default ExploreScreen;

