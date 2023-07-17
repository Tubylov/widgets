import React from 'react';
import WidgetItem from './WidgetItem';
import './WidgetColumn.css';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Widget from '../types/widgets/Widget';
import { useActions } from '../hooks/useActions';

interface WidgetColumnProps {
    number: number;
}

const WidgetColumn: React.FC<WidgetColumnProps> = ({number}) => {

    const {updateWidget} = useActions()

    let widgets: Widget[] = useTypedSelector(state => state.widgetList.widgets)
    widgets = widgets.filter(item => item.columnNumber === number)

    const currentWidget: Widget | null = useTypedSelector(state => state.widgetMove.widget)

    function dragOverHandler(e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void {
        e.preventDefault()
        if(e.currentTarget.className === 'WidgetColumn'){
            e.currentTarget.style.border = '3px solid #2ca58d'
        }
    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void {
        e.currentTarget.style.border = 'none'
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void {
        e.currentTarget.style.border = 'none'
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void {
        e.preventDefault()
        e.currentTarget.style.border = 'none'
        if(currentWidget !== null){
            currentWidget.columnNumber = number
            updateWidget(currentWidget)
        }
    }

    return (
        <div 
            id={`column${number}`}
            className="WidgetColumn" 
            onDrop={(e) => dropHandler(e)} 
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onTouchEnd={(e) => dropHandler(e)}
            >
            {
                widgets.length > 0 ?
                    widgets.map(widget => 
                        <WidgetItem key={widget.id} widget={widget} />
                    )
                :
                <div>Виджеты отсутствуют</div>
            }
        </div>
    );
}

export default WidgetColumn;
