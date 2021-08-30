import React, { useState, useContext } from 'react'
import { Box, Button, makeStyles, Typography, Dialog } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile';


//component
import Login from '../Login/Login';

const useStyle = makeStyles({
    login: {
        background: '#ffffff',
        color: '#2874f0',
        fontSize: 12,
        textTransform: 'unset',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    loginName: {
        color: '#ffffff',
        textTransform: 'unset',
        fontSize: 13,
        fontWeight: 600
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontSize: 12,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    container: {
        display: 'flex'

    }
})
const HeaderButtons = (props,{secondEntry}) => {
   
    //console.log(props)
    const [open, setOpen] = useState(false)
    const products = useSelector((state) => state.cartProduct.cartProduct)
    console.log('+++++',products)
    const doubleEntry = useSelector((state) => state.cartProduct.secondEntry)
    console.log('+++DOUBLE',doubleEntry)
    const classes = useStyle();

    const openLogin = () => {
        setOpen(true)
    }

    return (
        <Box className={classes.wrapper} >
            {props.loggedInUser ?
                <Profile user={props.loggedInUser} />
                :
                <Link>
                    <Button variant='contained' className={classes.login}
                        onClick={() => openLogin()}
                    >Login</Button>
                </Link>
            }
            <Link>
                <Typography style={{ marginTop: 7, fontSize: 12 }}>More</Typography>
            </Link>
            <Link to='/cart' className={classes.container}>
                {console.log(props)}
                <Badge badgeContent={products?.length + doubleEntry?.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>

                <Typography style={{ marginLeft: '10px', fontSize: 12 }}>Cart</Typography>

            </Link>
            <Login open={open} setOpen={setOpen} />
        </Box>
    )
}


const mapStateToProps = state => {

     console.log('in header ',state)
    return {
        loggedInUser: state.loginUser.user.firstname,
        cartProducts: state.cartProduct.cartProduct,
        secondEntry: state.cartProduct.secondEntry
    }

};
const mapDispatchToProps = {
      
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons);