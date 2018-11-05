const React = require("react-native");

const {
  StyleSheet,
  Dimensions,
  Platform
} = React;

const deviceHeight = Dimensions.get("window").height;

export default {

  signinbg: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff'
  },

  btnimg: {
    marginTop: 10,
    width: '100%',
    height: 46,
    borderRadius: 3,
  },
  headtext: {
    color: '#000',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Raleway-Black',
  },
  headescriptionText: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Lato-Bold',
    textAlign: 'left',
    lineHeight: 20,
    marginBottom: 0
  },
  footerbtn: {
    color: '#F55057',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    textAlign: 'center',
  },
  loginFooter: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 20,
    right: 20,
  },
  notRegister: {
    textAlign: 'center',
    fontFamily: 'Raleway-regular-webfont',
    fontSize: 14,
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#d3d4d8',
    borderRadius: 3,
    fontSize: 13,
    paddingLeft: 15
  },
  borderInput: {
    borderBottomWidth: 0,
    marginTop: 10,
    marginLeft: 0,
    paddingLeft: 0
  },
  arrowBtn: {
    width: 18,
    height: 16,
    marginBottom: 20
  },
  mailsend: {
    width: 69,
    height: 52,
    marginBottom: 10
  },
  recovery: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Lato-Bold',
    marginBottom: 10,
    marginTop: 10
  },
  recoveryDes: {
    color: '#98a8bd',
    fontFamily: 'Lato-regular-webfont',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
  },
  orimage: {
    width: 196,
    height: 17,
  },
  orholder: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10
  },
  btnAceptDecline: {
    width: 150,
    height: 47,
  },
  labeltext: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Lato-Bold',
    textAlign: 'left',
    lineHeight: 16
  },
  monthYear: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderInputWidth: {
    width: '30%',
    borderBottomWidth: 0,
  },
  borderInputSearch: {
    position: 'relative'
  },
  srchimg: {
    position: 'absolute',
    width: 20,
    height: 22,
    left: 10,
    top: 13
  },
  SearchStyle: {
    paddingLeft: 40
  },
  cityImg: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  city: {
    position: 'relative',
    marginBottom: 15,
    marginTop: 15
  },
  cityTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
    marginBottom: 15,    
  },
  cityHalf: {
    width: '48%'
  },
  citypostion: {
    position: 'absolute',
    bottom: 20,
    left: 20, 
  },
  cityText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Raleway-Black'
  },
  cityTextTwo: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Lato-regular-webfont'
  },
  


  
  
};