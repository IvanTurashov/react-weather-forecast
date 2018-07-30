/**
 * Created by ivan on 02.07.18.
 */

import React, { Component } from 'react';
import Swipeable from 'react-swipeable';
import PropTypes from 'prop-types';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            direction: 'next',
            sliding: false,
        };
    }

    static getSlotWidth() {
        const cw = document.body.clientWidth;

        if (cw <= 599) return 80;
        if (cw <= 959) return 40;
        if (cw <= 1249) return 20;

        return 15;
    }

    getOrder(itemIndex) {
        const {position} = this.state;
        const {children} = this.props;
        const numItems = children.length || 1;

        return ((numItems + 1) - position + itemIndex) % numItems;
    }

    nextSlide() {
        const {position} = this.state;
        const {children} = this.props;
        const numItems = children.length || 1;

        this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
    }

    prevSlide() {
        const {position} = this.state;
        const {children} = this.props;
        const numItems = children.length;

        this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
    }

    doSliding(direction, position) {
        this.setState({
            sliding: true,
            direction,
            position
        });

        setTimeout(() => {
            this.setState({
                sliding: false
            });
        }, 50);
    }

    handleSwipe(isNext) {
        isNext ? this.nextSlide() : this.prevSlide();
    }

    render() {
        const {children} = this.props;

        const isDesktop = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        const slotWidth = Carousel.getSlotWidth();

        return (
            <div>
                <Swipeable
                    onSwipedLeft={() => this.handleSwipe(true)}
                    onSwipedRight={() => this.handleSwipe()}
                >
                    <div className="wrapper">
                        <div className="carousel-container"
                             style={{
                                 transition: `${this.state.sliding ? 'none' : 'transform .4s ease'}`,
                                 transform: `${!this.state.sliding ? `translateX(calc(${-slotWidth}% - 20px))` : this.state.direction === 'prev' ? `translateX(calc(2 * (${-slotWidth}% - 20px)))` : 'translateX(0%)'}`
                             }}
                        >
                            {children.map((child, index) => (
                                <div className="carousel-slot" key={index} style={{order: this.getOrder(index)}}>
                                    {child}
                                </div>
                            ))}
                        </div>
                    </div>
                </Swipeable>

                {isDesktop ? <div className="buttons">
                        <button onClick={() => this.prevSlide()}>&#8592;</button>
                        <button onClick={() => this.nextSlide()}>&#8594;</button>
                    </div> : null}
            </div>
        )
    }
}

Carousel.propTypes = {
    children: PropTypes.node
};

export default Carousel;