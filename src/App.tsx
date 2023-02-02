import { Suspense, useContext, useState } from 'react';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import "../src/styles/index.scss"
import { classNames } from './helpers/classNames/classNames';
import { useThemes } from './hooks/useThemes';
import { AboutAsyncPage } from './pages/AboutPage/About.async';
import { MainAsyncPage } from './pages/MainPage/Main.async';
import { ThemeContext } from './theme/ThemeContext';

const App = () => {
    const {theme, toggleTheme} = useThemes()
    return ( 
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainAsyncPage/>}/>
                <Route path="/about" element={<AboutAsyncPage/>}/>
                </Routes>
                </Suspense>
        </div>
        
     );
}
 
export default App;