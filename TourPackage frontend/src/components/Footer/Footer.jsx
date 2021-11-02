import React from 'react';
import './Footer.css';
const Footer = () => {
   
    return (
        
      
    <footer className="footer ttm-bgcolor-darkgrey widget-footer ttm-bgimage-yes ttm-bg clearfix">
        <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
        <div className="second-footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget_text clearfix">
                            <div className="footer-logo">
                                {/* <img id="footer-logo-img" className="img-fluid auto_size" src={``} alt="image" /> */}
                                <h1>TourPackage</h1>
                            </div>
                            <div className="textwidget widget-text">
                                <p>Optrica committed to provide the best services in eye care through best improvements of systems, process, technology.</p>
                                <ul className="widget_contact_wrapper">
                                    <li><i className="ttm-textcolor-skincolor fa fa-phone"></i>(+880) 1948183253</li>
                                    <li><i className="ttm-textcolor-skincolor fa fa-envelope-o"></i><a href="mailto:info@example.com">shafikul1170@gmail.com</a></li>
                                    <li><i className="ttm-textcolor-skincolor fa fa-map-marker"></i>1200,Barishal,Bangladesh</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget_nav_menu clearfix">
                           <h3 className="widget-title">Departments</h3>
                            <ul id="menu-footer-service-link" className="menu">
                                <li><a href="/">Who We Are</a></li>
                                <li><a href="/">Our Mission</a></li>
                                <li><a href="/">Awards</a></li>
                                <li><a href="/">Experience</a></li>
                                <li><a href="/">Success Story</a></li>
                                <li><a href="/">Our Doctors</a></li>
                                <li><a href="/">Before & After</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget_nav_menu clearfix">
                           <h3 className="widget-title">Quick Link</h3>
                            <ul id="menu-footer-quick-link" className="menu">
                                <li><a href="/">Treatments</a></li>
                                <li><a href="/">Our Patients</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Appointments</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget-timing clearfix">
                            <h3 className="widget-title">Opening Hours</h3>
                            <div className="ttm-timelist-block-wrapper">
                                <ul className="ttm-timelist-block">
                                    <li>Monday:<span className="service-time">09:00 - 17:00</span></li>
                                    <li>Tuesday:<span className="service-time">09:00 - 17:00</span></li>
                                    <li>Wednesday:<span className="service-time">09:00 - 17:00</span></li>
                                    <li>Thursday:<span className="service-time">09:00 - 17:00</span></li>
                                    <li>Friday:<span className="service-time">09:00 - 17:00</span></li>
                                    <li>Saturday:<span className="service-time">09:00 - 14:00</span></li>
                                    <li>Sunday:<span className="service-time">Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="first-footer ttm-bgcolor-darkgrey clearfix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-4 widget-area">
                        <h4>Subscribe Our Newsletters & Stay Update</h4>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 mx-auto col-xl-5 widget-area">
                        <form id="subscribe-form" className="newsletter-form" action="/" >
                            <div className="mailchimp-inputbox clearfix" id="subscribe-content"> 
                                <input type="email" name="email" placeholder="Enter Your Email " />
                                {/* <button className="btn btn-success" type="submit" >Sign Up!</button> */}
                            </div>
                            <div id="subscribe-msg"></div>
                        </form>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-3 widget-area">
                        <div className="social-icons circle text-right">
                            <ul className="list-inline">
                                <li><a className="tooltip-top" target="_blank" href="/" data-tooltip="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="tooltip-top" target="_blank" href="/" data-tooltip="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="tooltip-top" target="_blank" href="/" data-tooltip="Youtube-play"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a className="tooltip-top" target="_blank" href="/" data-tooltip="Vimeo"><i className="fa fa-vimeo"></i></a></li>
                                <li><a className="tooltip-top" target="_blank" href="/" data-tooltip="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer-text copyright-heads">
            <div className="container">
                <div className="row copyright">
                    <div className="col-md-12">
                        <div className="text-center copyright-text">
                            <span>Copyright © 2021 <a href="/">TourPackage</a> . All Rights Reserved by&nbsp;<a href="/">Shafikul isam</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
};

export default Footer;