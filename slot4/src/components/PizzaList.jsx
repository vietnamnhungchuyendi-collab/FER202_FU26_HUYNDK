import React from 'react';
import { pizzaDatas } from '../data/pizzaData';
import Pizza from './Pizza';

function PizzaList() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {pizzaDatas.map((p) => (
          <div className="col-md-4" key={p.id}>
            <Pizza pizza={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaList;