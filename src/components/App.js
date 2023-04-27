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

// function onFormSubmit(newKid) {
//     console.log(newKid)
//     fetch("http://localhost:9292/kids", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newKid),
//     })
//     .then((r) => r.json())
//     .then((newKidData) => {
//         console.log(newKidData)
//         console.log(kids)
//         return setKids([...kids, newKidData])
//     });
// }

function addNewKid(newKidData) {
    console.log(newKidData)
    const newKidList = [...kids, newKidData]
    setKids(newKidList)
}




const displayKids = kids.filter((kid) => kid.name.toLowerCase().includes(search.toLowerCase()))


    return (
         <main className="header-color">
            <Header/>
            <Search search={search} setSearch={setSearch} />
            <KidsList kids={displayKids} onDeleteKid={handleDeleteKid} />
            <NewKid 
            // handleNewKid={onFormSubmit}
            />
         </main>
    )
}

export default App;