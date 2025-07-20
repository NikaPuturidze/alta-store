import styled from 'styled-components'

export const HoverPurple = styled.span`
  display: contents;

  > * {
    transition: box-shadow 0.5s ease-in-out;
  }

  > *:hover {
    box-shadow: 1px 2px 8.5px 0px var(--color-purple-4);
  }
`
