import React from 'react';
import {Card, makeStyles ,Typography, Button} from '@material-ui/core';
import clsx from 'clsx';
import GroupButtons from './GroupButtons';

const useStyle=makeStyles({
    component:{
        display:'flex',
        borderRadius:0,
        borderTop:'1px solid #f0f0f0'
    },
    left:{
        margin:20,
        display:'flex',
        flexDirection:'column'
    },
    right:{
        margin:20

    },
    smallText:{
        fontSize:14

    },
    geryTextColor:{
        color:'#878787'
    },
    price:{
        fontSize:20,
        fontWeight:600
    },
    image:{
        height:110,
        width:110
    },
    removeButton:{
        marginTop:20,
        fontSize:14
    }

})

const CartItem = (props) => {
    const classes = useStyle()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

   // let item = props.item

   
   
    return (
        <div>
            {props.item &&
            <Card className={classes.component}>
                <div className={classes.left}>
                   <img className={classes.image} src={props.item?.url} />
                   <GroupButtons grpPlusButtonClick={props.grpPlusButtonClick} grpButtonMinusClick={props.grpButtonMinusClick} item={props.item} />
                </div>
                <div className={classes.right}>
                    <Typography>{props.item?.title?.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText,classes.geryTextColor)} >Seller: Fortune 500
                        <span><img src={fassured} style={{width:50, marginLeft:10}} /></span>
                    </Typography>
                    <Typography style={{margin:'20px 0'}}>
                        <span className={classes.price}>₹{props.item.price.cost}</span>{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <span className={classes.geryTextColor}><strike>₹{props.item.price.mrp}</strike></span>{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <span style={{color:'#388f3c'}}>{props.item.price.discount} off</span>
                    </Typography>
                    <Button onClick={()=>props.removeItemFormCart(props.item.id)} className={classes.removeButton}>REMOVE</Button>
                </div>
            </Card>
            }
            
        </div>
    )
}

export default CartItem
