import './assets/css/App.css';
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Link from "./pages/Link";

function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page1" element={<Link />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
