import React, {useEffect} from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import MidImage from './MidImage'
import {makeStyles} from '@material-ui/core'
import { getProducts } from '../../Redux/Actions/ProductActions'
import { connect } from "react-redux";

const useStyle = makeStyles({
component :{
    padding:10,
    background:'#f2f2f2'
},
rightwrapper:{
   background:'#ffffff',
  
   margin:'6px 0 0 15px',
width:'17%'
}
})
const Home = (props) => {

   

    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <div>
            <Navbar />
            <div className={classes.component}>
                <Banner />                
                <div style={{display:'flex'}}>
                    <div style={{width:'87%', marginRight: '0px'}}>
                    <Slide timer={true} title="Deal Of the Day" />
                    </div>
                    <div className={classes.rightwrapper}>
                        <img src={adURL} style={{width:230}} />
                    </div>
                </div>
                <MidImage />
                <Slide timer={false} title='Offers on Products' />
                <Slide timer={false} title='Discounts Available'/>
                <Slide timer={false} title='Free Deals'/>
                <Slide timer={false} title='free Delivery'/>
                <Slide timer={false} title='Buy on 25% discount'/>
            </div>
        </div>
    )
}

export default Home;
