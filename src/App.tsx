import React from 'react';
import ControlPanel from './components/ControlPanel';
import WidgetKitPanel from './components/WidgetKitPanel';
import WidgetSettingWeather from './components/widget_type/WidgetSettingWeather';
import ModalBox from './components/ModalBox';
import './App.css';
import { useTypedSelector } from './hooks/useTypedSelector';

const App = () => {

  const {isModalBox} = useTypedSelector(state => state.widgetSettingsWeather)

  return (
    <div className="App">
      <ControlPanel />
      <WidgetKitPanel />
      {
        isModalBox ?
        <ModalBox>
          <WidgetSettingWeather />
        </ModalBox>
        :
          null
      }
      
    </div>
  );
}

export default App;
