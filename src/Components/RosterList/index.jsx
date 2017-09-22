import React from 'react';
import './style.css';

const RosterList = (props) => {
    return (
        <div>
            {
                props.members.map((member) => {
                    return (
                        <img key={member.id} className="profile-medium" src={member.profile_medium} alt="profile"/>
                    );
                })
            }
        </div>
    );
}

export default RosterList;