import './ChatList.css'


const chats = [
    {
        name: "Chat1",
        id: "chat1",
    },
    {
        name: "Chat2",
        id: "chat2",
    },
    {
        name: "Chat3",
        id: "chat3",
    },
    {
        name: "Chat1",
        id: "chat4",
    },
    {
        name: "Chat2",
        id: "chat5",
    },
    {
        name: "Chat3",
        id: "chat6",
    },
    {
        name: "Chat1",
        id: "chat7",
    },
    {
        name: "Chat2",
        id: "chat8",
    },
    {
        name: "Chat3",
        id: "chat9",
    },
];

export const ChatList = () => (
    <div className="chat-list">
        {chats.map ((chat)=>(
            <div key={chat.id} className="chat-item">{chat.name}</div>
            ))}
    </div>
);
