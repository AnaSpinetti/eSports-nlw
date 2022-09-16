import './styles/main.css';
import logo from './assets/Logo.png';
import {MagnifyingGlassPlus} from 'phosphor-react';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img className="max-w-[500px]" src={logo} alt="Logotipo eSports" />
      <h1 className="text-6xl text-white font-black mt-20px">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>
    
      
      <div className="grid grid-cols-6 mt-16">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
              <strong className="font-bold text-white block">Nome jogo</strong>
              <span className="text-zinc-300 text-sm block">Quantidade anuncios</span>
            </div>
          </a>
      </div>

    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden"></div>
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">Não encontrou o seu duo?</strong>
          <span className="text-zinc-400 block">Publique o seu anúncio para encontrar novos players</span>
        </div>

        <button className="py-3 px-4 bg-violet-500 text-white rounded hover: bg-violet-600 flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />  
          Publicar anúncio
        </button>
      </div>
    </div>
  )
}

export default App
