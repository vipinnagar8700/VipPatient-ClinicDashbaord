import {useState, useEffect} from 'react';

const usePanelScroll = () => {
    const [position, setPosition] = useState(window.scrollY)
    const [visible, setVisible] = useState(true)
    const isOnTop = window.scrollY !== 0 ? 'sticky' : '';

    useEffect(()=> {
        const handleScroll = () => {
            let moving = window.scrollY

            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return visible ? `visible ${isOnTop}` : "hidden";
}

export default usePanelScroll;