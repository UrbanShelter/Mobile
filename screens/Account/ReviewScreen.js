import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ActivityIndicator, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";
import {db, logOut} from '../../service/auth';


class ReviewScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
			reviews : [],
		}		
	}

	async componentWillMount() {
		var reviews = [];
		var ReviewData = {};
		await db.collection("property").get().then((querySnapshot) => {
			querySnapshot.forEach(function(doc) {
				ReviewData = doc.data();
				ReviewData.id = doc.id;
				reviews.push(ReviewData);
			});
		}).catch(function(error) {
			console.log("Error getting documents: ", error);
		});
		this.setState({reviews : reviews });
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
            console.log('Review Screen',this.state.reviews);
        return (
            <View style={styles.ListScreen}>
            {this.state.reviews.map((data, key) =>
                <View key={key}>	
                    <StatusBar backgroundColor="#fff" barStyle="light-content"/>
                    <View elevation={5} style={[{borderWidth:0,marginLeft:-5,marginRight:-5}]}>
                        <View style={[styles.relativeHeader,styles.hrBox,{paddingLeft:20,marginTop:30,marginBottom:10}]}>
                            <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
                                <Image style={[styles.headerImg]} source={require("../../assets/images/arrow.png")}/>
                            </TouchableOpacity>
                            <View style={styles.flexOneline}>
                                <Image style={styles.headerImg} source={require("../../assets/images/heart-black.png")}/>
                                <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                            </View>	
                        </View>
                        <View style={[styles.reviewsBox,{position:'relative',paddingBottom:20}]}>									
                            <Image style={[styles.reviewImg,{marginLeft:30}]} source={require("../../assets/images/flat-with-yellow.png")}/>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> {data.location.address},</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> {data.location.city}, {data.location.countryCode}</Text>
                                <Text style={styles.PrecautionsText}>APARTMENT•PRIVATE ROOM</Text>

                                <View style={[styles.ratings,{position:'absolute',bottom:-15}]}>
                                    <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                    <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                    <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                    <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
                                    <Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                    <View><Text style={styles.countText}>(86)</Text></View>
                                </View>	
                            </View>	
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[styles.listBody,{paddingTop:30}]}>
                            <Text style={styles.hrBoxHeading}>Property Reviews (86)</Text>

                            {data.review.map((tag, tagKey) => {
                                return (
                                        <View key={tagKey} style={styles.hrBox}>
                                            <View style={[styles.reviewsBox,{position:'relative'}]}>									
                                                <Image style={styles.reviewsBoxImg} source={require("../../assets/images/profile.jpg")}/>
                                                <View>
                                                    <Text style={styles.reviewsBoxHeading}>{tag.name}</Text>
                                                    <Text style={styles.PrecautionsText}>September 2018</Text>
                                                </View>
                                                <View style={[styles.reviewRating,{position:'absolute',right:0, top: 20}]}>
                                                    <View style={styles.ratings}>
                                                        <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                                        <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                                        <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                                        <Icon name='ios-star' style={{fontSize: 14, color: '#4F3BF6'}}/>									
                                                        <Icon name='ios-star-half' style={{fontSize: 14, color: '#4F3BF6'}}/>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text style={[styles.PrecautionsText,{fontSize:16}]}>
                                            {tag.comment}
                                            </Text>
                                        </View>
                                    )
                                })
                            }


                        </View> 
                    </ScrollView>
                </View>
            )}
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
export default ReviewScreen;
