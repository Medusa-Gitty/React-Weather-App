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

It have some cool features like save the weather data in redux-store and session-storage to reduce the dependency of network requests, search weather details according to the city, detect your current location for displaying weather data, shows a map of that location, sync data to get the latest updated details of the current weather, toast notification for every action, pop up modal to display extra details of seven-day forecast weather, cool zoom-in zoom-out animations and responsive for every screen size.

To use the app, type a name of the city and click on search/press Enter or else click on the Your location weather button, every time you click on the button first it will check if the data is available in the session storage or not, and if not then it will send a network request else it will take the data from session-storage. 


## 🚀 Features
- Saving the weather data in redux-store to reduce the dependency of network requests
- Search weather details according to the city
- Detect your current location for displaying weather data
- Toast notification for every action
- Responsive for every screen size.

<br/>



![Mobile responsive](https://user-images.githubusercontent.com/82367609/177978241-139935b0-fc2d-4a83-8861-c35b9eed48b4.png)
![Mobile responsive2](https://user-images.githubusercontent.com/82367609/177978968-7e099ab0-76fc-4222-a16f-8bc414de80c0.png)
<br />

![weatherapp](https://user-images.githubusercontent.com/82367609/177978232-4d6a5dd1-3b36-4ca0-b2cd-ebd988668816.png)


<br />


## Getting Started

This project was built using React v 17.0.2, Redux v 4.1.2, Chakra UI, CSS and Rest API. It is a web application and for running on your local environment you should follow these guidelines.


### Prerequisites

- NPM 

### Setup


The project repository can be found in [GitHub link](https://github.com/m-sehrawat/Weather-App) or just clone the project using this command. 


```
Using HTTPS

# git clone  https://github.com/m-sehrawat/Weather-App.git
```

+ Open terminal on your workspace with

```
cd /home/workspace/Weather-App
```


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
