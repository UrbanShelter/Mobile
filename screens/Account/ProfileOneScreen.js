import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity,TouchableHighlight, TouchableNativeFeedback, ImageBackground, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";


class ProfileOneScreen extends Component {
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
			{/* <View>
				<View style={[styles.relativeHeader,styles.boxShadow]}>
					<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
						<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
					</TouchableOpacity>
					<Text style={[styles.headerText,{fontWeight:'600'}]}>Message</Text>
					<View style={styles.flexOneline}>
						<Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
					</View>	
				</View>
			</View> */}


            <ScrollView showsVerticalScrollIndicator={false}>
				<View style={[styles.userPro,{paddingTop:40}]}>
					<View style={[styles.userProCnt,]}>
						<Text style={[styles.headerText,{fontSize:30}]}> John Doe</Text>
						<TouchableOpacity><Text style={[styles.redText,{marginLeft:10}]}>View and edit profile</Text></TouchableOpacity>
					</View>   
					<Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/> 
				</View>

				<View style={[{padding:20}]}>
                    <TouchableNativeFeedback>
                        <View style={[styles.hrBox,{padding:20}]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:10,paddingTop:10}]}>Invite Friends</Text>			
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={[styles.hrBox,{padding:20,position:'relative'}]}>
                            <Text style={[styles.hrBoxHeading,{paddingTop:10}]}>Coupons & Credits</Text>	
                            <Text  style={[styles.PrecautionsText,{color:'#4a4a4a'}]}>Give $30, get $15</Text>
                            <Text style={[styles.redText,{fontSize:24,position:'absolute',right:10,top:'50%'}]}>$30</Text>			
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={[styles.hrBox,{padding:20}]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:10,paddingTop:10}]}>Settings</Text>			
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={[styles.hrBox,{padding:20}]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:10,paddingTop:10}]}>Get Help</Text>			
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={[styles.hrBox,{padding:20}]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:10,paddingTop:10}]}>Give Feedback</Text>			
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={[styles.hrBox,{padding:20}]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:10,paddingTop:10}]}>Log Out</Text>			
                        </View>
                    </TouchableNativeFeedback>

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
export default ProfileOneScreen;
