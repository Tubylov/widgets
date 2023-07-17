import React, { useState } from 'react';
import WidgetTypesList from './WidgetTypesList';
import Icons from './Icons'
import './ControlPanel.css';

const ControlPanel: React.FC = () => {

    const[isWidgetTypesList, setIsWidgetTypesList] = useState(false)

    return (
        <div className="ControlPanel">
            {
                isWidgetTypesList ?
                    <>
                        <WidgetTypesList />
                        <button className="ControlPanel__button" onClick={() => setIsWidgetTypesList(!isWidgetTypesList)}><Icons name='close' /></button>
                    </>
                :
                    <button className="ControlPanel__button" onClick={() => setIsWidgetTypesList(!isWidgetTypesList)}>+ Добавить виджет</button>
            }
        </div>
    );
}

export default ControlPanel;
