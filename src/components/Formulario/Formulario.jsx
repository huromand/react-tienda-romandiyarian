import { collection, addDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../service/firebase'
import { CartContext } from '../CartContext/CartContext'


const Formulario = ( {items, total} ) => {

    const { limpiar } = useContext(CartContext)

    const [formulario, setFormulario] = useState({
        buyer:{
            nombre: "",
            mail: "",
            telefono: "",
        },
        items: items,
        total: total
    })

    const [error, setError] = useState({})

    const{
        buyer: {nombre, mail, telefono}
    } = formulario

    const validarForm = (campos) => {
        return !(Object.values(campos).some((campo) => campo === ""))
    }

    const guardarTicketCompra =  async (formulario) => {
        try {
            const coleccion = collection(db, "ordenes")
            const ordenCompra = await addDoc(coleccion, formulario)
            alert(`Su codigo de compra es: ${ordenCompra.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    
        console.log('formulario => ', formulario)
    
        
        if (validarForm(formulario.buyer)) {
            guardarTicketCompra(formulario)
            setTimeout(limpiar, 4000)
        } else {
            alert('Por favor llene todos los campos del formulario')
        }
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value
            },
        });
      };
    
      const handleBlur = (e) => {
        const { value, name } = e.target;
        if (value === "") {
          setError({ ...error, [name]: "Este campo es obligatorio" });
          return;
        }
        setError({});
      };

    return (
        <div className='d-flex justify-content-center'>
        <form className='m-5 col-6' onSubmit={onSubmit}>
            <h5 className="display-6 ">Ingrese sus datos para finalizar la compra</h5>
            <div className="form-group">
                <label className='form-label' htmlFor="name">Nombre</label>
                <input type="text" className='form-control' name="nombre"
                onChange={handleChange} onBlur={handleBlur}
                placeholder="Nombre" value={nombre} />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="mail">Correo Electrónico</label>
                <input type="email" className="form-control" name="mail" 
                onChange={handleChange} onBlur={handleBlur}
                placeholder="mail@mail.com" value={mail} />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="tel">Telefono</label>
                <input type="text" className="form-control" name="telefono" 
                onChange={handleChange} onBlur={handleBlur}
                placeholder="ej: 11654321" value={telefono} />
            </div>

            <div className='btn-group' role='group' >
                <button className='m-1 btn btn-secondary' type='submit'> Finalizar Compra </button>
                <Link to="/">
                    <button className='m-1 btn btn-secondary' > Seguir Comprando </button>
                </Link>
                <button onClick={limpiar} className='m-1 btn btn-secondary'> Vaciar Carrito </button>
            </div>

        </form>
        </div>
    )

}

export default Formulario