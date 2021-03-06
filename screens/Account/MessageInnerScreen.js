import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ActivityIndicator, StyleSheet} from "react-native";
import {Text, Icon } from "native-base";
import styles from "./styles";
import { getData } from '../../service/service';
import {db} from '../../service/auth';


class MessageInnerScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading : true,
            msgId : this.props.navigation.getParam('msgId'),
            propertyName : this.props.navigation.getParam('propertyName'),
            roommates: []
		}		
    }
    
    async componentWillMount () {
        var that = this;
        db.collection('chats').doc(this.state.msgId).collection('roommates').get().then( function(element){
            element.forEach( function(singleElement) {
                that.setState({roommates:[...that.state.roommates, singleElement.data()]});
                console.log(singleElement.data());
                console.log(that.state.roommates);
                // db.collection('users').doc(singleElement.data().userId).get().then( function(userelement) {
                    
                    
                // }.bind(that))
            })
            that.setState({loading:false});
        });

        
        
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
                <View style={styles.boxShadow}>
                    <View style={[styles.relativeHeader]}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image style={styles.headerImg} source={require("../../assets/images/arrow.png")}/>
                        </TouchableOpacity>
                        <Text style={[{fontWeight:'600'}]}>Message</Text>
                        <View style={styles.flexOneline}>
                            <Image style={[styles.headerImg,{marginLeft:10}]} source={require("../../assets/images/share-black.png")}/>
                        </View>	
                    </View>
                    <View style={[styles.reviewsBox,{position:'relative',paddingTop:10}]}>		
                        <View style={[{position:'relative'}]}>							
                            <Image style={[styles.reviewImg,{marginLeft:20}]} source={require("../../assets/images/flat-with-yellow.png")}/>
                            <View style={styles.blueDot}></View>
                        </View>
                        <View>
                            <Text style={[styles.homePropertyName, {fontSize: 16 }]}> {this.state.propertyName},</Text>
                            <Text style={[styles.homePropertyName, {fontSize: 16 }]}> Kitchener, ON</Text>
                            <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> STATUS: <Text style={[styles.PrecautionsText,{color:'blue'}]}>APPLICATION SENT</Text></Text>
                            <Text style={[styles.PrecautionsText,{color:'#7F7D8A'}]}> New Message from Jeff</Text>
                        </View>							
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.listBody]}>
                        <Text style={[styles.headtext,{paddingLeft:20,marginTop:20,marginBottom:20}]}>Landlord</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Chat")}>
                        <View style={[styles.reviewsBox,styles.hrBox,{paddingTop:20}]}>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                            <View style={[{position:'relative'}]}>
                                <Text style={styles.reviewsBoxHeading}>Timmothy Hashfields</Text>
                                <Text style={[styles.PrecautionsText,{fontSize:16,color:'#7f7d8a'}]}>This is a sample read message from the...</Text>
                                <Text style={[styles.PrecautionsText,{position:'absolute',right:10,fontSize:15,fontWeight:'600',color:'#7f7d8a'}]}>Aug 10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.reviewsBox,styles.hrBox,{paddingTop:20}]}>
                            <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={require("../../assets/images/profile.jpg")}/>
                            <View style={[{position:'relative'}]}>
                                <Text style={styles.reviewsBoxHeading}>Timmothy Hashfields</Text>
                                <Text style={[styles.PrecautionsText,{fontSize:16,color:'#7f7d8a'}]}>This is a sample read message from the...</Text>
                                <Text style={[styles.PrecautionsText,{position:'absolute',right:10,fontSize:15,fontWeight:'600',color:'#7f7d8a'}]}>Aug 10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>   

                    <View style={[styles.listBody]}>
                        <Text style={[styles.headtext,{paddingLeft:20,marginTop:20,marginBottom:20}]}>Roommates</Text>
                    </View>
                    { 
                        (this.state.roommates.length == 0) ? null
                        : 
                        this.state.roommates.map((roommateslist , key) => {
                            return  (
                                <TouchableOpacity key={key}  onPress={()=>this.props.navigation.navigate("Chat",{chatmsgId: roommateslist.chatmsgId, userData: roommateslist })}>
                                    <View style={[styles.reviewsBox,styles.hrBox,{paddingTop:20}]}>
                                        <Image style={[styles.reviewsBoxImg,{marginLeft:20}]} source={{uri:roommateslist.image}}/>
                                        <View style={[{position:'relative'}]}>
                                            <Text style={styles.reviewsBoxHeading}>{roommateslist.oppositeFirstName} {roommateslist.oppositeLastName}</Text>
                                            <Text style={[styles.PrecautionsText,{fontSize:16,color:'#7f7d8a'}]}>This is a sample read message from the...</Text>
                                            <Text style={[styles.PrecautionsText,{position:'absolute',right:10,fontSize:15,fontWeight:'600',color:'#7f7d8a'}]}>Aug 10</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
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
export default MessageInnerScreen;
