import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FaPlusSquare } from 'react-icons/fa';
import PostCreation from '../postcreation/PostCreation';
import Search from '../search/Search';
import Profile from '../profile/Profile';

const Navbar = ({ onCreatePost }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleCreateClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleSearchClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleProfileClose = () => {
    setShowProfile(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-item" onClick={handleSearchClick}>
        <AiOutlineSearch className="navbar-icon" />
        <span className="navbar-tooltip">Search</span>
      </div>
      {showSearchBox && <Search />}
      <div className="navbar-item" onClick={handleCreateClick}>
        <FaPlusSquare className="navbar-icon" />
        <span className="navbar-tooltip">Create</span>
      </div>
      <div className="navbar-item" onClick={handleProfileClick}>
        <AiOutlineUser className="navbar-icon" />
        <span className="navbar-tooltip">Profile</span>
      </div>
      {showDialog && <PostCreation onClose={handleClose} onCreatePost={onCreatePost} />}
      {showProfile && <Profile onClose={handleProfileClose} />}
    </div>
  );
};

export default Navbar;
