const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  bodyContainer: {
    backgroundColor:'rgb(242,242,242)',
    flex: 1,    
    padding: 20
  }, 
  current:{
    height:271, 
    position:'relative' ,
  },
  imagebg:{
    width:'100%',
    height:231,
  },
  imageCover:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:231,
    backgroundColor:'rgba(48,55,71,.80)',
  },
  homeHeader:{
    position:'absolute',
    top:20,
    left:0,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20,
    width:'100%',
    zIndex:9
  },
  hearderImg:{
    width:30,
    height:30,
  },
  hearderText:{
    color:'#fff',
    fontFamily:'AvenirLTStd-Book',
    fontSize:15,
    lineHeight:30
  },
  musicScrollImg:{
    width:140,
    height:140,
  },
  scrollMusic:{
    position:'absolute',
    top:90,
    left:0,
    paddingLeft:20,
    paddingRight:20,
    width:'100%',
  },
  musicScrollbg:{
    backgroundColor:'#ffffff',
    marginRight:6,
    width:142.50,
    borderWidth:1,
    borderColor:'#ffffff',
  },
  musicScrollTitle:{
    fontSize:10,
    color:'rgb(64,64,64)',
    paddingLeft:10,
    paddingRight:10,
    lineHeight:32,
  },
  listimage:{
    width:40,
    height:40,
  },
  listheading:{
    fontFamily:'AvenirLTStd-Book',
    fontSize:13,
    color:'rgb(94,94,94)',
  },
  listnote:{
    fontFamily:'AvenirLTStd-Book',
    fontSize:10,
    color:'#8e8e8e',
  },
  border:{
    borderBottomWidth:0
  },
  arrow:{
    color:'rgb(138,138,138)',
    fontSize:20,
  },
  payingHeader:{
    borderBottomWidth:1,
    borderColor:'#dddddd',
    flex: 1, 
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom:10,
    position:'relative'
  },
  payingHeaderPadding:{
    paddingLeft:20,
    paddingRight:20,
  },
  payingBorder:{
    width:20,
    height:3,
    backgroundColor:'rgb(232,74,18)',
    position:'absolute',
    bottom:-3,
    left:10
  },
  payingText:{
    fontSize:10,
    color:'#797979',
    marginRight:10,
  },
  loaction:{
    fontSize:14,
    color:'rgb(138,138,138)',
    marginRight:5
  },
  avatarPadding:{
    paddingLeft:2,
    paddingRight:3,
    paddingTop:5,
    paddingBottom:5,
  },
  requestSong:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#ffffff',
    padding:20,
    paddingTop:15,
    paddingBottom:15
  },
  plus:{
    width:25,
    height:25,
  },
  requestText:{
    fontFamily:'Gotham-book',
    color:'rgb(81,81,81)',
    fontSize:13,
    lineHeight:25
  },
  scrollMusicBottom:{    
    paddingLeft:20,
    paddingRight:20,
    width:'100%',
  },
  musicScrollbgBottom:{
    backgroundColor:'#ffffff',
    marginRight:10,
    width:148.5,
    borderWidth:3,
    borderColor:'#ffffff',
  },
   musicScrollImgBottom:{
    width:142,
    height:142,
  },
  playlist:{
    paddingTop:10,
    paddingBottom:10
  },
  musicScrollTitleBottom:{
     fontSize:15,
    color:'rgb(64,64,64)',
    paddingLeft:10,
    paddingRight:10,
    lineHeight:32,
  },
  createPlaylist:{
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:40
  },
  CreatePlaylistText:{
    color:'rgb(81,81,81)',
    fontSize:13,
    textDecorationLine: "underline",
  },
  or:{
    fontSize:10,
    color:'rgb(64,64,64)',
    marginTop:10,
    marginBottom:10
  },
  buttonfont:{
    fontFamily:'HelveticaNeue',
    fontSize:15,
    fontWeight:'400',
    paddingLeft:10,
    paddingRight:0,
  },
  playlistImg:{
    width:21,
    height:21,
  },
  connect:{
    backgroundColor:'rgb(29,185,84)',
    paddingLeft:15,
    paddingRight:15,
    width:240
  },
  connectApple:{
    backgroundColor:'#000000',
    paddingLeft:15,
    paddingRight:15,
    width:240,
    marginTop:10
  },
  InnerHeader:{
    position:'absolute',
    top:0,
    left:0,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft:20,
    paddingRight:20,
    width:'100%',
    backgroundColor:'#ffffff',
    paddingTop:30,
    height:80,
    borderBottomWidth:1,
    borderColor:'rgb(224,224,224)',
    zIndex:999,
  }, 
  hearderTextInner:{
    color:'rgb(94,94,94)',
    fontFamily:'AvenirLTStd-Book',
    fontSize:15,
    lineHeight:20,    
  },
   avatarPaddingMyMusic:{
    paddingLeft:2,
    paddingRight:3,
    paddingTop:5,
    paddingBottom:5,
    borderBottomWidth:1,
    borderColor:'#dddddd',
  },
  listheadingRed:{
    color:'rgb(254,83,57)',
    fontFamily:'Gotham-book',
    fontSize:13,
    fontWeight:'500'
  },
  createPlaylistNew:{
    marginTop:'60%',
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:15,
    paddingBottom:15
  },
   imagebgSidebar:{
    width:'100%',
    height:deviceHeight,
  },
  imageCoverSidebar:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:deviceHeight,
    backgroundColor:'rgba(48,55,71,.80)',
  },
  sidebarAbsolute:{
    position:'absolute',
    width:'100%',
    height:'100%',
    top:0,
    left:0,
  },
  sidebarHead:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:60,
    flex:0
  },
  sidebaraccount:{
    width:75,
    height:75,
    borderRadius:75/2,
    borderWidth:1,
    borderColor:'#dddddd'
  },
  sidebarTitle:{
    color:'rgb(255,255,255)',
    fontFamily:'Gotham-book',
    fontSize:15,
    textAlign: 'center',
    lineHeight:35,
    marginBottom:20
  },
  lftIcon:{
    width:25,
    height:25,
  },
  leftText:{
    color:'rgb(255,255,255)',
    fontFamily:'Gotham-book',
    fontSize:18,
    lineHeight:30,
    marginLeft:15,
    paddingRight:5,
  },
  lftlist:{
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    paddingLeft:20
  },
  setting:{
    position:'absolute',
    top:50,
    right:20,
  }

};
