import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import KidsList from "./KidsList";
import NewKid from "./NewKid";
import NewParents from "./NewParents";
import ParentList from "./ParentList";
import NavBar from "./NavBar";



function App() {
const [kids, setKids] = useState([]);
const [search, setSearch] = useState("");
const [parentIds, setParentIds] = useState([]);
const [parents, setParents] = useState([]);


useEffect(() => {
    fetch("http://localhost:9292/parents")
    .then((res) => res.json())
    .then((parents) => {       
        const kidData= parents.flatMap((parent) => parent.kids)
        const allParentIds = (kidData.map((kid) => kid.parent_id));
        const uniqueIds = allParentIds.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        });
        setParents(parents);
        setParentIds(uniqueIds);
        setKids(kidData);
    })
}, [])


function handleDeleteKid(id) {
    const updateKidList = kids.filter((kid) => kid.id !== id);
    setKids(updateKidList);
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
    .then((newKidData) =>  displayNewKid(newKidData))
}

function displayNewKid(newKidData) {
    console.log(newKidData)
    const newKidList = [...kids, newKidData]
    setKids(newKidList)
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
    .then((newParentData) =>  displayNewParents(newParentsData))

    function displayNewParents(newParentsData) {
        console.log(newParentsData)
        const newParentsList = [...parents, newParentsData]
        setParents(newParentsList)
    }
}

const displayKids = kids.filter((kid) => kid.name.toLowerCase().includes(search.toLowerCase()))


    return (
         <main className="header-color">
            <Header/>
            <NavBar />
            <Routes>
                <Route path="/" element={<KidsList 
                    kids={displayKids} 
                    onDeleteKid={handleDeleteKid}
                    parents={parents}
                    search={search} 
                    setSearch={setSearch}
                />} />
                <Route path="parents" element={<ParentList parents={parents} kids={kids}/>} />
            </Routes>
            
            <NewKid 
                parentIds = {parentIds}
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