/**
 * This file renders the product reviews with stars
 *
 */
import React from 'react';


const ProductReviews = ({ reviews }) => {
    const { average_rating, number_of_reviews } = reviews;
    const starTotal = 5;

    const percentage = (average_rating/starTotal) * 100;

    return (
        <>
            <div className="stars-outer">
                <div className="stars-inner" style={{width: `${percentage}%`}}></div>
            </div>
            ({number_of_reviews})
            <span>Read Reviews</span>
        </>
    );



}

// Export out the React Component
export default ProductReviews;