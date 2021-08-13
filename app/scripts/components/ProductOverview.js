/**
 * This file renders the product overview
 *
 */
import React from 'react';
import ProductReviews from './ProductReviews';

class ProductOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            price: this.props.product.default_price
        }
    }

    /**
     * Triggers anytime a new size is selected
     * @param e
     */
    onSelectChange = (e) => {
        const selectedSize = this.props.product.sizes.find(size => {
            return size.label === e.target.value;
        })

        this.setState({
            price: selectedSize.price
        });

        document.getElementById("prod-price").innerHTML=selectedSize.price; 
    }

    /**
     * On quantity add
     */
    addQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    /**
     * On quantity subtract
     */
    subtractQuantity = () => {
        const { quantity } = this.state;

        this.setState({
            quantity: quantity === 1 ? 1 : quantity - 1
        })
    }

    render() {
        const { display_name, reviews, short_description, sizes, is_replenishable, default_price } = this.props.product;

        return (
            <div className="elc-product-overview">
                <h4>{display_name}</h4>
                <div className="product-review">
                        <ProductReviews reviews={reviews}/>
                </div>
                <div className="product-short-description">{short_description}</div>
                <div className="product-size">
                    <select name="cars" id="cars" onChange={this.onSelectChange}>
                        {sizes.map(size => {
                            return <option key={size.label} value={size.label}>{size.label}</option>
                        })}
                    </select>
                </div>
                <div id="prod-price" className="product-price">{default_price}</div>
                {is_replenishable && <div className="product-auto-replenish">Auto Replenish</div>}
               
                
               
                <div className="product-qty">
                    <div>
                        <p>QTY</p>
                    </div>
                  
                    <div className="quantity buttons_added">
                    <input type="button" value="-" className="minus" ID="MINUS" onClick={this.subtractQuantity}/>
                    <input type="number" step="1"
                            value={this.state.quantity}
                            title="Qty"
                            className="input-text qty text" />
                    <input type="button" value="+" className="plus" ID="PLUS" onClick={this.addQuantity}/>
                    </div>
                    {/* <button>Add To Bag</button> */}
                    
                    <button aria-label="Add To Bag" className="elc-button" data-qty="1" data-test-id="add_to_bag_btn" title="Add To Bag">Add To Bag</button>

                </div>



                <div className="product-after-pay"></div>
                <img alt="Shop now and pay later with 4 payments of $26.25" src="https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png" class="elc-product-installments-price-logo js-product-installments-price-logo"></img>
                      {/* <button class="Button__Btn-sc-2mgnbl-0 jRNhgh elc-button js-button elc-product-installments-price-open-modal js-product-installments-price-open-modal" aria-label="Open After Pay Modal" title="Open After Pay Modal"><div class="Icon__IconPlaceholder-easoj0-0 Icon__MaskIconPlaceholder-easoj0-1 iGOQez elc-info-icon ProductInstallmentsPrice__StyledInfoIcon-lg2mjx-1 bMoWKs elc-icon js-icon"></div></button>
                     <span class="elc-product-installments-price-label js-product-installments-price-label">Shop now and pay later with 4 payments of $26.25</span> 
                      <button class="Button__Btn-sc-2mgnbl-0 jRNhgh elc-button js-button elc-product-installments-price-open-modal js-product-installments-price-open-modal" aria-label="Open After Pay Modal" title="Open After Pay Modal">
                    <div class="Icon__IconPlaceholder-easoj0-0 Icon__MaskIconPlaceholder-easoj0-1 iGOQez elc-info-icon ProductInstallmentsPrice__StyledInfoIcon-lg2mjx-1 bMoWKs elc-icon js-icon"></div></button>
                      */}
                
                <div className="product-promo-message">Free Standard Shipping & Returns</div>
            </div>
        );
    }
}

// Export out the React Component
export default ProductOverview;