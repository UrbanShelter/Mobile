import React, { Component } from "react";
import { Image, View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import { Text } from "native-base";
import styles from "./styles";


class FilterScreen extends React.Component {
	static navigationOptions = {
        header: null,
        tabBarVisible : false
	};
	constructor(props) {
		super(props);
		this.state = {
			loading : true,
            properties : [],
            activeState: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        }		

        this.buttonPressed = this.buttonPressed.bind(this);
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

	render() {
        return(
			<View style={styles.HomeScreen}>			
				<View style={[styles.relativeHeader,{marginBottom:10}]}>
                    <View style={styles.signinbg}>					
                        <Text style={styles.headtext}>Filter</Text>
                    </View>
                    <View style={styles.flexOneline}>							
                        <TouchableOpacity><Image style={[styles.headerImg,{marginTop:15}]} source={require("../../assets/images/cross.png")}/></TouchableOpacity>
                    </View>	
				</View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Price </Text>
                        </View>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row',paddingLeft:20}}>

                            </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Type </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={styles.typeBox}>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[0] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(0)}> Apartment</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[1] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(1)}> House</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[2] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(2)}> Condo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[3] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(3)}> Townhouse</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[4] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(4)}> Dorm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[5] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(5)}> Studio</Text>
                                </TouchableOpacity>
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bedrooms </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={styles.typeBox}>

                                
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[6] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(6)}> 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[7] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(7)}> 2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[8] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(8)}> 3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[9] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(9)}> 4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[10] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(10)}> 5+</Text>
                                </TouchableOpacity>

                                
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bathrooms </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={[styles.typeBox,{marginLeft:10}]}>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[11] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(11)}> 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[12] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(12)}> 2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[13] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(13)}> 3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[14] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(14)}> 4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={this.state.activeState[15] ? styles.typeCategoryButton : styles.rateButtonActive} 
                                    onPress={() => this.buttonPressed(15)}> 5+</Text>
                                </TouchableOpacity>

                              
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>In-Unit Amenities </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/bath.png")}/></View>
                                <TouchableOpacity><Text style={styles.aminitiesBoxFilterText}>Bathrooms</Text></TouchableOpacity>
                            </View>
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/bath.png")}/></View>
                                <TouchableOpacity><Text style={styles.aminitiesBoxFilterText}>Bathrooms</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/1.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Washer/Dryer</Text>
                            </View>
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/1.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Washer/Dryer</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/2.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Heater</Text>
                            </View>
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/2.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Heater</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/3.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Patio/Balcony</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/4.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Utilities</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>In-Building Amenities </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/bath.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Bathrooms</Text>
                            </View>
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/bath.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Bathrooms</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/1.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Washer/Dryer</Text>
                            </View>
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/1.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Washer/Dryer</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/2.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Heater</Text>
                            </View>
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/2.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Heater</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/3.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Patio/Balcony</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingBottom:20}} >
                            <View style={[styles.aminitiesBoxFilter,{marginLeft:20}]}>
                                <View style={style.aminitiesBoxFilterHolder}><Image style={styles.aminitiesFilterImg} source={require("../../assets/images/4.png")}/></View>
                                <Text style={styles.aminitiesBoxFilterText}>Utilities</Text>
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


    export default FilterScreen;
