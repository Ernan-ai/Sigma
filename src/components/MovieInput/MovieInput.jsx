import React from 'react';
import './MovieInput.css';

const MovieInput = ({ movieName, setMovieName, handleAddOrEditMovie, editingIndex, handleCancelEditing }) => {
  return (
    <div className="movie-input">
      <input
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Movie name"
      />
      <button onClick={handleAddOrEditMovie}>{editingIndex !== null ? "Save" : "Add"}</button>
      {editingIndex !== null && <button onClick={handleCancelEditing}>Cancel</button>}
    </div>
  );
};

export default MovieInput;
