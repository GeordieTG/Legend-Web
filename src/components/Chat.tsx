import React from "react"
import io, { Socket } from 'socket.io-client'
import { api } from "../graphql/requester";

const Chat = (props: any) => {

    const [messages, setMessages] = React.useState<string[]>([]);
    const [activity, setActivity] = React.useState(null)
    const [input, setInput] = React.useState<string>("")
    const [socket, setSocket] = React.useState<Socket | null>(null);

    React.useEffect(() => {

      console.log(props.room)
      api.GetMessages( {room: props.room}).then((response) => setMessages(response.messages))

      const newSocket = io("ws://localhost:3500");

      newSocket.emit('enterRoom', { room: props.room });

      newSocket.on('message', (data: any) => {
        setActivity(null)
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      newSocket.on('activity', (data: any) => {
        setActivity(data)
        setTimeout(() => {
          setActivity(null)
        }, 10000)
      })

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }, []);

    const sendMessage = () => {
      socket?.emit('message', {
        name: "Geordie Gibson",
        text: input,
        room: props.room
      });

      document.getElementById("messageInput")?.focus()
    }

    const sendActivity = () => {
      socket?.emit('activity', {
        name: "Geordie Gibson",
        room: props.room
      })
    }

    return (
        <div className="flex justify-center mt-5 gap-x-3">
        <input id="messageInput" onChange={(e) => {sendActivity(); setInput(e.target.value)}} value={input} className="rounded-3xl" style={{color: "black"}}></input>
        <button onClick={() => {sendMessage(); setInput("")}} style={{background: "black"}}>Send</button>

        <div id="chat">
          {messages.map((message, index) => (
            <div style={{color: "black"}} key={index}>{message.name}: {message.text} @ {message.time}</div>
          ))}
        </div>

        <div id="chat">
          {activity && <p>{activity} is typing</p>}
        </div>

        </div>
    )
}

export default Chat