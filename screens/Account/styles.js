const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  HomeScreen:{
    flex: 1,
    padding: 20,
    paddingTop: 25,
    backgroundColor: '#fff'
  },
  ExploreScreen:{
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff'
  },
  ListScreen:{
    flex: 1,
    backgroundColor: '#fff'
  },
  relativeHeader:{
    backgroundColor:'#fff',
    paddingLeft:0,
    paddingRight:0,
    borderWidth:0,
    marginTop:0,
    flex: 0,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingBottom:10,
    height:50,
    alignItems:'center'
  },
  absoluteHeader:{
    position:'absolute',
    paddingLeft:20,
    paddingRight:20,
    zIndex:9999,
    top:20,
    flex: 0,
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
    borderWidth:0,
    height:50,
    alignItems:'center'

  },
  flexOneline:{
    flex:0,
    flexDirection: 'row',
  },
  headerImg:{
    width:23,
    height:22,
  },
  headtext1:{
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 10,
  },
  homeCategoryBox:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  homeCategoryButton:{
    color: '#4A4A4A',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: 'rgba(189,189,189,.5)', 
    lineHeight:30,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:3,
    marginRight:5,
    marginBottom:5
  },
  homeCategorylebel:{
    color: '#4A4A4A',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 10,
    borderWidth:1,
    borderColor: 'rgba(189,189,189,.5)', 
    lineHeight:18,
    paddingLeft:5,
    paddingRight:5,
    borderRadius:10,
    marginRight:5,
    marginBottom:5
  },
  homeImgCat:{
    position: 'relative',
    marginTop:15
  },
  homeImg:{
    width:'100%',
    height:200,
    borderRadius:5
  },
  propertDesOuter:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    marginBottom:15,
  },
  homePropertyName:{
    color: '#2A283B',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',   
  },
  homePropertyDes:{
    color: '#2A283B',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',   
  },
  priceName:{
    color:'#7F7D8A',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,    
    lineHeight: 35,
  },
  permonth:{
    fontSize: 12,
    fontFamily: 'Lato-regular-webfont',
    color:'#2A283B',
    marginTop:10,
    borderTopWidth:1
  },  
  priceButton:{
    height:38,
    backgroundColor:'#4F3BF6',
    borderRadius:5,
    flex: 0,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:5,
    paddingRight:5
  },
  ratings:{
    flex: 0,
    flexDirection: 'row',
    alignItems:'center',
    width:'auto'
  },
  countText:{
    color: '#585858',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    marginLeft:3
  },
  homeFacilityImg:{
    width:15,
    height:15
  },
  homeFacilityOuter:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    marginTop:10,
  },
  homeFacilityFlex:{
    flex: 0,
    flexDirection: 'row',
    alignItems:'center',
    width:'auto'
  },
  imgeOver:{
    position:'absolute',
    zIndex:9,
    top:15,
    right:15,
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
  },
  privateRoom:{
    backgroundColor: 'rgba(0,0,0,.5)', 
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginRight:5,
    marginBottom:5,    
  },
  privateRoomText:{
    color: '#fff',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 10,
    lineHeight:22, 
  },
  heartImg:{
    width:25,
    height:22,
    marginLeft:10
  },
  listingHeader:{
    width:'100%',
    height:250,
  },
  tourOuter:{
    bottom:20,
    right:20,
    zIndex:999,
    position:'absolute'
  },
  tour:{    
    width:181,
    height:40,
  },
  listBody:{
    paddingLeft:20,
    paddingRight:20
  },
  map:{
    width:'100%',
    height:200
  },
  mapExplore:{
    width:206,
    height:37,
    position:'absolute',
    bottom:20,
    left:10
  },
  hrBox:{
    paddingTop:15,
    paddingBottom:15,
    borderBottomWidth: 1,
    borderBottomColor:'rgba(0, 0, 0, 0.2)'
  },
  listText:{
    fontSize: 14,
    fontFamily: 'Lato-regular-webfont',
    color:'#484848',
  },
  AvailablityBox:{
    width: 170,
    height: 124,
    borderWidth:1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius:5,
    padding:20, 
    marginRight:15  
  },
  AvailablityBoxActive:{
    borderColor: 'rgba(0, 0, 0, 0.5)'
  },
  hrBoxHeading:{
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  },
  AvailablityImgHolder:{
    flex:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  AvailablityImg:{
    width:25,
    height:25,
  },
  AvailablityImgText:{
    fontSize: 12,
    fontFamily: 'Lato-regular-webfont',
    color:'#4A4A4A',
    marginLeft:5,
  },
  AvailablitySubHead:{
    color: '#4A4A4A',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
    marginBottom: 5,
  },
  aminitiesBox:{
    backgroundColor:'#F4F4F4',
    borderRadius:5,
    padding:20,
    flex:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    flexWrap:'wrap'
  },
  aminitiesBoxImg:{
    width:15,
    height:15
  },
  aminitiesText:{
    color: '#4A4A4A',
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
    marginLeft: 5,
  },
  aminitiesBoxHoolder:{
    flex:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'50%',
    marginTop:5,
    marginBottom:5,
  },
  PrecautionsImg:{
    width:20,
    height:20,
    marginRight:10
  },
  PrecautionsText:{
    color: '#000',
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Lato-regular-webfont',
  },
  PrecautionsTextBold:{
    color: '#000',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  },
  reviewsBox:{
    flex:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:15,
  },
  reviewsBoxImg:{
    width:50,
    height:50,
    borderRadius: 50/2,
    marginRight:15
  },
  reviewRating:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
  redText:{
    fontSize: 14,
    fontFamily: 'Lato-regular-webfont',
    color:'#4F3BF6',
  },
  media:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    borderBottomWidth:1,
    borderBottomColor: '#e3e3e3',
    borderTopWidth:1,
    borderTopColor: '#e3e3e3'
  },
  mediaImage:{
    width:50,
    height:50,
    borderRadius:3,
  },
  mediaPropertyName:{
    color: '#000',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Raleway-Black',
  },
  mediaPropertyDes:{
    color: '#000',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 10,
  },
  mediaprice:{
    color:'#fff',
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    textAlign:'center',
    lineHeight: 35,   
  },
  permonth:{
    fontSize: 8,
    fontFamily: 'Lato-Bold',
    color:'#fff',
  },
  mediapriceButton:{
    height:38,
    backgroundColor:'#4F3BF6',
    borderRadius:5,
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:10,
  },
  explorePadding:{
    padding:20
  },
  tabList:{
    padding:20,
    paddingTop:10,
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#e3e3e3',
    flex:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor:'#F7F7F7'
  },
  tabImg:{
    width:16,
    height:16,
    marginRight:15,
  },
  TabHead:{
    fontSize:16, fontFamily: 'Lato-Bold', color: '#000'
  },
  TabDes:{
    color: '#000',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 14,
    opacity:.8,
    marginBottom:5
  },
  tabListActive:{
    borderLeftWidth:3,
    borderLeftColor:'#4F3BF6',
    backgroundColor:'#fff'
  },
  tourPadding:{
    padding:20,
    paddingTop:0,
    paddingBottom:15
  },
  tourImg:{
    width:'100%',
    height:200,
    marginTop:15,
    borderRadius:5,
  },
  availablity:{
    padding:20,
    flex:0,
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:2,
    borderTopColor:'#F7F7F7',
    alignItems:'center',
    paddingTop:15,
    paddingBottom:15
  },
  availablityMonth:{
    fontSize:18, 
    fontFamily: 'Lato-Bold',
  },
  availablityPrefix:{
    fontSize:12, 
    fontFamily: 'Lato-Bold',
  },
  flexBox:{
    flex:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },
  borderInputWidth:{
    width:'30%',
    borderBottomWidth:0,
  },
  borderInputSearch:{
    position:'relative'
  },
  inputStyle:{
    borderWidth:1,
    borderColor:'#d3d4d8',
    borderRadius:3,
    fontSize:13,
    paddingLeft:15
  },
  srchimg:{
    position:'absolute',
    width:20,
    height:22,
    left:10,
    top:13
  },
  SearchStyle:{
    paddingLeft:40
  },
  cityImg:{
    width:'100%',
    height:200,
    borderRadius:5,
  },
  city:{
    position:'relative',
    marginTop:15
  },
  cityTwo:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:200,
    
  },
  cityHalf:{
    width:'48%'
  },
  citypostion:{
    position:'absolute',
    bottom:20,
    left:20,
  },
  cityText:{
    color:'#fff',
    fontSize: 22,
    fontWeight: '900',
  },
  cityTextTwo:{
    color:'#fff',
    fontSize: 14,
    fontWeight: '300',
  },
  signinbg:{
    flex: 1,
    padding:20,
    paddingTop:50,
    backgroundColor:'#fff'
  },
  headtext:{  
    color:'#000',
    fontSize:24,
    marginBottom:10,
    textAlign:'left',
    fontFamily:'Raleway-regular-webfont',
    fontWeight:'300'
  },
  borderInput:{
    borderBottomWidth:0,
    marginTop:10,
    marginLeft:0,
    paddingLeft:0    
  },
  searchbar:{    
    flex:1,
    flexDirection:'row',
    padding:5,    
    backgroundColor:'#F5F5F5',
    alignItems:'center', 
    borderRadius:4,
    maxWidth:'95%'   
  },
  // whiteshadow:{
  //   position:'absolute',
  //   left:0,
  //   top:180,
  //   height:200,
  //   right:0,
  //   shadowColor: 'rgba(0, 0, 0, 0.15)',    
  //   borderRradius: 15,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 1,
  //   shadowRadius: 22, 
  //   elevation: 5, 
  //   backgroundColor:'#fff',
  //   width:'90%'
  // }

};
