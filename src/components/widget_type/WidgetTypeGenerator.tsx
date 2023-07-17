import React, { useState } from 'react';
import './WidgetTypeGenerator.css';
import Widget from '../../types/widgets/Widget';
import Generator, { TypeGenerator } from '../../types/widgets/Generator';
import uuid from 'react-uuid';

interface WidgetTypeGeneratorProps {
    widget: Widget;
}

const WidgetTypeGenerator: React.FC<WidgetTypeGeneratorProps> = ({widget}) => {

    const[isResult, setIsResult] = useState(false)
    const[result, setResult] = useState('')

    const getResult = () => {
        const bottomLine : number = +(document.getElementById('bottomLine') as HTMLInputElement).value
        const topLine : number = +(document.getElementById('topLine') as HTMLInputElement).value
        const total = Math.round(Math.random() * (topLine - bottomLine) + bottomLine)
        setResult(String(total))
        setIsResult(true)
    }
    const Back = () => {
        setIsResult(false)
        setResult('')
    }

    return (
        <div className="WidgetTypeGenerator">
            {
                !isResult ?
                    <>
                        {
                            (widget as Generator).typeGenerator === TypeGenerator.RANDOM_NUMBER ?
                            <>
                                <input id="bottomLine" type="number" placeholder='число от' />
                                <input id="topLine" type="number" placeholder='число до'/>
                                <button onClick={getResult}>Сгенерировать</button>
                            </>
                            : null
                        }
                        {
                            (widget as Generator).typeGenerator === TypeGenerator.UUID ?
                            <>
                                <button onClick={() => {
                                    setIsResult(true)
                                    setResult(uuid())
                                }}>Сгенерировать</button>
                            </>
                            : null
                        }
                        
                    </>
                :
                    <>
                        <p className={
                            (widget as Generator).typeGenerator === TypeGenerator.UUID ? 
                                "WidgetTypeGenerator__totalUUID" 
                            :   "WidgetTypeGenerator__total"} id='total'>{result}</p>
                        <button onClick={Back}>Назад</button>
                    </>
            }
        </div>
    );
}

export default WidgetTypeGenerator;
