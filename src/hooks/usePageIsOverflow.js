import {useState, useLayoutEffect} from 'react';

const usePageIsOverflow = () => {
    const page = document.documentElement;
    const [isOverflow, setIsOverflow] = useState(undefined);

    useLayoutEffect(() => {
        const trigger = () => {
            const hasOverflow = page.scrollHeight > page.clientHeight;

            setIsOverflow(hasOverflow);
        };

        if ('ResizeObserver' in window) {
            new ResizeObserver(trigger).observe(page);
        }

        trigger();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isOverflow;
};

export default usePageIsOverflow;