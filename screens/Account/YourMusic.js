import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, WebView ,AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input, Icon, List, ListItem, Thumbnail, Drawer } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from "./styles";
import Dialog from "react-native-dialog";
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import {
	currentUserPlaylist,
	getUserToken,
	refreshToken
} from "../../js/api/commonApi";


class SideBar extends Component {
	render() {
		return (
			<Content style={{ backgroundColor: '#FFFFFF' }}>
				<Image blurRadius={2} style={styles.imagebgSidebar} source={require("../../assets/images/music1.jpg")} />
				<View style={styles.imageCoverSidebar}></View>
				<View style={styles.sidebarAbsolute}>
					<View style={styles.setting}><Image style={{ width: 24, height: 24 }} source={require("../../assets/images/settings.png")} /></View>
					<View style={styles.sidebarHead}>
						<Image style={styles.sidebaraccount} source={require("../../assets/images/music1.jpg")} />
					</View>
					<View>
						<Text style={styles.sidebarTitle}>Femington Steele</Text>
					</View>
					<Content>
						<View style={styles.lftlist}>
							<Image style={styles.lftIcon} source={require("../../assets/images/search-left.png")} />
							<Text style={styles.leftText}>Search</Text>
						</View>
						<View style={styles.lftlist}>
							<Image style={styles.lftIcon} source={require("../../assets/images/browse.png")} />
							<Text style={styles.leftText}>Browse</Text>
						</View>
						<View style={styles.lftlist}>
							<Image style={styles.lftIcon} source={require("../../assets/images/activity.png")} />
							<Text style={styles.leftText}>Activity</Text>
						</View>
						<View style={styles.lftlist}>
							<Image style={styles.lftIcon} source={require("../../assets/images/radio.png")} />
							<Text style={styles.leftText}>Be The DJ</Text>
						</View>
						<TouchableOpacity style={styles.lftlist} onPress={()=>this.props.navigation.navigate('Music')}>
							<Image style={styles.lftIcon} source={require("../../assets/images/yourMusic.png")} />
							<Text style={styles.leftText}>Your music</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.lftlist} onPress={() => this.logout()}>
							<Image style={styles.lftIcon} source={require("../../assets/images/logout.png")} />
							<Text style={styles.leftText}>Logout</Text>
						</TouchableOpacity>
					</Content>
				</View>
			</Content>
		);
	}

	logout() {
		Expo.SecureStore.deleteItemAsync("PlaytronUserDetails").then((res) => {
			console.log("logout :", res);
			this.props.navigation.navigate('Welcome');
		});

	}
}
class YourMusic extends Component {
	static navigationOptions = {
    header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			dialogVisible: false,
			loading: false,
			webview: false,
			authToken: "BQA6eRkzjK39RN3W7FPlKta_Ayey5YXGXYtCyerfXFqk343c0H57WDGaS5XMCtfNEaP_5RFIc2-L8IJtPH1htQjoHPnK_ahEyYnC0Swqm1SHK8ieXF--Si0OfMMvu91Ir066QNUgb2Vp9fBWMq4rYrwthY9ZiXuO8DzfUKKLweGSQNdbzLy_MokJiYMhVl-1kdjdf18RO5DjltuCk_TLcVsqRJifzggOdpV9vc4haW-jXjUUCPazEVFIMImafC4R3En0VGfaGmNzoWc",
			openWebviewUri: "https://accounts.spotify.com/authorize?client_id=bed8e7baa8c548d19d11e0a9fac76f73&response_type=code&redirect_uri=http://111.93.169.90/team2/playtron/admin&scope=user-read-private user-read-email",
			currentUserPlaylist: []
		}
	}

	closeDialog = () => {
		this.setState({ dialogVisible: false });
	};

	createDialog=()=>{
		this.setState({dialogVisible: false});
	}

	openDrawer() {
		this.drawer._root.open()

	}
	closeDrawer() {
		this.drawer._root.close()
	}

	componentDidMount(){

		/**getting data from localstorage */
		Expo.SecureStore.getItemAsync("PlaytronTokenData").then((res2) => {
			let value = JSON.parse(res2);
			if (value) {
				console.log("value :", value);

				this.setState({
					loading: true
				});
				currentUserPlaylist(value.access_token).then((res) => {
					console.log("res is :", res);
					this.setState({
						loading: false
					});
					if (res.data.items.length != 0) {
						this.setState({
							currentUserPlaylist: res.data.items
						});
					}
				}).catch((error) => {

					const data = {
						grant_type: "refresh_token",
						refresh_token: value.refresh_token,
						client_id: "bed8e7baa8c548d19d11e0a9fac76f73",
						client_secret: "35e95862f4044abeb0adc00abff7d4ec"
					};

					var formBody = [];
					for (var property in data) {
						var encodedKey = encodeURIComponent(property);
						var encodedValue = encodeURIComponent(data[property]);
						formBody.push(encodedKey + "=" + encodedValue);
					}
					formBody = formBody.join("&");

					/** getting refresh token */
					refreshToken(formBody).then((result) => {
						console.log("ref token :", result);
						if (result) {
							/** store data to localstorage */
							let data = result.data;
							Expo.SecureStore.setItemAsync("PlaytronTokenData", JSON.stringify(data)).then((res) => {

								currentUserPlaylist(result.data.access_token).then((res) => {
									this.setState({
										loading: false
									});
									if (res.data.items.length != 0) {
										this.setState({
											currentUserPlaylist: res.data.items
										});
									}
								}).catch((error) => {
									this.setState({
										loading: false
									});
								});
							});
						}
					}).catch((error) => {
						this.setState({
							loading: false
						});
					});
				});
			}
		});
	}

	/** open web view */
	openWebView() {
		this.setState({
			webview: true
		});
	}

	_onNavigationStateChange(navState) {
		if (navState.url.includes('https://accounts.spotify.com/en/authorize') || navState.url.includes('https://accounts.spotify.com/authorize')) {

		} else {
			this.setState({
				webview: false
			})
			const urlParse = navState.url.split('?')[1];
			if (urlParse.includes('code=')) {
				let authCode = urlParse.split('code=')[1];
				if (authCode) {
					const data = {
						grant_type: "authorization_code",
						code: authCode,
						redirect_uri: "http://111.93.169.90/team2/playtron/admin",
						client_id: "bed8e7baa8c548d19d11e0a9fac76f73",
						client_secret: "35e95862f4044abeb0adc00abff7d4ec"
					};
					var formBody = [];
					for (var property in data) {
						var encodedKey = encodeURIComponent(property);
						var encodedValue = encodeURIComponent(data[property]);
						formBody.push(encodedKey + "=" + encodedValue);
					}
					formBody = formBody.join("&");
					this.setState({
						loading: true
					});
					getUserToken(formBody).then((respone) => {
						if (respone) {
							/** store data to localstorage */
							let data = respone.data;
							Expo.SecureStore.setItemAsync("PlaytronTokenData", JSON.stringify(data)).then((res) => {

								currentUserPlaylist(respone.data.access_token).then((res) => {
									this.setState({
										loading: false
									});
									if (res.data.items.length != 0) {
										this.setState({
											currentUserPlaylist: res.data.items
										});
									}
								}).catch((error) => {
									this.setState({
										loading: false
									});
								});
							});
						}
					}).catch((error) => {
						console.log("usertoken err :", error);
						this.setState({
							loading: false
						});
					})
				}
			}

		}
	}

	displayUserPlaylist() {
		if (this.state.currentUserPlaylist.length != 0) {
			return this.state.currentUserPlaylist.map((result, index) => (
			
				
							<List key={index}>
							<ListItem avatar style={styles.avatarPaddingMyMusic}>
							{
								result && result.images[0] && result.images[0].url ?
								<Left>
									<Image 
									style={styles.listimage} 
									source={{ uri: result.images[0].url }} 
									/>
								</Left>
								:
								<Left>
									<Image 
									style={styles.listimage} 
									source={require("../../assets/images/music1.jpg")} />
								</Left>
							}	
								<Body style={styles.border}>
									<Text style={styles.listheadingRed}>{result.name}</Text>
									<Text style={styles.listnote}>{result.tracks.total} songs </Text>
								</Body>
								<Right style={styles.border}>
									<Icon style={styles.arrow} active name="ios-arrow-forward" />
								</Right>
							</ListItem>
						</List>					
			));
		} else {
			return (
					<View style={styles.createPlaylistNew}>
						<Text style={styles.CreatePlaylistText}>Create Playlist</Text>
						<Text style={styles.or}>Or</Text>
						<View>
							<Button rounded success style={styles.connect} onPress={() => this.openWebView()}>
								<Image  style={styles.playlistImg} source={require("../../assets/images/spotify.png")} />
								<Text style={styles.buttonfont}>CONNECT WITH SPOTIFY</Text>
							</Button>
							<Button rounded success style={styles.connectApple}>
								<Image style={styles.playlistImg} source={require("../../assets/images/apple.png")} />
								<Text style={styles.buttonfont}>CONNECT APPLE MUSIC</Text>
							</Button>
						</View>
					</View>
			)
		}
	}


	render() {
		if (this.state.webview == false) {
		return (
			<Drawer
					ref={(ref) => { this.drawer = ref; }}
					content={<SideBar logout={this.logout} navigation={this.props.navigation} closeDrawer={this.closeDrawer} />}
					onClose={() => this.closeDrawer()}
				>
			<Dialog.Container visible={this.state.dialogVisible}>
				<Dialog.Title>Create Playlist</Dialog.Title>
				<Dialog.Description>
					Enter a name for this new playlist
				</Dialog.Description>
				<Dialog.Input placeholder="playlist name"/>
				<Dialog.Button label="Cancel" onPress={this.closeDialog} />
				<Dialog.Button label="Create" onPress={this.createDialog}/>
			</Dialog.Container>


			<View style={{flex:1}}>
				<StatusBar backgroundColor={'transparent'} translucent={true} barStyle="dark-content"/>
				<View style={styles.InnerHeader}>
					<TouchableOpacity onPress={()=>this.openDrawer()}>
						<Image style={styles.hearderImg} source={require("../../assets/images/menublack.png")} />
					</TouchableOpacity>
						<View><Text style={styles.hearderTextInner}>YOUR MUSIC</Text></View>
					<View style={{width:30}}>
						
					</View>
				</View>
				<ScrollView>
					<Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
					<Content style={{paddingTop:80}}>
					{this.displayUserPlaylist()}
					</Content>

					
					{/* <Content style={{paddingTop:80}}>
						<List>
							<ListItem avatar style={styles.avatarPaddingMyMusic}>
								<Left>
									<Image style={styles.listimage} source={require("../../assets/images/music1.jpg")} />
								</Left>
								<Body style={styles.border}>
									<Text style={styles.listheadingRed}>My fav pop songs</Text>
									<Text style={styles.listnote}>21 songs </Text>
								</Body>
								<Right style={styles.border}>
									<Icon style={styles.arrow} active name="ios-arrow-forward" />
								</Right>
							</ListItem>
						</List>
						<List>
							<ListItem avatar style={styles.avatarPaddingMyMusic}>
								<Left>
									<Image style={styles.listimage} source={require("../../assets/images/music2.jpg")} />
								</Left>
								<Body style={styles.border}>
									<Text style={styles.listheadingRed}>My fav pop songs</Text>
									<Text style={styles.listnote}>21 songs </Text>
								</Body>
								<Right style={styles.border}>
									<Icon style={styles.arrow} active name="ios-arrow-forward" />
								</Right>
							</ListItem>
						</List>
						<List>
							<ListItem avatar style={styles.avatarPaddingMyMusic}>
								<Left>
									<Image style={styles.listimage} source={require("../../assets/images/music3.jpg")} />
								</Left>
								<Body style={styles.border}>
									<Text style={styles.listheadingRed}>My fav pop songs</Text>
									<Text style={styles.listnote}>21 songs </Text>
								</Body>
								<Right style={styles.border}>
									<Icon style={styles.arrow} active name="ios-arrow-forward" />
								</Right>
							</ListItem>
						</List>						
					</Content> */}

					

				</ScrollView>
			</View>
			</Drawer>
		);
		}else {
			return (<WebView
				style={styles.WebViewStyle}
				source={{ uri: this.state.openWebviewUri }}
				javaScriptEnabled={true}
				domStorageEnabled={true}
				startInLoadingState={true}
				onNavigationStateChange={this._onNavigationStateChange.bind(this)}
			/>
			);
		}
	}
}

export default YourMusic;

