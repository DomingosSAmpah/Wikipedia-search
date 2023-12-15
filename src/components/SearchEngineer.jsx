'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaWikipediaW } from 'react-icons/fa'

const SearchEngineer = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [searchInfo, setSearchInfo] = useState({})

    const handleSearch = async e => {
        e.preventDefault();
        if (search === '') return;
        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`
        const response = await fetch(endpoint)
        // console.log(response)

        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json()
        setResults(json.query.search);
        setSearchInfo(json.query.searchinfo); //faz uma verificação
        // console.log(json)
    }

  return (
    <div className='app'>
        <section>
            <h1><FaWikipediaW/>ikipedia Search</h1>
            <form action="" className="search-box" onSubmit={handleSearch}>
                <input 
                    type="search" 
                    placeholder='pesquisar'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            {(searchInfo.totalhits) ? <p>Search Result: {searchInfo.totalhits}</p> : ''}
        </section>

        <div className="results">
            {results.map((result, i) => {
                 const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
                return(
                    <div className="result" key={i}>
                        <h3>{result.title}</h3>
                        <p dangerouslySetInnerHTML={{__html: result.snippet}}>
                        
                        </p>
                        <Link href={url} target='_blank' rel='nofollow'>Read more</Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SearchEngineer;