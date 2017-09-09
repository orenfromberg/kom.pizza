import React from 'react';
import ConnectButton from './btn_strava_connectwith_orange.svg';
const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

const Connect = () => {
    return (
        <div>
            <a href={`https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&approval_prompt=force`}>
                <img src={ConnectButton} alt="Connect with Strava" />
            </a>
        </div>
    )
}

export default Connect;