import React, { useEffect, useState } from "react";
import Header from "./Header";
function App() {

useEffect(() => {
    fetch("http://localhost:9292/kids")
    .then((res) => res.json())
    .then((kids) => setKids(kids))
}, [])



    return (
         <main className="header-color">
            <Header/>
         </main>
    )
}

export default App;