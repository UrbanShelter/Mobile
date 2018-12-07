import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";


class MessageScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
			properties : []
		}		
    }
    
render() {
    return (
        <View style={styles.ListScreen}>					
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
            <View elevation={5} style={[{borderWidth:0}]}>
                <View style={[styles.relativeHeader,{paddingLeft:20,marginTop:30,marginBottom:10}]}>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")} >
                        <Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
                    </TouchableOpacity>
                    <Text style={[{fontWeight:'600'}]}>Message</Text>
                    <View style={styles.flexOneline}>
                        <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                    </View>	
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.listBody]}>
                   <View style={[styles.hrBox]}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("MessageInner")} >
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                            <View style={[{position:'relative'}]}>							
                                <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                                <View style={styles.blueDot}></View>
                            </View>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St • Downtown,</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'blue'}]}>APPLICATION SENT</Text></Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> New Message from Jeff</Text>
                            </View>							
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.hrBox]}><TouchableOpacity>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                            <View style={[{position:'relative'}]}>							
                                <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            </View>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St • Downtown,</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'red'}]}>APPLICATION REJECTED</Text></Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> No new message</Text>
                            </View>							
                        </View></TouchableOpacity>
                    </View>
                    <View style={[styles.hrBox]}><TouchableOpacity>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                            <View style={[{position:'relative'}]}>							
                                <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            </View>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St • Downtown,</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'red'}]}>APPLICATION REJECTED</Text></Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> No new message</Text>
                            </View>							
                        </View></TouchableOpacity>
                    </View>
                    <View style={[styles.hrBox]}><TouchableOpacity>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                            <View style={[{position:'relative'}]}>							
                                <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            </View>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St • Downtown,</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'red'}]}>APPLICATION REJECTED</Text></Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> No new message</Text>
                            </View>							
                        </View></TouchableOpacity>
                    </View>
                    <View style={[styles.hrBox]}><TouchableOpacity>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                            <View style={[{position:'relative'}]}>							
                                <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            </View>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St • Downtown,</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'red'}]}>APPLICATION REJECTED</Text></Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> No new message</Text>
                            </View>							
                        </View></TouchableOpacity>
                    </View>
                    <View style={[styles.hrBox]}><TouchableOpacity>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                            <View style={[{position:'relative'}]}>							
                                <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            </View>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St • Downtown,</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'red'}]}>APPLICATION REJECTED</Text></Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> No new message</Text>
                            </View>							
                        </View></TouchableOpacity>
                    </View>
                    <View style={[styles.hrBox]}><TouchableOpacity>
                        <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                            <View style={[{position:'relative'}]}>							
                                <Image style={styles.reviewImg} source={require("../../assets/images/flat-with-yellow.png")}/>
                            </View>
                            <View>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> 85 Young St • Downtown,</Text>
                                <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'red'}]}>APPLICATION REJECTED</Text></Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> No new message</Text>
                            </View>							
                        </View></TouchableOpacity>
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
export default MessageScreen;