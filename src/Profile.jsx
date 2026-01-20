import "./Profile.css";
import { FaUserShield, FaPhoneAlt, FaEnvelope, FaIdBadge } from "react-icons/fa";
import profileimage from "./assets/image/profile image.png";

const Profile = () => {
  return (
    <div className="dashboard">
  
    
      {/* MAIN CONTENT */}
      <main className="content">
        <div className="grid">

          {/* PROFILE CARD */}
          <div className="card profile-card">
           <img src={profileimage} alt="profile image" className="fm-profileimage" />
            <h3>Yash Ghori</h3>
            <p>Ahmedabad, Gujarat<br />India</p>

            <div className="info">
              <div className="role">
                <FaUserShield className="icon role-icon" />
                <span>Administrator</span>
              </div>

              <div className="details">
                <div className="row">
                  <FaPhoneAlt className="icon" />
                  <span>+91 7048144030</span>
                </div>

                <div className="row">
                  <FaEnvelope className="icon" />
                  <span>yghori@asite.com</span>
                </div>

                <div className="row">
                  <FaIdBadge className="icon" />
                  <span>PDT - I</span>
                </div>
              </div>
            </div>
          </div>

          {/* EDIT PROFILE */}
          <div class="profile-form">
            <h2>Edit Profile</h2>

            <div class="form-grid">
              <div class="field">
                <label>First Name</label>
                <input type="text" value="Yash" />
              </div>

              <div class="field">
                <label>Last Name</label>
                <input type="text" value="Ghori" />
              </div>

              <div class="field full">
                <label>Email</label>
                <input type="email" value="yghori@asite.com" />
              </div>

              <div class="field">
                <label>Phone Number</label>
                <input type="text" value="8023456789" />
              </div>

              <div class="field">
                <label>Password</label>
                <input type="password" placeholder="Change Password" />
              </div>

              <div class="field">
                <label>Nationality</label>
                <select>
                  <option>India</option>
                </select>
              </div>

              <div class="field">
                <label>Designation</label>
                <select>
                  <option>UI Intern</option>
                </select>
              </div>
            </div>

            <button class="save-btn">Save</button>
          </div>


          {/* WORK DONE */}
          <div className="card stats-card">
            <div className="stats-header">
              <h4>Total work done</h4>
              <span className="badge">This Week</span>
            </div>

            <div className="circle">
              <span>5w : 2d</span>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
};

export default Profile;
