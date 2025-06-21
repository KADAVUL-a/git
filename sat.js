function App() {

  return (
    <div>
      <h1>React Input Example</h1>
      <p>You typed: {text}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
