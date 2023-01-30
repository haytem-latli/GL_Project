import axios from 'axios';


import { useHistory } from 'react-router-dom';

const googleLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/token', {
			token: accesstoken,
			backend: "google-oauth2",
			grant_type: 'convert_token',
			client_id: "3MxNsmSa87TJE7MHwB3qjSbOlro72dFVJLG7mtx6",
			client_secret:"qXDjwFNet7r0NPIqvxORhiRRb7dnRHW7itiPl8jlCLAsP90Bwg76IJgdOUAKN6Is43sPCkKrP7yKitKsmXDSDyPXRQ4TOIXEwBzi9CDiceCNltEqzNmBjzkphxbqKcCy",
		})
		.then((res) => {
            console.log(res.data.access_token)
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		}).catch((error)=>{
			console.log(error)
		});
};

export default googleLogin;
