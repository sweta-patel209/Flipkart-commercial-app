import React from 'react'
import {ImageURL} from '../../constants/data'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
wrapper:{
    display:'flex',
    marginTop:15,
    justifyContent:'space-between'
  
}
})

const MidImage = () => {
    const classes = useStyle(); 
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
        <div className={classes.wrapper}>
           {
                ImageURL.map(image=>(
                    <img src={image} style={{width:'33.3%'}} />
                )) 
            }
        </div>
        <img src={coronaURL} style={{width:'100%',marginTop:5}}/>
        </>

    )
}

export default MidImage
