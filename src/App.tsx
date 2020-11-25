import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from './App.module.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path='/Profile' render={() => <Profile/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
