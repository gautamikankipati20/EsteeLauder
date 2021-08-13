/**
 * This file renders the product attributes
 *
 */
import React from 'react';


const ProductAttributes = ({ attributes }) => {

    return (
        <div className="elc-product-attributes">
            {attributes.map(attribute => {
                return (
                    <div className="product-attribute" key={attribute.label}>
                        <h3>{attribute.label}</h3>
                        <p dangerouslySetInnerHTML={{ __html: attribute.content }}></p>
                    </div>
                )
            })}
        </div>
    );



}

// Export out the React Component
export default ProductAttributes;