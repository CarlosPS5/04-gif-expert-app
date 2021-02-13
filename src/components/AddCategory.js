import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = (props) => {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        input!==''? props.setCategoria([...props.categorias,input]) : setInput('')
        setInput('')
    }

    return  <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Introduce una categoría' value={input} onChange={(e) => setInput(e.target.value)}/>
                <br/>
            </form>

}


AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired,
    categorias: PropTypes.array.isRequired
}