import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-block: 40px;
  font-size: unset;
  font-weight: unset;
  line-height: unset;
  span {
    font-family: tahoma !important;
  }

  ul {
    list-style-type: disc;
    li {
      margin-left: 20px;

      &::marker {
        color: var(--color-purple-1);
      }

      a {
        span {
          font-family: helveticaNeue !important;
        }
      }
    }
  }

  font {
    font-family: unset !important;
  }
`
