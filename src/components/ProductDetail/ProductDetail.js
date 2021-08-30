import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getSingleProduct } from '../../Redux/Actions/ProductActions';
import { makeStyles,Typography, TableCell, TableBody, TableRow, Table } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ActionProduct from './ActionProduct'
//clsx is used to apply two css classes at the same time 
import clsx from 'clsx';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        
        background: '#f2f2f2'
    },
    container: {
        margin: '0 80px',
        background: '#fff',
        display: 'flex'
    },
    left:{
        width:'40%'
    },
    right:{
        marginTop:50,
        marginLeft: 10,
        '& > *':{
            marginTop:10
        }
    },
    smallText:{
        fontSize:14,
        '& > *':{
            fontSize:14,
            marginTop:10
        }
    },
    greyTextColor:{
        color:'#878787'
    },
    price:{
        fontSize:28,
        fontWeight:600
    },
    badge:{
        fontSize:20,
        marginRight:10,
        color:'#00cc00'
    }
})

const ProductDetail = (props) => {
    
    const classes = useStyle()
    const id = props.match.params.id
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    //this will give 5 days later date
    const date =new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    
    useEffect(() => {      
        getInitialValue()  
       
    }, [props.match])

    const getInitialValue = () => {
        props.getSingleProduct(id)
    }

    return (
        <div className={classes.component}>
        {props.product && Object.keys(props.product).length &&
            <div className={classes.container}>
                <div className={classes.left}>
                    <ActionProduct product={props.product} />
                </div>
                <div className={classes.right}>
                    <Typography>{props.product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                        8 Ratings & 1 Review
                        <span><img src={fassured} style={{width:77, marginLeft:20}}/>
                        </span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{props.product.price.cost}</span>{'\u00A0'}{'\u00A0'}   
                        <span className={classes.greyTextColor}><strike>₹{props.product.price.mrp}</strike></span>{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <span style={{color:'#388e3c'}}>{props.product.price.discount} off</span>
                    </Typography>
                    <Typography>Available Offers</Typography>
                    <div className={classes.smallText}>
                       <Typography ><LocalOfferIcon className={classes.badge}/>Special PriceGet extra 65% off (price inclusive of discount)T&C</Typography>

                       <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer10% off on ICICI Bank Credit Cards, up to ₹1500. On orders of ₹5000 and aboveT&C</Typography>

                       <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer10% off on ICICI Bank Debit Cards, up to ₹500. On orders of ₹5000 and aboveT&C</Typography>

                       <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C </Typography>
                    </div>
                    <Table>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>{date.toDateString()}</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                            <TableCell>No Warranty</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Seller</TableCell>
                            <TableCell className={classes.smallText}>
                                <span style={{color:'#2874f0'}}>SuperComNet</span>
                                <Typography>GST Invoice Available</Typography>
                                <Typography>14 Days Return Policy</Typography>
                                <Typography>View more sellers starting from ₹300</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                            <img src={sellerURL} style={{width:'390px'}}/>
                            </TableCell>                            
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Description</TableCell>
                            <TableCell>{props.product.description}</TableCell>
                        </TableRow>
                    </Table>
                </div>
            </div>
        }
        </div>
    )
}

const mapStateToProps = state => {
    //you will get all products here which comes from redux api call 
    //console.log('***in state', state.allProducts.product)
    return {
        product: state.allProducts.product
    }

};
const mapDispatchToProps = {
    //you are using this action function of redux to call api
    getSingleProduct
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);