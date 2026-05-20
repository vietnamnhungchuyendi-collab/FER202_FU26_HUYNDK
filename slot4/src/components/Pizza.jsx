import React from 'react';

function Pizza({ pizza }) {
  return (
    <div className="card h-100">
      <img
        src={pizza.imageUrl}
        className="card-img-top"
        alt={pizza.name}
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>

        <p className="card-text">{pizza.description}</p>

        <button className="btn btn-secondary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Pizza;