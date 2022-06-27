import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import './style.css'
import Proffy from '../../components/Proffy'

function LoginPage(){


    return(

        <div id="page-landing">

            <Proffy />

            <div className="login-landing">
                <div className="login-section">
                    <h1>Fazer Login</h1>

                    <div className="form-login">
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                    </div>

                    <div className="especial-field">
                        <div className="remember">
                            <input type="checkbox"/>
                            <label htmlFor="">Lembrar-me</label>
                        </div>
                        <Link to="/recuperar">Esqueci minha senha</Link>
                    </div>

                    <button type="submit"> Entrar </button>
                </div>

                <div className="create-account">
                    <span>Não possui conta? <Link to="/register">Cadastre-se</Link></span>
                    <span>É de graças</span>
                </div>
            </div>
            
        </div>

    )

}

export default LoginPage;