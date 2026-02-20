# Calorie Tracker

A simple React app for managing food items and tracking total calories.

## Name

- Hugo Cruz

## Website Link (Using Netlify)

https://ncfcalorietracker.netlify.app/

## GitHub Repository

https://github.com/Hugo-NCF/MiniProject03

---

## Description

Calorie Tracker is a simple and user-friendly React application that allows users to add, update, delete, and view grocery items along with their calorie values.

The app automatically calculates the total calories using JavaScript array methods. The interface is clean, centered, and easy to use.

This project demonstrates component-based design and proper use of React state management.

---

## Project Files

### main.jsx
The entry point of the application. It renders the `App` component into the root div.

### App.jsx
The main component that loads the CalorieTracker component.

### CalorieTracker.jsx
Handles all main logic:
- Stores the list of grocery items using `useState`
- Adds new items
- Updates existing items
- Deletes items
- Calculates total calories using `reduce()`

### ItemList.jsx
Displays the list of items using `<ul>` and renders each grocery item using the `map()` function.

### CalorieItem.jsx
Represents a single grocery item component.  
Contains:
- Item name
- Calorie value
- Edit button
- Delete button

---

## Features

- Add new grocery items
- Delete existing items
- Update existing items
- Display the current list of items
- Automatically calculate total calories
- Clean and simple UI design

---

## Array Methods Used

- `map()` → Display list of items
- `filter()` → Remove items
- `reduce()` → Calculate total calories

---

## Component-Based Design

The app is built using multiple reusable React components:

- App (main wrapper)
- CalorieTracker (state + logic)
- ItemList (renders list)
- CalorieItem (represents individual grocery item)

Each grocery item is its own component, following proper component-based design principles.

---

## Styling

The UI is kept simple and clean:
- Centered card layout
- Gradient background
- Rounded buttons
- Minimal and user-friendly design

---




