import React, { useState, useEffect } from 'react'
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonState] = useState('counter-button-minus-active');

    useEffect(() => {
        console.log(`O estilo do botão atual é: ${buttonStyle}`);
    }, [buttonStyle])

    function down() {
        if (value <= 1) {
            setButtonState('counter-button-minus-desactive');
        }
        if (value > 0) {
            setValue(value - 1)
        }
    }

    function up() {
        setButtonState('counter-button-minus-active')
        setValue(value + 1)
    }

    return (
        <div className='countex-wrapper'>
            <button className={buttonStyle} onClick={down}>
                -
            </button>
            <p>
                {value}
            </p>
            <button className='counter-button-plus-active' onClick={up}>
                +
            </button>

        </div>
    )
}
