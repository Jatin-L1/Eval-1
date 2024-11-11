</head>
<body>

<h1>🌐 SecureX - Real-Time Encrypted Chat Platform</h1>

<p>
  <span class="badge blue">SecureX v1.0</span>
  <span class="badge blue">React 17.x</span>
  <span class="badge orange">Firebase 9.x</span>
  <span class="badge green">EmailJS Secure</span>
</p>

<p>Welcome to <strong>SecureX</strong>, a secure, real-time chat application designed to provide a seamless and highly secure communication experience. Built with <strong>React</strong>, <strong>Firebase</strong>, and <strong>EmailJS</strong>, SecureX offers encrypted communication, session locking, and OTP-based access to keep conversations private and secure.</p>

<h2>🌟 Features</h2>
<ul>
  <li>🔒 <strong>Real-time Encrypted Chat</strong> - Provides a secure chat environment with end-to-end encryption.</li>
  <li>🔑 <strong>Session Locking</strong> - Users can lock their chat sessions with an OTP-based mechanism.</li>
  <li>📧 <strong>OTP-based Access Control</strong> - Securely shares access with participants using OTPs sent via email.</li>
  <li>📊 <strong>User Authentication & Authorization</strong> - Uses Firebase for secure user authentication.</li>
  <li>🛠 <strong>Password Generation & Encryption</strong> - Ensures strong password security for session locks.</li>
  <li>🌐 <strong>Responsive Design</strong> - Modern interface optimized for all devices.</li>
</ul>

<h2>🚀 Getting Started</h2>

<h3>Prerequisites</h3>
<p>Ensure you have the following installed:</p>
<ul>
  <li>Node.js >= 14.x</li>
  <li>npm or yarn</li>
</ul>

<h3>Installation</h3>
<ol>
  <li><strong>Clone the Repository</strong>
    <pre><code>git clone https://github.com/Jatin-L1/Eval-1.git
cd Eval-1</code></pre>
  </li>
  <li><strong>Install Dependencies</strong>
    <pre><code># For the frontend
cd securex-frontend
npm install

# For the backend (if applicable)
cd ../backend
npm install</code></pre>
  </li>
  <li><strong>Setup Firebase</strong>
    <p>Go to the <a href="https://console.firebase.google.com/">Firebase Console</a>, create a project, and enable <strong>Firestore</strong> and <strong>Authentication</strong>. Copy your Firebase configuration and add it to <code>firebaseConfig.js</code>.</p>
  </li>
  <li><strong>Setup EmailJS</strong>
    <p>Sign up at <a href="https://www.emailjs.com/">EmailJS</a> and create a service and template. Initialize EmailJS with your Public Key and Template ID in <code>ChatDashboard.jsx</code>.</p>
  </li>
  <li><strong>Start the Application</strong>
    <pre><code># Frontend
npm start

# Backend (optional)
npm run server</code></pre>
  </li>
</ol>

<h2>📚 Project Structure</h2>
<pre><code>📂 Eval-1
├── 📂 securex-frontend      # Frontend of the application
│   ├── 📂 public            # Static assets
│   ├── 📂 src               # Source files
│   │   ├── 📂 components    # React components
│   │   ├── 📂 assets        # Images and styles
│   │   └── firebaseConfig.js  # Firebase configuration
├── 📂 securex-backend       # Backend of the application (optional)
│   ├── server.js            # Server setup
│   └── routes               # API routes
└── README.md                # Project documentation</code></pre>

<h2>📜 Algorithm Overview</h2>

<h3>🔑 Password Generation for Chat Locking</h3>
<p>SecureX uses cryptographically secure pseudorandom number generation to create strong passwords for session locking.</p>

<h3>🔐 Encryption & Decryption</h3>
<p>Uses AES encryption to ensure session passwords are secure during storage and transmission.</p>

<h3>📧 OTP Distribution via EmailJS</h3>
<p>OTP-based access control for session locking, with OTPs sent securely via EmailJS.</p>

<h3>🔓 Session Locking</h3>
<p>Users can lock/unlock chat sessions, keeping sensitive conversations private even on shared devices.</p>

<h2>🔧 Built With</h2>
<ul>
  <li><strong>React</strong> - Frontend framework</li>
  <li><strong>Firebase</strong> - Real-time database, authentication, and storage</li>
  <li><strong>EmailJS</strong> - For OTP-based email distribution</li>
  <li><strong>Bootstrap</strong> - For a responsive UI</li>
</ul>

<h2>🛡️ Security Considerations</h2>
<ul>
  <li><strong>Firebase Authentication</strong> - Only authenticated users can access the platform.</li>
  <li><strong>Encrypted Chat Sessions</strong> - AES encryption protects chat content.</li>
  <li><strong>Secure OTP Transmission</strong> - EmailJS ensures OTPs are transmitted securely.</li>
</ul>

<h2>📈 Future Enhancements</h2>
<ul>
  <li>Multi-Factor Authentication (MFA)</li>
  <li>Automated Key Management</li>
  <li>Real-time Suspicious Activity Alerts</li>
</ul>

<h2>🤝 Contributing</h2>
<p>We welcome contributions to SecureX! Submit issues and pull requests to help improve the project.</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch for your feature.</li>
  <li>Commit your changes and submit a pull request.</li>
</ol>

<h2>📜 License</h2>
<p>This project is licensed under the MIT License - see the <code>LICENSE</code> file for details.</p>

<h2>🧑‍💻 About the Developers</h2>
<p>SecureX is developed by:</p>
<ul>
  <li>Jatin Sharma</li>
  <li>Jeeya Sharma</li>
  <li>Ishaan Simran Tuli</li>
  <li>Hardik Goyal</li>
</ul>

<p><em>SecureX - Bringing you secure, encrypted real-time communication, where privacy meets functionality!</em></p>

</body>
</html>
