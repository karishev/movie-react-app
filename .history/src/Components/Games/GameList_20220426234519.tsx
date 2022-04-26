import { useEffect, useState } from 'react'
import styles from '../UI/GameList.module.css'
import api from '../../services/api'
import { Game } from '../../model/games.model'

const fetchGames = async () => {
  try {
    const games = await api.games.getGames()
    return games
  } catch (error) {
    console.log('Error: ' + error)
  } finally {
    console.log('Finished')
  }
}

export const GameList = () => {
  const [games, setGames] = useState<Game[]>()

  useEffect(() => {
    fetchGames().then((response) => response && setGames(response));
  }, []);
  return (
    <div>
      {games
            ? games.map((game: Game) => {
                return <GamesListItem key={game.id} game={game} />;
              })
            : Array.from(new Array(16)).map((item, index) => {
                return <GameListItemSkeleton key={index} />;
              })}
    </div>
      
    
}
