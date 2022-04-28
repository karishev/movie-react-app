import React from 'react'
import { lazy } from 'react'
import { Store } from '../Components/Context/Store'
import { EpisodeProps } from '../model/games.model'
import { GameItem } from '../Components/Games/GameItem'
import { Game } from '../model/games.model'

export const Favorites: React.FC = () => {
  const { state, dispatch } = useContext(Store)
  const props: EpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction: dispatch,
    favorites: state.favorites,
  }

  const game: PageProps = {}
  return (
    <div className="episode-layout">
      <GameItem {...props} />
    </div>
  )
}
