import React, {useState, FormEvent} from 'react'
import {useHistory} from 'react-router-dom'

//#region COMPONENTS
    import PageHeader from '../../components/PageHeader';
    import Input from '../../components/input';
    import Textarea from '../../components/Textarea';
    import Select from '../../components/Select';
//#endregion

//#region IMG
    import warningIcon from '../../assets/images/icons/warning.svg'
//#endregion

import api from '../../services/api';

import './style.css'


function TeacherForm(){

    // para redirecioar o usuario pra qualquer pagina depois de uma ação
    const history = useHistory()

    //#region CRIANDO VARIAVEIS PRA ARMAZENAR OS VALORES DOS CAMPOS

        //user
        const [name, setName] = useState('')
        const [avatar, setAvatar] = useState('')
        const [whatsapp, setWhatsapp] = useState('')
        const [bio, setBio] = useState('')

        //materia
        const [subject, setSubject] = useState('')
        const [cost, setCost] = useState('')

    //#endregion

    //#region iniciandp o estado
        // o useState tem dois duas variaveis em formato de array
        // setAlgumaCoisa, que é uma função quer substitui o primeiro valor
        const [scheduleItens, setScheduleItens] = useState([
            
            {week_day: 0, from: '', to: ''},
            
        ]) 
    //#endregion

    //#region função pra adicionar um novo item na tela do schedule
        function addNewScheduleItem(){

            // usando o conceito rest, ele salva o primeiro conteudo que ja tem pra não perder ele, ai sim salva as novas informações
            setScheduleItens([
                ...scheduleItens,
                { week_day: 0, from: '', to: ''}
            ])
            
        }
    //#endregion

    //#region função q atualiza o array
        // existe o conceito de imutabilidae que deve ser respeitado
        //por isso essa função foi criada
        function setScheduleItensValue(index:number, field: string, value:string){
            const newArray = scheduleItens.map((scheduleItem, pos) => {
                if(pos === index){
                    //[] - é uma forma de adicionar uma variavel
                    return{...scheduleItem, [field]: value }
                }
                return scheduleItem;
                
                
            })
            setScheduleItens(newArray);
        }
    //#endregion

    //#region função pra criar a classe no banco
        function handleCreateClass(e: FormEvent){
            e.preventDefault()// evita o reload da pagina

            api.post('/classes',{
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost:Number(cost),
                schedule: scheduleItens,
            }).then(()=>{
                alert('Cadastro realizado com Sucesso')

                history.push('/')
            }).catch(()=>{
                alert('Erro ao cadastrar!!, verifique os campos corretamente')
            })

            
            // console.log({
            //     name,
            //     avatar,
            //     whatsapp,
            //     bio,
            //     subject,
            //     cost,
            //     scheduleItens,
            // });
            
        }
    //#endregion

    
    return(

        <div id="page-teacher-form" className="container">

            <PageHeader 
                title=" Que incrivel que quer dar aulas"
                description = "O primeiro passo é preencher esse formulario de inscrição"
            />
            
            <main>

                <form onSubmit={handleCreateClass}>

                    {/* DADOS */}
                    <fieldset>

                        <legend>Seus dados</legend>

                        <Input 
                            name="name" 
                            label="Nome Completo"
                            value={name}
                            onChange={(event)=>{ setName(event.target.value) }} 
                        />

                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar}
                            onChange={(event)=>{ setAvatar(event.target.value) }}                     
                        />
                        
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(event)=>{ setWhatsapp(event.target.value) }}                     
                        />

                        <Textarea 
                            name="bio" 
                            label="biografia"
                            value={bio}
                            onChange={(event)=>{ setBio(event.target.value) }}                     
                        />

                    </fieldset>
                    
                    {/* DADOS AULA */}
                    <fieldset>

                        <legend>Sobre a Aula</legend>

                        <Select 
                            name="subject" 
                            label="Materia"
                            options={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Portugues', label: 'Portugues'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Historia', label: 'Historia'},
                                {value: 'Educação Fisica', label: 'Educação Fisica'},
                                {value: 'Fisica', label: 'Fisica'},
                                {value: 'Informatica', label: 'Informatica'},
                            ]}
                            value={subject}
                            onChange={(event)=>{ setSubject(event.target.value) }}
                        />
                        <Input 
                            name="cost" 
                            label="Custo da sua Hora por aula"
                            value={cost}
                            onChange={(event)=>{ setCost(event.target.value) }}
                        />

                    </fieldset>

                    {/* DADOS CRONOGRAMA */}
                    <fieldset>

                        <legend>
                            Horarios disponiveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo Horario</button>
                        </legend>

                    
                        {scheduleItens.map((scheduleItem, index) => {
                                return(
                                    <div key={scheduleItem.week_day} className="schadule-item">
                                        <Select 
                                            name="week_day" 
                                            label="Dia da Semana"
                                            
                                            value={scheduleItem.week_day}
                                            onChange={(event)=>setScheduleItensValue(index, 'week_day',event.target.value) } 
                                            options={[
                                                {value: '0', label: 'Domingo'      },
                                                {value: '1', label: 'Segunda-feira'},
                                                {value: '2', label: 'Terça-feira'  },
                                                {value: '3', label: 'Quarta-feira' },
                                                {value: '4', label: 'Quita-feira'  },
                                                {value: '5', label: 'Sexta-feira'  },
                                                {value: '6', label: 'Sábado'       },
                                                
                                            ]}
                                            
                                        />
                                        <Input

                                            name="from"
                                            label="Das" 
                                            type="time"
                                            value={scheduleItem.from}
                                            onChange={(event)=>setScheduleItensValue(index, 'from',event.target.value) }
                                        />

                                        <Input 
                                            name="to"
                                            label="Até as" 
                                            type="time"
                                            value={scheduleItem.to}
                                            onChange={(event)=>setScheduleItensValue(index, 'to',event.target.value) }
                                        />
                                    </div>
                                )
                            })}
                        
                    </fieldset>

                    {/* FOOTER */}
                    <footer>

                        <p>

                            <img src={warningIcon} alt=""/>
                            Importante! <br/>
                            Preencha todos os dados

                        </p>

                        <button type="submit"> Salvar cadastro</button>
                        
                    </footer>
                
                </form>

            </main>

        </div>
    
    )

}

export default TeacherForm;
