import { useState } from 'react';

function Smartcounter() {
    //retorna um vetor
    //1. variavel statefull
    //2. funcao amarra da a essa variavel que atualiza o valor
    const [quantity, upQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default Smartcounter