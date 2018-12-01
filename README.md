# MyReads Project App

MyReads App allow you organize your reading process. In app you can assign each book to 'Currently Reading', 'Want to Read', 'Read' categories. Each category has its own shelf.  The application allows you to add and delete books from shelfs.

Project is based on starter code from `https://github.com/udacity/reactnd-project-myreads-starter.git`

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## How to run application

To get started:
* clone project from github
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

Backend server has been proviced with starter code. 

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains all methods  necessary to perform operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Criteria

All criteria I needed to apply website:
1. Application Setup
* The application is easy to install and start. Requires only `npm install` and `npm start` to get it installed and launched,
* READMe file describes the  project and has instructions for installing and launching the project is included,
2. Main Page
* The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
* The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.,
* When the browser is refreshed, the same information is displayed on the page.
3. Search Page
* The search page has a search input field.
* The search page behaves correctly:
a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. You can use throttle/debounce but are not required to do so.

b) Search results are not shown when all of the text is deleted out of the search input box.

c) Invalid queries are handled and prior search results are not shown.

d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)

e) The user is able to search for multiple words, such as “artificial intelligence.”

* Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.

* When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

4. Routing
* The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search,
* The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

5. Code Functionality
* Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly,
* Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations,
* The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

## Dependencies
* React,
* Project is build on a on starter code from `https://github.com/udacity/reactnd-project-myreads-starter.git`
* Information about all packages used in project are in package.json

# Author
Jarosław Trzybiński