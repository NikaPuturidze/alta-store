import { useTranslation } from 'react-i18next'
import {
  Binder,
  Currency,
  Filter,
  FilterClear,
  FilterIcon,
  Filters,
  FilterTitle,
  FilterTitleWrapper,
  FilterWrapper,
  Input,
  Price,
  PriceBinder,
  PriceTitle,
  StyledSlider,
  Top,
} from './style'
import { useFilterProvider } from '../../../context/FilterProvider'
import { useEffect } from 'react'
import { getCatId } from '../../../../../utils/getCatId'
import { useLocation } from 'react-router'

const AsideView = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const { price, filter, setPrice, setCatId } = useFilterProvider()

  useEffect(() => setCatId(getCatId(location.pathname)), [location, setCatId])

  useEffect(() => {
    if (filter?.maxPrice !== undefined && price == null) {
      setPrice([0, filter.maxPrice])
    }
  }, [filter, price, setPrice])

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[])
  }

  return (
    <FilterWrapper>
      <Filter>
        <FilterTitleWrapper>
          <FilterTitle>{t('filter')}</FilterTitle>
          <FilterClear>
            <FilterIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
              <path
                fill="#181D27"
                fillOpacity="0.6"
                d="M11.342 14.828a.799.799 0 0 1-.278.352.806.806 0 0 1-.461.143H1.578a.783.783 0 0 1-.467-.149.774.774 0 0 1-.276-.357.772.772 0 0 1-.042-.45.779.779 0 0 1 .239-.425l1.39-1.299v-1.032c0-.346.137-.675.382-.92.247-.247.574-.382.922-.382H5.15l-.123-8.593A1.007 1.007 0 0 1 6.038.676c.22 0 .428.067.602.2.174.126.298.3.363.506.028.087.045.18.048.275v.006l.126 8.646h.639v.579h-1.21l-.135-9.214a.43.43 0 0 0-.433-.42.439.439 0 0 0-.312.133.423.423 0 0 0-.121.315v.006l.132 9.18h-2.01a.721.721 0 0 0-.726.723v.869h6.266v-.866c0-.4-.326-.726-.726-.726v-.58a1.305 1.305 0 0 1 1.305 1.305v1.036l1.32 1.307a.802.802 0 0 1 .176.872Z"
              ></path>
            </FilterIcon>
            {t('clear')}
          </FilterClear>
        </FilterTitleWrapper>
        {filter && price ? (
          <Filters>
            <Price>
              <PriceTitle>{t('price')}</PriceTitle>
              <StyledSlider
                getAriaLabel={() => 'Price range'}
                value={price}
                max={filter?.maxPrice}
                onChange={handlePriceChange}
              />
              <PriceBinder>
                <Binder>
                  <Top>{t('from')}</Top>
                  <Input
                    type="number"
                    value={price[0]}
                    onChange={(val) => setPrice([+val.target.value, price[1]])}
                  ></Input>
                  <Currency>
                    <span>₾</span>
                  </Currency>
                </Binder>
                <Binder>
                  <Top>{t('to')}</Top>
                  <Input
                    type="number"
                    value={price[1]}
                    onChange={(val) => setPrice([price[0], +val.target.value])}
                  ></Input>
                  <Currency>
                    <span>₾</span>
                  </Currency>
                </Binder>
              </PriceBinder>
            </Price>
          </Filters>
        ) : null}
      </Filter>
    </FilterWrapper>
  )
}

export default AsideView
