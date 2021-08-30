import React, { useState } from 'react'
import { Box, Button, makeStyles, Typography, Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { connect } from "react-redux";

import { getUser } from '../../Redux/Actions/UserActions'



const useStyle = makeStyles({
    loginName: {
        color: '#ffffff',
        textTransform: 'unset',
        fontSize: 13,
        fontWeight: 600,
        textAlign: 'center',
        cursor:'pointer'
    },
    popup:{
      marginTop:40
    },
    logout:{
        fontSize:14
    }
})


const Profile = (props) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false)

    const openLogout = (event) => {

        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
        props.getUser('');

    }
    return (
        <div>
            <Link>
                <Button
                    onClick={openLogout}
                    className={classes.loginName}
                >{props.user}</Button>
            </Link>
            <Menu
                id="simple-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.popup}
            >
                <MenuItem onClick={handleClose}>
                    <PowerSettingsNewIcon fontSize='small' color='primary' style={{paddingRight:5}}/>
                   <div className={classes.logout}>Logout</div></MenuItem>
            </Menu>

        </div>
    )
}


const mapStateToProps = state => { 
   // console.log(state.loginUser.user)
     return {

     }
 
};
const mapDispatchToProps = {
getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

