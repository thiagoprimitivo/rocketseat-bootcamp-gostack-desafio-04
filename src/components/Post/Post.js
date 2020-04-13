import React from 'react';

import Comment from '../Comment/Comment';

import './Post.css';

function Post({ data }) {
  return (
    <div className="post">
      <div className="user-post">
        <img src={ data.author.avatar } className="image-user-post" />
        <div className="user-name">
          <span className="name">{ data.author.name }</span>
          <span className="date-post">{ data.date }</span>
        </div>
      </div>
      <p className="post-text">{ data.content }</p>
      <hr />
      { data.comments.map(comment => <Comment key={comment.id} data={comment} />) }
    </div>
  );
}

export default Post;