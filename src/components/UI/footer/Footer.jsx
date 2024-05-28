import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>N&M Studio Technology</span>
                </strong>
                .All Rights Reserved
            </div>
            <div className="credits">
                Разработано студентами КубГТУ <a href="#">N&M</a>
            </div>
        </div>
    );
};

export default Footer;