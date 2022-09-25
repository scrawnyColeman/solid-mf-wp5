import { styled } from "solid-styled-components";
import { Button } from "./Button";

const App = () => {
  return (
    <StyledApp>
      <StyledH4>A microfrontend built with Solid-JS</StyledH4>
      <Button />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled("div")({
  backgroundColor: "lightgoldenrodyellow",
  width: "100%",
  height: "250px",
  borderRadius: "20px",
  padding: "20px",
  boxSizing: "border-box",
});

const StyledH4 = styled("h4")({
  margin: "0 0 1rem 0",
});
