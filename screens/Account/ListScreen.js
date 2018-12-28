import React, { Component } from "react";
import {StatusBar, Image, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Icon,Input } from "native-base";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import styles from "./styles";
import {db} from '../../service/auth';
import StarRating from 'react-native-star-rating';
import { getData , updateData } from '../../service/service'


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
			savedState: [],
			userId : '',
			conditions : this.props.navigation.getParam('conditions', []),
			search : ''
		}		
		this.buttonPressed = this.buttonPressed.bind(this);
	}


	async componentWillMount() {
		var userId = await Expo.SecureStore.getItemAsync('uId');
		this.setState({userId :userId});
		var userDetails = await getData('users', userId);
		if(typeof userDetails.doc.saved !== 'undefined' || userDetails.doc.saved.length > 0) {
			this.setState({savedState : userDetails.doc.saved});
		}
		this.refreshSearch()
	}


	_handleSearch = async (Text) => {
		this.setState({search : Text});
	}

	async componentWillReceiveProps (nextProps) {
		this.setState({conditions : nextProps.navigation.getParam('condition')});
		console.log(this.state.conditions)	
		var userId = await Expo.SecureStore.getItemAsync('uId');
		this.setState({userId :userId});
		this.refreshSearch();
	}

	refreshSearch = async () => {
		var properties = [];
		var MainData = {};
		this.setState({loading : true });
		this.setState({properties : [] });
		var propertyRef = db.collection("property")
		if(typeof this.state.conditions != 'undefined'){
			this.state.conditions.forEach ( function (element) {
				propertyRef = propertyRef.where(element.name, element.operator, element.value)
				console.log(element.name, element.operator, element.value)
			})
		}
		await propertyRef.get().then((querySnapshot) => {
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
	}



	state = {
		modalVisible: false,
	};


	setModalVisible(visible) {
	this.setState({
			modalVisible: visible,
			activeState: []
		});
	}

	buttonPressed(index) {
        const tmpState = this.state.activeState.map((val, tmpIndex) => {
            if (tmpIndex === index) {
                return !val;
            }
            return val; 
        });
        this.setState({ activeState: tmpState });
	}
	
	
	/* save or unsave item 
	*@param id of the save or unsave item
	*/
	savedBtn = async (index) => {
		var userId = this.state.userId;
		var savedItemsState = this.state.savedState;
		var flag = 0;
		if(this.state.savedState.length != 0) {
			this.state.savedState.map((val, tmpIndex) => {
				if (val === index) {
					let savedItems = this.state.savedState;
					savedItems.splice(savedItems.indexOf(index), 1);
					this.setState({ savedState: savedItems });
					updateObj = {
						saved : this.state.savedState
					};
					flag++;
				} 
			});
			if(flag == 0) {
				savedItemsState.push(index);
				this.setState({ savedState: savedItemsState });
				updateObj = {
					saved : this.state.savedState
				};
			}
		} else {
			savedItemsState.push(index);
			this.setState({ savedState: savedItemsState });
			updateObj = {
				saved : this.state.savedState
			};
		}
		await updateData('users',userId,updateObj);
	}


	searchSubmit = () => {
		var obj = {
			name : 'location.address',
			operator : '>=',
			value : this.state.search
		}
		var conditions = this.state.conditions;
		if(this.state.conditions.length != 0) {			
			conditions.map( (element, index) => {
				if(element.name == 'location.address') {
					conditions[index] = obj;
				} else {
					conditions.push(obj);
				}
			});
		} else {
			conditions.push(obj);
		}
		this.setState({conditions : conditions})
		this.refreshSearch();
		console.log(this.state.conditions)

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
				<View style={[styles.HomeScreen]}>			
					<StatusBar backgroundColor="#fff" barStyle="dark-content"/>
					<View style={[styles.relativeHeader,{paddingLeft:0,paddingRight:0}]}>
						<View style={styles.searchbar}>
							<TouchableOpacity>
								<Image style={styles.headerImg} source={require("../../assets/images/search_inactive.png")}/>
							</TouchableOpacity>
							<Input 
								style={[styles.inputStyle,{borderWidth:0,borderColor:'transparent'}]} 
								placeholder="Search Location"
								onChangeText={ (Text) => {this._handleSearch(Text) }}  
								placeholderTextColor="#9b9b9b"
								onSubmitEditing={this.searchSubmit} />
						</View>
						<View style={styles.flexOneline}>							
							<TouchableOpacity onPress={()=> {
								this.props.navigation.navigate("Filter",{conditions : this.state.conditions})}} >
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
										<Icon style={(this.state.savedState.indexOf(data.id) != -1) ? styles.savedBtnActive : styles.savedBtn} 
                                    	onPress={() => this.savedBtn(data.id)}
										name={(this.state.savedState.indexOf(data.id) != -1) ? "ios-heart" : "ios-heart-outline"}/>
									</TouchableOpacity>
								</View>
								<View style={{position:'relative'}}>	
									<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("View",{propertyId : data.id})}><Image style={styles.homeImg} source={{uri:data.image}}/></TouchableWithoutFeedback>	
									<View style={[styles.whiteshadow,styles.boxShadow,{paddingLeft:20}]}>	
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
												<View><Text style={styles.countText}>({data.review.length})</Text></View>
											</View>
											
											<View style={styles.homeFacilityFlex}>
												<Image style={styles.homeFacilityImg} source={require("../../assets/images/bed.png")}/>
												<Text style={styles.countText}>{data.rooms.bedroom} Beds</Text>
											</View>
											<View style={styles.homeFacilityFlex}>
												<Image style={styles.homeFacilityImg} source={require("../../assets/images/bath.png")}/>
												<Text style={styles.countText}>{data.rooms.bathroom} Baths</Text>
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

					<PopupDialog width={300} height={370} show={this.state.visible} ref={(popupDialog) => { this.popupDialogFrom = popupDialog; }}>
						<View style={[{borderBottomWidth:1,borderBottomColor:'#f2f2f2',padding:10,flex:0,flexDirection:'row',justifyContent:'space-between'}]}>
							<Text style={[styles.headtext,{padding:10}]}>From</Text>
							<View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
								<TouchableOpacity><Icon style={{color:'#4f3bf6',padding:10}} name="ios-arrow-back"/></TouchableOpacity>
								<TouchableOpacity><Icon style={{color:'#4f3bf6',padding:10}} name="ios-arrow-forward"/></TouchableOpacity>
								<Text style={[styles.headtext,{padding:10,color:'#4f3bf6'}]}> 2018</Text>
							</View>
						</View>
						<View style={[styles.typeBox,{padding:10}]}>
							<View style={[styles.quickfilters]}>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[0] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(0)}>Jan</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[1] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(1)}>Feb</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[2] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(2)}>Mar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[3] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(3)}>April</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[4] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(4)}>May</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(5)}>June</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(5)}>July</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(5)}>Aug</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(5)}>Sept</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(5)}>Oct</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(5)}>Nov</Text>
                                </TouchableOpacity>
								<TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.calenderBtn : styles.calenderBtnActive} 
                                    onPress={() => this.buttonPressed(5)}>Dec</Text>
                                </TouchableOpacity>
							</View>
						</View>
						<View style={[{borderTopWidth:1,borderTopColor:'#f2f2f2'}]}>
							<TouchableOpacity><Text style={[{lineHeight:65,color:'#4f3bf6',textAlign:'center',paddingBottom:20}]}>SEE RESULTS</Text></TouchableOpacity>
						</View>
					</PopupDialog>

					<PopupDialog width={300} show={this.state.visible} ref={(popupDialog) => { this.popupDialogHomeType = popupDialog; }}>
						<View style={[{borderBottomWidth:1,borderBottomColor:'#f2f2f2',padding:10}]}>
							<Text style={[styles.headtext,{padding:10,marginLeft:10}]}>Home Type</Text>
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

					<PopupDialog width={300} height={350} show={this.state.visible} ref={(popupDialog) => { this.popupDialogRooms = popupDialog; }}>
						<View style={[{borderBottomWidth:1,borderBottomColor:'#f2f2f2',padding:10}]}>
							<Text style={[styles.headtext,{padding:10,marginLeft:10}]}>Rooms</Text>
						</View>
						<Text style={[{paddingLeft:20,paddingTop:10}]}>Room Type</Text>
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
						<Text style={[{paddingLeft:20}]}>Bedrooms</Text>
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
