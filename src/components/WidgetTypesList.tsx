import React from 'react';
import './WidgetTypesList.css';
import { useActions } from '../hooks/useActions';
import uuid from 'react-uuid';
import Weather from '../types/widgets/Weather';
import { WidgetType, WidgetName } from '../types/widgets/Widget';
import Generator, { TypeGenerator } from '../types/widgets/Generator';

const WidgetTypesList: React.FC = () => {

    const {addWidget} = useActions()
    
    return (
        <div className="WidgetTypesList">
            <button className="WidgetTypesList_button" onClick={
                () => addWidget(new Weather(uuid(), WidgetName.WEATHER, 1, 'Ижевск', WidgetType.WEATHER))
                }>Погода</button>
            <button className="WidgetTypesList_button" onClick={
                () => addWidget(new Generator(uuid(), WidgetName.GENERATOR, 1, TypeGenerator.RANDOM_NUMBER, WidgetType.GENERATOR))
                }>Генератор чисел</button>
        </div>
    );
}

export default WidgetTypesList;
