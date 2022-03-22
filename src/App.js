// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";


function App() {
    let i = 51;
    const cards = data.map(item => {
        return (
            <Card
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                id={i++}
            />
        )
    });

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    );
}

export default App;