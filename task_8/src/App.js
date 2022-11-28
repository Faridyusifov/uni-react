import CustomButton from "./components/CustomButton/CustomButton";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CustomButton text="Sign in" warnMessage="Sehvlik var zehmet olmasa duzeldin!" hint="Button-un uzerine geldiniz!"/>
      </div>
    </div>
  );
}

export default App;
