import React, { Component } from "react";
import {StatusBar, Image, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Icon,Input } from "native-base";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import styles from "./styles";
import {db} from '../../service/auth';
import StarRating from 'react-native-star-rating';



class ListScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
			properties : [],
			activeState: [false],
			savedState: [false],
		}		
		this.buttonPressed = this.buttonPressed.bind(this);
	}

	  state = {
	  	modalVisible: false,
	  };
	  setModalVisible(visible) {
	  	this.setState({
			  modalVisible: visible,
			  activeState: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
		  });
	  }

	buttonPressed(index) {
        console.log('FROM:',this.state.activeState);
        const tmpState = this.state.activeState.map((val, tmpIndex) => {
            if (tmpIndex === index) {
                return !val;
            }
            return val; 
        });
        this.setState({ activeState: tmpState });
        console.log('TO:',this.state.activeState);
	}
	
	savedBtn(index) {
		const tmpState = this.state.savedState.map((val, tmpIndex) => {
			if (tmpIndex === index) {
				return!val;
			}
			return val;
		});
		this.setState({ savedState: tmpState});
	}

	async componentWillMount() {
		var properties = [];
		var MainData = {};
		await db.collection("property").get().then((querySnapshot) => {
			querySnapshot.forEach(function(doc) {
				MainData = doc.data();
				MainData.id = doc.id;
				properties.push(MainData);
			});
		}).catch(function(error) {
			console.log("Error getting documents: ", error);
		});
		this.setState({properties : properties });
		this.setState({loading : false });
		console.log(MainData);
	}

	showFrom = () => {
		this.popupDialogFrom.show();
	}
	showHomeType = () => {
		this.popupDialogHomeType.show();
	}
	showRooms = () => {
		this.popupDialogRooms.show();
	}


	render() {
		if(this.state.loading == true ) {
			return (
				<View style={[style.container, style.horizontal]}>
					<ActivityIndicator size="large" color="#4F3BF6" />
				</View>
			);
		} else {
			return (
				<View style={styles.HomeScreen}>			
					<StatusBar backgroundColor="#fff" barStyle="dark-content"/>
					<View style={[styles.relativeHeader,{marginTop:10,marginBottom:10}]}>

						<View style={styles.searchbar}>
							<TouchableOpacity>
								<Image style={styles.headerImg} source={require("../../assets/images/search_inactive.png")}/>
							</TouchableOpacity>
							<Input style={[styles.inputStyle,{borderWidth:0,borderColor:'transparent'}]} placeholder="Search Location"  placeholderTextColor="#9b9b9b" />
						</View>
						<View style={styles.flexOneline}>							
							<TouchableOpacity onPress={()=> {
								this.props.navigation.navigate("Filter")}} >
								<Image style={[styles.headerImg,{marginLeft:5}]} source={require("../../assets/images/Shape.png")}/>
							</TouchableOpacity>
						</View>	
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>						
						<View style={[styles.homeCategoryBox,{marginTop:20}]}>
							<TouchableOpacity onPress={this.showFrom}><Text style={styles.homeCategoryButton}> From</Text></TouchableOpacity>
							<TouchableOpacity onPress={this.showHomeType}><Text style={styles.homeCategoryButton}> Home Type</Text></TouchableOpacity>
							<TouchableOpacity onPress={this.showRooms}><Text style={styles.homeCategoryButton}> Rooms</Text></TouchableOpacity>
						</View>				
						<Text style={styles.headtext1}>Home Rentals in Waterloo </Text>
						{this.state.properties.map((data, key) => 
						<View key={key}>
							<View style={styles.homeImgCat}>
								<View style={styles.imgeOver}>
									<View style={styles.privateRoom}><Text style={styles.privateRoomText}>Entire Home</Text></View>
									<TouchableOpacity>
										<Icon style={this.state.savedState[0] ? styles.savedBtn : styles.savedBtnActive} 
                                    	onPress={() => this.savedBtn(0)}
										name={this.state.savedState[0] ? "ios-heart-outline" : "ios-heart"}/>
									</TouchableOpacity>
								</View>
								<View style={{position:'relative'}}>	
									<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("View",{propertyId : data.id})}><Image style={styles.homeImg} source={{uri:data.image}}/></TouchableWithoutFeedback>	
									<View elevation={5} style={[styles.whiteshadow,{paddingLeft:30}]}>	
											<View style={[styles.Buttonpr,{position:'relative'}]}>
												<View style={styles.priceBar}></View>
												<Text style={styles.priceName}>${data.rent}/{data.rentUnit}</Text>									
											</View>					
										<View style={styles.propertDesOuter}>								
											<View>
												<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("View",{propertyId : data.id})} >
													<Text style={styles.homePropertyName}>{data.location.address} • {data.location.city}, {data.location.state}, {data.location.countryCode}</Text>
												</TouchableWithoutFeedback>
											</View>
										</View>
										<View style={styles.homeCategoryBox}>
										{
											data.tags.map( (tag, tagKey) => {
												return <Text key={tagKey} style={styles.homeCategorylebel}>{tag}</Text>
											})
										}
										</View>
										<View style={styles.homeFacilityOuter}>
											<View style={styles.ratings}>
												<StarRating
													disabled={true}
													emptyStar={'ios-star-outline'}
													fullStar={'ios-star'}
													halfStar={'ios-star-half'}
													iconSet={'Ionicons'}
													maxStars={5}
													rating={data.rating}
													fullStarColor={'#4f3bf6'}
													starSize={15}
												/>
												<View><Text style={styles.countText}>(86)</Text></View>
											</View>
											
											<View style={styles.homeFacilityFlex}>
												<Image style={styles.homeFacilityImg} source={require("../../assets/images/bed.png")}/>
												<Text style={styles.countText}>2 Beds</Text>
											</View>
											<View style={styles.homeFacilityFlex}>
												<Image style={styles.homeFacilityImg} source={require("../../assets/images/bath.png")}/>
												<Text style={styles.countText}>2 Baths</Text>
											</View>	
											{
												data.amenities.inBuilding.map( (roomaminity , aminityKey) => {
													return (
														<View key = {aminityKey} style={styles.homeFacilityFlex}>
															{/* <Image style={styles.homeFacilityImg} source={{uri : roomaminity.icon}}/> */}
															<Text style={styles.countText}>{roomaminity.name}</Text>
														</View>
													)
												})
											}
										</View>
									</View>
								</View>
							</View> 
						</View>
						)}
					</ScrollView>

					<PopupDialog width={300} height={150} show={this.state.visible} ref={(popupDialog) => { this.popupDialogFrom = popupDialog; }}>
						<View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15,paddingTop:25}}>							 
							<Text style={styles.recovery}>TERMS & CONDITIONS</Text>
							<Text style={styles.recoveryDes}>
								By clicking ‘accept’ button you agree to the UrbanShelter <Text style={styles.btex}> Terms and Conditions</Text>  
								 and  <Text style={styles.btex}> Privacy Policy </Text>
							</Text>
						</View>
						<View style={{flex: 1, flexDirection: 'row',marginTop:16}}>
							<TouchableOpacity onPress={()=>this.setState({visible:false})}><Image style={styles.btnAceptDecline} source={require("../../assets/images/decline.png")}/></TouchableOpacity>
							<TouchableOpacity onPress={() => {
								this.setState({loader : true});
								this.registerUser();
								}}><Image style={styles.btnAceptDecline} source={require("../../assets/images/accept.png")}/></TouchableOpacity>
						</View>
					</PopupDialog>

					<PopupDialog width={300} height={300} show={this.state.visible} ref={(popupDialog) => { this.popupDialogHomeType = popupDialog; }}>
						<View style={[{borderBottomWidth:1,borderBottomColor:'#f2f2f2',padding:10}]}>
							<Text style={[styles.headtext,{marginLeft: 20,paddingTop:5}]}>Home Type</Text>
						</View>
						<View style={[styles.typeBox,{padding:10}]}>
							<View style={[styles.quickfilters]}>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[0] ? styles.quickfiltersBtn : styles.quickfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(0)}> Any</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[1] ? styles.quickfiltersBtn : styles.quickfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(1)}> House</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[2] ? styles.quickfiltersBtn : styles.quickfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(2)}> Apartment</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[3] ? styles.quickfiltersBtn : styles.quickfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(3)}> Dorm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[4] ? styles.quickfiltersBtn : styles.quickfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(4)}> Townhouse</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.quickfiltersBtn : styles.quickfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(5)}> Condo</Text>
                                </TouchableOpacity>
							</View>
						</View>	

						<View style={[{borderTopWidth:1,borderTopColor:'#f2f2f2',padding:10}]}>
							<TouchableOpacity><Text style={styles.filterBtn}>SEE RESULTS</Text></TouchableOpacity>
						</View>
					</PopupDialog>

					<PopupDialog width={310} height={350} show={this.state.visible} ref={(popupDialog) => { this.popupDialogRooms = popupDialog; }}>
						<View style={[{borderBottomWidth:1,borderBottomColor:'#f2f2f2',padding:10}]}>
							<Text style={[styles.headtext,{marginLeft: 20,paddingTop:5}]}>Rooms</Text>
						</View>
						<Text style={[{paddingLeft:30,paddingTop:10}]}>Room Type</Text>
						<View style={[styles.typeBox,{padding:10}]}>
								
							<View style={[styles.quickfilters]}>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[6] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(6)}> Any</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[7] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(7)}> Entire House</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[8] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(8)}> Private Rooms</Text>
                                </TouchableOpacity>
							</View>
						</View>	
						<Text style={[{paddingLeft:30}]}>Bedrooms</Text>
						<View style={[styles.typeBox,{padding:10}]}>
								
							<View style={[styles.quickfilters]}>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[9] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(9)}> Studio</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[10] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(10)}> 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[10] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(10)}> 2</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[11] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(11)}> 3</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[12] ? styles.roomsfiltersBtn : styles.roomsfiltersBtnActive} 
                                    onPress={() => this.buttonPressed(12)}> 4</Text>
                                </TouchableOpacity>

							</View>
						</View>	
						<View style={[{borderTopWidth:1,borderTopColor:'#f2f2f2',padding:10}]}>
							<TouchableOpacity><Text style={styles.filterBtn}>SEE RESULTS</Text></TouchableOpacity>
						</View>
					</PopupDialog>
					
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

export default ListScreen;
