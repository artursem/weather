# weather

## Table of contents

- [General Info](#general-info)
- [Demo](#demo)
- [Built with](#built-with)
- [Setup](#setup)

## General info

React application allowing user to check the weather. User can either type a name of a city or use 'current location' button. App displays current weather conditions as well as 5-day forecast including stats such as: day temperature, night temperature, morning temperature, humidity, max. temperature, min. temperature, mean day temperature, mode day temperature.
All the data is fetched from OpenWeather [REST API](https://openweathermap.org/api).

## Demo

Here is a working live demo: [beat-hub.vercel.app](https://beat-hub.vercel.app/) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

## Built with

- React 18.2.0
- TypeScript 4.7.4
- Chakra UI 2.2.1
- Jest 25.2.3

## Setup

To run your local instance of this app clone this repository, install dependencies and run dev server:

```bash
# Clone this repository
git clone https://github.com/artursem/weather.git

# Go into repo directory
cd weather

# Install dependencies
npm install

# Run the app in development mode
npm start
```

In order for app to run correctly, you'll need to obtain your own api key from [OpenWeather API](https://openweathermap.org/price) and provide it as `REACT_APP_KEY` in `.env` file in top directory.
