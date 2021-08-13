/**
 * This file renders the product details
 *
 */
import React from 'react';
// import { SourceMapDevToolPlugin } from 'webpack';

const ProductDetails = ({description, how_to_use}) => {

        return (
            <div>
            <div className="elc-product-details">
                <h2>Product Details</h2>
                <div className="elc-product-details-content" dangerouslySetInnerHTML={{ __html: description }}></div>
                 </div>
            <div className="elc_how_to_use">
                <h3>How To Use</h3>
                <div className ="elc-howtouse-content" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            <div className="elc_ingredients">
                <h4>Ingredients</h4>
                <div className="elc_ingredients_content"  dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            </div>

        );

}

// const how_to_use = (description) =>{
//     return(
//         <div className="elc-howtouse">
//             <h3>How To Use</h3>
//             <div className ="elc-howtouse-content" dangerouslySetInnerHTML={{ __html: description }}></div>
//         </div>
//     ); 
// }


// const ProductDetails = ({description, how_to_use}) => {
//     return (
//      <div>
//        <div className="elc-product-details">
//         //details here
//        </div>
//        <div className="elc-how-to-use">
//         //how to use here
//         </div>
//        </div>
//     )
//    }


export default ProductDetails;

// this.how_to_use()

// ...
// then you need to call the function:

// const how_to_use = ({description}) =>{
    
//         return(
//             <div className="elc-howtouse">
//                 <h3>How To Use</h3>
//                 <div className ="elc-howtouse-content" dangerouslySetInnerHTML={{ __html: description }}></div>
//             </div>
//         ); 
// }



// Export out the React Component
