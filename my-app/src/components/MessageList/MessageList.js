import { Message, MessageWithThemeColor } from "../message/Message";


export const MessageList = ({ messages }) =>
    messages.map((msg) => <MessageWithThemeColor key={msg.id} text={msg.text} author={msg.author} classNameBlock={msg.classNameBlock} />);

