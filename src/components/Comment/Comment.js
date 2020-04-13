import React from 'react';

import './Comment.css';

function Comment({ data }) {
  return (
    <div className="comment">
        <img src={ data.author.avatar } className="image-user-post" />
        <div className="comment-text">
          <span>
            <strong className="name-in-text">{ data.author.name }</strong>
            { data.content }
          </span>
        </div>
      </div>
  );
}

export default Comment;