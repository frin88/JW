# JustWatch - Frontend Engineer Assignment

## Overview

For this assignment, we our goal is to make a _watch list_, a list of movie titles we would like to watch next. We will get a list of movies and TV Shows from the IMBd database, and choose which ones we want to watch next!

## Assignment

Develop a search engine for movies and TV Shows to list titles for a specific keyword.

After listing, users should be able to select titles that will be shown in another list.

You will consume the [IMDb API](https://imdb-api.com/) and you will need an API key. For this, you need to register in the website. If you can't do it, please let us know and we will provide you a test key.

There are neither mockups nor predefined design, so you may implement as you wish.

## Tech requirements

You will develop the app in Vue. You may choose to use functional or classes components and install a component library.

You can choose to develop in Stackblitz (you can fork this project) or connect to a Github repo and develop it locally. Your call!

Once finished, please send us the link to your project (and code).

## Features

**Expected test duration**
It is expected that you finish implementing the required features in up to 2 hours.

If you finish before this time, there are some suggested bonus features you can implement, although feel free to add your personal touch.

If you don't finish in time, don't worry. Just send us what you could complete and we can discuss it during our interview.

**Required features:**

1. Implement a search field that returns a list of movies
   - It should show the name of the title, release year, the poster image
2. Users should be able to select multiple titles, in multiple searches, and show them in a separate list, which will be called "Selected titles"
3. Implement a button that, when clicked, opens a modal that will show a list of the selected titles.

**Bonus features:**

- Be able to select and search for TV Shows as welln
- Sort titles by rating (imDb, metacritic, rottenTomatoes, pick one!)

## API

**Swagger:**
https://imdb-api.com/swagger/index.html

**Suggested endpoints:**

```
GET /API/SearchMovie/{apiKey}/{expression}
GET /API/SearchSeries/{apiKey}/{expression}
GET /API/Ratings/{apiKey}/{id}
```
