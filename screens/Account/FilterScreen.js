import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar,KeyboardAvoidingView, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import { Text, Icon,Input } from "native-base";
import styles from "./styles";
import {db, logOut} from '../../service/auth';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button';


const multipleGroupData = [
  { value: "Apartment" },
  { value: "House" },
  { value: "Condo" },
  { value: "Townhouse" },
  { value: "Dorm" }
];
const multipleGroupData2 = [
  { value: "Studio" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5+" }
];
const multipleGroupData3 = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5+" }
];


const defaultSelectedIndex_group_insterest = [0, 1, 4];
const defaultSelectedIndex_group_insterest2 = [0, 2, 3];
const defaultSelectedIndex_group_insterest3 = [0, 1, 3];
const ios_blue = "#4F3BF6";



class FilterScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			loading : true,
			properties : []
        }		
        
        var selectedValues1 = [];
        defaultSelectedIndex_group_insterest.map(item => {
            selectedValues1.push(multipleGroupData[item].value);
        });
        var selectedValues1 = [];
        defaultSelectedIndex_group_insterest2.map(item => {
            selectedValues1.push(multipleGroupData[item].value);
        });

        this.state = {
            multipleSelectedData: [],
            multipleSelectedDataLimited: [],
            radioSelectedData: "",
            multipleSelectedData_group: selectedValues1,
            multipleSelectedData_group_limited: [],
        };

    }


    multiSliderValuesChange = (values) => {
        this.setState({
            values,
        });
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
                                <MultiSlider
                                    sliderLength={280}
                                    onValuesChange={this.multiSliderValuesChange}
                                    min={0}
                                    max={1000}
                                    step={1}
                                    onValuesChangeStart={this.disableScroll}
                                    onValuesChangeFinish={this.enableScroll}
                                    isMarkersSeparated={true}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Type </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={[styles.typeBox,styles.multipleGroupBtn]}>
                                <SelectMultipleGroupButton
                                    defaultSelectedIndexes={defaultSelectedIndex_group_insterest}
                                    containerViewStyle={{ justifyContent: "flex-start" }}
                                    highLightStyle={{
                                        borderColor: "#f2f2f2",
                                        backgroundColor: "transparent",
                                        textColor: "#4a4a4a",
                                        borderTintColor: ios_blue,
                                        backgroundTintColor: "transparent",
                                        textTintColor: ios_blue,
                                    }}
                                    maximumNumberSelected={5}
                                    onSelectedValuesChange={selectedValues =>
                                        this._groupButtonOnSelectedValuesChange(selectedValues)
                                    }
                                    group={multipleGroupData}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bedrooms </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={styles.typeBox}>
                                <View style={[styles.typeBox,styles.multipleGroupBtn]}>
                                    <SelectMultipleGroupButton
                                        defaultSelectedIndexes={defaultSelectedIndex_group_insterest2}
                                        containerViewStyle={{ justifyContent: "flex-start" }}
                                        highLightStyle={{
                                            borderColor: "#f2f2f2",
                                            backgroundColor: "transparent",
                                            textColor: "#4a4a4a",
                                            borderTintColor: ios_blue,
                                            backgroundTintColor: "transparent",
                                            textTintColor: ios_blue,
                                        }}
                                        maximumNumberSelected={5}
                                        onSelectedValuesChange={selectedValues =>
                                            this._groupButtonOnSelectedValuesChange(selectedValues)
                                        }
                                        group={multipleGroupData2}
                                    />
                                </View>
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bathrooms </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={[styles.typeBox,{marginLeft:10}]}>
                                <SelectMultipleGroupButton
                                    defaultSelectedIndexes={defaultSelectedIndex_group_insterest3}
                                    containerViewStyle={{ justifyContent: "flex-start" }}
                                    highLightStyle={{
                                        borderColor: "#f2f2f2",
                                        backgroundColor: "transparent",
                                        textColor: "#4a4a4a",
                                        borderTintColor: ios_blue,
                                        backgroundTintColor: "transparent",
                                        textTintColor: ios_blue,
                                    }}
                                    maximumNumberSelected={5}
                                    onSelectedValuesChange={selectedValues =>
                                        this._groupButtonOnSelectedValuesChange(selectedValues)
                                    }
                                    group={multipleGroupData3}
                                />
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