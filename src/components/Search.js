import React from "react";
import { Input } from 'semantic-ui-react'

function Search({search, setSearch}) {
    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div style={{textAlign: "center"}}>
            <br />
            <Input
                size="large"
                icon='search'
                type="search"
                name="search"
                placeholder="Search name..."
                onChange={handleChange}
                value={search}
                autoComplete="off"
                />
                <br />
                <br/>
        </div>
    )
}

export default Search;