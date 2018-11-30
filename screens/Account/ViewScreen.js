import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, StyleSheet, ActivityIndicator} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";
import {MapView} from 'expo';
import {db} from '../../service/auth';

class ListingPage extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			propertyId : this.props.navigation.getParam('propertyId'),
			property : '',
			loading : true
		}
		
	}


	async componentDidMount() {
		var property = {}; 
		await db.collection("property").doc(this.state.propertyId).get().then((querySnapshot) => {
			this.setState({property : querySnapshot.data()});
		}).catch(function(error) {
			console.log("Error getting documents: ", error);
		});
		
		
		this.setState({loading : false });
	}


	render() {

		if(this.state.loading == true ) {
			return (
				<View style={[style.container, style.horizontal]}>
					<ActivityIndicator size="large" color="#F55057" />
				</View>
			);
		} else {
			let property = this.state.property; 
			return (
				<View style={styles.ListScreen}>					
					<StatusBar backgroundColor="blue" barStyle="light-content"/>
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
						<ImageBackground style={styles.listingHeader} source={{uri : property.image}}>
							<TouchableOpacity style={styles.tourOuter} onPress={()=>this.props.navigation.navigate("Tour")}> 
								<Image style={styles.tour} source={require("../../assets/images/tour.png")}/>
							</TouchableOpacity>
						</ImageBackground>
						<View style={styles.listBody}>
							<View style={styles.propertDesOuter}>
								<View>
									<Text style={styles.homePropertyName}>{property.address}</Text>
									<Text style={styles.homePropertyDes}> {property.city}, {property.state}, {property.country_code} </Text>
								</View>
								<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Private Room</Text></View>
							</View>
							<View>
								
							<MapView
								style={styles.map}
								initialRegion={{
								latitude: property.location.geopoint.latitude,
								longitude: property.location.geopoint.longitude,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
								}}
							>
							<MapView.Marker
								coordinate={{latitude: property.location.geopoint.latitude,
								longitude: property.location.geopoint.longitude,}}
								title={"marker.title"}
							/>
							</MapView>
								{/* <Image style={styles.map} source={require("../../assets/images/map.png")}/> */}
								<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Explore")} >
									<Image style={styles.mapExplore} source={require("../../assets/images/explore.png")}/>
								</TouchableOpacity>
							</View>
							<View style={[styles.homeFacilityOuter,{justifyContent:'flex-start',flex:0}]}>
							{
								property.amenities.inSuite.map( (roomaminity , aminityKey) => {
									return (
										<View key = {aminityKey} style={[styles.homeFacilityFlex,{marginRight:10}]}>
											<Image style={styles.homeFacilityImg} source={{uri : roomaminity.icon}}/>
											<Text style={styles.countText}>{roomaminity}</Text>
										</View>
									)
								})
							}			
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.listText}>{property.description}</Text>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.hrBoxHeading}>Availablity</Text>
								<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
								{
									property.available.map ( (data , key) => {
										return (
											<View key={key} style={styles.AvailablityBox}>
												<View style={styles.AvailablityImgHolder}>
													<Image style={styles.AvailablityImg} source={require("../../assets/images/Bed-blank.png")}/>
													<Text style={styles.AvailablityImgText}>{data.type}</Text>
												</View>
												<Text style={styles.AvailablitySubHead}>{data.name}</Text>
												<Text style={styles.listText}>${data.rent}</Text>
											</View>
										)
									})
								}
								</ScrollView>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.listText}>Available form {property.availableFrom}  |  12+ months min </Text>
							</View>
							<View style={styles.hrBox}>
								<Text style={styles.hrBoxHeading}>Amenities</Text>
								<View style={styles.aminitiesBox}>
								{
									property.amenities.inBuilding.map( (animity , animityKey) => {
										return (
											<View key = {animityKey} style={styles.aminitiesBoxHoolder}>
												{/* <Image style={styles.aminitiesBoxImg} source={{uri : animity.icon}}/> */}
												<Text style={styles.aminitiesText}>{animity}</Text>
											</View>
										)
									})
								}
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
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
										<Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
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
								<View>
								<Text style={styles.PrecautionsText}>
									I love having my coffee on the balcony in the morning and watching the city waking up.
								</Text>
								</View>
								<View style={styles.reviewRating}>
									<Text style={[styles.redText,{color:'#4A4A4A',fontFamily: 'Lato-Bold'}]}>View 2 reccomendations</Text>
									<View style={styles.ratings}>
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
										<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
										<Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
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
										{/* <View style={styles.priceButton}>
											<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
										</View> */}
									</View>
									<View style={[styles.homeFacilityOuter,{marginTop:5}]}>
										<View style={styles.ratings}>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
											<Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
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
										{/* <View style={styles.priceButton}>
											<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
										</View> */}
									</View>
									<View style={[styles.homeFacilityOuter,{marginTop:5}]}>
										<View style={styles.ratings}>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
											<Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
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
										{/* <View style={styles.priceButton}>
											<Text style={styles.price}>$1980/</Text><Text style={styles.permonth}>Month</Text>									
										</View> */}
									</View>
									<View style={[styles.homeFacilityOuter,{marginTop:5}]}>
										<View style={styles.ratings}>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
											<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
											<Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
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
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
								<Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
								<View><Text style={styles.countText}>(86)</Text></View>
							</View>
						</View>
						<View style={[styles.priceButton,{height:'auto'}]}>
							<Text style={[styles.price,{lineHeight:50,paddingLeft:15,paddingRight:15,color:'#fff'}]}>Apply for Rental</Text>									
						</View>

					</View>
				</View>
			);
		}
	}
}

const style = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center'
	},
	horizontal: {
	  flexDirection: 'row',
	  justifyContent: 'space-around',
	  padding: 10
	}
});

export default ListingPage;

