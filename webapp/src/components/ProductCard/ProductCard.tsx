import { useTranslation } from 'react-i18next'
import type { Product } from '../../pages/Main/interfaces/getContent.interface'
import {
  Badge,
  Buttons,
  ButtonsWrapper,
  BuyButton,
  BuyButtonWrapper,
  Card,
  CardWrapper,
  CartButton,
  CartButtonIcon,
  CartButtonWrapper,
  Currency,
  Image,
  ImageWrapper,
  Info,
  InitialPrice,
  Linker,
  Name,
  PriceWrapper,
  SalePrice,
} from './style'
import { HoverPurple } from '../../styles/hover-purple'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { t } = useTranslation()

  return (
    <CardWrapper>
      <Card>
        {product.hasDiscount ? (
          <Badge>
            <img src={product.iconUrl} alt="discount-badge" />
          </Badge>
        ) : null}
        <ImageWrapper to={product.route}>
          <Image src={product.imageUrl} alt={product.name} />
        </ImageWrapper>
        <Info>
          <Linker to={product.route}>
            <Name>{product.name}</Name>
          </Linker>
          <PriceWrapper>
            <SalePrice>
              {product.price}
              <Currency>₾</Currency>
            </SalePrice>
            <InitialPrice>
              {product.previousPrice}
              <Currency>₾</Currency>
            </InitialPrice>
          </PriceWrapper>
          <ButtonsWrapper>
            <Buttons>
              <CartButtonWrapper>
                <HoverPurple>
                  <CartButton>
                    <CartButtonIcon
                      xmlns="http://www.w3.org/2000/svg"
                      baseProfile="tiny"
                      viewBox="0 0 56.69 56.69"
                    >
                      <g data-name="Layer_1">
                        <circle cx="28.35" cy="28.35" r="28.35" fill="#fff"></circle>
                        <path d="M40.1 36.61H23.07c-.75 0-1.41-.51-1.6-1.24L16.08 14.9h-5.35c0-1.63 1.74-3.31 3.18-3.31h3.45c.75 0 1.41.51 1.6 1.24l5.39 20.47h14.47l3.35-8.68H28.36c0-1.86 2.47-3.31 3.91-3.31h11.98c.31 0 .62.07.89.22.66.39.95 1.15.77 1.84l-4.2 12c-.19.73-.85 1.25-1.61 1.25ZM36.76 41.89c.67 0 1.21.54 1.21 1.21s-.54 1.21-1.21 1.21-1.21-.54-1.21-1.21.54-1.21 1.21-1.21m0-2.49c-2.04 0-3.7 1.66-3.7 3.7s1.66 3.7 3.7 3.7 3.7-1.66 3.7-3.7-1.66-3.7-3.7-3.7ZM26.61 41.89c.67 0 1.21.54 1.21 1.21s-.54 1.21-1.21 1.21-1.21-.54-1.21-1.21.54-1.21 1.21-1.21m0-2.49c-2.04 0-3.7 1.66-3.7 3.7s1.66 3.7 3.7 3.7 3.7-1.66 3.7-3.7-1.66-3.7-3.7-3.7Z"></path>
                      </g>
                    </CartButtonIcon>
                  </CartButton>
                </HoverPurple>
              </CartButtonWrapper>
              <BuyButtonWrapper>
                <HoverPurple>
                  <BuyButton>{t('buy')}</BuyButton>
                </HoverPurple>
              </BuyButtonWrapper>
            </Buttons>
          </ButtonsWrapper>
        </Info>
      </Card>
    </CardWrapper>
  )
}

export default ProductCard
