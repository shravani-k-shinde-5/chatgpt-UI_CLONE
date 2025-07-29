import gptLogo from './assets/chatgpt.svg'
import addbtm from './assets/add-30.png'
import msgicon from './assets/message.svg'
import home from './assets/home.svg'
import rocket from './assets/rocket.svg'
import save from './assets/bookmark.svg'
import send from './assets/send.svg'
import chatgpt from './assets/chatgptLogo.svg'
import user from './assets/user-icon.png'  // ✅ Fixed import path

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersidetop">
            <img src={gptLogo} className="logo" alt="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midbtn">
            <img src={addbtm} alt="" className="addbtn" />New Chat
          </button>
          <div className="uppersidebottom">
            <button className="query">
              <img src={msgicon} alt="" />what is programming ?
            </button>
            <button className="query">
              <img src={msgicon} alt="" />what is programming ?
            </button>
          </div>
        </div>

        <div className="lowerside">
          <div className="listitems">
            <img src={home} alt="home" className="listitemimg" />Home
          </div>
          <div className="listitems">
            <img src={save} alt="Saved" className="listitemimg" />Saved
          </div>
          <div className="listitems">
            <img src={rocket} alt="Upgrade" className="listitemimg" />Upgrade To Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat bot">
            <img src={chatgpt} className='chatimg' alt="bot" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa doloribus autem harum accusamus...
            </p>
          </div>
          <div className="chat">
            <img src={user} className='chatimg' alt="user" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa doloribus autem harum accusamus...
            </p>
          </div>
        </div>

        <div className="chatfooter">
          <div className="inp">
            <input type="text" placeholder="Enter text" />
            <button className="send"><img src={send} alt="send" /></button>
          </div>
          
        </div>
        <p>Chatgpt may produce an incorrect information about people ,places ,or facts .Chatgpt AUGUST 2025 version</p>
      </div>
    </div>
  )
}

export default App
