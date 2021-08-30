import React from 'react'
import {Button, makeStyles} from '@material-ui/core'
import clsx from 'clsx'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {addProductInCart} from '../../Redux/Actions/CartActions';
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';

const useStyle=makeStyles({
    left:{
        padding:'40px 0 0 80px'
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #f0f0f0'
        
    },
    button:{
        height:50,
        width:'48%',
        borderRadius:2
    },
    addToCart:{
        background:'#ff9f00',
        color:'#fff',
        marginRight:10
    },
    buyNow:{
        background:'#fb641b',
        color:'#fff'
    }

})

const ActionProduct = (props) => {    
    const classes = useStyle()
    const history = useHistory();

    const addToCart = (id) => {
     props.addProductInCart(id)
     history.push('/cart')
    }
    return (
        <div className={classes.left}>
           <img src={props.product?.detailUrl} className={classes.image} /> <br/>
           <Button variant='contained' className={clsx(classes.button, classes.addToCart)} onClick={()=>addToCart(props.product.id)}> <ShoppingCartIcon/> Add to Cart</Button> 
           <Button variant='contained' className={clsx(classes.button, classes.buyNow)}> <FlashOnIcon/> Buy Now</Button>
        </div>
    )
}


const mapStateToProps = state => {
    //you will get all products here which comes from redux api call 
    //console.log('in state', state)
    return {
     //   product: state.allProducts.product
    }

};
const mapDispatchToProps = {
    //you are using this action function of redux to call api
    addProductInCart
};
export default connect(mapStateToProps, mapDispatchToProps)(ActionProduct);
