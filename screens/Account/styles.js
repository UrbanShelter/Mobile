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
    paddingLeft:20,
    paddingRight:20,
    borderWidth:0,
    marginTop:20,
    flex: 0,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingTop:17,
    paddingBottom:17,
    alignItems:'center',
  },
  boxShadow:{
    borderWidth:0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    elevation:5,
  },
  headerText:{
    lineHeight:34,
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
    marginLeft:5,
    width:22,
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
    marginBottom:5,
    marginRight:10,
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
    borderRadius:10,
  },
  propertDesOuter:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    marginBottom:15,
  },
  homePropertyName:{
    color: '#2A283B',
    fontWeight: '600',
    fontSize: 22,
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
    fontWeight:'bold',
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
    justifyContent:'flex-start',
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
    color:'#979797',
  },
  AvailablityBox:{
    width: 170,
    height: 124,
    borderWidth:1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius:5,
    padding:20, 
    marginRight:15,
    bottom:0,
    position:'absolute'
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
    fontSize: 11,
    textAlign: 'left',
    fontFamily: 'Lato-regular-webfont',
  },
  PrecautionsTextBold:{
    color: '#000',
    fontSize: 11,
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
  whiteshadow:{
    borderRadius: 10,
    width:'95%',
    padding:10,
    paddingLeft:20,
    backgroundColor:'#fff',
    top:-50,
    left:-10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    
  },


  /*----------------------------Start Code Raj------------------------------*/

  headtext: {
    color: '#000',
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily:'Raleway-regular-webfont',
    fontWeight:'300',
  },
  filterPadding:{
    padding:20,
  },
  filterName:{
    fontWeight:'600',
  },
filterItem:{
  paddingTop:10,
},
typeBox:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:10,

},
  typeCategoryButton:{
    color: '#4A4A4A',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: '#f2f2f2', 
    lineHeight:30,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:3,
    marginRight:20,
    marginLeft:20,
    marginBottom:5,
  },
  rateButtonActive:{
    color: '#4f3bf6',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: '#4f3bf6',
    lineHeight:30,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:3,
    marginRight:20,
    marginLeft:20,
    marginBottom:5,

  },
  quickfiltersBtn:{
    color: '#4A4A4A',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: '#f2f2f2', 
    lineHeight:30,
    width:100,
    textAlign: 'center',
    marginBottom:15,
    borderRadius:3
  },
  quickfiltersBtnActive:{
    color: '#fff',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: '#4f3bf6', 
    backgroundColor:'#4f3bf6',
    lineHeight:30,
    width:100,
    textAlign: 'center',
    marginBottom:15,
    borderRadius:3
  },
  roomsfiltersBtn:{
    color: '#4A4A4A',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: '#f2f2f2', 
    lineHeight:30,
    paddingLeft:10,
    paddingRight:10,
    textAlign: 'center',
    marginBottom:15,
    borderRadius:3
  },
  roomsfiltersBtnActive:{
    color: '#fff',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: '#4f3bf6', 
    backgroundColor:'#4f3bf6',
    lineHeight:30,
    paddingLeft:10,
    paddingRight:10,
    textAlign: 'center',
    marginBottom:15,
    borderRadius:3
  },
  savedBtn:{
    color: '#ffffff',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 22,
    textAlign: 'center',
    borderRadius:3,
    marginBottom:10,

  },
  savedBtnActive:{
    color: '#ff0000',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 22,
    textAlign: 'center',
    marginBottom:10,

  },
  bedCategoryButton:{
    color: '#4A4A4A',
    fontFamily: 'Lato-regular-webfont',
    fontSize: 12,
    borderWidth:1,
    borderColor: '#f2f2f2', 
    lineHeight:30,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:3,
    marginRight:5,
    marginLeft:10,
    marginBottom:5,
  },
  aminitiesBoxFilterText:{
    color: '#4A4A4A',
    fontSize: 13,
    fontFamily: 'Lato-Bold',
    marginLeft: 5,
  },
  aminitiesFilterImg:{
    width:15,
    height:15,

  },
  aminitiesBoxFilter:{
    width:'50%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quickfilters:{
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  aminitiesBoxFilterHolder:{
    padding:15,
    borderWidth:1,
    borderColor: '#f2f2f2', 
    width:20,
    height:20,  
  },
  listBox:{
    position:'relative',
  },
  bar:{
    backgroundColor:'#f2f2f2',
    width:'80%',
    height:1,
    right:0,
    top:'50%',
    position:'absolute',
  },
  priceBar:{
    backgroundColor: '#4F3BF6',
    height:35,
    width:5,
    left:-20,
    position:'absolute',
    zIndex:99,
  },
    apartmentText:{
    color:'#7F7D8A',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,    
    lineHeight: 35,
    fontWeight:'bold',
    position:'absolute',
    left:'30%',
  },
  reviewImg:{
    width:100,
    height:70,
    borderRadius:10,
    marginRight:15,

  },
  propertyContent:{
    padding:20,
  },
  recommendation: {
    backgroundColor: '#d3d4d8',
    borderRadius:10,
    padding:20,
    marginTop:20,
  },
    textAreaContainer: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
  },
  customBtnArea:{
    backgroundColor: '#7f7d8a',
    padding:20,
  },
  customBtn:{       
    color:'#fff',
    fontFamily:'Lato-Bold',
    fontWeight:'700',
    fontSize:14,
    textAlign:'center',
    backgroundColor:'#4F3BF6',
    borderRadius:4,
    lineHeight:48,
    marginTop:30,
  },
  sendBtn:{
    color:'#4f3bf6',
    fontFamily:'Lato-Bold',
    fontWeight:'700',
    fontSize:14,
    textAlign:'right',
    borderRadius:4,
    lineHeight:48,
    marginRight:30,

  },
  filterBtn:{
    color:'#4f3bf6',
    textAlign:'center',
    fontFamily:'Lato-Bold',
    fontWeight:'700',
    fontSize:14,
    paddingBottom:20,
    paddingTop:10,
  },
  blueDot:{
    position:'absolute',
    height:14,
    width:14,
    top:0,
    right:15,
    backgroundColor:'blue',
    zIndex:9999,
    borderRadius:10,
    borderWidth:2,
    borderColor: '#fff',
  },
  multipleGroupBtn:{
    marginLeft:15,
  },
sendMsg:{
  borderTopColor: '#4a4a4a',
  borderTopWidth:1,
},
chatTextRcv:{
  color:'#4a4a4a',
  fontSize:16,
},
chatTextRcvCnt:{
  padding:20,
  borderRadius:10,
  backgroundColor:'#f2f2f2',
  width:250,
},
chatTextSendCnt: {
  padding: 20,
  borderRadius: 10,
  backgroundColor: '#4f3bf6',
  width: 250,
},
smallIcon:{
  height:20,
  width:20,
  marginLeft:15,
},
  txt:{
    backgroundColor:'#fff',
    flex: 0,
    flexDirection: 'column',
    justifyContent:'center',
    paddingTop:20,
    paddingBottom:10,
    height:50,
    alignItems:'center'
  },
  labeltext:{
    fontSize:12,
    color:'#000000',
    fontWeight:'700',
    fontFamily:'Montserrat-SemiBold',
    textAlign:'left',
    lineHeight:16
  },
  monthYear: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImgCnt: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImg:{
    width:120,
    height:120,
    borderRadius:60,
    borderWidth:2,
    borderColor:'#4f3bf6'
  },
  clearBtn:{
    color:'#4f3bf6',
    fontWeight:'600',
    marginRight:10,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
    btnAceptDecline:{
    width:150,
    height:47,
  },
  userPro:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
  userProCnt: {
    padding: 20,
    borderRadius: 10,
    width: 250,
  },
};
