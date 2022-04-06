import "./message.css";



export const Message = ({ author, text,classNameBlock }) => {
    return (
        <div className={classNameBlock + ' massage-box'}>
            <span className="message-author">{author}:</span>
            <span className="message-text">{text}</span>
        </div>
    );
};
