import React from "react";
import { FaBell, FaUser, FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import "./NotificationManagement.css";
import image from './assets/image/Avatar.png';
import image2 from './assets/image/Avatar2.png';
import image3 from './assets/image/Avatar3.png';
import read from './assets/image/Mark as read.png';
import image4 from './assets/image/Image.png';

const NotificationManagement = () => {

  return (
    <section className="nm-content">

      {/* Notifications List */}
      <div className="nm-card nm-notifications">
        <h3 style={{ color: "red" }}>Notifications</h3>
         <span className="nm-time"> Bender Rodriguez. DesignDrop.Mar 4</span>

        <ul>
          <li className="nm-item">
            <div className="nm-left">
              <span>
               <img src={image} alt="image" className="image" size={22}/> Assignments: 5 items overdue</span>
              <span className="nm-time">Basecap.Mar 3</span>
            </div>
            <div className="nm-right">
              <img src={read} alt="read" className="read" size={22}/>
              <FaRegEdit className="nm-icon" />
              <FaTrashAlt className="nm-icon" />
            </div>
          </li>

          <li className="nm-item">
            <div className="nm-left">
              <span> <img src={image2} alt="image2" className="image2" size={22}/>  Overdue by a week: Schedule first Meeting between CS,Product, and Enginerring </span>
              <span className="nm-time">Basecamp . DesignDrop.Feb24</span>
            </div>
            <div className="nm-right">
              <img src={read} alt="read" className="read" size={22}/>
              <FaRegEdit className="nm-icon" />
              <FaTrashAlt className="nm-icon" />
            </div>
          </li>

          <li className="nm-item">
            <div className="nm-left">
              <span> <img src={image2} alt="image2" className="image2" size={22}/> Overdue by a week: Create schedule for meeting and deadlines </span>
              <span className="nm-time">Basecamp . DesignDrop.Feb24</span>
            </div>
            <div className="nm-right">
              <img src={read} alt="read" className="read" size={22}/>
              <FaRegEdit className="nm-icon" />
              <FaTrashAlt className="nm-icon" />
            </div>
          </li>

          <li className="nm-item">
            <div className="nm-left">
              <span> <img src={image2} alt="image2" className="image2" size={22}/> Overdue by a week: Landing Page </span>
              <span className="nm-time">Basecamp . DesignDrop.Feb22</span>
            </div>
            <div className="nm-right">
              <img src={read} alt="read" className="read" size={22}/>
              <FaRegEdit className="nm-icon" />
              <FaTrashAlt className="nm-icon" />
            </div>
          </li>

          <li className="nm-item">
            <div className="nm-left">
              <span> <img src={image3} alt="image3" className="image3" size={22}/> New in Basecamp:Steps</span>
              <span className="nm-time">Announcement from Basecamp .Feb 15</span>
            </div>
            <div className="nm-right">
              <img src={read} alt="read" className="read" size={22}/>
              <FaRegEdit className="nm-icon" />
              <FaTrashAlt className="nm-icon" />
            </div>
          </li>

           <li className="nm-item">
            <div className="nm-left">
              <span> <img src={image2} alt="image2" className="image2" size={22}/>Due Soon: Sing In Page</span>
              <span className="nm-time">Basecamp . DesignDrops .Feb 10</span>
            </div>
            <div className="nm-right">
              <img src={read} alt="read" className="read" size={22}/>
              <FaRegEdit className="nm-icon" />
              <FaTrashAlt className="nm-icon" />
            </div>
          </li>

           <li className="nm-item">
            <div className="nm-left">
              <span> <img src={image2} alt="image2" className="image2" size={22}/>Overdue:Create list of UI components</span>
              <span className="nm-time">Basecamp . DesignDrops .Feb 9</span>
            </div>
            <div className="nm-right">
              <img src={read} alt="read" className="read" size={22}/>
              <FaRegEdit className="nm-icon" />
              <FaTrashAlt className="nm-icon" />
            </div>
          </li>

        </ul>

        <div className="nm-showmore">Show More</div>
      </div>

      {/* Notification Form */}
      <div className="nm-card nm-form">
        <div className="nm-fields">
          <img src={image4} alt="image4" className="image4" />
          <input type="text" placeholder="Title" />
          <textarea placeholder="Description"></textarea>

          <div className="nm-row">
            <div>
              <label style={{ color: "black" }}>From</label>
              <input type="datetime-local"  style={{ color: "black" }}/>
            </div>

            <div>
              <label style={{ color: "black" }}>To</label>
              <input type="datetime-local"  style={{ color: "black" }}/>
            </div>
          </div>

          <div className="nm-row">
            <label style={{ color: "black" }}>Target Audience</label>
            <select style={{ color: "black" }}>
              <option style={{ color: "black" }}>User Name / Group / Location</option>
            </select>
          </div>

          <div className="nm-checkboxes">

            <div>
              <strong>Target Specific</strong>
              <label><input type="checkbox"/> User</label>
              <label><input type="checkbox"/> Service Provider</label>
              <label><input type="checkbox"/> Franchise</label>
            </div>

            <div>
              <strong>Send via</strong>
              <label><input type="checkbox"/> In App</label>
              <label><input type="checkbox"/> SMS</label>
              <label><input type="checkbox"/> Email</label>
            </div>
          </div>

          <div className="nm-buttons">
            <button className="nm-status" style={{ color: "blue", border: "1px solid blue" }}>Status <IoIosArrowDown style={{ color: "blue" }}/></button>
            <button className="nm-delete">Delete</button>
            <button className="nm-save">Save</button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default NotificationManagement;
