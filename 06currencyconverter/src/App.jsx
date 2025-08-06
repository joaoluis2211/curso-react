import { useState } from 'react'
import './App.css'
import useMoedaInfo from './hooks/useMoedaInfo'
import InputBox from './components/InputBox'

function App() {
  const [valor, setValor] = useState(0)
  const [local, setLocal] = useState('usd')
  const [para, setPara] = useState('inr')
  const [valorConvertido, setValorConvertido] = useState(0)

  const moedaInfo = useMoedaInfo(local)
  const opcoes = Object.keys(moedaInfo)

  const converter = () => {
    setValorConvertido(valor * moedaInfo[para])
  }

  const inverter = () => {
    setLocal(para)
    setPara(local)
    setValorConvertido(valor)
    setValor(valorConvertido)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: "url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg)"}}>
      <div className='w-full '>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault()
            converter()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="de"
              valor={valor}
              opcaoMoeda={opcoes}
              onMoedaMudar={(moeda) => setLocal(moeda)}
              onValorMudar={(valor) => setValor(valor)}
              moedaSelecionada={local}
              />
              </div>
              <div className='relative w-full h-0.5'>
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white
                rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={inverter}>Trocar</button>
              </div>
              <div className='w-full mb-1'>
              <InputBox
              label="para"
              valor={valorConvertido}
              opcaoMoeda={opcoes}
              onMoedaMudar={(moeda) => setPara(moeda)}
              moedaSelecionada={para}
              moedaDesabilitada
              />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                Converter {local.toUpperCase()} para {para.toUpperCase()}
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
