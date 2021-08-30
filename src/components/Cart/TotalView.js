import React,{useState, useEffect} from 'react';
import {Typography, makeStyles} from '@material-ui/core';
import { connect } from "react-redux";

const useStyle = makeStyles({
    component:{
        width:'30%',
        background:'#fff',
        marginLeft:20

    },
    header:{
        padding:'16px 24px',
        borderBottom:'1px solid #f0f0f0'
    },
    container:{
        padding:'15px 24px',
        '& > *':{
            marginTop:20,
            fontSize:14
        }
    },
    greyText:{
        color:'#878787'
    },
    price:{
        float:'right'
    },
    totalAmount:{
        fontSize:18,
        fontWeight:600,
        borderTop:'1px dashed #e0e0e0',
        padding:'20px 0',
        borderBottom:'1px dashed #e0e0e0'
    }
})

const TotalView = (props) => {
    const classes = useStyle()
    console.log(props.secondEntry)
    const [ price , setPrice ] = useState(0)
    const [ discount , setDiscount ] = useState(0)

    useEffect(() => {
        totalAmount();
        
    }, [props.secondEntry,props.items])

    const totalAmount = () =>{
        console.log('+++++++++++',props.secondEntry.length)
        if(props.secondEntry.length === 0){
            console.log('no secondary entry')
            let price =0,discount =0
            props.items.map(item=>{
                price += item.price.mrp;
                discount += (item.price.mrp - item.price.cost)
            })
            setDiscount(discount);
            setPrice(price)
        }
        else{
            console.log('in else')
            let price =0,discount =0;
            let price1 = 0, discount1 =0;
            props.items.map(item=>{
                price += item.price.mrp;
                discount += (item.price.mrp - item.price.cost)
            })
            props.secondEntry.map(item=>{
                price1 += item.price.mrp;
                discount1 += (item.price.mrp - item.price.cost)
            })
            setDiscount(discount+discount1);
            setPrice(price + price1)
        }
    }
    return (
        <div className={classes.component}>
            <div className={classes.header}>
                <Typography className={classes.greyText}>PRICE DETAILS</Typography>
            </div>
            <div className={classes.container}>
                <Typography>Price ({props.items.length} Item)<span className={classes.price}>₹{price} </span></Typography>
                <Typography>Discount<span className={classes.price}>- ₹{discount}</span></Typography>
                <Typography>Delivery Charge<span className={classes.price}>₹40</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price - discount + 40}</span></Typography>
                <Typography style={{color:'#388f3c'}}>You will save ₹{discount - 40} on this order</Typography>
            </div>            
        </div>
    )
}


const mapStateToProps = state => {
    //you will get all cart products here which comes from redux function call 
    console.log('in total view ', state.cartProduct)
    return {
        secondEntry: state.cartProduct.secondEntry
    }

};
const mapDispatchToProps = {
   // removeProductFromCart 
  // addProductAgainInCart
};
export default connect(mapStateToProps, mapDispatchToProps)(TotalView);

