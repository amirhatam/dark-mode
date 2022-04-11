import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';



function ThemeSwitcher() {

    //Returns the first child element that matches a CSS selector(s)
    const html = document.querySelector('html');

    function switchTheme() {
        if (html.className) {
            html.className = "";
        } else {
            html.className = "dark-mode";
        }
    }

    return (
        <>
            <button onClick={switchTheme} className="app__dark-mode-btn icon level-right">
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </>
    )
}

export default ThemeSwitcher