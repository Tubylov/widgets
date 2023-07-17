import React from 'react';
import './WidgetItemControls.css';
import Icons from './Icons';
import { useActions } from '../hooks/useActions';
import Widget from '../types/widgets/Widget';
import Weather from '../types/widgets/Weather';

interface WidgetItemControlsProps {
    widget: Widget | Weather
}

const WidgetItemControls: React.FC<WidgetItemControlsProps> = ({widget}) => {

    const {removeWidget, openSettingsWeather} = useActions()

    const removeWidgetItem = (e: React.MouseEvent): void => {
        console.log(e.target)
        if((e.target as Element).className === 'WidgetItemControls__close'){
            removeWidget(widget)
        }
        if((e.target as Element).className === 'WidgetItemControls__settings'){
            openSettingsWeather(widget as Weather)
        }
    }

    return (
        <div className="WidgetItemControls" onClick={(e) => removeWidgetItem(e)}>
            <button className="WidgetItemControls__close"><Icons name='close' /></button>
            <button className="WidgetItemControls__settings"><Icons name='settings' /></button>
        </div>
    );
}

export default WidgetItemControls;
