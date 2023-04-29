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


useEffect(() => {
    fetch("http://localhost:9292/parents")
    .then((res) => res.json())
    .then((parents) => {
        
        
        const kidData= parents.flatMap((parent) => parent.kids)
        console.log(kidData)
        const allParentIds = (kidData.map((kid) => kid.parent_id));
        const uniqueIds = allParentIds.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        });
        setParentIds(uniqueIds);
        console.log(uniqueIds)

        setKids(kidData);
    })
}, [])


function handleDeleteKid(id) {
    const updateKidList = kids.filter((kid) => kid.id !== id);
    setKids(updateKidList);
}


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
                parentIds = {parentIds}
            // handleNewKid={onFormSubmit}
            />
         </main>
    )
}

export default App;