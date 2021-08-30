import React,{useEffect, useState} from 'react';
import { connect } from "react-redux";
import {makeStyles, Typography, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

import {removeProductFromCart} from '../../Redux/Actions/CartActions';
import {removeAllSecondEntryofOneProduct} from '../../Redux/Actions/CartActions';


const useStyle = makeStyles({
component:{
    marginTop:55,
    padding:'30px 135px',
    display:'flex'
   
},
leftSide:{
    width:'67%'
},
header:{
    padding:'15px 24px',
    background:'#fff'
},
placeOrder:{
    background:'#fb641b',
    color:'#fff',
    borderRadius:2,
    width:250,
    height:50,
    display:'flex',
    marginLeft:'auto'
},
bottom:{
    padding:'16px 22px',
    background:'#fff',
    borderTop:'1px solid #f0f0f0',
    boxShadow:'0 -2px 10px 0 rgb(0 0 0 /10%)'
}
})

const Cart = (props) => {
    const classes = useStyle();
    console.log('cart')
    let finalCartProduct = 0
    //console.log(props.cartProducts.cartProduct.length)
     finalCartProduct = props.cartProducts
    console.log(props.cartProducts)
    console.log('=======>',props.cartProducts?.length)
    let counter1 = props.cartProducts?.length
    console.log('=======>',props.secondEntry)
    const [totalNumberOfProduct,settotalNumberOfProduct] = useState(counter1);
    
    useEffect(() => {
       settotalNumberOfProduct(props.cartProducts?.length + props.secondEntry?.length)
   
    }, [props.cartProducts])

    const removeItemFormCart = (id) => {
        console.log(id)
        props.removeProductFromCart(id)
        props.removeAllSecondEntryofOneProduct(id)
    }

    const grpPlusButtonClick = () => {
      //  console.log('clicked')
      //  console.log(props)
      //  console.log(props.secondEntry)
        settotalNumberOfProduct(props.cartProducts?.length + props.secondEntry?.length + 1)
        //totalNumberOfProduct = props.cartProducts?.length + props.secondEntry?.length
     //   console.log('=======>',totalNumberOfProduct)
    }

    const grpButtonMinusClick = () => {
        console.log('minus')
        settotalNumberOfProduct(props.cartProducts?.length + props.secondEntry?.length - 1)
    }
    
    return (
        <div>
           {
               finalCartProduct?.length ? 
               <div className={classes.component}>
                   <div className={classes.leftSide}>
                     <div className={classes.header}>
                         {console.log(props.secondEntry)}
                            <Typography style={{fontWeight:600, fontSize:18}}>My Cart ({totalNumberOfProduct})</Typography>
                     </div>
                     {
                         finalCartProduct.map((item)=>(
                            <CartItem item={item} grpPlusButtonClick={grpPlusButtonClick} 
                            grpButtonMinusClick ={grpButtonMinusClick}
                            removeItemFormCart={removeItemFormCart}/>
                         ))
                     }
                     <div className={classes.bottom}>
                        <Button className={classes.placeOrder} variant='contained'>Place Order</Button>
                     </div>
                   </div>
                   
                       <TotalView items={finalCartProduct} />
                  
               </div> 
               : <div className={classes.component}>
               <EmptyCart />
           </div> 
           }
        </div>
    )
}


const mapStateToProps = state => {
    //you will get all cart products here which comes from redux function call 
    console.log('in  CARTTTTTTT state', state.cartProduct)
    return {
        cartProducts: state.cartProduct.cartProduct,
        secondEntry: state.cartProduct.secondEntry
    }

};
const mapDispatchToProps = {
    removeProductFromCart,
    removeAllSecondEntryofOneProduct  
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
