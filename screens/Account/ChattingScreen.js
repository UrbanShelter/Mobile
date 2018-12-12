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
            oppositerUserData : this.props.navigation.getParam('userData'),
            loading : true,
            msgs : [],
            uId : null,
            inputbox : ''
		}		
    }

    async componentDidMount () {
        var that = this;
        let userId = await Expo.SecureStore.getItemAsync('uId');
        this.setState({uId : userId});
        db.collection("chatmsg").doc(this.state.chatmsgId).collection('msgs')
        .onSnapshot(function(snapshot) {
            snapshot.docChanges().forEach(function(change) {
                that.setState({msgs:[...that.state.msgs, change.doc.data()]});
            });
        });
    }


    sendBtnHandler = async () => {
        db.collection("chatmsg").doc(this.state.chatmsgId).collection('msgs').add({
            msg: this.state.inputbox,
            senderId:  this.state.uId,
            receiverId:  '',
        });
        this.setState({inputbox : ''});


    }

    
render() {
    return (
        <View style={styles.ListScreen}>					
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
            <View elevation={5} style={[{borderWidth:0,marginLeft:-5,marginRight:-5}]}>
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
                        {
                            (this.state.msgs.length == 0) ? null :
                            this.state.msgs.map ((messages, key) => {
                                console.log(messages);
                                if(messages.senderId == this.state.uId) {
                                    return (
                                        <View key={key} style={[styles.reviewsBox,{paddingTop:20}]}>
                                            <View style={[styles.chatTextSendCnt,{marginLeft:'5%'}]}>
                                                <Text style={[styles.chatTextRcv,{color:'#fff'}]}>{messages.msg}</Text>
                                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> Jeffery • Landlord • Aug 12 </Text>
                                            </View>
                                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <View key={key} style={[styles.reviewsBox,{paddingTop:20}]}>
                                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={{uri:this.state.oppositerUserData.image}}/>
                                            <View style={[styles.chatTextRcvCnt,]}>
                                                <Text style={[styles.chatTextRcv]}>{messages.msg}</Text>
                                                <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> {this.state.oppositerUserData.firstName} • Landlord • Aug 12 </Text>
                                            </View>    
                                        </View>
                                    )
                                }          
                            })
                        }
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
                        onChangeText={(value) => this.setState({ inputbox : value })}
                        value = {this.state.inputbox}
                        />
                </View>
                <View>
                    <View style={[styles.homeFacilityFlex,{position:"relative"}]}>
						<Image style={styles.smallIcon} source={require("../../assets/images/camera.png")}/>
                        <Image style={styles.smallIcon} source={require("../../assets/images/image.png")}/>
                        <TouchableOpacity onPress = {this.sendBtnHandler} ><Text style={[styles.sendBtn,{marginLeft:'60%'}]} uppercase={true}> send </Text></TouchableOpacity>
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
