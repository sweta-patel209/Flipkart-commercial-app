import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Typography, Button, Divider } from '@material-ui/core'
import { getProducts } from '../../Redux/Actions/ProductActions'
import { connect } from "react-redux";
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';


const useStyle = makeStyles({
    component: {
        marginTop: 12,
        background: '#ffffff'
    },
    deal: {
        padding: '15px 20px',
        display: 'flex'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: 'auto',
        background: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    image: {
        height: 150
    },
    text: {
        fontSize: 14,
        marginTop: 5,

    },
    details: {
        textAlign: 'center',
        padding: '25px 15px',
        cursor: 'pointer'
    }

})

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = (props) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    useEffect(() => {
        props.getProducts()
    }, [])
    const classes = useStyle();

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes}: {seconds} left</span>;
    }

    const showProductDetail = (id) => {
        
    }

    return (
        <div className={classes.component}>
            <div className={classes.deal}>
                <Typography className={classes.dealText} >{props.title}</Typography>

                {props.timer &&
                    <React.Fragment>
                        <img src={timerURL} style={{ width: 24, marginLeft: 5 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        <Button variant='contained' color='primary' className={classes.button}>View All</Button>
                    </React.Fragment>
                }
            </div>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["mobile", "tablet"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"

            >
                {props.products && props.products.map((product) => (
                    <Link style={{textDecoration:'none'}} to={`/product/${product.id}`} >
                        <div className={classes.details}>
                            <img src={product.url} className={classes.image} />
                            <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                            <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                            <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>
                        </div>
                    </Link>
                ))
                }
            </Carousel>
        </div>
    )
}


const mapStateToProps = state => {
    //you will get all products here which comes from redux api call 
    // console.log('in state',state)
    return {
        products: state.allProducts.products
    }

};

const mapDispatchToProps = {
    //you are using this action function of redux to call api
    getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);