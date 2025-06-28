import { Route, Routes } from 'react-router'
import { Main } from '../pages/Main'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blog" element={<div>blog</div>} />
      <Route path="/branches" element={<div>branches</div>} />
    </Routes>
  )
}

export default AppRoutes
