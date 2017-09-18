import axios from 'axios';

export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_ATHLETE = 'FETCH_ATHLETE';
export const FETCH_CLUB = 'FETCH_CLUB';
export const SET_IS_READY = 'SET_IS_READY';
export const DEAUTHORIZE = 'DEAUTHORIZE';
export const FETCH_CLUB_ACTIVITIES = 'FETCH_CLUB_ACTIVITIES';

export const deauthorize = (token) => {
    const request = axios({
        method: 'POST',
        url: 'https://www.strava.com/oauth/deauthorize',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return {
        type: DEAUTHORIZE,
        payload: request
    }
}

export const setIsReady = () => ({
    type: SET_IS_READY,
    payload: true
})

export const fetchToken = (code) => {
    const request = axios({
        method: 'POST',
        url: 'https://www.strava.com/oauth/token',
        data: {
            code,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        type: FETCH_TOKEN,
        payload: request
    }
}

export const fetchAthlete = (token, id) => {
    const request = axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/athletes/${id}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return {
        type: FETCH_ATHLETE,
        payload: request
    }
}

export const fetchClub = (token, clubId) => {
    const request = axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/clubs/${clubId}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return {
        type: FETCH_CLUB,
        payload: request
    }
}

export const fetchClubActivities = (token, id) => {
    // const request = axios({
    //     method: 'GET',
    //     url: `https://www.strava.com/api/v3/clubs/${id}/activities`,
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     }
    // }).then((response) => {
    //     return response;
    // });

    // return {
    //     type: FETCH_CLUB_ACTIVITIES,
    //     payload: request
    // }
    return fetchClubActivitiesByPage(token, id, 1, 10);
};

const fetchClubActivitiesByPage = (token, id, page, per_page) => (dispatch) => {
    return axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/clubs/${id}/activities?per_page=${per_page}&page=${page}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        debugger;
        // check to see if we got data back. 
        // If so, that means there is more.
        if (response.data.length > 0) {
            // dispatch({
            //     type: CACHE_CLUB_ACTIVITIES,
            //     payload: response.data
            // })
            dispatch(fetchClubActivitiesByPage(token, id, page + 1, per_page));
        }
        // else there is no more data and we are done.
    })
}

// export const fetchClubActivitiesForCurrentMonth = (token, id) => {
//     return (
//         (dispatch) => {
//             return fetchClubActivitiesByPage(token, id, 1, 200)
//             .then((response) => {
//                 if (response.length > 0) {
//                     dispatch({
//                         type: CACHE_CLUB_ACTIVITIES,
//                         payload: response.body.data
//                     });
//                     dispatch()    
//                 } else {

//                 }

//             })
//         }
//     );
// }