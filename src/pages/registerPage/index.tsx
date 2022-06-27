import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

import './style.css'
import Proffy from '../../components/Proffy'

import backIcon from '../../assets/images/icons/back.svg'

function RegisterPage(){


    const history = useHistory()

    return(

        <div id="page-landing">

            <div className="login-landing">
                <div className="back-image">
                    <Link to="/">    
                        <img src={backIcon} alt=""/>
                    </Link>
                </div>
                <div className="login-section">
                    <h1>Cadastrar</h1>

                    <p>Preencha os campos abaixo para começar</p>

                    <div className="form-login">
                        <input type="text" placeholder="Nome"/>
                        <input type="text" placeholder="Sobrenome"/>
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Repita a Senha"/>
                    </div>

                    <button className="button-register" type="submit"><Link to="/sucess"> Concluir Cadastro</Link> </button>
                </div>

            </div>

            <Proffy />
            
        </div>

    )

}

export default RegisterPage;