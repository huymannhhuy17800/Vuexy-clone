import React, { useState } from "react";
import "./styles.scss";
import { getImageUrl } from "../../../utils.js";
export const User = () => {
  const [itemOpen, setItemOpen] = useState(false);
  return (
    <nav className="navbar" id="vertical-menu">
      <div className="logo">
        <img src={getImageUrl("vuexy-logo.png")} id="logo1" />
        <h3>Vuexy</h3>
      </div>
      <ul className="dashboard">
        <li className="nav-item">
          <div className="li-div">
            <img
              src={getImageUrl("nav/smart-home.svg")}
              alt="home-icon"
              id="icon"
            />
            <span>Dashboard</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </div>
        </li>
        <li className="nav-item">
          <div className="li-div">
            <img
              src={getImageUrl("nav/layout-sidebar.svg")}
              alt="layout-icon"
              id="icon"
            />
            <span>Layouts</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </div>
        </li>
      </ul>
      {/* ------------------- */}
      <div className="application-section">
        <ul className="application">
          <p>Application</p>
          <li className="nav-item">
            <img src={getImageUrl("nav/cart.svg")} alt="cart-icon" id="icon" />
            <span>eCommerce</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </li>
          <li className="nav-item">
            <img src={getImageUrl("nav/book.svg")} alt="book-icon" id="icon" />
            <span>Academy</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </li>
          <li className="nav-item">
            <img
              src={getImageUrl("nav/truck.svg")}
              alt="truck-icon"
              id="icon"
            />
            <span>Logistics</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </li>
          <li className="nav-item">
            <img
              src={getImageUrl("nav/users.svg")}
              alt="users-icon"
              id="icon"
            />
            <span>Users</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </li>
          <li className="nav-item">
            <img src={getImageUrl("nav/mail.svg")} alt="mail-icon" id="icon" />
            <span>Email</span>
          </li>
          <li className="nav-item">
            <img src={getImageUrl("nav/chat.svg")} alt="chat-icon" id="icon" />
            <span>Chat</span>
          </li>
          <li className="nav-item">
            <img
              src={getImageUrl("nav/calendar.svg")}
              alt="calendar-icon"
              id="icon"
            />
            <span>Calendar</span>
          </li>
          <li className="nav-item">
            <img src={getImageUrl("nav/copy.svg")} alt="copy-icon" id="icon" />
            <span>Kanban</span>
          </li>
          <li className="nav-item">
            <img
              src={getImageUrl("nav/file-dollar.svg")}
              alt="file-dollar-icon"
              id="icon"
            />
            <span>Invoice</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </li>
          <li className="nav-item">
            <img
              src={getImageUrl("nav/settings.svg")}
              alt="settings-icon"
              id="icon"
            />
            <span>Roles & Permissions</span>
            <img
              className="chevron"
              src={getImageUrl("nav/chevron-right.svg")}
              alt="chevron-right"
              id="chevron"
            />
          </li>
        </ul>
      </div>
      {/* ------------------- */}
      <ul className="pages">
        <p>Pages</p>
        <li className="nav-item">
          <img src={getImageUrl("nav/file.svg")} alt="file-icon" id="icon" />
          <span>Pages</span>
          <img
            className="chevron"
            src={getImageUrl("nav/chevron-right.svg")}
            alt="chevron-right"
            id="chevron"
          />
        </li>
        <li className="nav-item">
          <img src={getImageUrl("nav/lock.svg")} alt="lock-icon" id="icon" />
          <span>Authentications</span>
          <img
            className="chevron"
            src={getImageUrl("nav/chevron-right.svg")}
            alt="chevron-right"
            id="chevron"
          />
        </li>
        <li className="nav-item">
          <img src={getImageUrl("nav/forms.svg")} alt="forms-icon" id="icon" />
          <span>Wizard Examples</span>
          <img
            className="chevron"
            src={getImageUrl("nav/chevron-right.svg")}
            alt="chevron-right"
            id="chevron"
          />
        </li>
        <li className="nav-item">
          <img
            src={getImageUrl("nav/square.svg")}
            alt="square-icon"
            id="icon"
          />
          <span>Modal Examples</span>
        </li>
      </ul>
    </nav>
  );
};
