import React, { useRef } from 'react'
import './Menubar.css'
import usePageSearch from '../../hooks/usePageSearch';
const Search = () => {
    const [customText, setCustomText] = React.useState('');
    const {
        searchText,
        setSearchText,
        matchCount,
        currentMatch,
        highlightText,
        navigateMatches,
        removeHighlights
      } = usePageSearch();
   
      const inputRef = useRef(null);
      console.log(customText)

      const handleChange = (e) => {
        setSearchText(e.target.value);
        setCustomText(e.target.value);
        highlightText(e.target.value);
      }
       // Clean up highlights when component unmounts
        React.useEffect(() => {
          return () => removeHighlights();
        }, []);
  return (
    <div
        className="input-group"
        style={{
          maxWidth: '300px',
          borderRadius: '100px',
          overflow: 'hidden',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <button className="input-group-text bg-white border-0" style={{ color: 'var(--heading)' }}>
          <i className="bi bi-search"></i>
        </button>
        <input
          type="text"
          ref={inputRef}
          className="form-control border-0"
          placeholder="Search"
          value={customText}
          onChange={handleChange}
          style={{
            borderRadius: '0',
            outline: 'none',
            boxShadow: 'none',
            paddingRight: '100px', // Make room for navigation controls
          }}
        />   
        {customText && (
          <div className="search-navigation" style={{ zIndex: 100 }}>
            <span className="search-count">
              {matchCount > 0 ? `${currentMatch}/${matchCount}` : 'No matches'}
            </span>
            <button
              className="search-nav-button"
              onClick={() => navigateMatches('prev')}
              disabled={matchCount === 0}
              title="Previous match"
            >
              <i className="bi bi-chevron-up"></i>
            </button>
            <button
              className="search-nav-button"
              onClick={() => navigateMatches('next')}
              disabled={matchCount === 0}
              title="Next match"
            >
              <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        )}
      </div>
  )
}

export default Search;