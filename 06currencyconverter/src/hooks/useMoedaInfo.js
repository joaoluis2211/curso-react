import { useEffect, useState } from "react";

function useMoedaInfo(moeda){
    const [dados, setDados] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moeda}.json`)
        .then((res) => res.json())
        .then((res) => setDados(res[moeda]))
    }, [moeda])

    console.log(dados);
    
    return dados
}


export default useMoedaInfo;