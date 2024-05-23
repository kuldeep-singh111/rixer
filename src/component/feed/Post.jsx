import React, { useState } from 'react';
import './Post.css';
import { FaHeart, FaComment } from 'react-icons/fa';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes !== undefined ? post.likes : 0);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="post">
      <img src={post.webformatURL || post.image} alt={post.tags || post.title} />
      <h2>{post.tags || post.title}</h2>
      <div className="post-actions">
        <div className="like-section" onClick={handleLike}>
          <FaHeart className={`like-icon ${liked ? 'liked' : ''}`} />
          <span>{likes}</span>
        </div>
        <div className="comment-section" onClick={() => setShowComments(!showComments)}>
          <FaComment className="comment-icon" />
        </div>
      </div>
      {showComments && (
        <div className="comments">
          {comments.map((cmt, index) => (
            <p key={index}>{cmt}</p>
          ))}
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
