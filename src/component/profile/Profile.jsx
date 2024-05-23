import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = ({ onClose }) => {
  const [profileData, setProfileData] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        const user = response.data.results[0];

        const profile = {
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          followers: Math.floor(Math.random() * 1000),
          following: Math.floor(Math.random() * 1000),
          totalPosts: Math.floor(Math.random() * 100),
          bio: 'love with kuldeep singh.',
        };

        setProfileData(profile);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-backdrop" onClick={handleClose}>
      <div className={`profile-dialog ${visible ? '' : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>&times;</button>
        <img src={profileData.image} alt="Profile" className="profile-image" />
        <h2>{profileData.name}</h2>
        <p>{profileData.bio}</p>
        <div className="profile-stats">
          <div>
            <span className="profile-stat-number">{profileData.followers}</span>
            <span className="profile-stat-label">Followers</span>
          </div>
          <div>
            <span className="profile-stat-number">{profileData.following}</span>
            <span className="profile-stat-label">Following</span>
          </div>
          <div>
            <span className="profile-stat-number">{profileData.totalPosts}</span>
            <span className="profile-stat-label">Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
