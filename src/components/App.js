import React, { useEffect, useState } from "react";
import Header from "./Header";
import KidsList from "/KidsList";
function App() {
    const [kids, setKids] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:9292/kids")
        .then((res) => res.json())
        .then((kids) => setKids(kids))
    }, [])

    function handleDeleteKid(id) {
        const updateKidList = kids.filter((kid) => kid.id !== id);
        setKids(updateKidList);
    }

    const displayKids = kids.filter((kid) => kid.name.toLowerCase().includes(search.toLowerCase()))



    return (
         <main className="header-color">
            <Header/>
            <Search search={search} setSearch={setSearch}
            <KidList kids={displayKids} onKidDelete={handleDeleteKid} />
         </main>
    )
}

export default App;