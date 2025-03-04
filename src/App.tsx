import Card from "./components/Card";

function App() {
  const nombre = "Tavern of Spear";
  const description = "Una novela visual furra.";
  const pcURL = "https://www.itch.io";
  const andURL = "https://www.itch.io";
  const ofURL = "https://www.itch.io";
  const imVN = "./src/static/img/tos.png";
  return (
    <>
      <Card
        nombre={nombre}
        description={description}
        pcURL={pcURL}
        andURL={andURL}
        ofURL={ofURL}
        imVN={imVN}
      />
    </>
  );
}

export default App;
