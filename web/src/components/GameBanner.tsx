interface GameBanner{
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props : GameBanner){
    return(
        <a href="" className="relative rounded-lg overflow-hidden px-1">
        <img src={props.bannerUrl} alt=""/>
        <div className="w-full pt-16 pb-4 px-2 bg-game-gradient absolute bottom-0 left-0 right-0" >
          <strong className="font-bold text-white block">{props.title}</strong>
          <span className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</span>
        </div>
      </a>
    )
}