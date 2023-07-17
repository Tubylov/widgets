import React from 'react';
import './WidgetItem.css';
import Widget from '../types/widgets/Widget';
import WidgetItemControls from './WidgetItemControls';
import { useActions } from '../hooks/useActions';
import WidgetTypeWeather from './widget_type/WidgetTypeWeather';
import Weather from '../types/widgets/Weather';

interface WidgetProps {
    widget: Widget | Weather;
}

const WidgetItem: React.FC<WidgetProps> = ({widget}) => {

    const {setCurrentWidget} = useActions()

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>): void {
        setCurrentWidget(widget)
        console.log(widget)
    }

    return (
        <div 
            id={widget.id}
            className="WidgetItem" 
            draggable
            onDragStart={(e) => dragStartHandler(e)}
        >
            <WidgetTypeWeather city={(widget as Weather).city} widget={(widget as Weather)} />
            <WidgetItemControls widget={widget} />
        </div>
    );
}

export default WidgetItem;
