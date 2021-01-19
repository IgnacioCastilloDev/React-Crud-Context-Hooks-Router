import React, { useState } from 'react'
import { Button, Input, Modal, ModalHeader, Label, ModalBody, FormGroup, ModalFooter } from 'reactstrap';
import { useModal } from '../hooks/useModal';

import '../index.css';


export const Table = ({ datos, handleDelete, handleEdit }) => {
    
    
    const [abierto, openModal] = useState(false)

    const [{id,nombre,apellido}, handleModalInput,setModalValues] = useModal({

        id:'',
        nombre:'',
        apellido:''
    });


     //Reiniciar array de valores a editar
    const setEditValues = (id,nombre,apellido) => {
        

        openModal(true)

        setModalValues({
            id:id,
            nombre:nombre,
            apellido:apellido
        })
        

    }

    const setHandleSubmit = (id,nombre,apellido) => {
        
        const lastEdit = {
            id:id,
            nombre:nombre,
            apellido:apellido
        }
        handleEdit(lastEdit)
        openModal(false)
    }


    return (

        <div className="container-table">

            <table className="table">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Accion</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        datos.map((dato) => (
                            <tr>
                                <td>{dato.id}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.apellido}</td>
                                <td>

                                    <button className="btn btn-danger mr-5"
                                        onClick={() => { handleDelete(dato.id) }}
                                    >Eliminar</button>


                                    <button className="btn btn-success"
                                        onClick={()=>{setEditValues(dato.id,dato.nombre,dato.apellido)}}
                                    >Editar</button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>


                <Modal isOpen={abierto} toggle={()=>{openModal(false)}}>
                    <ModalHeader>
                        Editar Dato
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" id="nombre" value={nombre} name="nombre" onChange={handleModalInput}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="apellido">Apellido</Label>
                        <Input type="text" id="apellido" name ="apellido" value={apellido} onChange={handleModalInput}></Input>
                    </FormGroup>

                    <Button color="primary"  className="mt-3" onClick={()=>{setHandleSubmit(id,nombre,apellido)}}>Guardar Cambios</Button>

                    </ModalBody>
                </Modal>


            </table>
        </div>
    )
}
