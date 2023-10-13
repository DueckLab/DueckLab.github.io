---
layout: null
---

---
layout: null
---

document.addEventListener('DOMContentLoaded', function () {
  // Path to your search data JSON file
  const searchDataURL = '/path-to-your/search_data.json';

  // Variables for DOM elements
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Perform the search when the input changes
  searchInput.addEventListener('input', function () {
    const query = this.value.trim(); // Trim leading/trailing whitespace

    if (query.length === 0) {
      // Clear search results if the query is empty
      searchResults.innerHTML = '';
      return;
    }

    // Load the JSON data (search_data.json) and process it
    fetch(searchDataURL)
      .then(response => response.json())
      .then(data => {
        // Create a lunr search index
        const index = lunr(function () {
          this.ref('url');
          this.field('title');
          this.field('content');

          data.forEach(function (doc) {
            this.add(doc);
          }, this);
        });

        // Perform the search
        const results = index.search(query);

        // Display search results
        renderResults(results, data);
      })
      .catch(error => {
        console.error('Error loading search data:', error);
        searchResults.innerHTML = '<p>Failed to load search data.</p>';
      });
  });

  function renderResults(results, data) {
    // Clear previous results
    searchResults.innerHTML = '';

    if (results.length > 0) {
      results.forEach(function (result) {
        const item = data.find(doc => doc.url === result.ref);
        const title = item.title;
        const url = item.url;

        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${url}">${title}</a>`;
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.innerHTML = '<p>No results found.</p>';
    }
  }
});
