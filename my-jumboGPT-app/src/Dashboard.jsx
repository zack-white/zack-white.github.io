import React from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import { useState } from 'react'


const Dashboard = () => {
        const [typing, setTyping] = useState(false);
        const [messages, setMessages] = useState([
          {
            message: "Hello, welcome to JumboGPT!",
            sender: "JumboGPT",
            direction : "incoming"
          }
        ]);
      
        async function receiveMsg(newMessages){
                let tempRes = localStorage.getItem("latestMsg");
                const newResponse = {
                        message: tempRes,
                        sender: "JumboGPT",
                        direction: "incoming"
                }
                const updatedMessages = [...newMessages, newResponse];
                setMessages(updatedMessages);
                setTyping(false);
        }
        const handleSend = async (message) => {
          const newMessage = {
            message,
            sender : "user",
            direction : "outgoing"
          }
      
          const newMessages = [...messages, newMessage];
      
          setMessages(newMessages);
      
          setTyping(true);
      
          await processGPTMessage(newMessages);
        }
      
        async function processGPTMessage(chatMessages){
                await fetch("https://tl-onboarding-project-dxm7krgnwa-uc.a.run.app/prompt", {
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token") // Add your JWT here!
                        },
                        body: JSON.stringify({
                            model: "gpt-4o",
                            messages: [{ role: "user", content: chatMessages[chatMessages.length - 1].message }]
                        })
                    }).then(res => res.json()).then(res => localStorage.setItem("latestMsg", res.message.content));
                receiveMsg(chatMessages);
        }
        // (res => res.json()).then(res => localStorage.setItem(latestMsg, res))
        // (res => res.json()).then(res => localStorage.setItem("latestMsg", res.message.content));
        return (
          <>
            <div className='App'>
              <div style={{position:"relative", height:"800px", width:"700px"}}>
                <MainContainer>
                  <ChatContainer>
                    <MessageList
                    typingIndicator={typing ? <TypingIndicator content = "JumboGPT is typing..." /> : null}>
                      {messages.map((message, i) => {
                        return <Message key={i} model={message} />
                      })}
                    </MessageList>
                    <MessageInput placeholder = "Type message here..." onSend={handleSend}/>
                  </ChatContainer>
                </MainContainer>
      
              </div>
              
            </div>
          </>
        )
};

export default Dashboard;
