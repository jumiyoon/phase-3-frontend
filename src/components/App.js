import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import KidsList from "./KidsList";
import NewKid from "./NewKid";
import NewParents from "./NewParents";
import ParentList from "./ParentList";
import NavBar from "./NavBar";



function App() {
// const [kids, setKids] = useState([]);
const [search, setSearch] = useState("");
const [parents, setParents] = useState([]);


useEffect(() => {
    fetch("http://localhost:9292/parents")
    .then((res) => res.json())
    .then((parents) => {       
        const kidData= parents.flatMap((parent) => parent.kids)
        // why flatmap? bcuz the homepage is around kids 
        setParents(parents);
        // deal with the complex state management 
    })
}, [])


function handleDeleteKid(id) {
    // const updateKidList = kids.filter((kid) => kid.id !== id);
    // setKids(updateKidList);
    // fix this so that i set parents instead of setting kids 
}


function onNewKidSubmit(newKidData) {
    fetch("http://localhost:9292/kids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newKidData),
    })
    .then((r) => r.json())
    // .then((newKidData) =>  setKids([...kids, newKidData]))
    // right now i'm setting the kids ^ fix it
}


function onNewParentsSubmit(newParentsData) {
    fetch("http://localhost:9292/parents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newParentsData),
    })
    .then((r) => r.json())
    .then((newParentsData) =>  setParents([...parents, newParentsData]))

}

const kidsToDisplay = parents.flatMap((parent) => parent.kids).filter((kid) => kid.name.toLowerCase().includes(search.toLowerCase()))
// filter should receive an array of kid objects 

    return (
         <main className="header-color">
            <Header/>
            <NavBar />
            <Routes>
                <Route path="/" element={<KidsList 
                    kids={kidsToDisplay} 
                    onDeleteKid={handleDeleteKid}
                    parents={parents}
                    search={search} 
                    setSearch={setSearch}
                />} />
                <Route path="parents" element={<ParentList parents={parents} />} />
            </Routes>
            
            <NewKid 
                parents={parents}
                onFormSubmit={onNewKidSubmit}
            />
            <br/><br/>
            <NewParents onFormSubmit={onNewParentsSubmit} />
            <br/><br/><br/><br/>
         </main>
    )
}

export default App;