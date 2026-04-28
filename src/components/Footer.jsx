import './Footer.css';

function Footer() {
    return (
        <footer className="footer text-footer">
            <div className='footer-background '>
                <div className="container footer-top flex justify-content-between align-content-center">

                    <div className="footer-columns ">
                        <div>
                            <h3>DC COMICS</h3>
                            <ul>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                            <br />
                            <h3>SHOP</h3>
                            <ul>
                                <li>Shop DC</li>
                                <li>Shop Collectibles</li>
                            </ul>
                        </div>

                        <div>
                            <h3>DC</h3>
                            <ul>
                                <li>Terms Of Use</li>
                                <li>Privacy policy (New)</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            <h3>SITES</h3>
                            <ul>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-content-center align-content-center'>
                        <img className='image-logo' src="/img/dc-logo-bg.png" alt="" />
                    </div>
                </div>

            </div>
            <div className="footer-bottom container">
                <button className="signup-btn">SIGN-UP NOW!</button>

                <div className="socials text-footer-bottom">
                    <span>FOLLOW US</span>
                    <div className="icons">
                        <img src="/img/footer-facebook.png" alt="Facebook" className="icon" />
                        <img src="/img/footer-twitter.png" alt="Twitter" className="icon" />
                        <img src="/img/footer-youtube.png" alt="YouTube" className="icon" />
                        <img src="/img/footer-pinterest.png" alt="Instagram" className="icon" />
                        <img src="/img/footer-periscope.png" alt="Pinterest" className="icon" />
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
