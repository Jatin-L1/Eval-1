import React from 'react'

function Header () {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SecureX Admin Dashboard</title>
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <link rel="stylesheet" href="AdminDashboard.css" />
  <link rel="icon" href="images/Logo.png" type="image/icon type" />
  <div className="dashboard-container">
    {/* Sidebar */}
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="images/Logo.png" alt="SecureX Logo" className="logo-img" />
        <button id="toggleSidebar" className="btn btn-light">
          <i className="fas fa-bars" />
        </button>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i className="fas fa-tachometer-alt" /> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-users" /> User Management
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-chart-line" /> Analytics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-cogs" /> Settings
          </a>
        </li>
      </ul>
    </div>
    {/* Main Content */}
    <div className="main-content">
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="btn btn-light" id="toggleSidebarMobile">
          <i className="fas fa-bars" />
        </button>
        <form className="form-inline ml-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="notificationsDropdown"
              role="button"
              data-toggle="dropdown"
            >
              <i className="fas fa-bell" />
              <span className="badge badge-danger">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                New user registered
              </a>
              <a className="dropdown-item" href="#">
                Server overloaded
              </a>
              <a className="dropdown-item" href="#">
                New comment added
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
            >
              <i className="fas fa-user-circle" /> Admin
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Settings
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="container-fluid mt-4">
        <div className="row">
          {/* User Management Table */}
          <div className="col-lg-8 mb-4">
            <div className="card glassmorphism">
              <div className="card-header glow-text">User Management</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-hover"
                    style={{ color: "white" }}
                  >
                    <thead>
                      <tr>
                        <th>Profile</th>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Registration Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Example Row */}
                      <tr className="interactive-row">
                        <td data-label="Profile">
                          <img
                            src="images/profile2.png"
                            alt="User Profile"
                            className="rounded-circle profile-pic"
                          />
                        </td>
                        <td data-label="Full Name">John Doe</td>
                        <td data-label="Email Address">johndoe@example.com</td>
                        <td data-label="Registration Date">01/01/2022</td>
                        <td data-label="Status">
                          <span className="badge badge-success status-badge">
                            Active
                          </span>
                        </td>
                        <td data-label="Actions" className="action-icons">
                          <button className="btn btn-icon">
                            <i className="fas fa-eye" />
                          </button>
                          <button className="btn btn-icon">
                            <i className="fas fa-edit" />
                          </button>
                          <button className="btn btn-icon">
                            <i className="fas fa-trash-alt" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Analytics Section */}
          <div className="col-lg-4 mb-4">
            <div className="card glassmorphism">
              <div className="card-header glow-text">Analytics Overview</div>
              <div className="card-body">
                <canvas id="analyticsChart" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Metrics */}
      <div className="row">
        <div className="col-md-4">
          <div className="card glassmorphism mb-4">
            <div className="card-body text-center">
              <h5 className="card-title glow-text">Total Users</h5>
              <h3 className="neon-number">2,345</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card glassmorphism mb-4">
            <div className="card-body text-center">
              <h5 className="card-title glow-text">Active Sessions</h5>
              <h3 className="neon-number">456</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card glassmorphism mb-4">
            <div className="card-body text-center">
              <h5 className="card-title glow-text">Server Load</h5>
              <h3 className="neon-number">72%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}

export default AdminDashboard