import axios from 'axios';
import { API_BASE_URL, API_SESSION, API_KEY, API_URL } from './constants';

export const api = {

    fetchLogin({ email, password }) {
        return dispatch({
            method: "post",
            url: API_SESSION,
            body: {
                email,
                password,
            }
        })
    },

    fetchInfoCharacter(id) {
        return dispatch({
            url: `${API_BASE_URL}/${id}`,
        })
    },

    fetchSearchCharacter(name) {
        return dispatch({
            url: `${API_URL}/search/${name}`,
        })
    },









    fetchPowerstatsCharacter(id) {
        return dispatch({
            url: `${API_BASE_URL}/${id}/powerstats`
        })
    },

    fetchBiographyCharacter(id) {
        return dispatch({
            url: `${API_BASE_URL}/${id}/biography`
        })
    },

    fetchAppearanceCharacter(id) {
        return dispatch({
            url: `${API_BASE_URL}/${id}/appearance`
        })
    },

    fetchWorkCharacter(id) {
        return dispatch({
            url: `${API_BASE_URL}/${id}/work`
        })
    },

    fetchConnectionsCharacter(id) {
        return dispatch({
            url: `${API_BASE_URL}/${id}/connections`
        })
    },

    fetchImageCharacter(id) {
        return dispatch({
            url: `${API_BASE_URL}/${id}/image`
        })
    },
}


export function dispatch(options) {
    let headers_config = {
        "Content-Type": "application/json, text/plain, */*",
    }

    let config = {
        method: options.method || 'get',
        url: options.url,
        headers: headers_config
    }

    if (options.body) {
        config["data"] = options.body;
    }

    return axios(config)
        .then(res => res.data)
        .catch(error => console.log(error))
}