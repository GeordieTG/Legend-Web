import React from "react"
import io, { Socket } from 'socket.io-client'
import { api } from "../../graphql/requester";
import IncomingMessage from "../IncomingMessage";
import OutgoingMessage from "../OutgoingMessage";

const ChatComponent = (props: any) => {

    const [messages, setMessages] = React.useState<string[]>([]);
    const [activity, setActivity] = React.useState(null)
    const [input, setInput] = React.useState<string>("")
    const [socket, setSocket] = React.useState<Socket | null>(null);

    React.useEffect(() => {

      document.getElementById("messageInput")?.focus()

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

    React.useEffect(() => {
      console.log(messages)
    }, [messages])
    
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
      <div className="flex flex-col w-full h-full">

        <div id="chat" className="flex-1 flex flex-col-reverse overflow-auto">
          {messages.map((message, index) => (
            message.user.id == 1 ? <OutgoingMessage index={index} message={message}/> : <IncomingMessage index={index} message={message} />
          ))}

          {activity && <p>{activity} is typing</p>}
        </div>

        <div id="input" className="my-3 flex space-x-1 flex-shrink-0">
          <input autoComplete="off" id="messageInput" placeholder="Type a message..."  onChange={(e) => {sendActivity(); setInput(e.target.value)}} value={input} className="px-3 w-full bg-zinc-100 h-10 rounded-xl"></input>
          <button className="h-10 rounded-lg" onClick={() => {sendMessage(); setInput("")}} style={{background: "black"}}>Send</button>
        </div>
        
      </div>
    )
}

export default ChatComponent