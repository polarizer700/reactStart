import "./message.css";




export const Message = ({ author, text }) => {
    return (
        <div className="massage-box">
            <span className="message-author">{author}:</span>
            <span className="message-text">{text}</span>
        </div>
    );
};
