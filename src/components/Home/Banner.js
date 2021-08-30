import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constants/data'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: 280
    }


})
const Banner = () => {
    const classes = useStyle()
    return (
        <div>
            <Carousel
                autoPlay={true}
                animation='slide'
                interval='3000'
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: '#ffffff',
                        color: '#494949',
                        borderRadius: 0,
                        margin: 0
                    }
                }} >
                {
                    bannerData?.map((item, i) => (
                        <img className={classes.image} src={item} key={i} />))
                }
            </Carousel>

        </div>
    )
}

export default Banner
