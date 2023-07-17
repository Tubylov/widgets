import React from 'react';
import WidgetColumn from './WidgetColumn';
import './WidgetKitPanel.css';

const WidgetKitPanel: React.FC = () => {

    return (
        <div className="WidgetKitPanel">
            <WidgetColumn number={1} />
            <WidgetColumn number={2} />
            <WidgetColumn number={3} />
        </div>
    );
}

export default WidgetKitPanel;
