import { Route, BrowserRouter as Router, Routes } from 'react-router'
import { Main } from '../pages/Main'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
