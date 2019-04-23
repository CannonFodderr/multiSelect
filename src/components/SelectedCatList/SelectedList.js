import React, {useContext} from 'react';
import SelectContext from '../../context/SelectContext';
import './SelectedList.css';

const SelectedList = () => {
    const context = useContext(SelectContext);
    const renderRemoveItem = (index) => {
        return <span 
        className="removeItem"
        onClick={() => {context.removeSelectedCategory(index)}}
        >
        ×
        </span> 
    }
    const renderSelectedItems = () => {
        return context.categories.map((cat, index) => {
            if(!cat.show) return null
            return <div key={index} className="selectedItem">
            {cat.label}
            {renderRemoveItem(index)}
            </div>
        })
    }
    return(
        <div className="SelectedList">
            {renderSelectedItems()}
        </div>
    )
}

export default SelectedList;