import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/container";
import Carousel from "./components/carousel/Carousel";
import info from "./data";

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Carousel title="Favoritos" info={shuffle(info)} />
      <Carousel title="Series" info={info} />
    </>
  );
}

export default App;
