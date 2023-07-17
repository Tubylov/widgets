import React from 'react';
import './WidgetItemControls.css';
import Icons from './Icons';
import { useActions } from '../hooks/useActions';
import Widget, { WidgetType } from '../types/widgets/Widget';
import Weather from '../types/widgets/Weather';
import Generator from '../types/widgets/Generator';

interface WidgetItemControlsProps {
    widget: Widget | Weather | Generator
}

const WidgetItemControls: React.FC<WidgetItemControlsProps> = ({widget}) => {

    const {removeWidget, openSettings} = useActions()

    const removeWidgetItem = (e: React.MouseEvent): void => {
        console.log(e.target)
        if((e.target as Element).className === 'WidgetItemControls__close'){
            if(widget.type === WidgetType.WEATHER) removeWidget(widget as Weather)
            if(widget.type === WidgetType.GENERATOR) removeWidget(widget as Generator)
        }
        if((e.target as Element).className === 'WidgetItemControls__settings'){
            if(widget.type === WidgetType.WEATHER) openSettings(widget as Weather)
            if(widget.type === WidgetType.GENERATOR) openSettings(widget as Generator)
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
