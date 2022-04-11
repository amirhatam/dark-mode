import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';



function ThemeSwitcher() {
    const [fontawesome, setFontawesome] = useState(faMoon)
    const [iconcolor, setIconColor] = useState("")

    //Returns the first child element that matches a CSS selector(s)
    const html = document.querySelector('html');

    function switchTheme() {
        if (html.className) {
            html.className = "";
            setFontawesome(faMoon)
            setIconColor("#000")
        } else {
            html.className = "dark-mode";
            setFontawesome(faSun)
            setIconColor("#FFA500")
        }
    }

    return (
        <>
            <button onClick={switchTheme} className="app__dark-mode-btn icon level-right">
                <FontAwesomeIcon color={iconcolor} icon={fontawesome} />
            </button>
        </>
    )
}

export default ThemeSwitcher