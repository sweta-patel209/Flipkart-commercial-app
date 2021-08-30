import React, {useState, useEffect} from 'react';
import {makeStyles, ButtonGroup, Button} from '@material-ui/core';
import { connect } from "react-redux";
import {addProductAgainInCart} from '../../Redux/Actions/CartActions';
import {removeSecondEntry} from '../../Redux/Actions/CartActions';

const useStyle = makeStyles({
    component:{
        marginTop:30
    },
    button:{
        borderRadius:'50%'
    }

})

const GroupButtons = (props) => {
    const classes = useStyle();
    
    const [item,setItem] = useState(props.item)
    //console.log(item)
    const [counter,setCounter] = useState(1)
    const [displayNum, setdisplayNum] = useState()

    useEffect(() => {
        getInitialCounter();
    }, [])

    const getInitialCounter = () => {
       props.secondEntry.map((product) =>{
           if(product.id === item.id){
            setCounter(counter=>counter+1)
            props.grpPlusButtonClick()
           }
       })
    }

    const setCounterOnMinus = () => {
        
        if(counter > 1){
            props.removeSecondEntry(props.item?.id)
        setCounter(counter => counter - 1)
       props.grpButtonMinusClick()
      
        }
       
    }

    const setCounterOnPlus = () => {        
        setCounter(counter=>counter+1)
        props.addProductAgainInCart(props.item?.id)
        props.grpPlusButtonClick()
       
    }

    console.log(displayNum)
    return (
        <div>
            <ButtonGroup className={classes.component}>
                <Button onClick={()=>setCounterOnMinus()} disabled={counter===1} className={classes.button} 
                 >-</Button>
                <Button>{counter}</Button>
                <Button onClick={()=>setCounterOnPlus()} className={classes.button}>+</Button>
            </ButtonGroup>
        </div>
    )
}


const mapStateToProps = state => {
    //you will get all cart products here which comes from redux function call 
   // console.log('in cart buttons state', state.cartProduct)
    return {
        cartProducts: state.cartProduct.cartProduct,
       secondEntry:state.cartProduct.secondEntry
    }

};
const mapDispatchToProps = {
   // removeProductFromCart 
   addProductAgainInCart,
   removeSecondEntry
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupButtons);
