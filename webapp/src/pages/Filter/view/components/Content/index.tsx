import { useFilterProvider } from '../../../context/FilterProvider'
import useBreadcrumb from '../../../components/breadcrumb/breadcrumb'

const ContentView = () => {
  const { products } = useFilterProvider()

  return useBreadcrumb({ breadcrumbList: products?.categoryName })
}

export default ContentView
