import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, AsyncStorage } from "react-native";
import { Container, Text } from "native-base";
import Swiper from 'react-native-swiper';
import styles from "./styles";


class WelcomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			swiperFinished:false
		}	
	}

	async componentWillMount () {
		var user = await Expo.SecureStore.getItemAsync('uId');
		const deviceId = Expo.Constants.deviceId;
		console.log(Expo.Constants);
		console.log(user);
		if(user) {
			this.props.navigation.navigate('Main');
		}
	}

	

	render() {
		let nextBtn;
			if(this.state.swiperFinished != true) {
				nextBtn = <TouchableOpacity style={styles.nextbtn} onPress={() => this.refs.swiper.scrollBy(1)} ><Text style={styles.nextbtntxt} uppercase={true}> Next </Text></TouchableOpacity> 		
			} else {
				nextBtn = <TouchableOpacity style={styles.nextbtn} onPress={()=>this.props.navigation.navigate("Login")} ><Text style={styles.nextbtntxt} uppercase={true}> Finish </Text></TouchableOpacity> 		
			}
		return (
			<Container>
				<View style={styles.logwrap}> 
					<TouchableOpacity  onPress={()=>this.props.navigation.navigate("Login")} ><Text style={styles.loginbtn} uppercase={true}> LOG IN </Text></TouchableOpacity>                                                  
				</View> 
				<StatusBar backgroundColor='#fff' barStyle="dark-content"/>
				<Swiper ref='swiper' onIndexChanged={(index) => {if(index == 4) { this.setState({swiperFinished: true}) } }} style={styles.wrapper} showsButtons={false} loop={false} activeDotColor="#9B9B9B" paginationStyle={{bottom: 80}} dot={<View style={{backgroundColor: '#eee', width:5, height:5, borderRadius:100,marginLeft: 7, marginRight: 7}} />}>                  
					<View style={styles.slide1}>
						<View style={styles.inslide}>
							<Image style={styles.icontop} source={require("../../assets/images/compass.png")}/> 
							<Text style={styles.headtext}>Explore homes!</Text>
							<Text style={styles.paragraph}>Select from hundreds of verified homes right on your finger tips.</Text>
						</View>
					</View> 

					<View style={styles.slide2}>                                           
						<View style={styles.inslide}>
						<Image style={styles.icontop2} source={require("../../assets/images/icon2.png")}/> 
						<Text style={styles.headtext}>Filter Easy</Text>
						<Text style={styles.paragraph}>Looking for a pet-friendly home, close to school, that is furnished, costs less than $700/m and has ensuite washrooms? I think we have something for you. </Text>
						</View>
					</View>
					<View style={styles.slide3}>                                    
						<View style={styles.inslide}>
							<Image style={styles.icontop3} source={require("../../assets/images/icon3.png")}/> 
							<Text style={styles.headtext}>Love the Details</Text>
							<Text style={styles.paragraph}>We know how hard it is searching for homes on the internet! So we are working with landlords to provide intricate property detild and 360º viewing.</Text>
						</View>
					</View>
					<View style={styles.slide4}>                                            
						<View style={styles.inslide}>
							<Image style={styles.icontop4} source={require("../../assets/images/icon4.png")}/> 
							<Text style={styles.headtext}>Communicate</Text>
							<Text style={styles.paragraph}>Communication is king. That why we have made an easy messaging service right in our platform letting you contact the landlord at an instant.</Text>
						</View>
					</View>
					<View style={styles.slide5}>                                            
						<View style={styles.inslide}>
							<Image style={styles.homelogo} source={require("../../assets/images/logo.png")}/>
								<Text style={styles.logoname}>urbanshelter</Text>
							
							<TouchableOpacity  style={styles.signbtn}   onPress={()=>this.props.navigation.navigate("Signup")}>
									<Image style={styles.btnimg} source={require("../../assets/images/btnimg.png")}/> 
							</TouchableOpacity>
						</View>
					</View>
				</Swiper>
				<View style={styles.bottomwrp}>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")} style={styles.skipbtn} ><Text style={styles.skipbtntxt} uppercase={true}> Skip </Text></TouchableOpacity>
					{nextBtn}
				</View> 
			</Container>
		);
	}
}

export default WelcomeScreen;
