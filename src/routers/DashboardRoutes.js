import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'

import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />


            <div className="container mt-2">
                <Switch>
                    <Route  exact path="/marvel" component= { MarvelScreen} />
                    <Route  exact path="/hero/:heroeId" component= { HeroScreen } />
                    <Route  exact path="/dc" component= { DcScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>

        </>
    )
}
