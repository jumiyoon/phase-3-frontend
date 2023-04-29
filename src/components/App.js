import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import KidsList from "./KidsList";
import NewKid from "./NewKid";



function App() {
const [kids, setKids] = useState([]);
// change the app to be parents instead ==> how am i gonna get all the kids from the parents 
// "flat map" --> map through the parents, get the kids of the parents (array of kid objects )
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

function onNewParentsSubmit(newParentData) {
    fetch("http://localhost:9292/parents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newParentData),
    })
    .then((r) => r.json())
    .then((newParentData) =>  setParents(newParentData))
}

const displayKids = kids.filter((kid) => kid.name.toLowerCase().includes(search.toLowerCase()))


    return (
         <main className="header-color">
            <Header/>
            <Search search={search} setSearch={setSearch} />
            <KidsList 
                kids={displayKids} 
                onDeleteKid={handleDeleteKid}
                parents={parents} />
            <NewKid 
                parentIds = {parentIds}
                parents={parents}
                onFormSubmit={onNewKidSubmit}
            />
         </main>
    )
}

export default App;