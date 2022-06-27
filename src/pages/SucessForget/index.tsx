import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

import './style.css'

import backgroundImage from '../../assets/images/Background-big.svg'
import sucessImage from '../../assets/images/icons/success-check-icon.svg'

function SucessForgetPage(){


    const history = useHistory()

    return(

        <div id="page-land"> 
            <img src={backgroundImage} alt=""/>
            <div className="sucess-page">
                <img src={sucessImage} alt=""/>
                <h1>Redefinição enviada!</h1>
                <p className="message">Boa, agora é só checar o e-mail que foi enviado para você
redefinir sua senha e aproveitar os estudos.</p>

                <Link className="sucess-button" to="/"> Voltar ao login</Link>
            </div>
            
        </div>

    )

}

export default SucessForgetPage;