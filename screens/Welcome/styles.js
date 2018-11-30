const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {

  icontop:{
     marginBottom:20,
     width:120,
     height:120
  },
  icontop2:{
     marginBottom:20,
     width:120,
     height:120
  },
  icontop3:{
     marginBottom:20,
     width:136,
     height:120
  },
  icontop4:{
     marginBottom:20,
     width:154,
     height:120
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
     fontFamily:'Montserrat-Bold',
      fontWeight:'bold'
  },
  paragraph:{
     fontSize:14,
     color:'#9B9B9B',
     fontWeight:'300',
    fontFamily:'Lato-regular-webfont',
     textAlign:'center',
     lineHeight:20
     
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
      width:320,
      height:46 ,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 2, 
      elevation: 5, 
  },
  homelogo:{
    width:117,
    height:146
  },
  iconlogo:{      
      width:150,
      height:52
  },
  logoname:{
    fontSize:26,
    color:'#000',
    fontFamily:'MontserratAlternates'
  },
  logwrap:{
      position:'absolute',
      top:44,
      right:20,
      zIndex:9
  },
  loginbtn:{       
      backgroundColor:'transparent', 
      color:'#4F3BF6',
      fontFamily:'Montserrat-SemiBold',
      fontWeight:'700',
      fontSize:14     
  },
  bottomwrp:{
      position:'absolute', 
      bottom:10,
      right:0,
      left:0,              
       alignItems: 'center',
       alignContent:'space-between',
       width:'100%',
       flex:1,
       flexDirection: 'row',
       zIndex:9
  },
  skipbtn:{
      width:'50%'  
  },
  nextbtn:{
       width:'50%'  
  },
  skipbtntxt:{
      textAlign:'center',
      color:'#4F3BF6',
      fontSize:14,
      opacity:0.5,
       lineHeight:30,
       fontFamily:'Montserrat-SemiBold'
  },
  nextbtntxt:{
      textAlign:'center',
      color:'#4F3BF6',
      fontSize:14,
       lineHeight:30,
        borderLeftWidth:1,
      borderColor:'#e6ecf0',
      fontFamily:'Montserrat-SemiBold'
  },
  WebViewStyle:
    {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: (Platform.OS) === 'ios' ? 20 : 0
    }


};
