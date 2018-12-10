import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import {Text} from "native-base";
import styles from "./styles";
import {db} from '../../service/auth';



class ChattingScreen extends Component {
	static navigationOptions = {
        header : null,
        tabBarVisible : false
    };
    
	constructor(props) {
		super(props)
		this.state = {
            chatmsgId : this.props.navigation.getParam('chatmsgId'),
            loading : true,
            msgs : []
		}		
    }

    componentDidMount () {
        db.collection("chatmsg").doc(this.state.chatmsgId)
        .onSnapshot(function(doc) {
            this.setState({msgs:[...this.state.msgs, doc.data()]});
            console.log("Current data: ", doc.data());
        });
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
                    <View style={styles.txt}>
                        <Text style={[{fontWeight:'600'}]}>Jeffery Petrov</Text>
                        <Text style={[styles.listText]}>Landlord • 85 Younge St S</Text>
                    </View>
                    <View style={styles.flexOneline}>
                        <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                    </View>	
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[{position:'relative',height:'100%'}]}>
                    <View style={[]}>
                        <View style={[styles.reviewsBox,{paddingTop:20}]}>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                            <View style={[styles.chatTextRcvCnt,]}>
                                <Text style={[styles.chatTextRcv]}>I tried to look for the keys but I couldn't find it anywhere.</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> Jeffery • Landlord • Aug 12 </Text>
                            </View>
                            
                        </View>
                        <View style={[styles.reviewsBox,{paddingTop:20}]}>
                            <View style={[styles.chatTextSendCnt,{marginLeft:'5%'}]}>
                                <Text style={[styles.chatTextRcv,{color:'#fff'}]}>I tried to look for the keys but I couldn't find it anywhere.</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> Jeffery • Landlord • Aug 12 </Text>
                            </View>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                        </View>
                        <View style={[styles.reviewsBox,{paddingTop:20}]}>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                            <View style={[styles.chatTextRcvCnt,]}>
                                <Text style={[styles.chatTextRcv]}>I tried to look for the keys but I couldn't find it anywhere.</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> Jeffery • Landlord • Aug 12 </Text>
                            </View>
                            
                        </View>
                        <View style={[styles.reviewsBox,{paddingTop:20}]}>
                            <View style={[styles.chatTextSendCnt,{marginLeft:'5%'}]}>
                                <Text style={[styles.chatTextRcv,{color:'#fff'}]}>I tried to look for the keys but I couldn't find it anywhere.</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> Jeffery • Landlord • Aug 12 </Text>
                            </View>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                        </View>
                        <View style={[styles.reviewsBox,{paddingTop:20}]}>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                            <View style={[styles.chatTextRcvCnt,]}>
                                <Text style={[styles.chatTextRcv]}>I tried to look for the keys but I couldn't find it anywhere.</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> Jeffery • Landlord • Aug 12 </Text>
                            </View>
                            
                        </View>
                        <View style={[styles.reviewsBox,{paddingTop:20}]}>
                            <View style={[styles.chatTextSendCnt,{marginLeft:'5%'}]}>
                                <Text style={[styles.chatTextRcv,{color:'#fff'}]}>I tried to look for the keys but I couldn't find it anywhere.</Text>
                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> Jeffery • Landlord • Aug 12 </Text>
                            </View>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.sendMsg}>
                <View  style={[styles.textAreaContainer,{paddingTop:20}]}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Message"
                        placeholderTextColor="grey"
                        multiline={true}
                        />
                </View>
                <View>
                    <View style={[styles.homeFacilityFlex,{position:"relative"}]}>
						<Image style={styles.smallIcon} source={require("../../assets/images/camera.png")}/>
                        <Image style={styles.smallIcon} source={require("../../assets/images/image.png")}/>
                        <TouchableOpacity><Text style={[styles.sendBtn,{marginLeft:'60%'}]} uppercase={true}> send </Text></TouchableOpacity>
                    </View>
                    
                </View>
            </View>
            </KeyboardAvoidingView>
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
export default ChattingScreen;
