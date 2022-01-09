function App() {
  function doSomething(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <form onSubmit={(e) => doSomething(e)}>
        <input type="text" />
      </form>
    </>
  );
}

export default App;
