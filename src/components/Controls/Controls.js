import React, {useContext} from 'react';
import SelectContext from '../../context/SelectContext';
import './Controls.css';

const Controls = () => {
    const context = useContext(SelectContext);
    const renderShowList = () => {
        const content = context.showList ? "▲" : "▼";
        return <button
        className="ctl-btn ShowList"
        onClick={() => context.setShowList()}
        >
        {content}
        </button>
    }
    const renderResetButton = () => {
        if(!context.selectedCategories) return null;
        return <button 
        className="ctl-btn ClearSelected"
        onClick={() => {context.reset()}}
        >×</button>
    }
    return(
        <div className="ControlsWrapper">
            {renderResetButton()}
            {renderShowList()}
        </div>
    )
}

export default Controls;