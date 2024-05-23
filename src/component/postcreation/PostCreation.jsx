import React, { useState } from 'react';
import './PostCreation.css';

const PostCreation = ({ onClose, onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setImage(file);
      setError('');
    } else {
      setError('Please upload a valid JPG or PNG image.');
    }
  };

  const handleSubmit = () => {
    if (!title || !image) {
      setError('Please provide both title and image.');
      return;
    }

    const newPost = {
      id: new Date().getTime(),
      title,
      image: URL.createObjectURL(image),
      likes: 0,
    };

    onCreatePost(newPost);
    onClose();
  };

  return (
    <div className="post-creation-backdrop">
      <div className="post-creation-dialog">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Create Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleImageChange}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleSubmit}>Post</button>
      </div>
    </div>
  );
};

export default PostCreation;
