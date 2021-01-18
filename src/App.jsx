import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export const App = () => {
    return( 
        <BrowserRouter>
            <Header/>
                <main className="container content">
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route component={ NotFound }/>
                    </Switch>
                </main>
            <Footer/>
        </BrowserRouter>
    );
};