import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousels.css';

const Carousels = () => {
    return (
        <div className="carousels-part">
            <Carousel>
        <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src="https://www.tourx-react.egenslab.com/static/media/banner-4.1478080c.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <div class="col-lg-12 col-md-12 col-sm-12">
								<h1 class="hs_slider_title">Amazing Tour In Indonesia</h1>
								<p class="lead animated pulse">Suspendisse eu sem tortor Etiam rhoncus viverra mi ac tempor turpis rutrum in.<br/> Vivamus porttitor rhoncus tellus, id ultricies eros gravida ut.</p>
								<button className="btn btn-primary">Know More</button>
							</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 img-fluid"
                src="https://www.tourx-react.egenslab.com/static/media/banner-3.ff884c34.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <div class="col-lg-12 col-md-12 col-sm-12">
								<h1 class="hs_slider_title">Amazing Tour In Indonesia</h1>
								<p class="lead animated pulse">Suspendisse eu sem tortor Etiam rhoncus viverra mi ac tempor turpis rutrum in.<br/> Vivamus porttitor rhoncus tellus, id ultricies eros gravida ut.</p>
								<button className="btn btn-primary">Know More</button>
							</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.tourx-react.egenslab.com/static/media/banner-1.0158ff1d.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <div class="col-lg-12 col-md-12 col-sm-12">
								<h1 class="hs_slider_title">Amazing Tour In Indonesia</h1>
								<p class="lead animated pulse">Suspendisse eu sem tortor Etiam rhoncus viverra mi ac tempor turpis rutrum in.<br/> Vivamus porttitor rhoncus tellus, id ultricies eros gravida ut.</p>
								<button className="btn btn-primary">Know More</button>
							</div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Carousels;