import React, { InputHTMLAttributes } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const WidgetSettingWeather: React.FC = () => {

    const {widget} = useTypedSelector(state => state.widgetSettingsWeather)
    const {updateWidget, setSettingsWeather} = useActions()

    function Save(): void {
        const cityField = (document.getElementById('cityField') as HTMLInputElement).value
        if(widget){
            widget.city = cityField
            setSettingsWeather(widget)
            updateWidget(widget)
        }
    }

    return (
        <>
            <h2>Настройки</h2>
            <label htmlFor="cityField">Введите город</label>
            <input id='cityField' type="text" defaultValue={widget?.city}/>
            <button onClick={Save}>Сохранить</button>
        </>
    );
}

export default WidgetSettingWeather;
