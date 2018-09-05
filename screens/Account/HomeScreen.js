import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, WebView ,AsyncStorage} from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input, Icon, List, ListItem, Thumbnail, Drawer } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./styles";
import axios from 'axios';
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
						<TouchableOpacity style={styles.lftlist} onPress={() => this.props.navigation.navigate('Music')}>
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


class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			webview: false,
			authToken: "BQA6eRkzjK39RN3W7FPlKta_Ayey5YXGXYtCyerfXFqk343c0H57WDGaS5XMCtfNEaP_5RFIc2-L8IJtPH1htQjoHPnK_ahEyYnC0Swqm1SHK8ieXF--Si0OfMMvu91Ir066QNUgb2Vp9fBWMq4rYrwthY9ZiXuO8DzfUKKLweGSQNdbzLy_MokJiYMhVl-1kdjdf18RO5DjltuCk_TLcVsqRJifzggOdpV9vc4haW-jXjUUCPazEVFIMImafC4R3En0VGfaGmNzoWc",
			openWebviewUri: "https://accounts.spotify.com/authorize?client_id=bed8e7baa8c548d19d11e0a9fac76f73&response_type=code&redirect_uri=http://111.93.169.90/team2/playtron/admin&scope=user-read-private user-read-email",
			currentUserPlaylist: []
		}
	}

	componentDidMount() {
		/**getting data from localstorage */

		// setInterval(()=>{
		// 	const data = {
		// 		grant_type: "refresh_token",
		// 		refresh_token: value.refresh_token,
		// 		client_id: "bed8e7baa8c548d19d11e0a9fac76f73",
		// 		client_secret: "35e95862f4044abeb0adc00abff7d4ec"
		// 	};

		// 	var formBody = [];
		// 	for (var property in data) {
		// 		var encodedKey = encodeURIComponent(property);
		// 		var encodedValue = encodeURIComponent(data[property]);
		// 		formBody.push(encodedKey + "=" + encodedValue);
		// 	}
		// 	formBody = formBody.join("&");

		// 	/** getting refresh token */
		// 	refreshToken(formBody).then((result) => {
		// 		console.log("ref token :", result);
		// 	}).catch((error) => {
		// 		this.setState({
		// 			loading: false
		// 		});
		// 	});
		// },5000);

		Expo.SecureStore.getItemAsync("PlaytronTokenData").then((res2) => {
			let value=JSON.parse(res2);
			if(value){
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
					console.log("err :", error);

					const data={
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
					refreshToken(formBody).then((result)=>{
						console.log("ref token :", result);
						if(result){
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
					}).catch((error)=>{
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

		}
		else {
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

	
	openDrawer() {
		this.drawer._root.open()

	}

	closeDrawer() {
		this.drawer._root.close()
	}


	displayUserPlaylist() {
		if (this.state.currentUserPlaylist.length != 0) {
			return this.state.currentUserPlaylist.map((result, index) => (
				<View  key={index}>
					
						{
							result && result.images[0] && result.images[0].url ?
								<View style={styles.musicScrollbgBottom}>
									<Image
										style={styles.musicScrollImgBottom}
										source={{ uri: result.images[0].url }}
									/>
									<Text numberOfLines={1} style={styles.musicScrollTitleBottom}>{result.name}</Text>
								</View>
								:
								<View style={styles.musicScrollbgBottom}>
									<Image
										style={styles.musicScrollImgBottom}
										source={require('../../js/images/noimage.jpeg')}
									/>
									<Text numberOfLines={1} style={styles.musicScrollTitleBottom}>No Songs available</Text>
								</View>
						}
				</View>
			));
		} else {
			return (
				<View style={styles.createPlaylist}>
					<Text style={styles.CreatePlaylistText}>Create Playlist</Text>
					<Text style={styles.or}>Or</Text>
					<View>
						<Button onPress={() => this.openWebView()} rounded success style={styles.connect}>
							<Image style={styles.playlistImg} source={require("../../assets/images/spotify.png")} />
							<Text style={styles.buttonfont}>CONNECT WITH SPOTIFY</Text>
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
					<View>
						<StatusBar backgroundColor={'transparent'} translucent={true} barStyle="light-content"/>
						<View style={styles.homeHeader}>
							<TouchableOpacity onPress={() => this.openDrawer()}>
								<Image style={styles.hearderImg} source={require("../../assets/images/menu.png")} />
							</TouchableOpacity>
							<View><Text style={styles.hearderText}>PLAYING NEAREST YOU</Text></View>
							<View>
								<Image style={styles.hearderImg} source={require("../../assets/images/search.png")} />
							</View>
						</View>
						<ScrollView>
							<View style={styles.current}>
								<Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
								<Image blurRadius={2} style={styles.imagebg} source={require("../../assets/images/music1.jpg")} />
								<View style={styles.imageCover}></View>
								<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollMusic}>
									{/* {this.displayUserPlaylist()} */}
									<View style={styles.musicScrollbg}>
										<Image style={styles.musicScrollImg} source={require("../../assets/images/music1.jpg")} />
										<Text numberOfLines={1} style={styles.musicScrollTitle}>Red’s Ice House</Text>
									</View>
									<View style={styles.musicScrollbg}>
										<Image style={styles.musicScrollImg} source={require("../../assets/images/music2.jpg")} />
										<Text numberOfLines={1} style={styles.musicScrollTitle}>The Shelter Kitchen + Bar</Text>
									</View>
									<View style={styles.musicScrollbg}>
										<Image style={styles.musicScrollImg} source={require("../../assets/images/music1.jpg")} />
										<Text numberOfLines={1} style={styles.musicScrollTitle}>Wild Wings Mt. Pleasant</Text>
									</View>
									<View style={styles.musicScrollbg}>
										<Image style={styles.musicScrollImg} source={require("../../assets/images/music2.jpg")} />
										<Text numberOfLines={1} style={styles.musicScrollTitle}>Red’s Ice House</Text>
									</View>
								</ScrollView>
							</View>
							<Content>
								<List style={styles.payingHeaderPadding}>
									<View style={styles.payingHeader}>
										<Text style={styles.payingText}>NOW PLAYING AT</Text>
										<Icon style={styles.loaction} active name="ios-pin" />
										<Text style={styles.payingText}>Red’s Ice House</Text>
									</View>
								</List>
								<List>
									<ListItem avatar style={styles.avatarPadding}>
										<Left>
											<Image style={styles.listimage} source={require("../../assets/images/music1.jpg")} />
										</Left>
										<Body style={styles.border}>
											<Text style={styles.listheading}>Wouldn’t it be nice</Text>
											<Text style={styles.listnote}>The Beach Boys </Text>
										</Body>
										<Right style={styles.border}>
											<Icon style={styles.arrow} active name="ios-arrow-forward" />
										</Right>
									</ListItem>
								</List>
							</Content>
							<View style={styles.requestSong}>
								<Text style={styles.requestText}> Request a song</Text>
								<Image style={styles.plus} source={require("../../assets/images/plus.png")} />
							</View>
							<View>
								<View style={styles.payingHeaderPadding}>
									<View style={styles.payingHeader}>
										<Text style={styles.payingText}>YOUR PLAYLISTS</Text>
										<View style={styles.payingBorder}></View>
									</View>
								</View>
								{/* {
									!this.state.currentUserPlaylist || !this.state.currentUserPlaylist.length || this.state.currentUserPlaylist.length == 0 ? (
										<View style={styles.playlist}>
											<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollMusicBottom}>
												<View style={styles.musicScrollbgBottom}>
													<Image style={styles.musicScrollImgBottom} source={require("../../assets/images/music3.jpg")} />
													<Text numberOfLines={1} style={styles.musicScrollTitleBottom}>My fav pop songs</Text>
												</View>
												<View style={styles.musicScrollbgBottom}>
													<Image style={styles.musicScrollImgBottom} source={require("../../assets/images/music2.jpg")} />
													<Text numberOfLines={1} style={styles.musicScrollTitleBottom}>Rock Classics</Text>
												</View>
												<View style={styles.musicScrollbgBottom}>
													<Image style={styles.musicScrollImgBottom} source={require("../../assets/images/music3.jpg")} />
													<Text numberOfLines={1} style={styles.musicScrollTitleBottom}>My fav pop songs</Text>
												</View>
												<View style={styles.musicScrollbgBottom}>
													<Image style={styles.musicScrollImgBottom} source={require("../../assets/images/music2.jpg")} />
													<Text numberOfLines={1} style={styles.musicScrollTitleBottom}>Rock Classics</Text>
												</View>
											</ScrollView>
										</View>
									) : null
								} */}

									
									<View style={styles.playlist}>
											<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollMusicBottom}>
												{this.displayUserPlaylist()}
											</ScrollView>
										</View>
								

								{/* <View style={styles.createPlaylist}>
									<Text style={styles.CreatePlaylistText}>Create Playlist</Text>
									<Text style={styles.or}>Or</Text>
									<View>
										<Button onPress={() => this.openWebView()} rounded success style={styles.connect}>
											<Image style={styles.playlistImg} source={require("../../assets/images/spotify.png")} />
											<Text style={styles.buttonfont}>CONNECT WITH SPOTIFY</Text>
										</Button>
										<Button onPress={() => this.openWebView()} rounded success style={styles.connectApple}>
											<Image style={styles.playlistImg} source={require("../../assets/images/apple.png")} />
											<Text style={styles.buttonfont}>CONNECT APPLE MUSIC</Text>
										</Button>
									</View>
								</View> */}


							</View>
						</ScrollView>
					</View>
				</Drawer>
			);
		} else {
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

export default HomeScreen;

