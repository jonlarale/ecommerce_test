# Ecommerce GAPSI Project

## Installation

Install the dependencies and start the server.

```sh
npm install
npm start
```

In order to fetch the data, you need a REACT_APP_API_KEY environment variable. Add this to a .env file in the root of the project.

## Main idea of the project

It consists of an online store where the items you are looking for are displayed as you make scroll down. When last element is reached it changes the query page to the next one.

TODO:
The drag and drop container it doesn't work yet. It needs the react-draggable lib to work well.

The shopping cart has no functionality. A simple reducer to add and reset a counter could be useful.
