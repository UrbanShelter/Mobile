import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";


class HelpScreen extends Component {
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
                        <Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
                    </TouchableOpacity>
                    <View style={styles.flexOneline}>
                        <Image style={styles.headerImg} source={require("../../assets/images/heart-black.png")}/>
                        <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                    </View>	
                </View>
                <View style={[styles.reviewsBox,{position:'relative',paddingBottom:20}]}>									
                    <Image style={[styles.reviewImg,{marginLeft:20}]} source={require("../../assets/images/flat-with-yellow.png")}/>
                    <View>
                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St•Downtown,</Text>
                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
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
            <KeyboardAvoidingView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.listBody,{paddingTop:20}]}>
                        <Text style={styles.homePropertyName}>Help</Text>
                        <Text style={[styles.hrBoxHeading,{fontSize:14,paddingTop:10}]}>HOW CAN WE ASSIST YOU?</Text>
                        <View  style={[styles.textAreaContainer,{paddingTop:20}]}>
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Message"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                                />
                        </View>
                        <TouchableOpacity><Text style={styles.customBtn} uppercase={true}> send </Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
export default HelpScreen;
