import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";


class ReviewScreen extends Component {
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
    
render() {
    return (
        <View style={styles.ListScreen}>					
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
            <View elevation={5} style={[{borderWidth:0}]}>
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
                    <Image style={[styles.reviewImg,{marginLeft:20}]} source={require("../../assets/images/flat-with-yellow.png")}/>
                    <View>
                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St•Downtown,</Text>
                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
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
                    <View style={styles.hrBox}>
                        <View style={[styles.reviewsBox,{position:'relative'}]}>									
                            <Image style={styles.reviewsBoxImg} source={require("../../assets/images/profile.jpg")}/>
                            <View>
                                <Text style={styles.reviewsBoxHeading}>Timmothy Hashfields</Text>
                                <Text style={styles.PrecautionsText}>September 2018</Text>
                            </View>
                            <View style={[styles.reviewRating,{position:'absolute',right:10}]}>
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
                            The place was nice and comfy. The landlord was easy to work with. There is a really nice diner down the road. A TV would have been blessed.
                        </Text>
                    </View>
                                        <View style={styles.hrBox}>
                        <View style={[styles.reviewsBox,{position:'relative'}]}>									
                            <Image style={styles.reviewsBoxImg} source={require("../../assets/images/profile.jpg")}/>
                            <View>
                                <Text style={styles.reviewsBoxHeading}>Timmothy Hashfields</Text>
                                <Text style={styles.PrecautionsText}>September 2018</Text>
                            </View>
                            <View style={[styles.reviewRating,{position:'absolute',right:10}]}>
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
                            The place was nice and comfy. The landlord was easy to work with. There is a really nice diner down the road. A TV would have been blessed.
                        </Text>
                    </View>
                                        <View style={styles.hrBox}>
                        <View style={[styles.reviewsBox,{position:'relative'}]}>									
                            <Image style={styles.reviewsBoxImg} source={require("../../assets/images/profile.jpg")}/>
                            <View>
                                <Text style={styles.reviewsBoxHeading}>Timmothy Hashfields</Text>
                                <Text style={styles.PrecautionsText}>September 2018</Text>
                            </View>
                            <View style={[styles.reviewRating,{position:'absolute',right:10}]}>
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
                            The place was nice and comfy. The landlord was easy to work with. There is a really nice diner down the road. A TV would have been blessed.
                        </Text>
                    </View>
                </View>
            </ScrollView>
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
export default ReviewScreen;
