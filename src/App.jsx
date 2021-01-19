import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ContextProvider as HomeContextProvider } from './page contexts/homeContext';


import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export const App = () => {
    return( 
        <BrowserRouter>
            <Header/>
                <main className="container content">
                    <Switch>
                        <HomeContextProvider>
                            <Route exact path='/' component={ Home }/>
                        </HomeContextProvider>
                        <Route component={ NotFound }/>
                    </Switch>
                </main>
            <Footer/>
        </BrowserRouter>
    );
};