import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <>
    <ReactTyped
      startWhenVisible="true"
      strings={[
        "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
        "wetin dey sup bahi??",
      ]}
      typeSpeed={40}
    />
    kolade
  </>
);

export default MyComponent;
