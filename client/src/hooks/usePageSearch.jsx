import { useState, useEffect } from 'react';

const usePageSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [matchCount, setMatchCount] = useState(0);
  const [currentMatch, setCurrentMatch] = useState(0);

  const HIGHLIGHT_CLASS = 'page-search-highlight';
  const ACTIVE_HIGHLIGHT_CLASS = 'page-search-highlight-active';

  // Simple function to remove highlights
  const removeHighlights = () => {
    const highlights = document.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
    highlights.forEach(el => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });
  };

  // Function to perform search and highlighting
  const performSearch = (searchTerm) => {
    if (!searchTerm) {
      removeHighlights();
      setMatchCount(0);
      setCurrentMatch(0);
      return;
    }

    removeHighlights();

    const textNodes = [];
    const treeWalker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent || 
              parent.tagName === 'SCRIPT' || 
              parent.tagName === 'STYLE' || 
              parent.tagName === 'INPUT' ||
              parent.classList.contains(HIGHLIGHT_CLASS)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    while (treeWalker.nextNode()) {
      textNodes.push(treeWalker.currentNode);
    }

    let totalMatches = 0;
    textNodes.forEach(node => {
      const text = node.textContent || '';
      if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
        const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
        const span = document.createElement('span');
        
        parts.forEach(part => {
          if (part.toLowerCase() === searchTerm.toLowerCase()) {
            const highlight = document.createElement('span');
            highlight.className = HIGHLIGHT_CLASS;
            highlight.textContent = part;
            span.appendChild(highlight);
            totalMatches++;
          } else {
            span.appendChild(document.createTextNode(part));
          }
        });

        node.parentNode?.replaceChild(span, node);
      }
    });

    setMatchCount(totalMatches);
    if (totalMatches > 0) {
      const firstMatch = document.querySelector(`.${HIGHLIGHT_CLASS}`);
      if (firstMatch) {
        firstMatch.classList.add(ACTIVE_HIGHLIGHT_CLASS);
        setCurrentMatch(1);
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const navigateMatches = (direction) => {
    const highlights = document.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
    if (!highlights.length) return;

    highlights.forEach(el => el.classList.remove(ACTIVE_HIGHLIGHT_CLASS));

    let newMatch;
    if (direction === 'next') {
      newMatch = currentMatch % highlights.length + 1;
    } else {
      newMatch = currentMatch - 1 || highlights.length;
    }

    setCurrentMatch(newMatch);
    const activeElement = highlights[newMatch - 1];
    if (activeElement) {
      activeElement.classList.add(ACTIVE_HIGHLIGHT_CLASS);
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Clean up effect
  useEffect(() => {
    return () => removeHighlights();
  }, []);

  return {
    searchText,
    setSearchText,
    matchCount,
    currentMatch,
    navigateMatches,
    removeHighlights
  };
};

export default usePageSearch;