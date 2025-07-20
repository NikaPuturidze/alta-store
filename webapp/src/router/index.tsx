import { Route, Routes } from 'react-router'
import { Main } from '../pages/Main'
import { FilterView } from '../pages/Filter'
import { FilterProvider } from '../pages/Filter/context/FilterProvider'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blog" element={<div>blog</div>} />
      <Route path="/branches" element={<div>branches</div>} />
      <Route
        path="/:category"
        element={
          <FilterProvider>
            <FilterView />
          </FilterProvider>
        }
      />
    </Routes>
  )
}

export default AppRoutes
