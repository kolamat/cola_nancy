import nancy from "/image.png";
import Type from "typed-js";

class User extends Type {
  constructor(name, password) {
    super({
      username: Type.STRING,
      password: Type.STRING,
    });
    this.username = name;
    this.password = password;
  }
  getUserName() {
    return this.username;
  }
  setUserName(kolade) {
    this.username = kolade;
  }
}

console.log(constructor);

function App() {
  return (
    <>
      <div className={`flex justify-center my-auto mx-auto`}>
        <img src={nancy} width={50} height={1} className="h-screen w-full" />
      </div>
    </>
  );
}

export default App;
