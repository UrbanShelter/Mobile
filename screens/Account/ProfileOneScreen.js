import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";
import { logOut } from './../../service/auth';


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


    logout = () => {
        this.props.navigation.navigate("Login");
        logOut();
        // this.props.navigation.navigate("Login");
    }
    
render() {
    return (
        <View style={styles.ListScreen}>					
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
            <ScrollView showsVerticalScrollIndicator={false}>
				<View style={[styles.userPro,{paddingTop:50,position:'relative'}]}>
					<View style={[styles.userProCnt]}>
						<Text style={[styles.headerText,{fontSize:30}]}>John Doe</Text>
						<TouchableOpacity onPress= { () => {this.props.navigation.navigate('Editprofile')}}><Text style={[styles.redText,{marginLeft:0}]}>View and edit profile</Text></TouchableOpacity>
					</View>   
					<Image style={[styles.reviewsBoxImg,{right:0,top:'90%',position:'absolute'}]} source={require("../../assets/images/profile.jpg")}/> 
				</View>

				<View style={[{padding:20,paddingTop:0}]}>
                    <TouchableOpacity>
                        <View style={[styles.hrBox]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:0,paddingTop:10}]}>Invite Friends</Text>			
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.hrBox,{position:'relative'}]}>
                            <Text style={[styles.hrBoxHeading,{paddingTop:10}]}>Coupons & Credits</Text>	
                            <Text  style={[styles.PrecautionsText,{color:'#4a4a4a'}]}>Give $30, get $15</Text>
                            <Text style={[styles.redText,{fontSize:24,position:'absolute',right:10,top:'50%'}]}>$30</Text>			
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.hrBox]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:0,paddingTop:10}]}>Settings</Text>			
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.hrBox]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:0,paddingTop:10}]}>Get Help</Text>			
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.hrBox]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:0,paddingTop:10}]}>Give Feedback</Text>			
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={this.logout} >
                        <View style={[styles.hrBox]}>
                            <Text style={[styles.hrBoxHeading,{paddingBottom:0,paddingTop:10}]}>Log Out</Text>			
                        </View>
                    </TouchableOpacity>

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
