
import React from 'react';
import '../styles/Comment.css';

function Comment({ user, text }) {
  return (
    <div className="comment">
      <p className="comment-user">{user}</p>
      <p className="comment-text">{text}</p>
    </div>
  );
}

export default Comment;
