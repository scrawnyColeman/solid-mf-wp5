import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

export const Button = () => {
  const [count, setCount] = createSignal(0);

  return (
    <StyledButton
      type="button"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Click count: {count()}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled("button")({
  padding: "0.5rem",
  borderRadius: "0.375rem",
  backgroundColor: "#eef4cd",
  color: "#17111c",
  fontWeight: 600,
});
