import React, { useEffect, useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import { useForm } from '../hooks/useForm';
import { Button, Input, Modal, ModalHeader, Label, ModalBody, FormGroup, ModalFooter } from 'reactstrap';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import '../index.css';


export const Form = ({ handleAdd }) => {



    const [counter, setCounter] = useState(0)

    const [{ nombre, apellido, id }, handleInputChange] = useForm({
        id: counter,
        nombre: '',
        apellido: ''

    })


    useEffect(() => {
      
        setCounter(c => counter + 1)  
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(nombre.trim() === '' || apellido.trim() === ''){
         
           
            var delay = alertify.get('notifier','delay');
            alertify.set('notifier','delay', 2);
            alertify.error('Rellena todos los campos');
            

        return;
        }
       

        const newDato = {

            id: counter,
            nombre: nombre,
            apellido: apellido
        }

        handleAdd(newDato)
        setCounter(c => counter + 1) 
    }


    return (
        <div className="row f-pad">
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-8">

                <form onSubmit={handleSubmit}>

                    <input className="form-control"
                        type="text"
                        placeholder="Nombre"
                        description="nombre"
                        name="nombre"
                        autoComplete="off"
                        value={nombre}
                        onChange={handleInputChange} />


                    <input className="form-control mt-2"
                        type="text"
                        placeholder="Apellido"
                        description="apellido"
                        name="apellido"
                        value={apellido}
                        autoComplete="off"
                        onChange={handleInputChange} />



                    <button type="submit"  className="btn btn-primary mt-2">Guardar</button>
                </form>





              
            </div>




        </div>



    )
}
