import React, {useContext} from 'react';
import SelectContext from '../../context/SelectContext';
import './SelectWrapper.css';
import Main from '../Main/Main';
import CatList from '../CatList/CatList';
import Controls from '../Controls/Controls';

const SelectWrapper = () => {
    const context = useContext(SelectContext);
    const renderCategoriesList = () => {
        if(context.showList){
            return <CatList />
        }
        return <div style={{display: "none"}}></div>;
    }
    return (
        <div className="SelectWrapper">
            <div className="SearchWrapper">
                <Main />
                <Controls/>
            </div>
            <div className="ListWrapper">
                {renderCategoriesList()}
            </div>
        </div>
    )
}

export default SelectWrapper;