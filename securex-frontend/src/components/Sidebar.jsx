// // src/components/Sidebar.jsx
// import React from 'react';
// import '../assets/Sidebar.css';

// const Sidebar = ({ users, onUserSelect }) => {
//   if (!Array.isArray(users) || users.length === 0) {
//     return <div className="no-users-message">No users online</div>;
//   }

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <input
//           type="text"
//           placeholder="Search contacts..."
//           className="form-control"
//         />
//       </div>
//       <ul className="user-list">
//         {users.map((user) => (
//           <li
//             key={user.userId}
//             className="nav-item"
//             onClick={() => onUserSelect(user.userId)}
//           >
//             <img src="./Images/defaultImage.jpg" alt="Avatar" className="avatar_1" />
//             <span className="user-name_1">{user.username}</span>
//             <span className="status-indicator_1 online" />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// src/components/Sidebar.jsx
// src/components/Sidebar.jsx
// src/components/Sidebar.jsx
// src/components/Sidebar.jsx
// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ users, onSelectUser }) => {
  return (
    <div className="sidebar">
      <h3>Online Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
