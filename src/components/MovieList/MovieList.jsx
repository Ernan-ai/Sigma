import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, handleEditMovie, handleDeleteMovie, toggleWatched, setLikeStatus }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie, index) => (
        <li key={index} className="movie-item">
          <span className={movie.watched ? "watched" : ""}>{movie.name}</span>

          <button onClick={() => toggleWatched(index)}>
            {movie.watched ? "Remove watched status" : "Watched"}
          </button>

          {movie.watched && (
            <div className="like-buttons">
              <button onClick={() => setLikeStatus(index, 'like')} className={movie.like === 'like' ? 'active' : ''}>
              <img className='sigma' src='https://www.svgrepo.com/show/5414/like.svg'></img>
              </button>
              <button onClick={() => setLikeStatus(index, 'dislike')} className={movie.like === 'dislike' ? 'active' : ''}>
              <img className='sigma' src='https://www.svgrepo.com/show/75824/dislike.svg'></img>
              </button>
            </div>
          )}

          <button onClick={() => handleEditMovie(index)}>edit</button>
          <button onClick={() => handleDeleteMovie(index)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
