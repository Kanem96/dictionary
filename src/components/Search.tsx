import { FunctionComponent } from 'react'

const Search: FunctionComponent = () => {
  return (
    <section className='search_container' >
        <form>
            <input type="text" className="search-bar" />
            <button className="search-button">Search</button>
        </form>
    </section>
  )
}

export default Search