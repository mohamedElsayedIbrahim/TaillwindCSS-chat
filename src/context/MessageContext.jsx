import { createContext, useEffect, useState } from 'react';
import Pusher from "pusher-js";
import instanceAxios from './../api/axios';
import { SendMessageApi, SendEditMessageApi } from './../api/backend/ChatApi';
// eslint-disable-next-line react-refresh/only-export-components
export const MessageContext = createContext('');


export const MessageProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
		const localStorageEpisodes = localStorage.getItem('USER-TELEGRAM');
		return localStorageEpisodes ? JSON.parse(localStorageEpisodes) : [];
	});

    const [replayMessage, setReplayMessage] = useState("");

    const [messages, setMessages] = useState([]);
    const [chatMessage, setChatMessage] = useState("");
    const [replayIndex, setReplayIndex] = useState(null);
    
    const [isEdit, setIsEdit] = useState(false);


    const [inputEmpty, setInputEmpty] = useState(true);
    const [currentUsername] = useState(user.email);
    const [currentName] = useState(user.name);
    
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
        console.log(event);
        
        const messageValue = event.target.value;
        setChatMessage(messageValue);
        const isEmpty = messageValue.trim().length === 0;
        setInputEmpty(isEmpty);
    };

    const handleEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setChatMessage((prevMessage) => prevMessage + "\n");
    }
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
    },[user]);

    return <>

        <MessageContext.Provider value={{ messages, chatMessage, handleChatMessage, sendMessage, handleEnterKeyPress }}>

            {children}

        </MessageContext.Provider>

    </>

}