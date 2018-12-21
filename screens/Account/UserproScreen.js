import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";


class UserproScreen extends Component {
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
						<Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
					</TouchableOpacity>
					<Text style={[styles.headerText,{fontWeight:'600'}]}>Profile</Text>
					<View style={styles.flexOneline}>
						<Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
					</View>	
				</View>
			</View>


            <ScrollView showsVerticalScrollIndicator={false}>
				<View style={[styles.userPro,{paddingTop:20,position:'relative'}]}>
					<View style={[styles.userProCnt]}>
						<Text style={[styles.headerText,{fontSize:30}]}>John Doe</Text>
						<Text style={[styles.PrecautionsText]}> Waterloo, Canada</Text>
					</View>   
					<Image style={[styles.reviewsBoxImg,{right:10,top:'50%',position:'absolute'}]} source={require("../../assets/images/profile.jpg")}/> 
				</View>
				<View style={[styles.listBody]}>
					{/* <View style={[styles.userPro]}>
						<View style={[styles.userProCnt]}>
							<Text style={[styles.headerText,{fontSize:30}]}> John Doe</Text>
							<Text style={[styles.PrecautionsText]}>Waterloo, Canada</Text>
						</View>   
						<Image style={[styles.reviewsBoxImg]} source={require("../../assets/images/profile.jpg")}/> 
					</View> */}
					<View>
						<Text style={[styles.PrecautionsText,{fontSize:16}]}>This is the information that your landlord and roommates can read about you. It is advised to keep it accurate and up-to-date.</Text>
					</View>
					<View style={[styles.listBody,{paddingTop:20,paddingLeft:0}]}>
						<Text style={[styles.hrBoxHeading,{fontSize:25}]}>Personal Bio</Text>
						<View>
							<Text style={[styles.PrecautionsText,{fontSize:16,padding:20,borderWidth:1,borderRadius:5,borderColor:'#f2f2f2'}]}>
								I’ m a recent grad from the University of Waterloo currently living in Kitchener, Canada.I love digital art work and am actively working in the digitial arts field.I also have a background in Mechanical Engineering.
							</Text>
						</View>
					</View>
					<View style={[styles.hrBox]}>
						<Text style={[styles.hrBoxHeading,{fontSize:25}]}>Review (1)</Text>
						<View style={styles.reviewsBox}>									
							<Image style={styles.reviewsBoxImg} source={require("../../assets/images/profile.jpg")}/>
							<View>
								<Text style={styles.reviewsBoxHeading}>Timmothy Hashfields</Text>
								<Text style={styles.PrecautionsText}>September 2018</Text>
							</View>
						</View>
						<Text  style={[styles.PrecautionsText,{fontSize:16,padding:20}]}>
							Good Tenants.
						</Text>
						<View style={styles.reviewRating} >
							<TouchableOpacity  onPress={()=> {this.props.navigation.navigate("Review")}}>
								<Text style={styles.redText}>View All Reviews</Text>
							</TouchableOpacity>
						</View>					
					</View>
					<View style={[{paddingTop:20}]}>
						<View style={[styles.hrBox]}>
							<Text style={[styles.hrBoxHeading]}>Member Since</Text>
							<Text  style={[styles.PrecautionsText,{fontSize:16}]}>
								December, 2018
							</Text>				
						</View>
						<View style={[styles.hrBox]}>
							<Text style={[styles.hrBoxHeading]}>Verified Info</Text>
							<Text  style={[styles.PrecautionsText,{fontSize:16}]}>
								Email Address, Phone Number, Government ID
							</Text>				
						</View>
						<View style={[styles.hrBox]}>
							<Text style={[styles.hrBoxHeading]}>Date of Birth</Text>
							<Text  style={[styles.PrecautionsText,{fontSize:16}]}>
								December, 2018
							</Text>				
						</View>
						<View style={[styles.hrBox]}>
							<Text style={[styles.hrBoxHeading]}>Work</Text>
							<Text  style={[styles.PrecautionsText,{fontSize:16}]}>
								-
							</Text>				
						</View>
						<View style={[styles.hrBox]}>
							<Text style={[styles.hrBoxHeading]}>School</Text>
							<Text  style={[styles.PrecautionsText,{fontSize:16}]}>
								University of Waterloo
							</Text>				
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
export default UserproScreen;
