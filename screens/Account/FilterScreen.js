import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar,KeyboardAvoidingView, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import { Text, Icon,Input } from "native-base";
import styles from "./styles";
import {db, logOut} from '../../service/auth';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button';


const multipleGroupData = [
  { value: "running" },
  { value: "riding" },
  { value: "reading" },
  { value: "coding" },
  { value: "Niuer" }
];
const defaultSelectedIndex_group_insterest = [0, 1, 4];


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
                            <View style={styles.typeBox}>
                                <SelectMultipleGroupButton
                                    defaultSelectedIndexes={defaultSelectedIndex_group_insterest}
                                    containerViewStyle={{ justifyContent: "flex-start" }}
                                    highLightStyle={{
                                        borderColor: "#f2f2f2",
                                        backgroundColor: "transparent",
                                        textColor: "#4a4a4a",
                                        borderTintColor: '#4F3BF6',
                                        backgroundTintColor: "#4F3BF6",
                                        textTintColor: '#ffffff',
                                    }}
                                    maximumNumberSelected={5}
                                    onSelectedValuesChange={selectedValues =>
                                        this._groupButtonOnSelectedValuesChange(selectedValues)
                                    }
                                    group={multipleGroupData}
                                />
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={styles.typeBox}>
                                <TouchableOpacity><Text style={styles.typeCategoryButton}> Apartment</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.typeCategoryButton}> House</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.typeCategoryButton}> Condo</Text></TouchableOpacity> 
                                <TouchableOpacity><Text style={styles.typeCategoryButton}> Townhouse</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.typeCategoryButton}> Dorm</Text></TouchableOpacity> 
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bedrooms </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={styles.typeBox}>
                                <Text style={{marginLeft:20,}}>Studio</Text>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 1</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 2</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 3</Text></TouchableOpacity> 
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 4</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 5+</Text></TouchableOpacity> 
						    </View>
                        </View>
                    </View>
                    <View style={styles.filterItem}>
                        <View style={styles.filterPadding}>												
                            <Text style={[styles.filterName,{marginBottom:5}]}>Bathrooms </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={[styles.typeBox,{marginLeft:10}]}>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 1</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 2</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 3</Text></TouchableOpacity> 
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 4</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.bedCategoryButton}> 5+</Text></TouchableOpacity> 
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