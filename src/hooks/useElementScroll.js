import {useEffect, useState} from 'react';

const useElementScroll = (ref, callback) => {
    const [isOverflown, setIsOverflown] = useState(undefined);
    const [contentHeight, setContentHeight] = useState(undefined);

    const handleScroll = () => {
        const { current } = ref;
        current.children[0].scrollTop === 0 ? current.classList.add('is-top') : current.classList.remove('is-top');

        const inScrolledToBottom = current.children[0].scrollHeight === (Math.ceil(current.children[0].scrollTop) + current.children[0].clientHeight) || current.children[0].scrollHeight === (Math.floor(current.children[0].scrollTop) + current.children[0].clientHeight);
        inScrolledToBottom ? current.classList.add('is-bottom') : current.classList.remove('is-bottom');
    }

    useEffect(() => {
        const { current } = ref;

        const trigger = () => {
            setContentHeight(current.children[0].scrollHeight);

            const hasOverflow = current.children[0].scrollHeight > current.children[0].clientHeight;

            setIsOverflown(hasOverflow);

            current?.classList.toggle('has-overflow', hasOverflow);

            current.children[0].addEventListener('scroll', handleScroll);

            if (callback) callback(hasOverflow);
        };

        if (current) {

            if ('ResizeObserver' in window) {
                new ResizeObserver(trigger).observe(current);
            }
            trigger();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [ref, callback, contentHeight]);

    return isOverflown;
}

export default useElementScroll;