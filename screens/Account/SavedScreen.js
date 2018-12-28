import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, StyleSheet, ActivityIndicator, TouchableWithoutFeedback} from "react-native";
import { Text, Icon } from "native-base";
import styles from "./styles";
import { db } from '../../service/auth';
import StarRating from 'react-native-star-rating';
import { updateData } from '../../service/service';


class SavedScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
			properties : null,
			activeState: [false],
			savedState: [],
			uId: '',
			uData: '',
		}		
		const didBlurSubscription = this.props.navigation.addListener(
			'willFocus',
			payload => {
				console.log(payload)
				this.refreshPage();
			}
		);
	}


	_unsaveProperty = async (index) => {
		this.state.savedState.map((val, tmpIndex) => {
			if (val === index) {
				let savedItems = this.state.savedState;
				savedItems.splice(savedItems.indexOf(index), 1);
				this.setState({ savedState: savedItems });
				updateObj = {
					saved : this.state.savedState
				};
			} 
		});
		await updateData('users',this.state.uId,updateObj);
		this.refreshPage();
	}

	refreshPage = async () => {
		this.setState({ properties : []});
		this.setState({ loading : true});
		var savedData = {};
		let uId = await Expo.SecureStore.getItemAsync('uId');
		this.setState({uId : uId});
		let uData = await db.collection("users").doc(uId).get()
		this.setState({users : uData.data()});
		this.setState({savedState : this.state.users.saved});
		this.state.users.saved.forEach(data => {
			db.collection("property").doc(data).get().then((querySnapshot) => {
				savedData = querySnapshot.data();
				savedData.id = data;
				this.setState({properties :[...this.state.properties, savedData]  });
			}).catch(function (error) {
				console.log("Error getting documents: ", error);
			});
		});
		this.setState({loading : false });
	}


	render() {
		if(this.state.loading == true ) {
			return (
				<View style={[style.container, style.horizontal]}>
					<ActivityIndicator size="large" color="#4F3BF6" />
				</View>
			);
		} else {
			return(
				<View style={styles.HomeScreen}>			
					<View style={[styles.relativeHeader,{marginTop:0,paddingLeft:0}]}>
						<View style={[styles.signinbg,{paddingTop:0}]}>					
							<StatusBar backgroundColor={'transparent'} translucent />
							<Text style={[styles.headtext,{marginTop:10}]}>Saved</Text>
						</View>
						<View style={[styles.flexOneline]}>							
							<TouchableOpacity><Image style={[styles.headerImg,{marginTop:0}]} source={require("../../assets/images/cross.png")}/></TouchableOpacity>
						</View>	
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={{position:'relative',paddingBottom:30}}>
							<Text style={[styles.listText,{fontSize:20,}]}>Today </Text>
							<View elevation={1} style={styles.bar}></View>
						</View>

						{this.state.properties.map(( data, key ) => 
						<View key={key}>
							<View style={styles.homeImgCat}>
								<View style={styles.imgeOver}>
									<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Entire Home</Text></View>
									<TouchableOpacity>
										<Icon style={styles.savedBtnActive} 
											onPress={() => this._unsaveProperty(data.id)}
										name={"ios-heart"}/>
									</TouchableOpacity>
								</View>
								<View style={{position:'relative'}}>	
									<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("View",{propertyId : data.id})}><Image style={styles.homeImg} source={{uri:data.image}}/></TouchableWithoutFeedback>	
									<View style={[styles.whiteshadow,styles.boxShadow,{paddingLeft:20}]}>	
											<View style={[styles.Buttonpr,{position:'relative'}]}>
												<View style={styles.priceBar}></View>
												<Text style={styles.priceName}>${data.rent}/{data.rentUnit}</Text>									
											</View>					
										<View style={styles.propertDesOuter}>								
											<View>
												<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("View",{propertyId : data.id})} >
													<Text style={styles.homePropertyName}>{data.location.address} • {data.location.city}, {data.location.state}, {data.location.countryCode}</Text>
												</TouchableWithoutFeedback>
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
												<StarRating
													disabled={true}
													emptyStar={'ios-star-outline'}
													fullStar={'ios-star'}
													halfStar={'ios-star-half'}
													iconSet={'Ionicons'}
													maxStars={5}
													rating={data.rating}
													fullStarColor={'#4f3bf6'}
													starSize={15}
												/>
												<View><Text style={styles.countText}>({data.review.length})</Text></View>
											</View>
											
											<View style={styles.homeFacilityFlex}>
												<Image style={styles.homeFacilityImg} source={require("../../assets/images/bed.png")}/>
												<Text style={styles.countText}>{data.rooms.bedroom} Beds</Text>
											</View>
											<View style={styles.homeFacilityFlex}>
												<Image style={styles.homeFacilityImg} source={require("../../assets/images/bath.png")}/>
												<Text style={styles.countText}>{data.rooms.bathroom} Baths</Text>
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
								</View> 
							</View> 
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


    export default SavedScreen;