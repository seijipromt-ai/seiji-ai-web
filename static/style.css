:root {
    --bg-base: #0a0a0a;
    --bg-surface: #141414;
    --bg-input: #1f1f1f;
    --text-main: #e0e0e0;
    --text-muted: #888888;
    --accent: #00ffcc;
    --accent-hover: #00ccaa;
    --border: #2a2a2a;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    display: flex;
    height: 100vh;
    background-color: var(--bg-base);
    color: var(--text-main);
    font-family: 'Inter', sans-serif;
    overflow: hidden;
}

/* --- SIDEBAR --- */
.sidebar {
    width: 260px;
    background-color: var(--bg-surface);
    border-right: 1px solid var(--border);
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
}

.logo {
    font-size: 20px;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 5px;
    font-family: 'JetBrains Mono', monospace;
}

.model-info {
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 30px;
}

.nav-btn {
    background: transparent;
    border: 1px solid transparent;
    color: var(--text-main);
    text-align: left;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 5px;
    transition: background 0.2s;
}

.nav-btn:hover { background-color: var(--bg-input); }
.nav-btn.active { background-color: rgba(0, 255, 204, 0.1); color: var(--accent); border-color: rgba(0, 255, 204, 0.3); }
.nav-btn i { margin-right: 10px; width: 16px; text-align: center; }

#clear-chat {
    margin-top: auto;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
}
#clear-chat:hover { color: #ff4444; border-color: #ff4444; }

/* --- MAIN CONTENT --- */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
}

.view { display: none; flex: 1; flex-direction: column; height: 100%; }
.view.active { display: flex; }

/* --- CHAT UI --- */
.chat-container {
    flex: 1;
    overflow-y: auto;
    padding: 40px 10%;
}

.message {
    display: flex;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.avatar {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    color: var(--accent);
}

.user-message .avatar { color: var(--text-main); }

.content {
    flex: 1;
    line-height: 1.6;
    font-size: 15px;
}

/* Code Block Styling */
.content pre {
    background-color: var(--bg-surface);
    border: 1px solid var(--border);
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 15px 0;
}

.content code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
}

.input-area {
    display: flex;
    align-items: center;
    padding: 20px 10%;
    background-color: var(--bg-base);
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
}

.icon-btn {
    color: var(--text-muted);
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    transition: color 0.2s;
}
.icon-btn:hover { color: var(--accent); }

#user-input {
    flex: 1;
    background-color: var(--bg-input);
    border: 1px solid var(--border);
    color: var(--text-main);
    padding: 15px;
    border-radius: 8px;
    resize: none;
    outline: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    margin: 0 10px;
    max-height: 200px;
}
#user-input:focus { border-color: var(--accent); }

.send-btn {
    background-color: var(--accent);
    color: var(--bg-base);
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.send-btn:hover { background-color: var(--accent-hover); }

#file-name { font-size: 12px; color: var(--accent); position: absolute; margin-left: 40px; margin-top: -30px;}

/* --- BUILDER UI --- */
.builder-panel {
    max-width: 700px;
    margin: 50px auto;
    padding: 30px;
    background-color: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    width: 90%;
}

.builder-panel h2 { font-size: 24px; margin-bottom: 10px; }
.builder-panel p { color: var(--text-muted); margin-bottom: 25px; font-size: 14px; }

#project-name, #builder-prompt {
    width: 100%;
    background-color: var(--bg-input);
    border: 1px solid var(--border);
    color: var(--text-main);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    font-family: 'Inter', sans-serif;
    outline: none;
}
#project-name:focus, #builder-prompt:focus { border-color: var(--accent); }

.primary-btn {
    width: 100%;
    padding: 15px;
    background-color: var(--accent);
    color: var(--bg-base);
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}
.primary-btn:hover { background-color: var(--accent-hover); }

.status-box {
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--bg-input);
    border: 1px solid var(--border);
    font-size: 14px;
}
.hidden { display: none; }
.download-link {
    display: inline-block;
    margin-top: 10px;
    color: var(--bg-base);
    background-color: var(--accent);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
}
