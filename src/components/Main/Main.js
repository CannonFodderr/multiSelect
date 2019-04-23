import React, {useContext} from 'react';
import SelectContext from '../../context/SelectContext';
import Input from '../Input/Input';
import SelectedList from '../SelectedCatList/SelectedList';

const Main = () => {
    const context = useContext(SelectContext);
    const renderSelectedCategories = () => {
        if(context.selectedCategories){
            return <SelectedList />
        }
        return <div style={{display: "none"}}></div>;
    }
    const renderTextInput = () => {
        return <Input />
    }
    return (
        <div>
            {renderSelectedCategories()}
            {renderTextInput()}
        </div>
    )
}

export default Main;