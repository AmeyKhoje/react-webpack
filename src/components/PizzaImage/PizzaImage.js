import React from 'react';
// import PizzaImages from '../../assets/download.png'
import Image from '../../assets/img2.jpg'
import classes from './PizzaImage.css'

const PizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src={Image} className={classes.PizzaImg} alt=""/>
        </div>
    );
}

export default PizzaImage;
