import styled, { css } from 'styled-components'

// Send props to styled components
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.$primary && css`
    background: #BF4F74;
    color: white;
  `}
`;

// Extend Button above: A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Container = styled.div`
  text-align: center;
`
export default () => {
    return (
        <Container>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
        <Button as="a" href="#">Link with Button styles</Button>

        <TomatoButton>Tomato Button</TomatoButton>
        </Container>
    )
}
