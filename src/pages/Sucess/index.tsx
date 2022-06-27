import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

import './style.css'

import backgroundImage from '../../assets/images/Background-big.svg'
import sucessImage from '../../assets/images/icons/success-check-icon.svg'

function SucessPage(){


    const history = useHistory()

    return(

        <div id="page-land"> 
            <img src={backgroundImage} alt=""/>
            <div className="sucess-page">
                <img src={sucessImage} alt=""/>
                <h1>Cadastro concluido</h1>
                <p>Agora voce faz parte da platraforma da proffy Tenha uma otima experiencia</p>

                <Link className="sucess-button" to="/"> Fazer login</Link>
            </div>
            
        </div>

    )

}

export default SucessPage;