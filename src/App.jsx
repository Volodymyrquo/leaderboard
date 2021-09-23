import Table from './components/LeaderboardTable.jsx'
import { Provider } from './context/context.js'

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  )
}

export default App
