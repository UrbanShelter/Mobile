import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ActivityIndicator, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";
import {db, logOut} from '../../service/auth';
import StarRating from 'react-native-star-rating';


class ReviewInScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
            property: this.props.navigation.getParam('property'),
            totalReview: this.props.navigation.getParam('data'),
            
		}		
	}

	async componentWillMount() {
        console.log("totalreview",this.state.totalReview);
        console.log("prop", this.state.property);
        this.setState({loading: false});
	}
    
    
render() {
    const {goBack} = this.props.navigation
    if(this.state.loading == true ) {
			return (
				<View style={[style.container, style.horizontal]}>
					<ActivityIndicator size="large" color="#4F3BF6" />
				</View>
			);
		} else {
            let property = this.state.property;
            let totalReview = this.state.totalReview;
            return (
                <View style={[styles.HomeScreen,{padding:0,paddingTop:0}]}>	
                    <StatusBar backgroundColor="#fff" barStyle="light-content"/>
                    <View elevation={5} style={[{borderWidth:0,marginLeft:-5,marginRight:-5}]}>
                        <View style={[styles.relativeHeader,styles.hrBox,{paddingLeft:20,marginTop:30,marginBottom:10}]}>
                            <TouchableOpacity onPress={() => goBack()} >
                                <Image style={[styles.headerImg]} source={require("../../assets/images/arrow.png")}/>
                            </TouchableOpacity>
                            <View style={styles.flexOneline}>
                                <Image style={styles.headerImg} source={require("../../assets/images/heart-black.png")}/>
                                <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                            </View>	
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("View",{propertyId : property.id})}>
                            <View style={[styles.reviewsBox,{position:'relative',paddingBottom:20}]} onPress={()=>this.props.navigation.navigate("View",{propertyId : property.id})}>	
                                <Image style={[styles.reviewImg,{marginLeft:30}]} source={{uri : property.image}}/>
                                <View>
                                    <Text style={[styles.homePropertyName, {fontSize: 16 }]}>{property.location.address} • {property.location.city}, </Text>
                                    <Text style={[styles.homePropertyName, {fontSize: 16 }]}>{property.location.state}, {property.location.countryCode}</Text>
                                    <Text style={styles.PrecautionsText}> APARTMENT • PRIVATE ROOM</Text>

                                    <View style={[styles.ratings,{position:'absolute',bottom:-15}]}>
                                        <StarRating
                                        disabled={true}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        halfStar={'ios-star-half'}
                                        iconSet={'Ionicons'}
                                        maxStars={5}
                                        rating={property.rating}
                                        fullStarColor={'#4f3bf6'}
                                        starSize={15}
                                        />
                                        <View><Text style={styles.countText}>({property.review.length})</Text></View>
                                    </View>	
                                </View>	
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ScrollView scrollEnabled={this.state.scrollEnabled} showsVerticalScrollIndicator={false}>
                        <View style={[styles.listBody,{marginTop:20}]}>
                            <View style={[styles.hrBox]}>
                                <View style={[styles.reviewsBox,{position:'relative'}]}>	
                                    <View>
                                        <Text style={[styles.hrBoxHeading,{fontSize:24}]}>Property Reviews ({property.review.length})</Text>
                                    </View>
                                    <View style={[styles.reviewRating,{position:'absolute',right:0}]}>
                                        <View style={styles.ratings}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'ios-star-outline'}
                                            fullStar={'ios-star'}
                                            halfStar={'ios-star-half'}
                                            iconSet={'Ionicons'}
                                            maxStars={5}
                                            rating={property.rating}
                                            fullStarColor={'#4f3bf6'}
                                            starSize={15}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.reviewsBox,{position:'relative'}]}>	
                                    <View>
                                        <Text>Accuracy</Text>
                                    </View>
                                    <View style={[styles.reviewRating,{position:'absolute',right:0}]}>
                                        <View style={styles.ratings}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'ios-star-outline'}
                                            fullStar={'ios-star'}
                                            halfStar={'ios-star-half'}
                                            iconSet={'Ionicons'}
                                            maxStars={5}
                                            rating={property.rating}
                                            fullStarColor={'#4f3bf6'}
                                            starSize={15}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.reviewsBox,{position:'relative'}]}>	
                                    <View>
                                        <Text>Communication</Text>
                                    </View>
                                    <View style={[styles.reviewRating,{position:'absolute',right:0}]}>
                                        <View style={styles.ratings}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'ios-star-outline'}
                                            fullStar={'ios-star'}
                                            halfStar={'ios-star-half'}
                                            iconSet={'Ionicons'}
                                            maxStars={5}
                                            rating={property.rating}
                                            fullStarColor={'#4f3bf6'}
                                            starSize={15}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.reviewsBox,{position:'relative'}]}>	
                                    <View>
                                        <Text>Cleanliness</Text>
                                    </View>
                                    <View style={[styles.reviewRating,{position:'absolute',right:0}]}>
                                        <View style={styles.ratings}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'ios-star-outline'}
                                            fullStar={'ios-star'}
                                            halfStar={'ios-star-half'}
                                            iconSet={'Ionicons'}
                                            maxStars={5}
                                            rating={property.rating}
                                            fullStarColor={'#4f3bf6'}
                                            starSize={15}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.reviewsBox,{position:'relative'}]}>	
                                    <View>
                                        <Text>Location</Text>
                                    </View>
                                    <View style={[styles.reviewRating,{position:'absolute',right:0}]}>
                                        <View style={styles.ratings}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'ios-star-outline'}
                                            fullStar={'ios-star'}
                                            halfStar={'ios-star-half'}
                                            iconSet={'Ionicons'}
                                            maxStars={5}
                                            rating={property.rating}
                                            fullStarColor={'#4f3bf6'}
                                            starSize={15}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.reviewsBox,{position:'relative'}]}>	
                                    <View>
                                        <Text>Onboarding Process</Text>
                                    </View>
                                    <View style={[styles.reviewRating,{position:'absolute',right:0}]}>
                                        <View style={styles.ratings}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'ios-star-outline'}
                                            fullStar={'ios-star'}
                                            halfStar={'ios-star-half'}
                                            iconSet={'Ionicons'}
                                            maxStars={5}
                                            rating={property.rating}
                                            fullStarColor={'#4f3bf6'}
                                            starSize={15}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.reviewsBox,{position:'relative'}]}>	
                                    <View>
                                        <Text>Value</Text>
                                    </View>
                                    <View style={[styles.reviewRating,{position:'absolute',right:0}]}>
                                        <View style={styles.ratings}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'ios-star-outline'}
                                            fullStar={'ios-star'}
                                            halfStar={'ios-star-half'}
                                            iconSet={'Ionicons'}
                                            maxStars={5}
                                            rating={property.rating}
                                            fullStarColor={'#4f3bf6'}
                                            starSize={15}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Tenant",{uId : totalReview.uId})}>
                                <View style={[styles.hrBox]}>
                                    <View style={[styles.reviewsBox,{}]}>									
                                        <Image style={styles.reviewsBoxImg} source={{uri: totalReview.userInfo.image}}/>
                                        <View>
                                            <Text style={styles.reviewsBoxHeading}>{totalReview.userInfo.firstName} {totalReview.userInfo.lastName}</Text>
                                            <Text style={styles.PrecautionsText}>September 2018</Text>
                                        </View>
                                        <View style={[styles.reviewRating,{position:'absolute',right:0, top: 20}]}>
                                            <View style={styles.ratings}>
                                                <StarRating
                                                disabled={true}
                                                emptyStar={'ios-star-outline'}
                                                fullStar={'ios-star'}
                                                halfStar={'ios-star-half'}
                                                iconSet={'Ionicons'}
                                                maxStars={5}
                                                rating={totalReview.rating}
                                                fullStarColor={'#4f3bf6'}
                                                starSize={15}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={[styles.PrecautionsText,{fontSize:16}]}>
                                    {totalReview.comment}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
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
export default ReviewInScreen;
