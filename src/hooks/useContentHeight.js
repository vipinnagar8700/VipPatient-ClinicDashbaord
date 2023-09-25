import {useState, useEffect} from 'react';

const useContentHeight = (topRef, bottomRef) => {
    const [contentHeight, setContentHeight] = useState(0);
    useEffect(() => {
         if (topRef !== null && bottomRef !== null) {
             const topHeight = topRef.current ? topRef.current.clientHeight : 0;
             const bottomHeight = bottomRef && bottomRef.current ? bottomRef.current.clientHeight : 0;
             setContentHeight(topHeight + bottomHeight);
         }
    }, [topRef, bottomRef]);
    return contentHeight;
}

export default useContentHeight;