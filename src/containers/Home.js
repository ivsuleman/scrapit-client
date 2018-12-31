import React, {Component} from "react";
import {PageHeader, ListGroup} from "react-bootstrap";
import "../assets/styling/Home.css";

//images
import app from '../assets/images/app.svg'
import truck from '../assets/images/truck.svg'
import trash from '../assets/images/trash.svg'
import resident from '../assets/images/resident.png'
import collector from '../assets/images/collector.jpg'
import site from '../assets/images/site.png'

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            wasteItems: []
        };
    }

    renderWasteList(wasteItems) {
        return null;
    }

    renderLander() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>ScrapIt</h1>
                    <p>A simple waste collection App</p>
                </div>



                <div className="landingPage">
                    <div className="pane1_how">
                        <div className="pane_header">
                            <div className="title"><h2>How it works</h2></div>
                            <div className="sub_title"><h4>Waste disposal in three simple steps. From pick-up to disposal, providing peace of mind.</h4></div>
                        </div>

                        <div className="pane_body">
                            <div className="pan_content">
                                <div className="pane_row">
                                    <div className="pane_icon">
                                        {<img src={app} alt="" />}
                                    </div>
                                    <div className="pane_title">Request a waste collection using the ScrapIt app</div>
                                    <div className="pane_sub_title">Provide details of the waste to be collected, selecting the location and convenient collection times.</div>
                                </div>
                                <div className="pane_spacer"></div>
                                <div className="pane_row">
                                    <div className="pane_icon">
                                        {<img src={truck} alt="" />}
                                    </div>
                                    <div className="pane_title">Meet your waste collector</div>
                                    <div className="pane_sub_title">One of our verified licenced waste collectors will confirm and collect the waste straight from your doorstep. </div>
                                </div>
                                <div className="pane_spacer"></div>
                                <div className="pane_row">
                                    <div className="pane_icon">
                                        {<img src={trash} alt="" />}
                                    </div>
                                    <div className="pane_title">Confirmation of waste disposal</div>
                                    <div className="pane_sub_title">Payment will only be taken once the waste has been disposed as expected at one of our approved sites and the waste deposit verified.</div>
                                </div>
                                <div className="footer">
                                    Stil have questions, please click help
                        </div>
                            </div>
                            <div className="photo"></div>
                        </div>
                    </div>

                    <div className="pane2_resident">
                        <div className="pane_title"><h1>Why dispose with ScrapIt</h1></div>
                        <div className="pane_image">{<img src={resident} alt="" />}</div>
                        <div className="pane_cards">
                            <div className="card1">
                                <div className="card_icon"></div>
                                <div className="card_title">Collectors on Demand</div>
                                <div className="card_text">No need to search for waste collectors, reliable waste collectors will search for your waste instead.</div>
                            </div>
                            <div className="card2">
                                <div className="card_icon"></div>
                                <div className="card_title">Competitive Prices</div>
                                <div className="card_text">Charges are realted to the speed of collection and disposal. Waste that can be recycled will be cheaper.</div>
                            </div>
                            <div className="card3">
                                <div className="card_icon"></div>
                                <div className="card_title">Convenience of collection</div>
                                <div className="card_text">You're in control. Waste will be collected at times that suit you.</div>
                            </div>
                        </div>
                    </div>

                    <div className="pane3_collector">
                        <div className="pane_title"><h1>Why collect with ScrapIt</h1></div>
                        <div className="pane_image">{<img src={collector} alt="" />}</div>
                        <div className="pane_cards">
                            <div className="card1">
                                <div className="card_icon"></div>
                                <div className="card_title">Set your own schedule</div>
                                <div className="card_text">You’re in charge. Fit collections around your life, not the other way around.</div>
                            </div>
                            <div className="card2">
                                <div className="card_icon"></div>
                                <div className="card_title">Make money on your terms</div>
                                <div className="card_text">The more you collect, the more money you can make. When demand is higher than normal, you can make even more due to the pricing model.</div>
                            </div>
                            <div className="card3">
                                <div className="card_icon"></div>
                                <div className="card_title">Increased Reputation</div>
                                <div className="card_text">An easy way to increase awareness by gaining ratings from cutsomers as well as deposit sites. </div>
                            </div>
                        </div>
                    </div>

                    <div className="pane4_site">
                        <div className="pane_title"><h1>Why verify with ScrapIt</h1></div>
                        <div className="pane_image">{<img src={site} alt="" />}</div>
                        <div className="pane_cards">
                            <div className="card1">
                                <div className="card_icon"></div>
                                <div className="card_title">Increased Waste Auditing</div>
                                <div className="card_text">A sure way of tracking items from source to target</div>
                            </div>
                            <div className="card2">
                                <div className="card_icon"></div>
                                <div className="card_title">Decreased Fly-Tipping</div>
                                <div className="card_text">Encouraging residents to use authorised waste collectors, ensuring waste is desposited correctly.</div>
                            </div>
                            <div className="card3">
                                <div className="card_icon"></div>
                                <div className="card_title">Waste Data</div>
                                <div className="card_text">A good way of monitoring and analysing residential waste behaviour.</div>
                            </div>
                        </div>
                    </div>

                    {
                        /* <div className="pane5_benefits">
                        <div className="benefit_icon"></div>
                        <div className="benefit_card">
                            <div className="title"></div>
                            <div className="text"></div>
                        </div>
                        <div className="benefit_icon"></div>
                        <div className="benefit_card">
                            <div className="title"></div>
                            <div className="text"></div>
                        </div>
                        <div className="benefit_icon"></div>
                        <div className="benefit_card">
                            <div className="title"></div>
                            <div className="text"></div>
                        </div>
                        <div className="horizonalRule"></div>
                    </div> */
                    }

                    <div className="pane5_footer">
                        <div className="contact">
                            <div className="logo">ScrapIt</div>
                            <ul className="contact_items">
                                <li>email</li>
                                <li>phone</li>
                            </ul>
                        </div>
                        <div className="links">
                            <ul className="menu_items">
                                <li>About Us</li>
                                <li>Help</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                            </ul>
                        </div>
                        <div className="footer">
                            <div className="copyright">© 2018 ScrapIt Technologies Inc.</div>
                            <div className="social-media">
                                <ul className="social-items">
                                    <li>facebook</li>
                                    <li>twitter</li>
                                    <li>youtube</li>
                                    <li>Instagram</li>
                                    <li>whatsApp</li>
                                    <li>snapChat</li>
                                    <li>linkedIn</li>
                                    <li>pinterest</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









        )
    }

    renderWasteItems() {
        return (
            <div className="wasteItems">
                <PageHeader>Your Waste Items</PageHeader>
                <ListGroup>
                    {!this.state.isLoading && this.renderWasteList(this.state.wasteItems)}
                </ListGroup>
            </div>
        );
    }

    render() {
        return (
            <div className="Home">
                {this.props.isAuthenticated ? this.renderWasteItems() : this.renderLander()}
            </div>
        );
    }
}