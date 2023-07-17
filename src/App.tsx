import React from 'react';
import ControlPanel from './components/ControlPanel';
import WidgetKitPanel from './components/WidgetKitPanel';
import WidgetSetting from './components/widget_type/WidgetSetting';
import ModalBox from './components/ModalBox';
import './App.css';
import { useTypedSelector } from './hooks/useTypedSelector';

const App = () => {

  const {isModalBox, widget} = useTypedSelector(state => state.widgetSettings)

  return (
    <div className="App">
      <ControlPanel />
      <WidgetKitPanel />
      {
        isModalBox ?
        <ModalBox>
          <WidgetSetting widgetItem={widget} />
        </ModalBox>
        :
          null
      }
      
    </div>
  );
}

export default App;
