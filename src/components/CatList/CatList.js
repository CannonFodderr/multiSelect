import React, {useContext} from 'react';
import SelectContext from '../../context/SelectContext';
import './CatList.css';

const CatList = () => {
    const context = useContext(SelectContext);
    const renderCheckMark = (cat) => {
        return cat.show ? "🗸": "" ;
    }
    const renderSingleOption = (cat, index) => {
        return <div
            className="option" 
            key={index}
            onClick={(e) => context.setSelectedCategories(index)}
            >
            <span className="CheckMark">{renderCheckMark(cat)}</span>
            {cat.label}
            </div>
    }
    const renderOptionsList = () => {
        return context.categories.map((cat, index) => {
            if(!context.searchTerm) return renderSingleOption(cat, index);
            if(context.searchTerm.length > 0 && !cat.label.toLowerCase().indexOf(context.searchTerm.toLowerCase())){
                return renderSingleOption(cat, index);
            }
            return null;
        })
    }
    return(
        <div 
        className="CatList"
        >
            {renderOptionsList()}
        </div>
    )
}

export default CatList;