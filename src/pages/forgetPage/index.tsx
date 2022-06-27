import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import './style.css'
import Proffy from '../../components/Proffy'

import backIcon from '../../assets/images/icons/back.svg'

function forgetPage(){



    return(

        <div id="page-landing">

            <div className="login-landing">
                <div className="back-image">
                    <Link to="/">    
                        <img src={backIcon} alt=""/>
                    </Link>
                </div>
                <div className="login-section">
                    <h1 className="title">Eita, esqueceu a senha?</h1>

                    <p className="informe">Não esquenta, vamos dar um jeito nisso.</p>

                    <div className="form-login">
                        <input type="email" placeholder="E-mail"/>
                    </div>

                    <button className="button-register" type="submit"><Link to="/sucess-recuperar"> Enviar </Link> </button>
                </div>

            </div>

            <Proffy />
            
        </div>

    )

}

export default forgetPage;