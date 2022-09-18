import { useState, useEffect } from 'react';
import './styles/main.css';
import logo from './assets/Logo.png';
import { GameBanner } from './components/GameBanner';
import { CreateBanner } from './components/CreateBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { InputForm } from './components/InputForm';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 mx-20">
      <img className="max-w-[300px]" src={logo} alt="Logotipo eSports" />
      <h1 className="text-4xl text-white font-black mt-20px">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>


      <div className="grid grid-cols-6 mt-16">
        {games.map(game => {
          return (<GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />)
        })}
      </div>

      <Dialog.Root>
        <CreateBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg">
            <Dialog.Title className="text-2xl font-black">Publique um anúncio</Dialog.Title>

              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='game' className='font-semibold'>Qual o game?</label>
                  <InputForm id='game' placeholder='Selecione o game que deseja jogar'  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='name'>Qual o nome (ou nickname)?</label>
                  <InputForm id='name' placeholder='Como te chamar dentro do jogo?' />
                </div>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='yearsPlaying'>Joga há quatos anos?</label>
                    <InputForm id='game' type='number' placeholder='Tudo bem ser ZERO' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor='discord'>Qual seu Discord?</label>
                    <InputForm id='discord' type='text' placeholder='Usuario#0000' />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='weekDays'>Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Domingo'>D</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Segunda'>S</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Terça'>T</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Quarta'>Q</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Quinta'>Q</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Sexta'>S</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Sábado'>S</button>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor='hourStart'>Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <InputForm id='hourStart' type='time' placeholder="De" />
                      <InputForm id='hourEnd' type='time' placeholder="Até" />
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <InputForm type='checkBox' />
                  Costumo me conectar no chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                  <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                    <GameController className='w-6 h-6' />
                    Encontrar duo
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
