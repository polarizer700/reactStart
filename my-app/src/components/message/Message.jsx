import "./message.css";
import {useRef, useLayoutEffect, useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext";


export const Message = ({ author, text,classNameBlock, theme }) => {
    //const { theme } = useContext(ThemeContext);

    const scrollTo = useRef(null);
    useLayoutEffect(() => {
        scrollTo.current.scrollIntoView();
    }, []);
    return (
        <div className={classNameBlock + ' massage-box'} ref={scrollTo}>
            <span style={{ color: theme === "dark" ? "purple" : "#54ce0f" }} className="message-author" >{author}:</span>
            <span className="message-text">{text}</span>
        </div>
    );
};

const withThemeColor = (Component) => (props) => {
    const { theme } = useContext(ThemeContext);
    return <Component {...props} theme={theme} />
}

export const MessageWithThemeColor = withThemeColor(Message)
