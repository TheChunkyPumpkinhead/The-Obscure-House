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

function App() {
  return (
    <div>
      <H1>The Obscure House</H1>
      <Button>Check in</Button>
      <Button>Check out</Button>
    </div>
  );
}
export default App;
