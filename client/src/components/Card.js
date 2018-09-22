import React, { Component } from 'react';
import Tilt from 'react-tilt'
import './Card.css';

class Card extends Component {

    render() {
        return (
            <Tilt className="Tilt" options={{ max : 25 }}>
                <div className="card">
                    <div className="no-holo"></div>
                    <div className="card-stats">
                        <div className="attack"><span className="arch-sharp-axe attack"></span> 8</div>
                        <div className="defense"><span className="arch-cracked-shield defense"></span> 12</div>
                        <div className="vp"><span className="arch-trophy vp"></span> 5</div>
                    </div>
                    <div className="card-drop"><span>25</span></div>
                    <div className="card-details">
                        <div className="card-name"><span className="card-title">Corsair Dragon, Kingdom's Bane</span></div>
                        <div className="card-actions">
                            <p>Whenever <strong>Corsair Dragon, Kingdom's Bane</strong> enters play, deal <strong>5 damage</strong> to all <strong>buildings</strong>, draw <strong>2 cards</strong>, and roll <strong>1 resource</strong>.</p>
                            <p className="card-flavor">"A kingdom founded on injustice never lasts."</p>
                        </div>
                    </div>
                </div>
            </Tilt>
        );
    }
}

export default Card;
