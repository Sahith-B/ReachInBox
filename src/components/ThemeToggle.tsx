import { useEffect, useState } from "react";
import moon from "../assets/Moon.png";
import sun from "../assets/sun.png";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center h-screen">
            <button
                className={`relative inline-flex items-center h-6 rounded-full w-11 mr-3 transition-colors duration-500 ease-in-out ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                onClick={() => setDarkMode(!darkMode)}
            >
                <span
                    className={`transform transition-transform duration-500 ease-in-out inline-block w-4 h-4 rounded-full bg-white ${darkMode ? 'translate-x-5' : 'translate-x-1'}`}
                />
                <img src={moon}
                className={`absolute right-1 w-4 h-4 transition-opacity duration-500 ease-in-out ${darkMode ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    src={sun}
                    alt="sun"
                    className={`absolute left-1 w-4 h-4 transition-opacity duration-500 ease-in-out ${darkMode ? 'opacity-100' : 'opacity-0'}`}
                />


            </button>
        </div>
    );
}

export default ThemeToggle;