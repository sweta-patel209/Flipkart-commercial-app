import React, { useEffect } from 'react'
//import {navData} from '../../constants/data'
import { Typography, Box, makeStyles } from '@material-ui/core'
import { getNavData } from '../../Redux/Actions/ProductActions'
import { connect } from "react-redux";

const useStyle = makeStyles({
    component: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between'
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
})

const Navbar = (props) => {
    const classes = useStyle()

    useEffect(() => {
        props.getNavData()
    }, [])
    //console.log(props.navData)
    return (
        <Box className={classes.component}>
            {props.navData?.map((data, index) => (
                <Box className={classes.container} key={index}>
                    <img className={classes.image} src={data.url} />
                    <Typography className={classes.text}>{data.text}</Typography>
                </Box>
            ))
            }
        </Box>
    )
}


const mapStateToProps = state => {
    //you will get all navdata here which comes from redux api call 
    // console.log('in state',state)
    return {
        navData: state.allProducts.navdata
    }

};

const mapDispatchToProps = {
    //you are using this action function of redux to call api
    getNavData
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
