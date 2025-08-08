import { useTranslation } from 'react-i18next'
import { BreadcrumbList, BreadcrumbListElement, BreadcrumbWrapper } from './style'
import { Link } from 'react-router'

interface IBreadcrumb {
  id: number
  name: string
  imageUrl: string
  route: string
}

type Props = {
  breadcrumbList: (string | undefined) | IBreadcrumb[]
}

const useBreadcrumb = ({ breadcrumbList }: Props) => {
  const { t } = useTranslation()
  if (!breadcrumbList) return

  return (
    <BreadcrumbWrapper>
      <BreadcrumbList>
        <BreadcrumbListElement>
          <Link to={'/'}>{t('mainPage')}</Link>
        </BreadcrumbListElement>
        {typeof breadcrumbList === 'string' ? (
          <BreadcrumbListElement>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="9"
              fill="none"
              viewBox="0 0 7 15"
            >
              <path
                stroke="#292D32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.35"
                d="m.712 1.56 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"
              ></path>
            </svg>
            <Link to={''}>{breadcrumbList}</Link>
          </BreadcrumbListElement>
        ) : (
          breadcrumbList?.map((b, i) => (
            <BreadcrumbListElement key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                fill="none"
                viewBox="0 0 7 15"
              >
                <path
                  stroke="#292D32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.35"
                  d="m.712 1.56 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"
                ></path>
              </svg>
              <Link to={b.route}>{b.name}</Link>
            </BreadcrumbListElement>
          ))
        )}
      </BreadcrumbList>
    </BreadcrumbWrapper>
  )
}

export default useBreadcrumb
