import "./message.css";
import {useRef,useLayoutEffect} from "react";


export const Message = ({ author, text,classNameBlock }) => {
    const scrollTo = useRef(null);
    useLayoutEffect(() => {
        scrollTo.current.scrollIntoView();
    }, []);
    return (
        <div className={classNameBlock + ' massage-box'} ref={scrollTo}>
            <span className="message-author">{author}:</span>
            <span className="message-text">{text}</span>
        </div>
    );
};
