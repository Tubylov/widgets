import React from 'react';
import './WidgetItem.css';
import Widget, { WidgetType } from '../types/widgets/Widget';
import WidgetItemControls from './WidgetItemControls';
import { useActions } from '../hooks/useActions';
import WidgetTypeWeather from './widget_type/WidgetTypeWeather';
import Weather from '../types/widgets/Weather';
import WidgetTypeGenerator from './widget_type/WidgetTypeGenerator';

interface WidgetProps {
    widget: Widget;
}

const WidgetItem: React.FC<WidgetProps> = ({widget}) => {

    const {setCurrentWidget} = useActions()

    const widgets = new Map([
        [WidgetType.WEATHER, <WidgetTypeWeather city={(widget as Weather).city} />],
        [WidgetType.GENERATOR, <WidgetTypeGenerator widget={widget} />]
      ]);

    function dragStartHandler(e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void {
        setCurrentWidget(widget)
    }

    return (
        <div 
            id={widget.id}
            className="WidgetItem" 
            draggable
            onDragStart={(e) => dragStartHandler(e)}
            onTouchStart={(e) => dragStartHandler(e)}
        >
            {widgets.get(widget.type)}
            <WidgetItemControls widget={widget} />
        </div>
    );
}

export default WidgetItem;
