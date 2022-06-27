import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
//img
import imgLogo from '../../assets/images/logo.svg'
import landingImage from '../../assets/images/landing.svg'
//icon
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
//css
import "./style.css"
import api from '../../services/api'



function Landing(){

    const [totalConnections, setTotalConnections] = useState(0)


    //toda vez q a variarel mudar ela dispara uma função
    //agr se quer que o componente seja mostrado apensa uma vez qnd exibido deixa vazio
    useEffect(()=>{
        api.get('connections').then(res => {
            const {total} = res.data
            
            setTotalConnections(total)
        })
    }, [])

    return(

        <div id="page-landing">

            <div id="page-landing-content" className="container">

                <div id="logo-container">
                    <img src={imgLogo} alt="logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImage} alt="banner" className="hero-image"/>

                <div className="button-container">
                    <Link to="/study" className="study"><img src={studyIcon} alt="estudar"/>Estudar</Link>
                    <Link to="/give-classes" className="give-classes"><img src={giveClassesIcon} alt="dar aulas"/> Dar aulas </Link>
                </div>

                <span className="total-connections"> Total de {totalConnections} conexões ja realizadas <img src={purpleHeartIcon} alt="coração roxo"/></span>
            
            </div>

        </div>

    )

}

export default Landing;