// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";


function App() {
    const detailElements = data.map(elem => <elem
        img={elem.img}
        rating={elem.rating}
        location={elem.location}
    />)

    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    );
}

export default App;