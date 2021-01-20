import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomeContextProvider } from './page contexts/homeContext';
import { MealsContextProvider } from './page contexts/mealsContext';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Meals } from './pages/Meals';
import { NotFound } from './pages/NotFound';

export const App = () => {
    return( 
        <BrowserRouter>
            <Header/>
                <main className="container content">
                    <Switch>
                        <HomeContextProvider>
                            <MealsContextProvider>
                                <Route exact path='/' component={ Home }/>
                                <Route path='/category/:name' component={ Meals }/>
                                <Route path='/country/:name' component={ Meals }/>
                                <Route path='/404' component={ NotFound }/>
                                <Redirect to='/404'/>
                            </MealsContextProvider>
                        </HomeContextProvider>
                    </Switch>
                </main>
            <Footer/>
        </BrowserRouter>
    );
};