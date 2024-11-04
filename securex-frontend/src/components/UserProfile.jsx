import React, { useState, useEffect } from 'react';
import '../assets/UserProfile.css';

const UserProfile = () => {
  const [username, setUsername] = useState('-None-');
  const [email, setEmail] = useState('-None-');
  const [alternateEmail, setAlternateEmail] = useState('-None-');
  const [dob, setDob] = useState('-None-');
  const [password, setPassword] = useState('**********');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [status, setStatus] = useState('Online');
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isAddingAlternateEmail, setIsAddingAlternateEmail] = useState(false);
  const [isEditingDOB, setIsEditingDOB] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [isEditingStatus, setIsEditingStatus] = useState(false); 
  const [selectedStatus, setSelectedStatus] = useState(status); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const usernameParam = params.get('username');
    const emailParam = params.get('email');
    const dateParam = params.get('date');
    const passwordParam = params.get('password');

    if (usernameParam) {
      setUsername(usernameParam);
    }
    if (emailParam) {
      setEmail(emailParam);
    }
    if (dateParam) {
      setDob(dateParam);
    }
    if (passwordParam) {
      setPassword('********');
    }
  }, []);

  const handleEditUsername = () => {
    if (isEditingUsername) {
      const input = document.getElementById('usernameInput').value;
      if (input.trim() !== '') {
        setUsername(input);
        setIsEditingUsername(false);
      } else {
        alert('Username cannot be empty!');
      }
    } else {
      setIsEditingUsername(true);
    }
  };

  const handleEditEmail = () => {
    if (isEditingEmail) {
      const input = document.getElementById('emailInput').value;
      if (input.trim() !== '' && validateEmail(input)) {
        setEmail(input);
        setIsEditingEmail(false);
      } else {
        alert('Please enter a valid email address!');
      }
    } else {
      setIsEditingEmail(true);
    }
  };

  const handleAddAlternateEmail = () => {
    if (isAddingAlternateEmail) {
      const input = document.getElementById('alternateEmailInput').value;
      if (input.trim() !== '' && validateEmail(input)) {
        setAlternateEmail(input);
        setIsAddingAlternateEmail(false);
      } else {
        alert('Please enter a valid email address!');
      }
    } else {
      setIsAddingAlternateEmail(true);
    }
  };

  const handleEditDOB = () => {
    if (isEditingDOB) {
      const input = document.getElementById('dobInput').value;
      if (input.trim() !== '') {
        setDob(formatDate(input));
        setIsEditingDOB(false);
      } else {
        alert('Date of Birth cannot be empty!');
      }
    } else {
      setIsEditingDOB(true);
    }
  };

  const handleChangePassword = () => {
    if (isChangingPassword) {
      const input = document.getElementById('passwordInput').value;
      if (input.trim() !== '') {
        setPassword('**********');
        setIsChangingPassword(false);
      } else {
        alert('Password cannot be empty!');
      }
    } else {
      setIsChangingPassword(true);
    }
  };

  const handleToggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedFile(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  const toggleEditStatus = () => {
    setIsEditingStatus(!isEditingStatus);
  };
  
  const saveStatus = () => {
    setStatus(selectedStatus);
    setIsEditingStatus(false);
  };
  

  return (
    <div className="user_profile_container">
      <div className="side_nav">
        <div className="side_nav_contents">
          <div className="profile_pic">
          <img src={selectedFile || './Images/defaultImage.jpg'} alt="Profile" />
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
      <div className="main_content">
        <div className="welcome_message">
          <h2 id="welcomeMessage">Welcome Back {username}</h2>
          <p id="lastLogin">Last login: {dob !== '-None-' ? dob : 'Not Available'}</p>
        </div>
        <div className="profile_image">
          <div className="main_profile_image">
            <img id="profileImage" src={selectedFile || './Images/defaultImage.jpg'} alt="Profile" />
          </div>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          <button
            type="button"
            className="btn btn-primary"
            id="edit_profile_picture"
            onClick={() => document.getElementById('fileInput').click()}
          >
            Edit Profile Picture
          </button>
        </div>
        <div className="user_info">
          <p id="user_info">Personal Information</p>
          <div className="info_item">
            <div className="items">
              <label htmlFor="username">Username:</label>
              {isEditingUsername ? (
                <input type="text" id="usernameInput" defaultValue={username} />
              ) : (
                <span id="username">{username}</span>
              )}
            </div>
            <button type="button" className="btn btn-sm" onClick={handleEditUsername}>
              {isEditingUsername ? 'Save' : 'Edit Username'}
            </button>
          </div>
          <div className="info_item">
            <div className="items">
              <label htmlFor="email">Email ID:</label>
              {isEditingEmail ? (
                <input type="email" id="emailInput" defaultValue={email} />
              ) : (
                <span id="email">{email}</span>
              )}
            </div>
            <button type="button" className="btn btn-sm" onClick={handleEditEmail}>
              {isEditingEmail ? 'Save' : 'Edit Email ID'}
            </button>
          </div>
          <div className="info_item">
            <div className="items">
              <label htmlFor="alternate_email">Alternate Email:</label>
              {isAddingAlternateEmail ? (
                <input type="email" id="alternateEmailInput" defaultValue={alternateEmail} />
              ) : (
                <span id="alternate_email">{alternateEmail}</span>
              )}
            </div>
            <button type="button" className="btn btn-sm" onClick={handleAddAlternateEmail}>
              {isAddingAlternateEmail ? 'Save' : 'Add Alternate Email ID'}
            </button>
          </div>
          <div className="info_item">
            <div className="items">
              <label htmlFor="DOB">Date of Birth:</label>
              {isEditingDOB ? (
                <input type="date" id="dobInput" defaultValue={dob !== '-None-' ? dob : ''} />
              ) : (
                <span id="DOB">{dob}</span>
              )}
            </div>
            <button type="button" className="btn btn-sm" onClick={handleEditDOB}>
              {isEditingDOB ? 'Save' : 'Edit DOB'}
            </button>
          </div>
        </div>
        <div className="security_settings">
          <p id="security_info">Security Settings</p>
          <div className="info_item">
            <label htmlFor="Password">Password:</label>
            {isChangingPassword ? (
              <input type="password" id="passwordInput" placeholder="Enter new password" />
            ) : (
              <span id="Password">{password}</span>
            )}
            <button type="button" className="btn btn-sm" onClick={handleChangePassword}>
              {isChangingPassword ? 'Save Password' : 'Change Password'}
            </button>
          </div>
          <div className="info_item">
            <label htmlFor="two_factor">Two-Factor Authentication:</label>
            <span id="two_factor">{twoFactorEnabled ? 'Enabled' : 'Disabled'}</span>
            <button type="button" className="btn btn-sm" onClick={handleToggleTwoFactor}>
              {twoFactorEnabled ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
        <div className="chat_info">
          <p id="chat_info">Chat Preferences:</p>
          <div className="info_item">
  <div className="items">
    <label htmlFor="status">Status:</label>
    <span id="statusDisplay">{status}</span>
  </div>
  {isEditingStatus ? (
    <>
      <select id="statusSelect" className="form-control" onChange={handleStatusChange} value={selectedStatus}>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
        <option value="Ghost">Ghost Mode</option>
      </select>
      <button type="button" className="btn btn-sm" onClick={saveStatus}>
        Save Status
      </button>
    </>
  ) : (
    <button type="button" className="btn btn-sm" onClick={toggleEditStatus}>
      Change Status
    </button>
  )}
</div>

          <div className="info_item">
            <div className="items">
              <label htmlFor="notifications">Notifications:</label>
              <span id="notifications">{notificationsEnabled ? 'Enabled' : 'Disabled'}</span>
            </div>
            <button type="button" className="btn btn-sm" onClick={handleToggleNotifications}>
              {notificationsEnabled ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
