// JS java.js > sendButton.addEventListener('click') callback

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const apiKey = 'sk-proj-8FHS1IW1sDZwZpp0B4AK3b7mt9BR5nhpEsnPBsM1FdNLzV0mFWVIiFQyHUwvM1'; // Replace with your actual API key
const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

sendButton.addEventListener('click', async () => {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Display user message
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user-message');
        userMessageElement.textContent = userMessage;
        chatContainer.appendChild(userMessageElement);

        userInput.value = ''; // Clear input field after sending

        try {
            // Send request to OpenAI API
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo", // Or another appropriate model
                    messages: [{ role: "user", content: userMessage }]
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data); // Log the full response for debugging

            // Display AI response
            if (data.choices && data.choices[0] && data.choices[0].message) {
                const aiMessage = data.choices[0].message.content;
                const aiMessageElement = document.createElement('div');
                aiMessageElement.classList.add('message', 'ai-message');
                aiMessageElement.textContent = aiMessage;
                chatContainer.appendChild(aiMessageElement);
            } else {
                console.error("Unexpected API response structure:", data);
            }

         } catch (error) {
            console.error('Error fetching from OpenAI API:', error);
            const errorMessageElement = document.createElement('div');
            errorMessageElement.classList.add('message', 'error-message');
            errorMessageElement.textContent = `Error: ${error.message}`;
            chatContainer.appendChild(errorMessageElement);
        }
    });
