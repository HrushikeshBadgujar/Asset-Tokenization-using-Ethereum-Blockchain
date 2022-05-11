import React from 'react';
import Grid from '@mui/material/Grid';

import hero from "../../images/hero.png";
function Hero(props) {
    return (
        <Grid container  className="first-section">
            
            <Grid item xs={12} md={6} className="first-section-left">
                <img src={hero} alt="hero image" width="500px" ></img>
            </Grid>
            <Grid item xs={12} md={6} className="first-section-right">
                <h2>Asset tokenization is a new concept that uses digital tokens to fractionalize ownership of assets such as property, jewelry or fine art and smart contracts on blockchain to manage these ownership rights</h2>
            </Grid>
        </Grid>
    );
}

export default Hero;