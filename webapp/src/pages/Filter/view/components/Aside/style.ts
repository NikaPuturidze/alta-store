import Slider from '@mui/material/Slider'
import styled from 'styled-components'

export const FilterWrapper = styled.aside``

export const Filter = styled.div`
  position: relative;
  width: 278px;
  background-color: var(--color-white);
  margin-bottom: 60px;
`

export const FilterTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 25px 30px;
`

export const FilterTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`

export const FilterClear = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: var(--color-black-3-06);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;
`

export const FilterIcon = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
`

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-light-gray-1);
  border-radius: 10px;
`

export const Price = styled.div`
  border-bottom: 1px solid var(--color-light-gray-1);
  padding: 16px;
`

export const PriceTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  cursor: pointer;
`

export const StyledSlider = styled(Slider)`
  width: 90% !important;
  margin: 0px 0px 13px 10px;

  .MuiSlider-rail {
    background-color: var(--color-purple-2);
    height: 8px;
  }

  .MuiSlider-track {
    height: 8px;
    background-color: var(--color-purple-1);
    border: none;
  }

  .MuiSlider-thumb {
    height: 24px;
    width: 24px;
    color: var(--color-white);
    border: 2px solid var(--color-purple-1);

    &:hover {
      box-shadow: 0 0 0 8px var(--color-light-purple-3-06);
    }
  }

  .css-1xcmt9q-MuiSlider-thumb.Mui-focusVisible:hover {
    box-shadow: 0 0 0 8px var(--color-light-purple-3-06);
  }

  .css-1xcmt9q-MuiSlider-thumb.Mui-focusVisible {
    box-shadow: 0 0 0 8px var(--color-light-purple-3-06);
  }
`

export const PriceBinder = styled.div`
  display: flex;
  gap: 20px;
`

export const Binder = styled.div`
  position: relative;
  max-width: 123px;
  font-size: 14px;
`

export const Top = styled.span`
  display: block;
  margin-bottom: 6px;
  font-weight: 400;
  width: 10px;
  height: 14px;
`

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid var(--color-light-gray-1);
  border-radius: 5px;
  padding: 12px 24px 12px 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`

export const Currency = styled.span`
  position: absolute;
  right: 12px;
  bottom: 13px;
  font-weight: 400;
  opacity: 0.6;

  span {
    font-size: 80%;
  }
`
