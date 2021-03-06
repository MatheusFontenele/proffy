import React from 'react'
import { Link } from 'react-router-dom'

import backIcon from "../../assets/images/icons/back.svg"
import logoImage from "../../assets/images/logo.svg"

import './style.css'

interface PageHeaderProps{
    title: String;
    description?: String;//?: dis q essa propriendade é opcional
} 

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="voltar"/>
                    </Link>
                    <img src={logoImage} alt="proffy"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}

                    {props.children}
                </div>
                
        </header>
    );
}

export default PageHeader;