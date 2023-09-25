import {createContext, useContext, useEffect, useState} from 'react';

export const InterfaceContext = createContext(undefined);

export const InterfaceContextAPI = ({children}) => {
    const page = document.documentElement;
    const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const persisted = JSON.parse(localStorage.getItem('preferences') || '{}');

    const [isDarkMode, setIsDarkMode] = useState(persisted ? persisted.isDarkMode : browserTheme.matches);
    const [isContrastMode, setIsContrastMode] = useState(persisted.isContrastMode || false);
    const [fontScale, setFontScale] = useState(persisted.fontScale || 1);
    const [direction, setDirection] = useState(persisted.direction || 'ltr');
    const [isLayoutEditable, setIsLayoutEditable] = useState(false);

    const stopTransition = () => {
        page.classList.add('no-transition');
        setTimeout(() => page.classList.remove('no-transition'), 100);
    }

    const savePreferences = () => {
        localStorage.setItem('preferences', JSON.stringify({
            isDarkMode,
            isContrastMode,
            fontScale,
            direction
        }));
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        stopTransition();
    }

    const toggleContrastMode = () => {
        setIsContrastMode(!isContrastMode);
        page.classList.toggle('contrast');
    }

    const changeFontScale = (scale) => {
        setFontScale(scale);
        stopTransition();
    }

    const toggleDirection = () => {
        setDirection(direction === 'ltr' ? 'rtl' : 'ltr');
        page.setAttribute('dir', direction);
    }

    const toggleLayoutEditable = () => {
        setIsLayoutEditable(!isLayoutEditable);
    }

    useEffect(() => {
        page.style.setProperty('--font-scale', fontScale);
        page.dataset.ratio = `${window.devicePixelRatio}`;
        savePreferences();

        window.addEventListener('resize', () => setIsLayoutEditable(false));
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', event => {
                if (event.matches) {
                    setIsDarkMode(true);
                } else {
                    setIsDarkMode(false);
                }
                stopTransition();
                savePreferences();
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkMode, isContrastMode, fontScale, direction, window.devicePixelRatio]);

    return (
        <InterfaceContext.Provider
            value={{
                isDarkMode,
                isContrastMode,
                fontScale,
                direction,
                toggleDarkMode,
                toggleContrastMode,
                changeFontScale,
                toggleDirection,
                isLayoutEditable,
                toggleLayoutEditable,
                setIsLayoutEditable
            }}>
            {children}
        </InterfaceContext.Provider>
    );
}

export const useInterfaceContext = () => useContext(InterfaceContext);