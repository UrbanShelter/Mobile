import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ActivityIndicator, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import styles from "./styles";


class ApplicationScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : false,
            properties : [],
		}		
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
                <View style={styles.ListScreen}>					
                    <StatusBar backgroundColor="#fff" barStyle="light-content"/>
                    <View>
                        <View style={[styles.relativeHeader,styles.boxShadow]}>
                            <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
                                <Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
                            </TouchableOpacity>
                            <Text style={[styles.headerText,{fontWeight:'600'}]}>Application</Text>
                            <View style={styles.flexOneline}>
                                <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                            </View>	
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[styles.listBody]}>
                            <View style={[styles.hrBox]}>
                                <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>									
                                    <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                                    <View>
                                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St • Downtown</Text>
                                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
                                        <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'blue'}]}>APPLICATION SENT</Text></Text>
                                        <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.withdrawBtn]}>Withdraw Application</Text></TouchableOpacity>
                                    </View>							
                                </View>
                            </View>
                            <View style={[styles.hrBox]}>
                                <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>									
                                    <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                                    <View>
                                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St • Downtown</Text>
                                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
                                        <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'blue'}]}>APPLICATION SENT</Text></Text>
                                        <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.withdrawBtn]}>Withdraw Application</Text></TouchableOpacity>
                                    </View>							
                                </View>
                            </View>
                            <View style={[styles.hrBox,{borderBottomWidth:0}]}>
                                <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>									
                                    <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                                    <View>
                                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>85 Young St • Downtown</Text>
                                        <Text style={[styles.homePropertyName, {fontSize: 16 }]}>Kitchener, ON</Text>
                                        <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'blue'}]}>APPLICATION SENT</Text></Text>
                                        <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.withdrawBtn]}>Withdraw Application</Text></TouchableOpacity>
                                    </View>							
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <PopupDialog width={300} height={200} ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15}}>
                            <Text style={styles.recovery}>WITHDRAW APPLICATION</Text>
                            <Text style={styles.recoveryDes}>
                                Are you sure you want to withdraw this application?
                            </Text>
                        </View>
                        <View style={[{flexDirection:'row',flex:1,}]}>
                            <TouchableOpacity>
                                    <Text style={[{color:'#fff',textAlign:'center',fontSize:16,lineHeight:35,backgroundColor:'#4f3bf6'}]}>DECLINE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                    <Text style={[{color:'#fff',textAlign:'center',fontSize:16,lineHeight:35,backgroundColor:'#4f3bf6'}]}>ACCEPT</Text>
                            </TouchableOpacity>
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
export default ApplicationScreen;
