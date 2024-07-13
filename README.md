# Portfolio Site Setup

This repository contains a Docker setup for hosting a production build of a Create React App portfolio site. Follow the instructions below to get the web application running on `localhost:5575`.

## Docker Setup

### Build the Docker Image

To build the Docker image, run the following command in the root of your project directory:

```sh
docker build -t jimenez_santiago_coding_assignment14 .

docker run -d -p 5575:80 --name jimenez_santiago_coding_assignment14 jimenez_santiago_coding_assignment14

## Project Overview
This project is a portfolio site built using React. The site includes the following sections:
- Basic Information
- Work
  - Title
  - Description
  - Image
  - Link
- Skills
  - Description
  - Languages/Frameworks
  - Tools
- Resources
  - Title
  - Image/Icon
  - Summary
  - Link
- Developer Setup
  - VSCode Setup
  - Terminal Setup
  - Preferred Editor Font

## Requirements
- Node.js
- npm
- Docker

## Getting Started
Clone this repository and navigate to the project directory:
```sh
git clone https://github.com/sjzquintero/coding-assignment-14


