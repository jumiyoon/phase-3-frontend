import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import KidsList from "./KidsList";
import NewKid from "./NewKid";



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

function onFormSubmit(newKid) {
    fetch("http://localhost:9292/kids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newKid) => {addNewKid(newKid)});
  }




const displayKids = kids.filter((kid) => kid.name.toLowerCase().includes(search.toLowerCase()))


    return (
         <main className="header-color">
            <Header/>
            <Search search={search} setSearch={setSearch} />
            <KidsList kids={displayKids} onKidDelete={handleDeleteKid} />
            <NewKid onFormSubmit={handleNewKid}/>
         </main>
    )
}

export default App;