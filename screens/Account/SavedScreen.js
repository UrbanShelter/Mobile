import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar,KeyboardAvoidingView, TouchableOpacity, StyleSheet, ActivityIndicator, TouchableWithoutFeedback} from "react-native";
import { Text, Icon,Input } from "native-base";
import styles from "./styles";
import {db, logOut} from '../../service/auth';
import StarRating from 'react-native-star-rating';


class SavedScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
			properties : [],
			activeState: [false],
			savedState: [false],
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
        return(
			<View style={styles.HomeScreen}>			
				<View style={[styles.relativeHeader,{marginBottom:20}]}>
                    <View style={styles.signinbg}>					
                        <StatusBar backgroundColor={'transparent'} translucent />
                        <Text style={styles.headtext}>Saved</Text>
                    </View>
                    <View style={styles.flexOneline}>							
                        <TouchableOpacity><Image style={[styles.headerImg,{marginTop:15}]} source={require("../../assets/images/cross.png")}/></TouchableOpacity>
                    </View>	
				</View>
                <ScrollView showsVerticalScrollIndicator={false}>
					<View style={{position:'relative',paddingBottom:30}}>
						<Text style={[styles.listText,{fontSize:20,}]}>Today </Text>
						<View elevation={1} style={styles.bar}></View>
					</View>

                	{this.state.properties.map((data, key) => 
					<View key={key}>
						<View style={styles.homeImgCat}>
							<View style={styles.imgeOver}>
								<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Entire Home</Text></View>
								<TouchableOpacity>
									<Icon style={this.state.savedState[0] ? styles.savedBtn : styles.savedBtnActive} 
									onPress={() => this.savedBtn(0)}
									name={this.state.savedState[0] ? "ios-heart-outline" : "ios-heart"}/>
								</TouchableOpacity>
							</View>
							<View style={{position:'relative'}}>	
								<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("View",{propertyId : data.id})}><Image style={styles.homeImg} source={{uri:data.image}}/></TouchableWithoutFeedback>	
								<View elevation={5} style={[styles.whiteshadow,{paddingLeft:30,}]}>	
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
							</View>
						</View> 
					</View>
					)}
+                </ScrollView>
            </View>
        );
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