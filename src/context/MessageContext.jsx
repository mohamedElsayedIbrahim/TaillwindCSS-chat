import { createContext, useEffect, useState } from 'react';
import Pusher from "pusher-js";
import instanceAxios from './../api/axios';
// eslint-disable-next-line react-refresh/only-export-components
export const MessageContext = createContext('');


export const MessageProvider = ({ children }) => {

    const [messages, setMessages] = useState([]);
    const [chatMessage, setChatMessage] = useState("");
    const [inputEmpty, setInputEmpty] = useState(true);

    const pusher = new Pusher("63d5a1f474fb8698ac55", {
        cluster: "eu",
    });

    const channel = pusher.subscribe("true-breeze-932");


    const sendMessage = () => {
        const newMessage = {
            username: user.name,
            message: chatMessage,
            url: user.url,
            email: user.email,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            replayFor: replayIndex,
        };
        if (isEdit) {
            SendEditMessageApi(editIndex, newMessage);
            setIsEdit(false);
            setEditIndex(-1);
            setReplayMessage(null);
            setReplayIndex(null);
        } else {
            SendMessageApi(newMessage);
        }
        setReplayMessage(null);
        setChatMessage("");
        setInputEmpty(true);
    };

    const handleChatMessage = (event) => {
        const messageValue = event.target.value;
        setChatMessage(messageValue);
        const isEmpty = messageValue.trim().length === 0;
        setInputEmpty(isEmpty);
    };


    useEffect(() => {
        channel.bind("App\\Events\\chat\\ClientMessage", (data) => {
            if (data.operation === "store") {
                setMessages((prevMessages) => [...prevMessages, data.data]);
            } else if (data.operation === "delete") {
                let deletedMessage = data.data;
                setMessages((prevMessages) =>
                    prevMessages.filter(
                        (prevMessage) => prevMessage.id !== deletedMessage.id
                    )
                );
            } else if (data.operation === "update") {
                let updatedMessage = data.data;

                setMessages((prevMessages) =>
                    prevMessages.map((msg) =>
                        msg.id === updatedMessage.id ? { ...msg, ...updatedMessage } : msg
                    )
                );
            }
        });

        //get all messages

        instanceAxios
            .get("message/all")
            .then((response) => response.data)
            .then((data) => data.data)
            .then((messages) => {
                setMessages(messages);
            });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    },['']);

    return <>

        <MessageContext.Provider value={{ messages, handleChatMessage, sendMessage }}>

            {children}

        </MessageContext.Provider>

    </>

}