import React from 'react';
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Dropdown from "./component/Dropdown";
import Landing from "./component/Landing";
import Affair from "./component/Affair";
import Transform from "./component/Transform";
import Personal from "./component/Personal";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer"

function App(){
    return (
        <div>
            <Header />
            <Navbar />
            <Dropdown />
            <Landing />
            <Affair />
            <Transform />
            <Personal />
            <Gallery />
            <Footer />
        </div>
    )
}

export default App