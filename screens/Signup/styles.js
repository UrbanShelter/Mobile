const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
 
  signupbg:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'#464b54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollpadding:{
    padding:20,
    width:'100%'
  },
  inputStyle:{
    fontSize:17,
    fontFamily:'AvenirLTStd-Book',
    color:'#ffffff'
  },
  signupHeading:{
    fontSize:17,
    fontFamily:'AvenirLTStd-Book',
    color:'#ffffff',
    textAlign:'center',
    paddingTop:20,
    paddingBottom:20,
    borderWidth:0,
  },
  itemMargin:{
    marginBottom:10
  },
  or:{
    fontSize:17,
    fontFamily:'AvenirLTStd-Book',
    color:'#ffffff',
    textAlign:'center',
    marginTop:15,
    marginBottom:25,
  },
  button:{
   fontSize:17,
   fontFamily:'AvenirLTStd-Light',
   fontWeight:'300',
   textAlign:'center',
   flex:1,
  },
  blank:{
    paddingTop:15,
    paddingBottom:15,
    height:50,
    borderRadius:5
  },
  fill:{
    paddingTop:15,
    paddingBottom:15,
    height:50,
    borderRadius:5,
    marginTop:30,
    marginBottom:30
  }
};
