# Mysterious Organisims
> CodeCademy Redux Road Javascript Project

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
> This project is part of the CodeCademny Redux section of the Full-Stack Engineer course. Redux Road is a simple terminal game consisting of reducers, state and actions.

## Technologies
* JavaScript - version ES6
* node - version 12.18.0

## Setup
Clone respository from https://github.com/manovak24/redux_road

To start your server, run `npm install` and then `node redux-road.js`.

## Code Examples

```js
const gameReducer = (state = initialWagonState, action) => {
    switch(action.type) {
        case 'gather': {
            return {
                ...state,
                supplies: state.supplies + 15,
                distance: state.distance,
                days: state.days + 1,
                cash: state.cash
            }
        }
};
```

## Status
Project is: _finished_

## Inspiration
CodeCademy project

## Contact
Created by [@manovak24](https://github.com/manovak24) - feel free to contact me!