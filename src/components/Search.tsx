import { FunctionComponent } from 'react'

const Search: FunctionComponent = () => {

    const handleClick = (event: Event) => {
        event.preventDefault()
    }

  return (
    <section className='search_container' >
        <form>
            <input type="text" className="search-bar" />
            <button className="search-button" onClick={() => handleClick}>Search</button>
        </form>
    </section>
  )
}

export default Search