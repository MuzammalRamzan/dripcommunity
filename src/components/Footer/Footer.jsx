import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div id="footer" className="section footer mb-0">
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-12 text-right">
                            <a id="footerCircleButton" className="btn btn-circle btn-outline-semi-light footer-circle-button">
                                <img alt="footer logo" src='/images/up.png' height="60px" width="60px" id="up-button" />
                            </a>
                        </div>
                        <div className="col-12 text-center footer-content">
                            <img alt="footer logo" src="/images/footer.jpg" className="footer-logo" />
                        </div>
                    </div>
                    <div id="footerMenuAccordion" className="row"></div>
                </div>
                <div className="container copyright pt-5 pb-5">
                    <div className="row justify-content-between">
                        <div className="col-sm-12 col-md-6 mb-2">2021 © Pearl NETWORK</div>
                        <div className="social-icons col-sm-12 col-md-6">
                            <p ><a target="_blank"
                                href="https://t.me/Pearltoken_Chat" className="footer-link">
                                <img src="/images/telegram.png" className="footer-telegram"/>
                                Join us on Telegram
                            </a></p>
                            <p style={{marginTop: -10}}><a target="_blank"
                                href="https://twitter.com/Pearlcommunity" className="footer-link"><img
                                    src="/images/twitter.png" className="footer-telegram"/>
                                    Join us Twiter
                            </a></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer