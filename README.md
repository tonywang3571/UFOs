# UFOs  

## Overview of Project  

**Purpose:**  
The purpose of this project is to create a dynamic webpage with javascript, html, css, and bootstrap to filter through a dataset of UFO sightings based on the filters applied by user input.  

## Resources:  
- Data Source: Provided [Data](https://github.com/tonywang3571/UFOs/blob/master/static/js/data.js) and [Image](https://github.com/tonywang3571/UFOs/blob/master/static/images/nasa.jpg)
- Software: VS code 1.63.2 (Javascript, HTML, CSS, Bootstrap)

## Analysis and Results  

**Analysis:**  
For this project, we used javascript code to parse the dataset (which is also in a javascript list of dictionaries) to load and display the data in a table format. Next, we created a function to "remember" the filters that were added by the user within our webpage. Within our filter function, we added another function to pull and display data from our dataset that matches the search criteria(s) that were added by the user. We also created an html file to display all of our data as well as different textboxes to allow user to add different search criteria(s) to filter through our dataset and display data that matches the user's search criteria(s). Finally, we added bootstrap and CSS to improve the visualization and appearance of our webpage.  

**Results:**  
When a user visits our webpage, the user can add specific search criteria(s) to different textboxes on our webpage. After the user adds their criteria(s) to their choosing, the user needs to press "enter"/"return"/"tab" or even click anywhere outside of the current textbox for our script to run automatically to filter and display the new set of data from the new search criteria(s) that was added by the user. Refering to the images below, we can see that the data table in our webpage changes when, for example, the user enters "1/13/2010" as a new date search criteria. The data table then displays only the newly filtered date that was provided by the user. Placeholders have been added to provide examples of how the user should enter specific information for the filters on our webpage.  
<img src="Resources/webpage1.PNG">  
<img src="Resources/webpage2.PNG">  

## Challenge Summary  

**Summary**  
The purpose of this project is to create a dynamic webpage to filter through our data set based on the user input to display only the data that meets the criteria(s) of the filters. Though this webpage is functional, but there are still some shortcomings and areas where improvements can be made to our webpage.  

- One shortcoming of this webpage is the data itself. With this particular webpage, we do not have a way or function to add new data as more UFO sightings appear and get reported. Updating our data file itself would be tedious, but that is one way to add and increase our dataset.  

- One recommendation to improve our webpage would be to modify our filter textboxes to take both upper and lower case letters, as our data table lists all data in lower case (even city and state names as examples). Currently, if the user entered "MO" instead of "mo", for example, nothing would be displayed in our data tables because our dataset only contains lowercase data. Therefore we could edit our code to allow the filters to take both upper and lower case letters in our filter textboxes to filter through our dataset to display the correct or appropriate data in our table. I was able to modify my code to include this improvement of our webpage, refer to the image below as an example.  
<img src="Resources/webpage3.PNG">  

- Another recommendation to improve our webpage would be to add a "Go to top" feature. This way, if whenever our dataset gets larger, the user can click a button instead of scrolling all the way back to the top of the page. I was able to modify my code to include this feature where the "Go to top" button would appear if the user scrolls beyond a certain point, refer to the image below as an example.  
<img src="Resources/webpage4.PNG">
<img src="Resources/webpage5.PNG">  

### Codes Used  
(Please look at specific files for codes used)   
Code for [building data table and filters](https://github.com/tonywang3571/UFOs/blob/master/static/js/app.js)  
Code for [building webpage](https://github.com/tonywang3571/UFOs/blob/master/index.html)  
Code for [styling webpage](https://github.com/tonywang3571/UFOs/blob/master/static/css/style.css)

