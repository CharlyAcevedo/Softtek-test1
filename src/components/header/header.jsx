import React from "react";
import LogoSofttek from '../../assets/images.jpg';

const HeaderSofttek = () => {
    return (
        <header>
            <h1 className="floaty" >Hello</h1>
            <img className="floaty imagLogo" src={LogoSofttek} alt="Logotipo Softtek" />
        </header>
    )

};

export default HeaderSofttek;