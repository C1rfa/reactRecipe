import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomeContextProvider } from './page contexts/homeContext';
import { MealsContextProvider } from './page contexts/mealsContext';
import { RecipeContextProvider } from './page contexts/recipeContext';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Meals } from './pages/Meals';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';

export const App = () => {
    return( 
        <BrowserRouter>
            <Header/>
                <main className="container content">
                    <Switch>
                        <HomeContextProvider>
                            <MealsContextProvider>
                                <RecipeContextProvider>
                                    <Route exact path='/' component={ Home }/>
                                    <Route path='/category/:name' component={ Meals }/>
                                    <Route path='/country/:name' component={ Meals }/>
                                    <Route path='/recipe/:id' component={ Recipe }/>
                                    <Route path='/404' component={ NotFound }/>
                                    <Redirect to='/404'/>
                                </RecipeContextProvider>
                            </MealsContextProvider>
                        </HomeContextProvider>
                    </Switch>
                </main>
            <Footer/>
        </BrowserRouter>
    );
};