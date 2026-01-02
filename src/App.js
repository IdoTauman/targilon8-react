import Foo from "./Foo"

function App() {
  var i = 1 + 2;
  return (
    <div>
      <Foo a="1" b="a" c={i} />
      <Foo a="1" b ="5" c={i * i} />
    </div>
  );
}

export default App;