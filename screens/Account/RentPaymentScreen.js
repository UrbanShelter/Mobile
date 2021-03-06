import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ActivityIndicator, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import PopupDialog,  { DialogTitle } from 'react-native-popup-dialog';
import styles from "./styles";


class RentPaymentScreen extends Component {
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
        const {goBack} = this.props.navigation
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
                            <TouchableOpacity onPress={() => goBack()}>
                                <Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
                            </TouchableOpacity>
                            <Text style={[styles.headerText,{fontWeight:'600'}]}>Rent Payment History</Text>
                            <View style={styles.flexOneline}>
                                <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                            </View>	
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[styles.listBody]}>
                            <View style={[styles.hrBox,{flex:1,flexDirection:'row',justifyContent:'space-between'}]}>
                                <View>
                                    <Text style={[{fontSize:20,}]}>Rent Paid</Text>
                                    <Text style={[styles.PrecautionsText,{fontSize:15,color:'#a4a4a4'}]}>Paid on 1st September,2018</Text>
                                </View>
                                <View>
                                    <Text style={[{fontSize:20,fontWeight:'900'}]}>$ 3,700.00</Text>
                                    <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.redText,{fontSize:15}]}><Icon style={[{fontSize:18,color:'#4f3bf6'}]} name="open"/>  Export Reciept</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.hrBox,{flex:1,flexDirection:'row',justifyContent:'space-between'}]}>
                                <View>
                                    <Text style={[{fontSize:20,}]}>Rent Paid</Text>
                                    <Text style={[styles.PrecautionsText,{fontSize:15,color:'#a4a4a4'}]}>Paid on 1st September,2018</Text>
                                </View>
                                <View>
                                    <Text style={[{fontSize:20,fontWeight:'900'}]}>$ 3,700.00</Text>
                                    <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.redText,{fontSize:15}]}><Icon style={[{fontSize:18,color:'#4f3bf6'}]} name="open"/>  Export Reciept</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.hrBox,{flex:1,flexDirection:'row',justifyContent:'space-between'}]}>
                                <View>
                                    <Text style={[{fontSize:20,}]}>Rent Paid</Text>
                                    <Text style={[styles.PrecautionsText,{fontSize:15,color:'#a4a4a4'}]}>Paid on 1st September,2018</Text>
                                </View>
                                <View>
                                    <Text style={[{fontSize:20,fontWeight:'900'}]}>$ 3,700.00</Text>
                                    <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.redText,{fontSize:15}]}><Icon style={[{fontSize:18,color:'#4f3bf6'}]} name="open"/>  Export Reciept</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.hrBox,{flex:1,flexDirection:'row',justifyContent:'space-between'}]}>
                                <View>
                                    <Text style={[{fontSize:20,}]}>Rent Paid</Text>
                                    <Text style={[styles.PrecautionsText,{fontSize:15,color:'#a4a4a4'}]}>Paid on 1st September,2018</Text>
                                </View>
                                <View>
                                    <Text style={[{fontSize:20,fontWeight:'900'}]}>$ 3,700.00</Text>
                                    <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.redText,{fontSize:15}]}><Icon style={[{fontSize:18,color:'#4f3bf6'}]} name="open"/>  Export Reciept</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.hrBox,{flex:1,flexDirection:'row',justifyContent:'space-between'}]}>
                                <View>
                                    <Text style={[{fontSize:20,}]}>Rent Paid</Text>
                                    <Text style={[styles.PrecautionsText,{fontSize:15,color:'#a4a4a4'}]}>Paid on 1st September,2018</Text>
                                </View>
                                <View>
                                    <Text style={[{fontSize:20,fontWeight:'900'}]}>$ 3,700.00</Text>
                                    <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.redText,{fontSize:15}]}><Icon style={[{fontSize:18,color:'#4f3bf6'}]} name="open"/>  Export Reciept</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.hrBox,{flex:1,flexDirection:'row',justifyContent:'space-between'}]}>
                                <View>
                                    <Text style={[{fontSize:20,}]}>Rent Paid</Text>
                                    <Text style={[styles.PrecautionsText,{fontSize:15,color:'#a4a4a4'}]}>Paid on 1st September,2018</Text>
                                </View>
                                <View>
                                    <Text style={[{fontSize:20,fontWeight:'900'}]}>$ 3,700.00</Text>
                                    <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.redText,{fontSize:15}]}><Icon style={[{fontSize:18,color:'#4f3bf6'}]} name="open"/>  Export Reciept</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.hrBox,{flex:1,flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0}]}>
                                <View>
                                    
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {this.popupDialog.show()}}><Text style={[styles.redText,{fontSize:15}]}><Icon style={[{fontSize:18,color:'#4f3bf6'}]} name="open"/>  Export All Reciept</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <PopupDialog width={300} height={200} ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15}}>
                            <Icon style={[{fontSize:0,color:'#4f3bf6'}]} name="mail"/> 
                            <Text style={styles.recovery}>RECEIPT SENT</Text>
                            <Text style={styles.recoveryDes}>
                                We have sent you rent receipt to expample@test.com. If you did not receive the email please request help via profile. 
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => goBack()}>
                            <View style={[styles.payrentBtn]}>
                                <Text style={[{color:'#fff',textAlign:'center',fontSize:16,lineHeight:35}]}>RETURN</Text>
                            </View>
                        </TouchableOpacity>
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
export default RentPaymentScreen;
