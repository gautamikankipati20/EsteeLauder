/**
 * This file renders the product carousel
 *
 */
import React from 'react';
import Slider from "react-slick";

class ProductCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const { images } = this.props;

        return (
            <div className="elc-carousel">
                <div className="slider-thumbnails">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        vertical={true}
                    >

                        {images.map(image => {
                            return (
                                <div key={image.src}>
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="slider-main">
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    {images.map(image => {
                        return (
                            <div key={image.src}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        )
                    })}
                </Slider>
                </div>
            </div>
        );
    }


}

// Export out the React Component
export default ProductCarousel;