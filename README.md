# Pokemon Battle Simulator

An interactive Pokémon Battle Simulator built with HTML, CSS, and JavaScript. The application fetches real-time data from two distinct public APIs to dynamically render Pokémon and their random held status items directly onto a CSS Grid layout.

## Project Purpose & Learning Goals

This project is an ongoing effort to study and replicate the classic turn-based combat mechanics found in early-generation Pokémon games. The primary objective is to understand how foundational state management, randomized encounter values, sprite alignment vectors, and synchronized audio assets interact behind the scenes to create authentic retro game loops. Future iterations will build upon this framework to implement active stat modifiers, damage calculation formulas, and structured turn orders.

## Core Features

- **Dynamic Pokémon Generation**: Fetches randomized data (including names, audio cries, and front/back sprite states) for the original 151 Pokémon.
- **Shiny Variants**: Simulates a 50% chance of encountering or deploying a rare "Shiny" variation of a Pokémon.
- **Dual API Integration**: 
  - Uses the PokéAPI (/pokemon endpoint) to fetch combatants.
  - Uses the PokéAPI (/berry endpoint) to dynamically assign a unique held item when you deploy your own Pokémon.
- **Modern Local Time Integration**: Utilizes the cutting-edge JavaScript Temporal API to display a live, localized timestamp alongside the creator's trademark in the footer.
- **Retro Aesthetic**: Designed with custom CSS Grid properties and styling choices that mimic classic Game Boy menu UI.

## Built With

- **HTML5**: Structural semantic layout.
- **CSS3**: Layout styled entirely with CSS Grid, custom pixelated image rendering, and vintage color schemes.
- **JavaScript (ES6+)**: Asynchronous API fetching (async/await), browser Audio API manipulation, and DOM element injection.
