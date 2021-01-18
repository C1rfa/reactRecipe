import React from 'react';

import notFoundPic from './../img/404.svg';

export const NotFound = () => {

    return(
        <div className="notFound-wrapper">
            <div className="message">
                <span className="text"> 
                    Sorry, this page does not exist <br/>
                    Maybe you will get it next time <br/>
                    ^_^  
                </span>
            </div>
            <img className="notFoundImg" src={ notFoundPic } alt="404"/>
        </div>
    );
};