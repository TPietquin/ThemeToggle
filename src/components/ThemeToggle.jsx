import React, {useContext} from "react";
import { useTheme } from '../theme/useTheme.js';
import './ThemeToggle.css'

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
        >
            <div className="icon-container">
                <div className="sun-moon-icon">
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;