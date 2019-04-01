import React from 'react';

import './Navigation.css';

const Navigation = props => {
    let navigation;

    if(props.isSignedIn){
        navigation = <nav>
                        <p className="f3 link dim black pa3 pb0 pt0 pointer" onClick={() => props.routeChanger('signin')}>Sign Out</p>
                    </nav>;
    } else {
        navigation = <nav>
                        <p className="f3 link dim black pa3 pb0 pt0 pointer" onClick={() => props.routeChanger('signin')}>Sign In</p>
                        <p className="f3 link dim black pa3 pb0 pt0 pointer" onClick={() => props.routeChanger('register')}>Register</p>
                    </nav>;
    }

    return navigation;
};

export default Navigation;