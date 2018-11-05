import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input, Icon, ListItem } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';


class ListingPage extends Component {
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
				<View style={styles.ListScreen}>					
					<StatusBar backgroundColor="blue" barStyle="light-content"/>
					
					{/* <Header noShadow style={[styles.headerColor,styles.headerTransparent]}>
						<Left>
							<Button transparent>
								<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
							</Button>
						</Left>
						
						<Right>
							<Button transparent>
								<Image style={styles.headerImg} source={require("../../assets/images/search_inactive.png")}/>
							</Button>
							<Button transparent>
								<Image style={styles.headerImg} source={require("../../assets/images/Shape.png")}/>
							</Button>							
						</Right>
					</Header> */}
					<View style={styles.absoluteHeader}>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
							<Image style={styles.headerImg} source={require("../../assets/images/arrowWhite.png")}/>
						</TouchableOpacity>
						<View style={styles.flexOneline}>
							<Image style={styles.headerImg} source={require("../../assets/images/heart.png")}/>
							<Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share.png")}/>
						</View>	
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>
						<ImageBackground style={styles.listingHeader} source={require("../../assets/images/flat-with-yellow.png")}>
							<TouchableOpacity style={styles.tourOuter} onPress={()=>this.props.navigation.navigate("Tour")}> <Image style={styles.tour} source={require("../../assets/images/tour.png")}/></TouchableOpacity>
						</ImageBackground>
						<View style={styles.listBody}>
							<View style={styles.propertDesOuter}>
								<View>
									<Text style={styles.homePropertyName}> 85 Young St </Text>
									<Text style={styles.homePropertyDes}> Downtown, Kitchener, ON </Text>
								</View>
								<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
							</View>
							<View>
								<Image style={styles.map} source={require("../../assets/images/map.png")}/>
								<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Explore")} ><Image style={styles.mapExplore} source={require("../../assets/images/explore.png")}/></TouchableOpacity>
							</View>
							<View style={[styles.homeFacilityOuter,{justifyContent:'flex-start',flex:0}]}>								
								<View style={[styles.homeFacilityFlex,{marginRight:10}]}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bed.png")}/>
									<Text style={styles.countText}>2 Beds</Text>
								</View>
								<View style={[styles.homeFacilityFlex,{marginRight:10}]}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/bath.png")}/>
									<Text style={styles.countText}>2 Baths</Text>
								</View>
								<View style={[styles.homeFacilityFlex,{marginRight:10}]}>
									<Image style={styles.homeFacilityImg} source={require("../../assets/images/size.png")}/>
									<Text style={styles.countText}>1240 Sqft</Text>
								</View>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.listText}>Relax on the balcony surrounded by green ferns with a city backdrop at this sophisticated Kitchener apartment. Play music throughout the space with state-of-the-art Sonos sound. </Text>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.hrBoxHeading}>Availablity</Text>
								<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
									<View style={styles.AvailablityBox}>
										<View style={styles.AvailablityImgHolder}>
											<Image style={styles.AvailablityImg} source={require("../../assets/images/Bed-blank.png")}/>
											<Text style={styles.AvailablityImgText}>Master</Text>
										</View>
										<Text style={styles.AvailablitySubHead}>Bedroom 1</Text>
										<Text style={styles.listText}>$1200</Text>
									</View>
									<View style={styles.AvailablityBox}>
										<View style={styles.AvailablityImgHolder}>
											<Image style={styles.AvailablityImg} source={require("../../assets/images/Bed-blank.png")}/>
											<Text style={styles.AvailablityImgText}>Master</Text>
										</View>
										<Text style={styles.AvailablitySubHead}>Bedroom 1</Text>
										<Text style={styles.listText}>$1200</Text>
									</View>
									<View style={styles.AvailablityBox}>
										<View style={styles.AvailablityImgHolder}>
											<Image style={styles.AvailablityImg} source={require("../../assets/images/Bed-blank.png")}/>
											<Text style={styles.AvailablityImgText}>Master</Text>
										</View>
										<Text style={styles.AvailablitySubHead}>Bedroom 1</Text>
										<Text style={styles.listText}>$1200</Text>
									</View>
								</ScrollView>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.listText}>Available form Oct 1st  |  12+ months min </Text>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.hrBoxHeading}>Amenities</Text>
								<View style={styles.aminitiesBox}>
									<View style={styles.aminitiesBoxHoolder}>
										<Image style={styles.aminitiesBoxImg} source={require("../../assets/images/furnish.png")}/>
										<Text style={styles.aminitiesText}>Furnished</Text>
									</View>
									<View style={styles.aminitiesBoxHoolder}>
										<Image style={styles.aminitiesBoxImg} source={require("../../assets/images/parking.png")}/>
										<Text style={styles.aminitiesText}>Parking Spot</Text>
									</View>
									<View style={styles.aminitiesBoxHoolder}>
										<Image style={styles.aminitiesBoxImg} source={require("../../assets/images/wifi.png")}/>
										<Text style={styles.aminitiesText}>Wifi Included</Text>
									</View>
									<View style={styles.aminitiesBoxHoolder}>
										<Image style={styles.aminitiesBoxImg} source={require("../../assets/images/dryer.png")}/>
										<Text style={styles.aminitiesText}>Washer/Dryer</Text>
									</View>
									<View style={styles.aminitiesBoxHoolder}>
										<Image style={styles.aminitiesBoxImg} source={require("../../assets/images/aircond.png")}/>
										<Text style={styles.aminitiesText}>Air Condition</Text>
									</View>
								</View>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.hrBoxHeading}>Precautions</Text>
								<View style={[styles.aminitiesBoxHoolder,{width:'100%'}]}>
									<Image style={styles.PrecautionsImg} source={require("../../assets/images/pet.png")}/>
									<Text style={styles.PrecautionsText}>Pet Policy: <Text style={styles.PrecautionsTextBold}>Pets Allowed</Text></Text>
								</View>
								<View style={[styles.aminitiesBoxHoolder,{width:'100%'}]}>
									<Image style={styles.PrecautionsImg} source={require("../../assets/images/deposit.png")}/>
									<Text style={styles.PrecautionsText}>Deposit: <Text style={styles.PrecautionsTextBold}>$3900</Text></Text>
								</View>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.hrBoxHeading}>Property Reviews</Text>
								<View style={styles.reviewsBox}>									
									<Image style={styles.reviewsBoxImg} source={require("../../assets/images/profile.jpg")}/>
									<View>
										<Text style={styles.reviewsBoxHeading}>Timmothy Hashfields</Text>
										<Text style={styles.PrecautionsText}>September 2018</Text>
									</View>
								</View>
								<Text style={styles.PrecautionsText}>
									The place was nice and comfy. The landlord was easy to work with. There is a really nice diner down the road. A TV would have been blessed.
								</Text>
								<View style={styles.reviewRating}>
									<Text style={styles.redText}>View all 86 reviews</Text>
									<View style={styles.ratings}>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>									
										<Icon name='ios-star-half' style={{fontSize: 14, color: '#EF4F67'}}/>
									</View>
								</View>					
							</View>
							<View style={styles.hrBox}>
								<Text style={[styles.hrBoxHeading,{marginBottom:0}]}> Cancellation Policy </Text>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.hrBoxHeading}>Landlord</Text>
								<View style={styles.reviewsBox}>									
									<Image style={styles.reviewsBoxImg} source={require("../../assets/images/profile.jpg")}/>
									<View>
										<Text style={styles.reviewsBoxHeading}>Jeffery Petrov</Text>
										<Text style={styles.PrecautionsText}>Kitchener, ON</Text>
									</View>
								</View>
								<Text style={styles.PrecautionsText}>
									I love having my coffee on the balcony in the morning and watching the city waking up.
								</Text>
								<View style={styles.reviewRating}>
									<Text style={[styles.redText,{color:'#4A4A4A',fontFamily: 'Lato-Bold'}]}>View 2 reccomendations</Text>
									<View style={styles.ratings}>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>									
										<Icon name='ios-star-half' style={{fontSize: 14, color: '#EF4F67'}}/>
									</View>
								</View>					
							</View>
							<View style={styles.hrBox}>
								<Text style={[styles.hrBoxHeading,{marginBottom:0}]}> Report this Listing </Text>
							</View>
							<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginBottom:15}}>
								<TouchableOpacity style={[styles.homeImgCat,{marginRight:10}]} onPress={()=>this.props.navigation.navigate("Listing")} >
									<View style={styles.imgeOver}>
										<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
										<Image style={styles.heartImg} source={require("../../assets/images/heart.png")}/>
									</View>
									

									<Image style={styles.homeImg} source={require("../../assets/images/flat-with-yellow.png")}/>
									<View style={[styles.propertDesOuter,{marginBottom:0}]}>
										<View>
											<Text style={styles.homePropertyName}> 85 Young St </Text>
											<Text style={styles.homePropertyDes}> Downtown, Kitchener, ON </Text>
										</View>
										<View style={styles.priceButton}>
											<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
										</View>
									</View>
									<View style={[styles.homeFacilityOuter,{marginTop:5}]}>
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
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.homeImgCat,{marginRight:10}]} onPress={()=>this.props.navigation.navigate("Listing")} >
									<View style={styles.imgeOver}>
										<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
										<Image style={styles.heartImg} source={require("../../assets/images/heart.png")}/>
									</View>
									

									<Image style={styles.homeImg} source={require("../../assets/images/flat-with-yellow.png")}/>
									<View style={[styles.propertDesOuter,{marginBottom:0}]}>
										<View>
											<Text style={styles.homePropertyName}> 85 Young St </Text>
											<Text style={styles.homePropertyDes}> Downtown, Kitchener, ON </Text>
										</View>
										<View style={styles.priceButton}>
											<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
										</View>
									</View>
									<View style={[styles.homeFacilityOuter,{marginTop:5}]}>
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
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.homeImgCat,{marginRight:10}]} onPress={()=>this.props.navigation.navigate("Listing")} >
									<View style={styles.imgeOver}>
										<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
										<Image style={styles.heartImg} source={require("../../assets/images/heart.png")}/>
									</View>
									

									<Image style={styles.homeImg} source={require("../../assets/images/flat-with-yellow.png")}/>
									<View style={[styles.propertDesOuter,{marginBottom:0}]}>
										<View>
											<Text style={styles.homePropertyName}> 85 Young St </Text>
											<Text style={styles.homePropertyDes}> Downtown, Kitchener, ON </Text>
										</View>
										<View style={styles.priceButton}>
											<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
										</View>
									</View>
									<View style={[styles.homeFacilityOuter,{marginTop:5}]}>
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
									</View>
								</TouchableOpacity>
							</ScrollView>							
						</View>
						
					</ScrollView>
					<View style={styles.availablity}>
						<View>
							<View style={styles.flexBox}>
								<Text style={styles.availablityMonth}>1200/</Text>
								<Text style={styles.availablityPrefix}>Month</Text>
							</View>
							<View style={styles.ratings}>
								<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#EF4F67'}}/>									
								<Icon name='ios-star-half' style={{fontSize: 14, color: '#EF4F67'}}/>
								<View><Text style={styles.countText}>(86)</Text></View>
							</View>
						</View>
						<View style={[styles.priceButton,{height:'auto'}]}>
							<Text style={[styles.price,{lineHeight:50,paddingLeft:15,paddingRight:15}]}>Apply for Rental</Text>									
						</View>

					</View>
				</View>
		);
	}
}

export default ListingPage;

