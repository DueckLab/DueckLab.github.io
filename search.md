---
layout: page
title: Search
alt_title: What are you looking for?
permalink: /search/
---

<!DOCTYPE html>
<html>
<head>
  <title>{{ page.title }}</title> <!-- Added this line -->
  <script src="https://cdn.jsdelivr.net/npm/lunr/lunr.js"></script>
</head>
<body>
  <input type="text" id="search-input" placeholder="Search...">
  <div id="search-results"></div>
</body>

<script src="/_layouts/search.js"></script>
</html>


