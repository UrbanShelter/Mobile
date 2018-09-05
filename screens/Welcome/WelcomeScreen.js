import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";

class WelcomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	componentDidMount() {

		Expo.SecureStore.getItemAsync("PlaytronUserDetails").then((res2) => {
			let value = JSON.parse(res2);
			console.log("value :", value);
			if (value) {
				this.props.navigation.navigate("Home");
			}
		});
	}

	
	render() {
		return (
			<Container>
                                 <View style={styles.logwrap}> 
                                        <TouchableOpacity  onPress={this.onPress} ><Text style={styles.loginbtn} uppercase={true}> LOG IN </Text></TouchableOpacity>                                                  
                                   </View> 
				<StatusBar backgroundColor='#fff' barStyle="light-content" />
				<Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDotColor="#98A8BD" paginationStyle={{bottom: 80}} dot={<View style={{backgroundColor: '#eee', width:5, height:5, borderRadius:100,marginLeft: 7, marginRight: 7}} />}>  
                                    
					<View style={styles.slide1}>
                                            <View style={styles.inslide}>
						<Image style={styles.icontop} source={require("../../assets/images/compass.png")}/> 
                                                <Text style={styles.headtext}>Explore homes around you!</Text>
                                                <Text style={styles.paragraph}>Not only can you select from several properties around, but you also will be 
                                                able to view deatailed home listing uploaded by verified landlords or their assigned landlords.</Text>
                                            </View>
					</View> 

					<View style={styles.slide2}>                                           
						<View style={styles.inslide}>
                                                    <Image style={styles.icontop2} source={require("../../assets/images/icon2.png")}/> 
                                                    <Text style={styles.headtext}>Easy filteration</Text>
                                                    <Text style={styles.paragraph}>Select from several of homes in you area provided by verified landlords and agents</Text>
                                                </View>
					</View>
					<View style={styles.slide3}>                                    
						<View style={styles.inslide}>
                                                    <Image style={styles.icontop3} source={require("../../assets/images/icon3.png")}/> 
                                                    <Text style={styles.headtext}>Set alerts</Text>
                                                    <Text style={styles.paragraph}>Select from several of homes in you area provided by verified landlords and agents</Text>
                                                </View>
					</View>
					<View style={styles.slide4}>                                            
						<View style={styles.inslide}>
                                                    <Image style={styles.icontop4} source={require("../../assets/images/icon4.png")}/> 
                                                    <Text style={styles.headtext}>Message Landload</Text>
                                                    <Text style={styles.paragraph}>We are aggregating a list of events, deals and places-to-go so that you always have something to look forward to.</Text>
                                                </View>
					</View>
                                        <View style={styles.slide5}>                                            
                                            <View style={styles.inslide}>
                                                <Image style={styles.iconlogo} source={require("../../assets/images/logonew.png")}/>
                                                
                                                <TouchableOpacity  style={styles.signbtn}    onPress={this.onPress} >
                                                     <Image style={styles.btnimg} source={require("../../assets/images/btnimg.png")}/> 
                                                </TouchableOpacity>
                                            </View>
					</View>
					
				</Swiper>
                                <View style={styles.bottomwrp}>
                                    <TouchableOpacity style={styles.skipbtn} ><Text style={styles.skipbtntxt} uppercase={true}> Skip </Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.nextbtn} onPress={this.onPress} ><Text style={styles.nextbtntxt} uppercase={true}> Next </Text></TouchableOpacity> 
                               </View> 
			</Container>


		);
	}
}

export default WelcomeScreen;
