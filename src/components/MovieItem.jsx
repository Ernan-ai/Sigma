import React, { useState } from 'react';

const MovieItem = ({ movie }) => {
  const [watched, setWatched] = useState(false);
  const [likeStatus, setLikeStatus] = useState(null);

  const toggleWatched = () => {
    setWatched(!watched);
  };

  const handleLike = () => {
    setLikeStatus(likeStatus === 'like' ? null : 'like');
  };

  const handleDislike = () => {
    setLikeStatus(likeStatus === 'dislike' ? null : 'dislike');
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <button onClick={toggleWatched}>
        {watched ? 'Watched' : 'Unwatched'}
      </button>

      {watched && (
        <div className="like-buttons">
          <button onClick={handleLike} className={likeStatus === 'like' ? 'active' : ''}>
            <img className='sigma' src='https://www.svgrepo.com/show/5414/like.svg'></img>
          </button>
          <button onClick={handleDislike} className={likeStatus === 'dislike' ? 'active' : ''}>
            g
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
