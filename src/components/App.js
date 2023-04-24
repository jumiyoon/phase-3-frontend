import React, { useEffect, useState } from "react";
import Header from "./Header";
import KidsList from "/KidsList";
function App() {
    const [kids, setKids] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/kids")
        .then((res) => res.json())
        .then((kids) => setKids(kids))
    }, [])



    return (
         <main className="header-color">
            <Header/>
            <KidList kids={kids} />
         </main>
    )
}

export default App;