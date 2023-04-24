import React, { useEffect, useState } from "react";

function App() {

useEffect(() => {
    fetch("http://localhost:9292/kids")
    .then((res) => res.json())
    .then((kids) => setKids(kids))
}, [])



    return (
         <main className="header-color">
         </main>
    )
}

export default App;