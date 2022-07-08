# React-Weather-App
 
![weather app cover](https://user-images.githubusercontent.com/82367609/177977480-68dc9015-8668-4843-9dd2-5a9f67b3650c.png)

<h2 align="center">A simple Web - App for weather forcast</h2>    

<br />
<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux" />
    <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui"/>
    <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>     
</p>
   
    
  <p align="center"> 
    <br />&#10023;
    <a href="https://sayak-weather-app.vercel.app/">View Demo</a>   &#10023;  
  </p>

<br/>


This project is about building a web application to show a weather forecast using weather API from external services [Open weather map](https://openweathermap.org/). Here you will be able to search for a specific location in the world and also it will automatically detect your current location in the beginning (for that you need to allow location) and will display all the important weather details.

I have used Redux Toolkits for storing state variables and the reducers for dispatching actions, You can get a UI feeback depending of the temperature whether it is chilly or hot. Get your current location weather thanks to Google Geo location.

To use the app, you will be prompted to allow user location, you can still use the app by searching for the city or selecting any of the default tabs.


## 🚀 Features
- Saving the weather data in redux-store to reduce the dependency of network requests
- Search weather details according to the city
- Detect your current location for displaying weather data
- Toast notification for every action
- Responsive for every screen size.
- UI feedback for the weather if it is chilly or hot.

<br/>

![Mobile responsive1](https://user-images.githubusercontent.com/82367609/177978968-7e099ab0-76fc-4222-a16f-8bc414de80c0.png)
![Mobile responsive2](https://user-images.githubusercontent.com/82367609/177979902-b02e39b4-7288-4509-99c4-e21ac19cc078.png)


![weatherapp](https://user-images.githubusercontent.com/82367609/177978232-4d6a5dd1-3b36-4ca0-b2cd-ebd988668816.png)

<br />


## Getting Started

This project was built using React, Redux Toolkits, Chakra UI, CSS and Rest API. It is a web application and for running on your local environment you should follow these guidelines.

### Prerequisites

- NPM 

### Setup


The project repository can be found in [GitHub link](https://github.com/Medusa-Gitty/React-Weather-App) or just clone the project. 

## Install

Install NPM

Check that you have node and npm installed

To check if you have Node.js installed, run this command in your terminal:


```
node -v
```

To confirm that you have npm installed you can run this command in your terminal:


```
npm -v
```


To install all the dependences of the project, run the following command:


```
npm install
```


To run the application, run the following command:

```
npm run dev
```
