import React, {useState, useContext, useEffect} from 'react';
import SelectContext from '../../context/SelectContext';
import './Input.css';

const Input = () => {
    const [inputState, setState] = useState({value: "", refresh: 0});
    const context = useContext(SelectContext);
    let timer = null;
    const handleInputChange = (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            context.setSearchTerm(value);
        }, 500)
        setState({value});
    }
    const handleBackspace = () => {
        if(context.selectedCategories && !inputState.value){
            let categories = context.categories
            for(let i = categories.length - 1; i >= 0; i--){
                if(categories[i].show){
                    categories[i].show = false;
                    break;
                }
            }
            console.log(categories);
        }
    }
    const handleKeys = (e) => {
        console.log(e.which);
        switch(e.which){
            case 8: handleBackspace() 
                break;
            case 13:
                break;
            default: 
                return
        }
    }
    const focusHandler = () => {
        window.addEventListener('keydown', handleKeys);
    }
    useEffect(() => {
        return window.removeEventListener('keydown', handleKeys);
    })
    return (
        <input 
        className="searchInput"
        placeholder="Search"
        value={inputState.value} 
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => focusHandler()}
        autoFocus
        />
    )
}

export default Input;