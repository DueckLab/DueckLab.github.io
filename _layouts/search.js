---
layout: null
---

document.addEventListener('DOMContentLoaded', function () {
  // Load your JSON data (search_data.json)
  fetch('/path-to-your/search_data.json')
    .then(response => response.json())
    .then(data => {
      const index = lunr(function () {
        this.ref('url');
        this.field('title');
        this.field('content');

        data.forEach(function (doc) {
          this.add(doc);
        }, this);
      });

      const searchInput = document.getElementById('search-input');
      const searchResults = document.getElementById('search-results');

      searchInput.addEventListener('input', function () {
        const query = this.value;
        const results = index.search(query);

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
      });
    })
    .catch(error => console.error('Error loading search data:', error));
});
