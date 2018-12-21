import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity,TouchableWithoutFeedback, ImageBackground, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";


class StayOneScreen extends Component {
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
        <View>					
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
            <View style={[styles.relativeHeader,{paddingLeft:0}]}>
                <View style={[styles.signinbg,{paddingTop:20}]}>					
                    <Text style={[styles.headtext,{fontSize:30}]}>Stay</Text>
                </View>
                <View style={styles.flexOneline}>							
                    <TouchableOpacity><Text style={[styles.redText,{marginLeft:10,fontWeight:'600'}]}>View Applications</Text></TouchableOpacity>
                </View>	
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

            {/*-----------For No Stays---------------*/}

                <View style={[styles.listBody]}>
                    <Text style={[styles.homePropertyName,{fontSize:20,paddingBottom:10}]}>No Current Stays</Text>
                    <Text>Start looking for your new home!</Text>
                    <TouchableOpacity><Text style={[styles.exploreBtn]}>Explore Homes</Text></TouchableOpacity>
                </View>

            {/*------------For Current Stays--------------*/}

                <View style={[styles.listBody]}>
                    <Text style={[styles.homePropertyName,{fontSize:20,paddingBottom:10}]}>Current Stays</Text>
                    <View style={styles.homeImgCat}>
                        <View style={{position:'relative'}}>	
                            <Image style={styles.homeImg} source={require("../../assets/images/image2.png")}/>	
                            <View style={[styles.whiteshadow,styles.boxShadow,{padding:0,paddingLeft:0,position:'relative'}]}>	
                                <View style={[styles.Buttonpr,{position:'relative',marginTop:10,marginLeft:20,paddingTop:10,paddingBottom:10}]}>
                                    <View style={styles.priceBar}></View>
                                    <Text style={[styles.priceName,{fontWeight:'600',lineHeight:18}]}>$1200/Month</Text>
                                    <Text style={[styles.priceName,{fontWeight:'400',lineHeight:18}]}>APARTMENT • PRIVATE ROOM</Text>									
                                </View>					
                                <View style={[styles.propertDesOuter,{marginBottom:0,paddingLeft:20}]}>								
                                    <Text style={styles.homePropertyName}>85 Young St • Downtown Kitchener, ON</Text>
                                </View>
                                <Text style={[styles.priceName,{lineHeight:20,paddingLeft:20,paddingBottom:10}]}>Last Paid: October 2nd</Text>
                                <TouchableOpacity>
                                    <View style={[styles.payrentBtn]}>
                                        <Text style={[{color:'#fff',textAlign:'center',fontSize:16,lineHeight:15}]}>Pay Rent Amount</Text>
                                        <Text style={[{color:'#fff',textAlign:'center',fontSize:13,lineHeight:15}]}>Next Due: November 2nd</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                </View>

                <View style={[styles.listBody]}>
                    <View style={styles.hrBox}>
                        <Text style={[styles.homePropertyName,{fontSize:20}]}>Past stays</Text>
                    </View>
                    <View style={[styles.hrBox]}>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>									
                            <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St • Downtown</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
                                <Text style={styles.redText}>November 1st - February 3rd</Text>
                            </View>							
                        </View>
                    </View>
                    <View style={[styles.hrBox]}>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>									
                            <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St • Downtown</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
                                <Text style={styles.redText}>November 1st - February 3rd</Text>
                            </View>							
                        </View>
                    </View>
                    <View style={[styles.hrBox,{borderBottomWidth:0}]}>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>									
                            <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St • Downtown</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
                                <Text style={styles.redText}>November 1st - February 3rd</Text>
                            </View>							
                        </View>
                    </View>
                    <View style={[styles.hrBox,{borderBottomWidth:0}]}>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>									
                            <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St • Downtown</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
                                <Text style={styles.redText}>November 1st - February 3rd</Text>
                            </View>							
                        </View>
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
export default StayOneScreen;
