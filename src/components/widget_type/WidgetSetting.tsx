import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import cities from '../../data/cities.json';
import Weather from '../../types/widgets/Weather';
import Generator from '../../types/widgets/Generator';
import Widget, { WidgetType } from '../../types/widgets/Widget';
import { TypeGenerator } from '../../types/widgets/Generator';

interface WidgetSettingProps {
    widgetItem: Widget;
}

const WidgetSetting: React.FC<WidgetSettingProps> = ({widgetItem}) => {

    const {widget} = useTypedSelector(state => state.widgetSettings)
    const {updateWidget, setSettings} = useActions()

    function SaveWeather(): void {
        const cityField = (document.getElementById('cityField') as HTMLInputElement).value
        if(widget){
            (widget as Weather).city = cityField
            setSettings(widget as Weather)
            updateWidget(widget as Weather)
        }
    }
    function SaveGenerator(): void {
        const typeGenerator : string = (document.getElementById('typeGenerator') as HTMLSelectElement).value
        if(widget){
            if(typeGenerator === 'Случайные числа') (widget as Generator).typeGenerator = TypeGenerator.RANDOM_NUMBER
            if(typeGenerator === 'Генератор UUID') (widget as Generator).typeGenerator = TypeGenerator.UUID
            setSettings(widget as Generator)
            updateWidget(widget as Generator)
        }
    }

    return (
        <>
        {
            widgetItem.type === WidgetType.WEATHER ?
                <>
                <h2>Настройки</h2>
                <label htmlFor="cityField">Введите город</label>
                <input id='cityField' list='cityData' type="text" defaultValue={(widget as Weather).city}/>
                <datalist id="cityData" defaultValue="">
                    {
                        cities.city.map((city) => 
                            <option key={city.city_id} value={city.name}>{city.name}</option>
                        )
                    }
                </datalist>
                <button onClick={SaveWeather}>Сохранить</button>
                </>
            : null
        }
        {
            widgetItem.type === WidgetType.GENERATOR ?
            <>
                <h2>Настройки</h2>
                <label htmlFor="typeGenerator">Тип генератора</label>
                <select id="typeGenerator" defaultValue={TypeGenerator.RANDOM_NUMBER}>
                    <option key={1} value={TypeGenerator.RANDOM_NUMBER}>Случайные числа</option>
                    <option key={2} value={TypeGenerator.UUID}>Генератор UUID</option>
                </select>
                <button onClick={SaveGenerator}>Сохранить</button>
            </>
            : null
        }
        </>
    );
}

export default WidgetSetting;
