import React, { useState, FormEvent } from 'react'

import TeacherItem,{Teacher} from '../../components/teacherItem'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/input'
import Select from '../../components/Select'



import './style.css'
import api from '../../services/api'

function TeacherList(){

    const [teachers, setTeachers] = useState([])
    const [subject, setSubject]= useState('')
    const [week_day, setWeek_day]= useState('')
    const [time, setTime]= useState('')
    
    async function searchTeachers(e: FormEvent){
        e.preventDefault()
        if(subject === week_day){
            const response = await api.get('/classesList')

            setTeachers(response.data)
        } else {
            const response = await api.get('/classes',{
                params:{
                    subject,
                    week_day,
                    time,
                }
            })
            
            setTeachers(response.data);
        }
}





    return(

        <div id="page-teacher-list" className="container">
            <PageHeader 
                title="Estes são os Proffys disponiveis"
                description = "Preencha os campos para ver os Proffys disponiveis"
            >
                <form id="search-teacher" onSubmit={searchTeachers}>

                    <Select 
                        name="subject" 
                        label="Materia"
                        value={subject}
                        onChange={e => {setSubject(e.target.value)}}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Portugues', label: 'Portugues'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Historia', label: 'Historia'},
                            {value: 'Educação Fisica', label: 'Educação Fisica'},
                            {value: 'Fisica', label: 'Fisica'},
                            {value: 'Informatica', label: 'Informatica'},                            
                            {value: '*', label: 'todos'},                            
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={e => {setWeek_day(e.target.value)}}
                        options={[     
                            {value: '0', label: 'Domingo'      },
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'  },
                            {value: '3', label: 'Quarta-feira' },
                            {value: '4', label: 'Quita-feira'  },
                            {value: '5', label: 'Sexta-feira'  },
                            {value: '6', label: 'Sábado'       },          
                            {value: '*', label: 'todos'    },          
                        ]}
                    />

                    <Input 
                        type="time" 
                        name="Time" 
                        label="Horario"
                        value={time}
                        onChange={e => {setTime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                    
                </form>

            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher)=>{
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
            
        </div>
    )
}

export default TeacherList;
