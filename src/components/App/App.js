import React from 'react';
import {SelectStore} from '../../context/SelectContext';
import SelectWrapper from '../SelectWrapper/SelectWrapper';
const App = () => {

    return (
        <div>
            <SelectStore>
                <SelectWrapper />
            </SelectStore>
        </div>
    )
}

export default App;