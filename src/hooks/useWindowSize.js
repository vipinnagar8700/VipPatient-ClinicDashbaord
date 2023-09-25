import { useState, useEffect } from 'react';
import {debounce} from 'lodash';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0});
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", debounce(handleResize, 200));
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default useWindowSize;