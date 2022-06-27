import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'
import api from '../../services/api'


export interface Teacher{
    avatar: string,
    bio:string,
    cost:Number,
    id: number,
    name:string,
    subject:string, 
    whatsapp:number,
}

interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {
    
    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id
        })
    }

    return(
        <article className="teacher-item">

                    <header>

                        <img src={teacher.avatar} alt={teacher.name}/>

                        <div>

                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                            
                        </div>

                    </header>

                    <p>{teacher.bio}</p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R${teacher.cost}</strong>
                        </p>
                        <a target="_blank" rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}?text=I'm%20interested%20in%20your%20cu%20for%20sale`}>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>
        </article>
    )
}

export default TeacherItem