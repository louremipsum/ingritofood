# Ingrito-food

![Ingrito-food banner](https://github.com/louremipsum/ingritofood/assets/72456774/cf7f4b85-0351-44cc-87bf-e1e423cf6b5b)

## Introduction
The frontend repository of the Ingrito-food project is responsible for providing the user interface for the web-based virtual recipe book. This documentation will guide you through the front-end application's setup, usage, and features.
The backend part is available here https://github.com/louremipsum/ingritofood-backend

## Video Introduction and Demo

https://www.youtube.com/watch?v=mDNPhIIc8yM

## Getting Started
To run the frontend project locally, follow these steps:

1) Clone the frontend repository from GitHub.
2) Install the necessary dependencies using npm or yarn.
3) Start the development server.
4) Access the application in your web browser.

## Features
The frontend application offers the following features:

* **Ingredient Input**: Users can input and append the ingredients they have on hand.
* **Fuzzy Search**: A fuzzy search functionality helps users select ingredients from a long list more easily.
* **Recipe Filtering**: The application parses through thousands of recipes and filters out the ones that can be cooked with the available ingredients.
* **Recipe Display**: Filtered recipes are displayed in a grid format, showing basic information about each recipe.
* **Recipe Details**: Users can select a recipe from the grid to view the full recipe details, including ingredients and concise cooking instructions.

## Usage
1) Launch the Ingrito-food application in your web browser.
2) Enter the ingredients you have on hand, either by typing them or using the drop-down menu.
3) Click the "Get Recipes" button to retrieve the recipes that can be made with the entered ingredients.
4) View the filtered recipes displayed in the grid format.
5) Click on a recipe to access its full details, including ingredients and cooking instructions.

## Integration with Backend
The front end communicates with the backend to retrieve recipe data. It makes API requests to the backend server, which interacts with the Spoonacular API to fetch recipe information based on the entered ingredients. The front end uses Axios, a promise-based HTTP client, to handle the API requests.

## Future Scope
There are several potential improvements for the front:

* **Enhance User Interface**: Improve the overall design and user experience of the application.
* **Additional API Integration**: Integrate more APIs to provide additional recipe information, such as health scores and beverage pairings.
Error Handling: Implement better error handling mechanisms to provide helpful feedback to users in case of errors.
