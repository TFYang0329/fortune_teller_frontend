import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout'
import { Dashboard } from './Header';

function Fortune () {
    return (
        <div>
            <h1>
                易經卜卦
            </h1>
            <Dashboard />
            <Logout />
        </div>
    );
}

export default Fortune;
