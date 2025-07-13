const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const apiKey = "your API_KEY";
const apiEndpoint = 'https:                                      

sendButton.addEventListener('//api.openai.com/v1/chat/completions';

sendButton.addEventListener('click', async () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user-message');
        userMessageElement.textContent = userMessage;
        chatContainer.appendChild(userMessageElement);
        userInput.value='';

                                     
        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Bearer ${apiKey}
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: userMessage }]
                })
            });

            const data = await response.json();
            const botMessage = data.choices[0].message.content;

                                  
            const botMessageElement = document.createElement('// Display bot message
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('message', 'bot-message');
            botMessageElement.textContent = botMessage;
            chatContainer.appendChild(botMessageElement);

                               
            userInput.value = '// Clear user input
            userInput.value = '';
        } catch (error) {
            console.error('Error:', error);
        }
    }
});