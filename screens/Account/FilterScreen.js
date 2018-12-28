import React, { Component } from "react";
import { Image, View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import { Text } from "native-base";
import styles from "./styles";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

class FilterScreen extends React.Component {
	static navigationOptions = {
        header: null,
        tabBarVisible : false
	};
	constructor(props) {
		super(props);
		this.state = {
            loading : true,
            values: [100, 1500],
            properties : [],
            type: '',
            activeState : [false],
            bedroom : '',
            bathroom : '',
            buildingAminity : '',
            suiteAminity : '',
            conditions : this.props.navigation.getParam('conditions'),
            minPrice : '',
            maxPrice : '',


        }		

    }

    componentDidMount () {
        console.log(this.state.conditions);
    }

    multiSliderValuesChange = (values) => {
        this.setState({minPrice : values[0], maxPrice : values[1]})
        this.setState({values});
    }


    _typeHandler = (index) => {
        if(this.state.type == index) {
            this.setState({type : ''})
        } else {
            this.setState({type : index})
        }
    }


    _bedRoomHandler = (index) =>{
        if(this.state.bedroom == index) {
            this.setState({bedroom : ''})
        } else {
            this.setState({bedroom : index})
        }
    }


    _bathRoomHandler = (index) =>{
        if(this.state.bathroom == index) {
            this.setState({bathroom : ''})
        } else {
            this.setState({bathroom : index})
        }
    }


    _buildingAminityHandler = (index) => {
        if(this.state.buildingAminity == index) {
            this.setState({buildingAminity : ''})
        } else {
            this.setState({buildingAminity : index})
        }
    }


    _suiteAminityHandler = (index) => {
        if(this.state.suiteAminity == index) {
            this.setState({suiteAminity : ''})
        } else {
            this.setState({suiteAminity : index})
        }
    }


    _crossBtnHandler = () => {
        var conditions = [];
        if (this.state.type != '') {
            let typeObj = {
                name : 'category',
                operator : '==',
                value : this.state.type
            }; 
            conditions.push(typeObj);
        }

        if(this.state.minPrice != '') {
            let typeObj = {
                name : 'rent',
                operator : '<=',
                value : this.state.maxPrice
            }; 
            conditions.push(typeObj);

            let typeObj1 = {
                name : 'rent',
                operator : '>=',
                value : this.state.minPrice
            }; 
            conditions.push(typeObj1);
        }

        if (this.state.bedroom != '') {
            if(this.state.bedroom == '5+') {
                let typeObj = {
                    name : 'rooms.bedroom',
                    operator : '>=',
                    value : '5'
                };
                conditions.push(typeObj);
            } else {
                let typeObj = {
                    name : 'rooms.bedroom',
                    operator : '==',
                    value : this.state.bedroom
                };
                conditions.push(typeObj);
            }
             
            
        }


        if (this.state.bathroom != '') {
            if(this.state.bathroom == '5+') {
                let typeObj = {
                    name : 'rooms.bathroom',
                    operator : '>=',
                    value : '5'
                }; 
                conditions.push(typeObj);
            } else {
                let typeObj = {
                    name : 'rooms.bathroom',
                    operator : '==',
                    value : this.state.bathroom
                }; 
                conditions.push(typeObj);
            }
            
        }

        if (this.state.buildingAminity != '') {
            let typeObj = {
                name : 'amenities.inBuilding',
                operator : 'array-contains',
                value : this.state.buildingAminity
            }; 
            conditions.push(typeObj);
        }

        if (this.state.suiteAminity != '') {
            let typeObj = {
                name : 'amenities.inSuite',
                operator : 'array-contains',
                value : this.state.suiteAminity
            }; 
            conditions.push(typeObj);
        }
        console.log(conditions);
        this.props.navigation.navigate('List',{condition: conditions});
    }




	render() {
        const {goBack} = this.props.navigation
        return(
			<View style={[styles.filterScreen]}>			
				<View style={[styles.relativeHeader,{marginTop:0,paddingTop:0}]}>
                    <View style={[styles.signinbg,{padding:0}]}>					
                        <Text style={styles.headtext}>Filter</Text>
                    </View>
                    <View style={styles.flexOneline}>							
                        <TouchableOpacity onPress={() => goBack()}><Image style={[styles.headerImg,{marginTop:40}]} source={require("../../assets/images/cross.png")}/></TouchableOpacity>
                    </View>	
				</View>
                <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.scrollEnabled}>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Price </Text>
                        </View>
                        <View>
                            <View style={[{flex:0, flexDirection: 'row', justifyContent:'space-between',paddingLeft:40,paddingRight:40}]}>
                                <Text style={styles.redText}>$ {this.state.values[0]}</Text>
                                <Text style={styles.redText}>${this.state.values[1]}</Text>
                            </View>
                            <View style={{flex: 0, flexDirection: 'row', justifyContent:'center'}}>
                                <MultiSlider
                                values={[this.state.values[0], this.state.values[1]]}
                                sliderLength={280}
                                onValuesChange={this.multiSliderValuesChange}
                                min={100}
                                max={1500}
                                step={1} 
                                isMarkersSeparated={true}
                                allowOverlap
                                trackStyle={{ height: 5 }}
                                selectedStyle={{ backgroundColor: '#4f3bf6' }}
                                unselectedStyle={{ backgroundColor: '#ebebeb' }}
                                markerStyle={{
                                    backgroundColor: '#4f3bf6',
                                    height:20,
                                    width: 20,
                                    borderColor: '#fff',
                                    borderWidth:5,
                                    elevation:2,
                                    borderRadius:10,
                                }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Type </Text>
                        </View>
                        <View>
                            <View style={[styles.typeBox,{paddingLeft:10}]}>
                                <TouchableOpacity>
                                    <Text style={(this.state.type == 'Apartment') ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._typeHandler('Apartment')}> Apartment</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.type == 'House') ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._typeHandler('House')}> House</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.type == 'Condo') ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._typeHandler('Condo')}> Condo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.type == 'Townhouse') ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._typeHandler('Townhouse')}> Townhouse</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.type == 'Dorm') ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._typeHandler('Dorm')}> Dorm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.type == 'Studio') ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._typeHandler('Studio')}> Studio</Text>
                                </TouchableOpacity>
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bedrooms </Text>
                        </View>
                        <View>
                            <View style={[styles.typeBox,{paddingLeft:10}]}>
                                <TouchableOpacity>
                                    <Text style={(this.state.bedroom == '1' )? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bedRoomHandler('1')}>1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.bedroom == '2' ) ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bedRoomHandler('2')}>2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.bedroom == '3' ) ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bedRoomHandler('3')}>3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.bedroom == '4' ) ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bedRoomHandler('4')}>4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={(this.state.bedroom == '5+' ) ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bedRoomHandler('5+')}>5+</Text>
                                </TouchableOpacity>
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bathrooms </Text>
                        </View>
                        <View>
                            <View style={[styles.typeBox,{paddingLeft:10}]}>
                                <TouchableOpacity>
                                    <Text style={this.state.bathroom == '1' ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bathRoomHandler('1')}>1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.bathroom == '2' ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bathRoomHandler('2')}>2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.bathroom == '3' ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bathRoomHandler('3')}>3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.bathroom == '4' ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bathRoomHandler('4')}>4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.bathroom == '5+' ? styles.rateButtonActive : styles.typeCategoryButton} 
                                    onPress={() => this._bathRoomHandler('5+')}>5+</Text>
                                </TouchableOpacity>

                              
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>In-Unit Amenities </Text>
                        </View>
                        <View style={[styles.typeBox,{justifyContent:'flex-start'}]} >

                            <TouchableOpacity>
                                <Text style={(this.state.buildingAminity == 'Balcony') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._buildingAminityHandler('Balcony')}><Image style={styles.imgIcon  } source={require("../../assets/images/bath.png")}/>  Balcony</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.buildingAminity == 'Bathroom') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._buildingAminityHandler('Bathroom')}><Image style={styles.imgIcon  } source={require("../../assets/images/bath.png")}/>  Bathroom</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.buildingAminity == 'Washer') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._buildingAminityHandler('Washer')}><Image style={styles.imgIcon  } source={require("../../assets/images/1.png")}/>  Washer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.buildingAminity == 'Dryer') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._buildingAminityHandler('Dryer')}><Image style={styles.imgIcon  } source={require("../../assets/images/1.png")}/>  Dryer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.buildingAminity == 'Heater') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._buildingAminityHandler('Heater')}><Image style={styles.imgIcon  } source={require("../../assets/images/2.png")}/>  Heater</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.buildingAminity == 'Patio') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._buildingAminityHandler('Patio')}><Image style={styles.imgIcon  } source={require("../../assets/images/3.png")}/>  Patio</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.buildingAminity == 'Utilities') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._buildingAminityHandler('Utilities')}><Image style={styles.imgIcon  } source={require("../../assets/images/4.png")}/>  Utilities</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>In-Building Amenities </Text>
                        </View>
                        <View style={[styles.typeBox,{justifyContent:'flex-start'}]} >

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Bathroom') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Bathroom')}><Image style={styles.imgIcon  } source={require("../../assets/images/bath.png")}/>  Bathroom</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Bathrooms') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Bathrooms')}><Image style={styles.imgIcon  } source={require("../../assets/images/bath.png")}/>  Bathrooms</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Washer') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Washer')}><Image style={styles.imgIcon  } source={require("../../assets/images/1.png")}/>  Washer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Dryer') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Dryer')}><Image style={styles.imgIcon  } source={require("../../assets/images/1.png")}/>  Dryer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Heater') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Heater')}><Image style={styles.imgIcon  } source={require("../../assets/images/2.png")}/>  Heater</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Balcony') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Balcony')}><Image style={styles.imgIcon  } source={require("../../assets/images/2.png")}/>  Balcony</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Patio') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Patio')}><Image style={styles.imgIcon  } source={require("../../assets/images/3.png")}/>  Patio</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={(this.state.suiteAminity == 'Utilities') ? styles.aminitiesBoxFilterTextActive : styles.aminitiesBoxFilterText} 
                                onPress={() => this._suiteAminityHandler('Utilities')}><Image style={styles.imgIcon  } source={require("../../assets/images/4.png")}/>  Utilities</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress= {this._crossBtnHandler}><Text style={styles.searchBtn}>Apply</Text></TouchableOpacity>
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


    export default FilterScreen;
