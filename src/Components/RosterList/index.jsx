import React from 'react';
import './style.css';

const RosterList = (props) => {
    return (
        <div>
        {
            props.members.map((member) => {
                return (
                    <a key={member.id} href={`https://www.strava.com/athletes/${member.id}`}>
                        <img className="profile-medium" src={member.profile_medium} alt="profile"/>
                    </a>
                );
            })
        }
        </div>
    );
}

export default RosterList;