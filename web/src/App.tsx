import { useState, useEffect } from 'react';
import './styles/main.css';
import logo from './assets/Logo.png';
import { GameBanner } from './components/GameBanner';
import { CreateBanner } from './components/CreateBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number
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

  console.log(games)
  return (
    <div className="max-w-[1344px]  flex flex-col items-center my-20 mx-20">
      <img className="max-w-[300px]" src={logo} alt="Logotipo eSports" />
      <h1 className="text-4xl text-white font-black mt-20px">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>


      <div className="grid grid-cols-6 mt-16">
        {games.map(game => {
          return (<GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.Ads} />)
        })}
      </div>

      <Dialog.Root>
        <CreateBanner />
        
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
