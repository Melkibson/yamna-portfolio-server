# Portfolio API

## Introduction

This API is a comprehensive backend solution, designed for a web application. Built with Node.js and Express, it integrates MongoDB through Mongoose and offers modular routing for various content types.

## Features

- **Express Framework**: Utilizes Express for server setup and route management.
- **CORS Enabled**: Allows for cross-origin resource sharing.
- **MongoDB Integration**: Connects with MongoDB using Mongoose.
- **Modular Routing**: Separate routes for contacts, navigation bars, titles, skills, projects, and work experiences.

## Getting Started

### Prerequisites

- Node.js
- MongoDB account and database
- `.env` file with `MONGO_URI` and `PORT`

### Installation

1. Clone the repository: git clone https://github.com/Melkibson/yamna-portfolio-server.git
2. Install dependencies:


### Setup .env File

Create a `.env` file in the root with:
MONGO_URI=your_mongodb_uri
PORT=your_preferred_port

### Running the Server

npm start


## API Endpoints

- `/api/contact` - Contact information
- `/api/navBar` - Navigation bar data
- `/api/maintitle` - Main title
- `/api/title` - Titles for sections
- `/api/skill` - Skills
- `/api/projectweb` - Web projects
- `/api/projectdesign` - Design projects
- `/api/work` - Work experiences

## License

MIT License. See `LICENSE` file for details.
