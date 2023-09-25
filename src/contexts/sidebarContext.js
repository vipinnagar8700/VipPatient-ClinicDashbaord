import {createContext, useState, useContext} from 'react';

export const SidebarContext = createContext(undefined);

export const SidebarContextAPI = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1366) {
            setIsSidebarOpen(false);
        }
    });

    return (
        <SidebarContext.Provider value={{isSidebarOpen, toggleSidebar}}>
        {children}
        </SidebarContext.Provider>
    );
}

export const useSidebarContext = () => useContext(SidebarContext);

