import React from 'react'


export const contactReducer = (state = [], action) => {



    switch (action.type) {

        case 'add':

            return [...state, action.payLoad];

        case 'delete':

            return state.filter(state => state.id !== action.payLoad)


        case 'edit':

            return state.map(dato => {

                if (dato.id === action.payLoad.id) {
                    return {
                        ...dato, nombre: action.payLoad.nombre,
                                 apellido: action.payLoad.apellido
                    }
                } else {

                    return dato;
                }
            })
        default:

            console.log('default')
            return state;

    }
}
