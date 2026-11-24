// --- DOM ELEMENTS ---
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const fileUpload = document.getElementById('file-upload');
const fileNameDisplay = document.getElementById('file-name');
const clearChatBtn = document.getElementById('clear-chat');

// Tabs
const tabChat = document.getElementById('tab-chat');
const tabBuilder = document.getElementById('tab-builder');
const chatUI = document.getElementById('chat-ui');
const builderUI = document.getElementById('builder-ui');

// Builder
const generateBtn = document.getElementById('generate-btn');
const builderStatus = document.getElementById('builder-status');

let chatHistory = [];
let uploadedFileContent = null;

// --- TAB SWITCHING ---
tabChat.addEventListener('click', () => {
    tabChat.classList.add('active');
    tabBuilder.classList.remove('active');
    chatUI.classList.add('active');
    builderUI.classList.remove('active');
});

tabBuilder.addEventListener('click', () => {
    tabBuilder.classList.add('active');
    tabChat.classList.remove('active');
    builderUI.classList.add('active');
    chatUI.classList.remove('active');
});

// --- CHAT LOGIC ---
userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

fileUpload.addEventListener('change', async function() {
    if (this.files.length > 0) {
        const file = this.files[0];
        fileNameDisplay.textContent = `Reading ${file.name}...`;
        
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/upload', { method: 'POST', body: formData });
            const data = await response.json();
            
            if (data.content) {
                uploadedFileContent = `[FILE UPLOADED: ${data.filename}]\n\n${data.content}`;
                fileNameDisplay.textContent = `${file.name} attached`;
            } else {
                fileNameDisplay.textContent = `Error: ${data.error}`;
                uploadedFileContent = null;
            }
        } catch (error) {
            fileNameDisplay.textContent = `Upload failed`;
        }
    }
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

async function sendMessage() {
    let text = userInput.value.trim();
    if (!text) return;

    if (uploadedFileContent) {
        text = uploadedFileContent + "\n\nUser Question: " + text;
    }

    appendMessage('user', text);
    userInput.value = '';
    userInput.style.height = 'auto';
    uploadedFileContent = null;
    fileNameDisplay.textContent = '';
    fileUpload.value = '';

    const aiMessageDiv = appendMessage('ai', 'Analyzing request...');

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, history: chatHistory })
        });
        
        const data = await response.json();
        
        if (data.reply) {
            aiMessageDiv.innerHTML = marked.parse(data.reply);
            hljs.highlightAll(); // Syntax highlighting
            chatHistory.push({ role: 'user', content: text });
            chatHistory.push({ role: 'assistant', content: data.reply });
        } else {
            aiMessageDiv.innerHTML = `<span style="color: #ff4444;">Error: ${data.error}</span>`;
        }
    } catch (error) {
        aiMessageDiv.innerHTML = `<span style="color: #ff4444;">Network Error</span>`;
    }
}

function appendMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.innerHTML = role === 'user' ? '<i class="fa-solid fa-user"></i>' : '<i class="fa-solid fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'content';
    content.textContent = text;
    
    msgDiv.appendChild(avatar);
    msgDiv.appendChild(content);
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    return content;
}

clearChatBtn.addEventListener('click', () => {
    chatContainer.innerHTML = `
        <div class="message ai-message">
            <div class="avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="content">Workspace cleared. Ready for new instructions.</div>
        </div>
    `;
    chatHistory = [];
});

// --- WEBSITE BUILDER LOGIC ---
generateBtn.addEventListener('click', async () => {
    const projectName = document.getElementById('project-name').value.trim() || 'generated_site';
    const prompt = document.getElementById('builder-prompt').value.trim();

    if (!prompt) {
        alert("Please describe the website you want to generate.");
        return;
    }

    builderStatus.classList.remove('hidden');
    builderStatus.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> AI is writing code and packaging files... (Wait 1-2 mins)`;
    generateBtn.disabled = true;

    try {
        const response = await fetch('/generate_website', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, project_name: projectName })
        });

        const data = await response.json();

        if (data.status === 'success') {
            builderStatus.innerHTML = `
                <span style="color: var(--accent);">Success!</span> ${data.message}<br>
                <a href="${data.download_url}" class="download-link" download><i class="fa-solid fa-download"></i> Download ZIP</a>
            `;
        } else {
            builderStatus.innerHTML = `<span style="color: #ff4444;">Error:</span> ${data.error}`;
        }
    } catch (error) {
        builderStatus.innerHTML = `<span style="color: #ff4444;">Network Error:</span> ${error}`;
    } finally {
        generateBtn.disabled = false;
    }
});
