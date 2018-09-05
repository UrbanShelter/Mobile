import axios from 'axios';
import _baseUrl from '../_baseUrl';
import _spotifyBaseUrl from '../_spotifyBaseUrl';

export function customerSignup(data) {
    console.log("data aa :", data);
    return axios({
        method: "POST",
        url: _baseUrl + "app_signup",
        data: data
    })
}

export function customerLogin(data) {
    return axios({
        method: "POST",
        url: _baseUrl + "app_signin",
        data: data
    })
}

export function currentUserPlaylist(authToken) {
    let headers = {
        'Authorization': 'Bearer ' + authToken
    }
    return axios({
        headers,
        method: "GET",
        url: _spotifyBaseUrl + "v1/me/playlists"
    })
}


export function getUserToken(data) {

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json'
    }

    return axios({
        headers,
        method: "POST",
        url: "https://accounts.spotify.com/api/token",
        data: data
    });
}

export function refreshToken(data) {

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json'
    }

    return axios({
        headers,
        method: "POST",
        url: "https://accounts.spotify.com/api/token",
        data: data
    });
}