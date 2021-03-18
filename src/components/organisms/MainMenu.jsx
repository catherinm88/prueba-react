import React from 'react';
import ToggleTheme from '../molecules/toggleTheme';
import { NavLink } from 'react-router-dom';

const MainMenu = () => (
    <header className="main-header">
        <div className="main-header__text">
            Where in the world?
        </div>
        <ToggleTheme />
    </header>
)

export default MainMenu;