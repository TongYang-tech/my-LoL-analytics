import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Layout from './components/layout/Layout'
import TradingCardGame from './components/tcg/TradingCardGame'
import Pokemon from './components/pokemon/Pokemon'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'trading-card-game', element: <TradingCardGame /> },
      { path: 'pokemon', element: <Pokemon /> }
    ]
  },
], {
  basename: import.meta.env.BASE_URL
})

const App = () => {
  return (
    <RouterProvider router={Router} future={{ v7_startTransition: true }} />
  )
}

export default App
