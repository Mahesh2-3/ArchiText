"use client";

import React, { useEffect, useState } from 'react'
import MessageCard from '../Components/MessageCard'
import { PaperPlane } from '../Helpers/icons';
import ConversationSkeleton from '../Skeletons/ConversationSkeleton';

type MessageType = {
    role: string,
    content: string
}

const Conversation = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [input, setInput] = useState("");
    const [chatLoading, setChatLoading] = useState(false)

    useEffect(() => {

        const fetchMessage = async () => {
            setChatLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const data = [
                {
                    "role": "user",
                    "content": "Hello, how are you?"
                },
                {
                    "role": "assistant",
                    "content": "I'm good! How can I help you today?"
                },
                {
                    "role": "user",
                    "content": "Explain React hooks"
                },
                {
                    "role": "assistant",
                    "content": "React hooks let you use state and lifecycle features in functional components."
                }
            ]
            setMessages(data)
            setChatLoading(false)
        }
        fetchMessage();

    }, [])


    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { role: "user", content: input };
        const assistantMsg = { role: "assistant", content: "This is a dummy response from the assistant." };

        setMessages(prev => [...prev, userMsg, assistantMsg]);
        setInput("");
    };

    return (
        <div className='border h-full bg-(--color-secondary) p-4 flex flex-col'>
            {/* Chat List */}
            <div className='grow overflow-y-auto mb-4'>
                {messages.length === 0 ? (
                    <ConversationSkeleton />
                ) : (
                    <ul className='flex flex-col'>
                        {messages.map(({ content, role }, index) => (
                            <li
                                key={index}
                                className={`w-full flex ${role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <MessageCard content={content} isUser={role === "user"} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className='flex gap-2 shrink-0'>
                <input
                    type="text"
                    value={input}
                    disabled={chatLoading}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className='grow p-3 rounded-lg border border-gray-500 focus:outline-none focus:ring-1 focus:ring-(--color-last) bg-transparent outline-none text-(--text-normal)'
                />
                <button
                    type="submit"
                    disabled={chatLoading}
                    className='px-4 py-3 rounded-lg bg-(--color-last) text-white font-semibold hover:opacity-90 transition cursor-pointer'
                >
                    <PaperPlane />
                </button>
            </form>
        </div>
    )
}

export default Conversation