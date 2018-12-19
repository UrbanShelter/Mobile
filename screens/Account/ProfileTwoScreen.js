import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";


class ProfileTwoScreen extends Component {
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
			<View>
				<View style={[styles.relativeHeader,styles.boxShadow]}>
					<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
						<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")} />
					</TouchableOpacity>
					<Text style={[styles.headerText,{fontWeight:'600'}]}>Edit Profile</Text>
                    <View style={styles.flexOneline}>
					</View>	
				</View>
			</View>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imgPro}>
                    <Image blurRadius={1} style={{height:200,width:'100%',position:'absolute'}} source={require("../../assets/images/5.jpg")} />
                    <Image style={{height:200,width:200}} source={require("../../assets/images/5.jpg")} />
                </View>
                <View style={[styles.listBody]}>

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
export default ProfileTwoScreen;
