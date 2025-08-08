import { Route, Routes } from 'react-router'
import { Main } from '../pages/Main'
import { FilterView } from '../pages/Filter'
import { FilterProvider } from '../pages/Filter/context/FilterProvider'
import { TopicView } from '../pages/Topic'
import { TopicProvider } from '../pages/Topic/context/TopicProvider'

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
      <Route
        path="/topic/:title"
        element={
          <TopicProvider>
            <TopicView />
          </TopicProvider>
        }
      />
    </Routes>
  )
}

export default AppRoutes
