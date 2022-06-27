import React from 'react';

// import { Container } from './styles';

import logoImage from '../../assets/images/Intro.svg'
import backgroundImage from '../../assets/images/Background.svg'

const Proffy: React.FC = () => {
  return (
    <div className="logo-landing">
        <img src={backgroundImage} alt=""/>
        <div className="logo">
            <img src={logoImage} alt="logo"/>
        </div>
    </div>);
}

export default Proffy;
