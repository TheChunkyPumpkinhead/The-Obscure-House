import styled from "styled-components";
// reuseable component
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
// reuseable button component
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;

  margin: 20px;
`;
// reuseable Input box
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

// this component styles the main App component
const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Obscure House</H1>
      <Button>Check in</Button>
      <Button>Check out</Button>

      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
  );
}
export default App;
