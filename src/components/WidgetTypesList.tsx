import React from 'react';
import './WidgetTypesList.css';
import Widget from '../types/widgets/Widget';
import { useActions } from '../hooks/useActions';
import uuid from 'react-uuid';
import Weather from '../types/widgets/Weather';

const WidgetTypesList: React.FC = () => {

    const {addWidget} = useActions()
    
    const addWidgetItem = (): void => {
        addWidget(new Weather(uuid(), 'Погода', 1, 'Ижевск'))
    }
    
    return (
        <div className="WidgetTypesList">
            <button onClick={addWidgetItem}>Погода</button>
            <button>Курс валют</button>
        </div>
    );
}

export default WidgetTypesList;
