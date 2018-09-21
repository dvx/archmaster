import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import './Card.css';

class Card extends Component {
    constructor() {
        super();
        this.throttledShiftPerspective = (e)=>{e.persist(); _.throttle(this.shiftPerspective.bind(this, e), 100)()};
    }

    getAngle(minPos, maxPos, minAng, maxAng, pos) {
        return (minAng-maxAng) / (minPos-maxPos) * (pos-minPos) + minAng;
    }

    shiftPerspective(e) {
        const angle = {
            min: -10,
            max: 10
        }

        let node = ReactDOM.findDOMNode(this);
        let offset = {
            left: node.offsetLeft,
            top: node.offsetTop
        };
        let height = node.clientHeight;
        let width = node.clientWidth;
        let pos = {
          x: e.pageX - offset.left - width / 2,
          y: e.pageY - offset.top - height / 2
        }
        let min = {
          x: -width / 2,
          y: -height / 2
        }
        let max = {
          x: width / 2,
          y: height / 2
        }
        let newAngle = {
          x: Math.round(this.getAngle(min.x, max.x, angle.min, angle.max, pos.x) * 100) / 100,
          y: -1 * Math.round(this.getAngle(min.y, max.y, angle.min, angle.max, pos.y) * 100) / 100
        }

        let newRotationStyle = "rotateX( " + newAngle.y + "deg ) rotateY( " + newAngle.x + "deg )";
        console.log(newRotationStyle);
        node.style["-webkit-transform"] = newRotationStyle;
        node.style["-moz-transform"] = newRotationStyle;
        node.style["-ms-transform"] = newRotationStyle;
        node.style["-o-transform"] = newRotationStyle;
        node.style["transform"] = newRotationStyle;
    }

    doneShiftingPerspective() {
        let node = ReactDOM.findDOMNode(this);
        setTimeout(function(){
            node.style["transform"] = "none";
        }.bind(this), 300)
    }

    render() {
        return (
            <div
                className="card"
                onMouseOut={this.doneShiftingPerspective.bind(this)}
                onMouseMove={this.throttledShiftPerspective}
                onMouseOver={this.throttledShiftPerspective}>
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
        );
    }
}

export default Card;
