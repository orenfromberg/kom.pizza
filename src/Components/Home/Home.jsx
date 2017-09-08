import React from 'react';
import ConnectButton from './btn_strava_connectwith_orange.svg';
const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

const Home = () => {
    return (
        <div>
            <h1>kom.pizza</h1>
            <h1><span role="img" aria-label="kom.pizza">👑⛰️.🍕</span></h1>
            <a href={`https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&approval_prompt=force`}>
                <img src={ConnectButton} alt="connect with strava" />
            </a>
        </div>
    )
}

export default Home;