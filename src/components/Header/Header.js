import React from 'react'
import {AppBar,Toolbar, makeStyles, Typography, Box, withStyles} from '@material-ui/core'
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons';
import {Link} from 'react-router-dom'

const useStyle = makeStyles({
    header:{
        background:'#2874f0',
        height:55
    },
    logo:{
      width:75
    },
    subURL:{
      width:10,
      marginLeft:4,
      height:10
    },
    container:{
        display:'flex'
        
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:'#fff'
    },
    subHeading:{
        fontSize:12,
        fontStyle:'italic'
    }
})

// this will override material UI CSS localy
const ToolBar = withStyles({
   root:{
        minHeight:55
   }
})(Toolbar);

const Header = () => {
    console.log('in header')
const classes = useStyle();
const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <div>
          <AppBar className={classes.header}>
              <ToolBar>
                
              <Link to='/' className={classes.component}> 
                    <img src={logoURL} className={classes.logo}/>
                    <Box className={classes.container}>
                            <Typography className={classes.subHeading}>Explore 
                            <Box component='span' style={{color:'#ffe500'}}> Plus</Box></Typography>
                            <img src={subURL} className={classes.subURL}/>
                    </Box>
                </Link>
                
                <SearchBar />
                <HeaderButtons />
              </ToolBar>
          </AppBar>
        </div>
    )
}

export default Header
