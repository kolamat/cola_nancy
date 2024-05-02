import nancy from "/image.png";
import { ReactTyped,Typed } from "react-typed";




// const MyComponent = () => (
//   <div>
//     <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
//     <br />

//     <ReactTyped
//       strings={[
//         "Search for products",
//         "Search for categories",
//         "Search for brands",
//       ]}
//       typeSpeed={40}
//       backSpeed={50}
//       attr="placeholder"
//       loop
//     >
//       <input type="text" />
//     </ReactTyped>
//   </div>
// );

// const MyComponent  {
    
// }

function App() {
    const [typed,setTyped] = React.useState<Typed| undefined>


  return (
    <>
      <div className={`flex justify-center my-auto mx-auto`}>
        {MyComponent}
        <img src={nancy} width={50} height={1} className="h-screen w-full" />
        <div>
          <Button onClick={typed.start()}>Start</Button>
          <Button onClick={typed.stop()}>Stop</Button>
          <Button onClick={typed.toggle()}>Toggle</Button>
          <Button onClick={typed.destroy()}>Destroy</Button>
          <Button onClick={typed.reset()}>Reset</Button>
          <ReactTyped
            typedRef={setTyped}
            strings={["Here you can find anything"]}
            typeSpeed={40}
          />
        </div>
      </div>
    </>
  );
}

export default App;
