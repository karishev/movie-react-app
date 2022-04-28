import React, { lazy } from 'react'
import { Store } from '../Components/Context/Store'
import { IEpisodeProps } from '../app/components/interfaces'
import { GameItem } from '../Components/Games/GameItem'

const GameList = lazy<any>(() => import('../Components/Games/GameItem'))

export const Favorites: React.FC = () => {
  const { state, dispatch } = React.useContext(Store)
  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction: dispatch,
    favorites: state.favorites,
  }
  return (
    <React.Suspense fallback={<div>loading ...</div>}>
      <div className="episode-layout">
        <GameItem {...props} />
      </div>
    </React.Suspense>
  )
}
