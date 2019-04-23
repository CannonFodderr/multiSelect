import React, { createContext, useState } from 'react';
import categories from '../data/categories';

const SelectContext = createContext();
const INITIAL_STATE = {
    categories: categories,
    selectedCategories: false,
    showList: false,
    searchTerm: ""
}

export const SelectStore = (props) => {
    const [select, setSelect] = useState(INITIAL_STATE);
    const setSearchTerm = (searchTerm) => {
        setSelect({...select, searchTerm, showList: true});
    }
    const setShowList = () => {
        setSelect({...select, showList: !select.showList});
    }
    const setSelectedCategories = (index) => {
        let categories = [...select.categories];
        categories[index].show = true;
        let selectedCategories = true;
        setSelect({...select, categories, selectedCategories});
    }
    const removeSelectedCategory = (index) => {
        let categories = [...select.categories];
        categories[index].show = false;
        let stillSelected = select.categories.filter(cat => cat.show)
        let selectedCategories = stillSelected.length < 1 ? false : true
        setSelect({...select, categories, selectedCategories});
    }
    const reset = () => {
        let categories = select.categories.map(cat => {
            if(cat.show){
                cat.show = false;
            }
            return cat;
        })
        setSelect({...select, categories, selectedCategories: false, showList: false});
    }
    return (
        <SelectContext.Provider
        value={{
            ...select,
            setSearchTerm,
            setShowList,
            setSelectedCategories,
            removeSelectedCategory,
            reset
        }}>
            {props.children}
        </SelectContext.Provider>
    )
}

export default SelectContext;