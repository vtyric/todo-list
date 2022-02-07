import React from 'react';

const ItemStatusFilter = () => {
    return (
        <div>
            <button type="button"
                    className="btn btn-success">
                All
            </button>
            <button type="button"
                    className="btn btn-outline-secondary">
                Active
            </button>
            <button type="button" className="btn btn-outline-secondary">
                Done
            </button>
        </div>
    );
};

export default ItemStatusFilter;