import React, { useState } from 'react';
import '../assets/ChatDashboard.css';

const ChatDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="main">
      <div className="dashboard-container">
        <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`} id="sidebar">
          <div className="sidebar-header">
            <input
              type="text"
              id="sidebarSearch"
              className="form-control"
              placeholder="Search contacts..."
            />
            <button id="toggleSidebar" className="btn btn-secondary" onClick={toggleSidebar}>
              <i className="fas fa-bars" />
            </button>
          </div>
          <ul className="nav flex-column user-list" id="userList">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <img src="./Images/defaultImage.jpg" alt="Avatar" className="avatar" />
                <span className="user-name">John Doe</span>
                <span className="status-indicator online" />
                <span className="badge badge-danger unread-messages">2</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="user_profile_container">
          <div className="side_nav">
            <div className="side_nav_contents">
              <div className="profile_pic">
                <img src="./Images/defaultImage.jpg" alt="Profile" />
              </div>
              <div className="bottom_nav">
                <div className="profile">
                  <a href="User_Profile.html">
                    <i className="fa-regular fa-user" />
                  </a>
                </div>
                <div className="chats">
                  <a href="UserDashboard.html">
                    <i className="fa-regular fa-comment" />
                  </a>
                </div>
                <div className="logout">
                  <a href="SignIn.html">
                    <i className="fa-solid fa-right-from-bracket" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content" id="mainContent">
            <div className="header">
              <div className="user-info">
                <img
                  src="./Images/defaultImage.jpg"
                  alt="Profile"
                  className="user-img"
                  width="40px"
                  height="40px"
                />
                <span style={{ color: 'black' }}>Sharma</span>
              </div>
            </div>
            <div className="chat-container">
              <div className="chat-area" id="chatArea">
                <div className="chat-message" id="messages"></div>
              </div>
              <div className="message-input">
                <input
                  type="text"
                  id="messageInput"
                  className="form-control"
                  placeholder="Write something..."
                />
                <button className="btn btn-primary" id="sendButton">
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;