import React, { Component } from 'react';

import './Tweet.css';

import like from '../like.svg';
import api from '../services/api';

export default class Tweet extends Component {

  handleLike = async () => {
    const { tweet } = this.props;
    const { _id } = tweet;

    await api.post(`likes/${_id}`);
  };

  render() {
    const { tweet } = this.props;
    const {author, content, likes} = tweet;


    return (
      <li className="tweet">
        <strong>{author}</strong>
        <p>{content}</p>
        <button type="button"  onClick={this.handleLike}>
          <img src={like} alt="Go Like!" />
          {likes}
        </button>
      </li>
    );
  }
}
