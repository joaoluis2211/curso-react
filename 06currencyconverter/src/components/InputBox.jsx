import React from 'react'

function InputBox({
    label,
    valor,
    onValorMudar,
    onMoedaMudar,
    opcaoMoeda = [],
    moedaSelecionada = "usd",
    valorDesabilitado = false,
    moedaDesabilitada = false,
    className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>InputBox
        <div className='w-1-2'>
            <label className='text-black/40 mb-2 inline-block'>{label}</label>
            <input type="number" className='outline-none w-full bg-transparent py-1.5'
            placeholder='Valor' disabled={valorDesabilitado} 
            value={valor} onChange={(e) => onValorMudar && onValorMudar(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Tipo de moeda</p>
        <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={moedaSelecionada} onChange={(e) => {onMoedaMudar && onMoedaMudar(e.target.value)}}
        disabled={moedaDesabilitada}
        >
            {opcaoMoeda.map((moeda) => (
                <option key={moeda} value={moeda}>{moeda}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox