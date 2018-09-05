const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {

  icontop:{
     marginBottom:20
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'    
     
  },
  inslide:{
      width:'100%',
      height:'auto',      
      alignItems:'center',
      paddingLeft:20, 
      paddingRight:20
           
  },
  headtext:{  
     color:'#000',
     fontSize:20,
     marginBottom:10,
     textAlign:'center',
      fontWeight:'300'
  },
  paragraph:{
     fontSize:14,
     color:'#9B9B9B',
     fontWeight:'300',
     textAlign:'center'
     
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide5:{ 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  btnimg:{
      marginTop:30,
      width:'95%'
  },
  logwrap:{
      position:'absolute',
      top:50,
      right:20 
  },
  loginbtn:{       
      backgroundColor:'transparent', 
      color:'#F55057',
      fontSize:14     
  },
  bottomwrp:{
      position:'absolute', 
      bottom:10,
      right:0,
      left:0,
      paddingLeft:15,
      paddingRight:15,
      paddingTop:10,
      paddingBottom:10,         
       alignItems: 'center',
       alignContent:'space-between',
       width:'100%',
       flex:1,
       flexDirection: 'row',
       height:40
  },
  skipbtn:{
      width:'50%',
      textAlign:'center',
      color:'#F55057',
      fontSize:14,
      opacity:0.2 
      
  },
  nextbtn:{
       width:'50%',
      textAlign:'center',
      color:'#F55057',
      fontSize:14
  },  
  WebViewStyle:
    {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: (Platform.OS) === 'ios' ? 20 : 0
    }


};
