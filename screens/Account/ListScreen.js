import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import { Text, Icon,Input } from "native-base";
import styles from "./styles";
import {db, logOut} from '../../service/auth';

class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
			properties : []
		}		
	}

	async componentWillMount() {
		var properties = [];
		var MainData = {};
		await db.collection("property").get().then((querySnapshot) => {
			querySnapshot.forEach(function(doc) {
				MainData = doc.data();
				MainData.id = doc.id;
				properties.push(MainData);
			});
		}).catch(function(error) {
			console.log("Error getting documents: ", error);
		});
		this.setState({properties : properties });
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
			console.log(this.state.properties);
			return (
				<View style={styles.HomeScreen}>			
					<StatusBar backgroundColor="blue" barStyle="dark-content"/>
					<View style={[styles.relativeHeader,{marginTop:40,marginBottom:10}]}>
						{/* <TouchableOpacity onPress={()=>this.props.navigation.navigate("Search")} >
							<View>
								<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
							</View>
						</TouchableOpacity>	 */}
						<View style={styles.searchbar}>
						<TouchableOpacity>
							<Image style={styles.headerImg} source={require("../../assets/images/search_inactive.png")}/>
						</TouchableOpacity>
						<Input style={[styles.inputStyle,{borderWidth:0,borderColor:'transparent'}]} placeholder="Search Location"  placeholderTextColor="#9b9b9b" />
						</View>
						<View style={styles.flexOneline}>							
							<TouchableOpacity onPress={()=> {
								logOut();
								this.props.navigation.navigate("Welcome")}} >
								<Image style={[styles.headerImg,{marginLeft:5}]} source={require("../../assets/images/Shape.png")}/>
							</TouchableOpacity>
						</View>	
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>						
						<View style={styles.homeCategoryBox}>
							<Text style={styles.homeCategoryButton}> Duration</Text>
							<Text style={styles.homeCategoryButton}> Home Type</Text>
							<Text style={styles.homeCategoryButton}> Rooms</Text> 
						</View>
						<Text style={styles.headtext1}>Home Rentals in Waterloo </Text>
						{this.state.properties.map((data, key) => 
							<View key={key}>
							<TouchableOpacity style={styles.homeImgCat} onPress={()=>this.props.navigation.navigate("View",{propertyId : data.id})} >
							<View style={styles.imgeOver}>
								<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Entire Home</Text></View>
								<Image style={styles.heartImg} source={require("../../assets/images/heart.png")}/>
							</View>
							{/* <Image style={styles.homeImg} source={require("../../assets/images/flat-with-yellow.png")}/> */}
							<Image style={styles.homeImg} source={{uri:data.image}}/>	
							<View style={styles.whiteshadow}>	
									<View style={styles.Buttonpr}>
										<Text style={styles.priceName}>${data.rent}/{data.rentUnit}</Text>									
									</View>					
								<View style={styles.propertDesOuter}>								
									<View>
										<Text style={styles.homePropertyName}>{data.location.address}</Text>
										<Text style={styles.homePropertyDes}>{data.location.city}, {data.location.state}, {data.location.countryCode} </Text>
									</View>
									
								</View>
								<View style={styles.homeCategoryBox}>
								{
									data.tags.map( (tag, tagKey) => {
										return <Text key={tagKey} style={styles.homeCategorylebel}>{tag}</Text>
									})
								}
								</View>
								<View style={styles.homeFacilityOuter}>
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
									{
										data.amenities.inBuilding.map( (roomaminity , aminityKey) => {
											return (
												<View key = {aminityKey} style={styles.homeFacilityFlex}>
													{/* <Image style={styles.homeFacilityImg} source={{uri : roomaminity.icon}}/> */}
													<Text style={styles.countText}>{roomaminity.name}</Text>
												</View>
											)
										})
									}
								</View>
							</View>
						</TouchableOpacity> 
						</View>
						)}
					</ScrollView>
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
  })

export default HomeScreen;

