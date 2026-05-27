import React, { useState } from 'react';
import MyModal from './MyModal';

function Pizza({ pizza }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Helper to render tag badge with matching colors
  const renderTagBadge = (tag) => {
    if (!tag) return null;
    let badgeClass = 'bg-secondary';
    switch (tag.toLowerCase()) {
      case 'sale':
        badgeClass = 'bg-danger';
        break;
      case 'new':
        badgeClass = 'bg-success';
        break;
      case 'best seller':
        badgeClass = 'bg-warning text-dark';
        break;
      case 'hot':
        badgeClass = 'bg-orange text-white'; // Custom orange-red look
        break;
      default:
        break;
    }
    return <span className={`badge ${badgeClass} fs-6 px-3 py-2 rounded-pill shadow-sm`}>{tag}</span>;
  };

  const hasDiscount = pizza.originalPrice && pizza.salePrice && pizza.originalPrice > pizza.salePrice;
  const savings = hasDiscount ? (pizza.originalPrice - pizza.salePrice).toFixed(2) : null;

  return (
    <>
      <div className="card pizza-card h-100 shadow-sm border-0 position-relative">
        {/* Floating badge on list card if tag is present */}
        {pizza.tag && (
          <span 
            className={`position-absolute top-0 start-0 badge m-3 px-3 py-1.5 rounded-pill shadow-sm ${
              pizza.tag.toLowerCase() === 'sale' ? 'bg-danger' : 
              pizza.tag.toLowerCase() === 'new' ? 'bg-success' : 
              pizza.tag.toLowerCase() === 'best seller' ? 'bg-warning text-dark' : 'bg-dark'
            }`}
            style={{ zIndex: 10 }}
          >
            {pizza.tag}
          </span>
        )}

        <img
          src={pizza.imageUrl}
          className="card-img-top pizza-img"
          alt={pizza.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-dark">{pizza.name}</h5>

          <p className="card-text text-muted flex-grow-1">
            {pizza.description}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              {hasDiscount ? (
                <>
                  <span className="text-decoration-line-through text-muted me-2 small">
                    ${pizza.originalPrice.toFixed(2)}
                  </span>
                  <span className="fw-bold text-danger fs-5">
                    ${pizza.salePrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="fw-bold text-dark fs-5">
                  ${pizza.price.toFixed(2)}
                </span>
              )}
            </div>

            <button className="btn btn-dark btn-sm px-3 py-1.5 rounded-pill shadow-sm" onClick={handleOpen}>
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Pizza Details Modal */}
      <MyModal
        show={showModal}
        onClose={handleClose}
        title="Pizza Details"
        footer={
          <div className="w-100 d-flex justify-content-between align-items-center">
            <span className="text-muted small">Freshly baked upon order</span>
            <button className="btn btn-dark px-4 py-2 rounded-pill shadow-sm" onClick={handleClose}>
              Close Details
            </button>
          </div>
        }
      >
        <div className="row g-4">
          <div className="col-md-5">
            <div className="position-relative overflow-hidden rounded-4 shadow-sm" style={{ maxHeight: '300px' }}>
              <img
                src={pizza.imageUrl}
                alt={pizza.name}
                className="w-100 h-100 object-fit-cover"
                style={{ minHeight: '220px', objectFit: 'cover', transition: 'transform 0.5s' }}
              />
            </div>
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h3 className="fw-bold text-dark m-0">{pizza.name}</h3>
                {renderTagBadge(pizza.tag)}
              </div>

              <div className="mb-3">
                {hasDiscount ? (
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-decoration-line-through text-muted fs-5">
                      ${pizza.originalPrice.toFixed(2)}
                    </span>
                    <span className="fw-bold text-danger fs-3">
                      ${pizza.salePrice.toFixed(2)}
                    </span>
                    <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-2.5 py-1 small">
                      Save ${savings}
                    </span>
                  </div>
                ) : (
                  <span className="fw-bold text-dark fs-3">
                    ${pizza.price.toFixed(2)}
                  </span>
                )}
              </div>

              <h6 className="fw-semibold text-secondary mb-1">Description</h6>
              <p className="text-muted mb-3 lh-base">
                {pizza.description}
              </p>

              <h6 className="fw-semibold text-secondary mb-1">Details & Ingredients</h6>
              <ul className="text-muted small ps-3 mb-0">
                <li>Made with premium high-gluten flour and slow-fermented dough</li>
                <li>Topped with imported extra virgin olive oil and hand-crushed tomatoes</li>
                <li>Standard 12-inch size, serves 2-3 people</li>
              </ul>
            </div>
          </div>
        </div>
      </MyModal>
    </>
  );
}

export default Pizza;