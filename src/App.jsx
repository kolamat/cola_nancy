import nancy from "/image.png";
import typed from "./page";

console.log(typed);

function App() {
  return (
    <>
      <div className={`flex justify-center my-auto mx-auto`}>
        <img src={nancy} width={50} height={1} className="h- w-" />
      </div>
      <div>{typed}</div>
    </>
  );
}

export default App;
