import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.scss';
import { projects } from './data'; // Assurez-vous d'importer vos données de projets ici

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim() === '') return;
        
        // Ajoute le message de l'utilisateur à la liste des messages
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');

        // Répondre au message de l'utilisateur
        handleBotResponse(input);
    };

    const handleBotResponse = (userMessage) => {
        // Réponses possibles basées sur les questions
        let botMessage = '';

        if (userMessage.toLowerCase().includes('projet')) {
            botMessage = `Voici quelques-uns de mes projets : ${projects.map(proj => proj.title).join(', ')}`;
        } else if (userMessage.toLowerCase().includes('diplôme')) {
            botMessage = `J'ai obtenu mon diplôme d'ingénieur en informatique à ESPRIT en 2025.`;
        } else {
            botMessage = "Désolé, je ne peux pas répondre à cette question pour le moment.";
        }

        // Ajoute la réponse du bot à la liste des messages
        setTimeout(() => {
            setMessages([...messages, { text: botMessage, sender: 'bot' }]);
        }, 500);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    useEffect(() => {
        // Message d'accueil du bot
        setMessages([{ text: "Bonjour ! Posez-moi des questions sur mes projets ou mon parcours académique.", sender: 'bot' }]);
    }, []);

    return (
        <div className={styles.chatbot}>
            <div className={styles.messageContainer}>
                {messages.map((message, index) => (
                    <div key={index} className={`${styles.message} ${message.sender === 'bot' ? styles.botMessage : styles.userMessage}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Posez une question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSendMessage}>Envoyer</button>
            </div>
        </div>
    );
};

export default Chatbot;
