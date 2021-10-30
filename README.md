# UFO Project

## Overview of Project
The purpose of this project is to build a webpage that uses JavaScript in the HTML page for displaying UFO sightings data as a table and one that has the ability to filter the data based on multiple criteria (such as, date of sighting, city of a sighting, state of a sighting, country of a sighting, and shape of UFO) as defined by the user. 

For this project, a JavaScript (app.js) was written to builds the HTML table and fills it with data that was stored in data.js as a JavaScript array. The HTML file (index.html) was written to include all the filters for the criterias mentioned above.


## Results
The user can open the HTML file (index.html) that displays all the data in a table and filter the data based on various criteria.
For example, one could filter the data by filling the "Enter Date" field with "1/1/2010", "Enter a Country" field with "us", and "Enter a Shape" field with "sphere". This would display all the data related to sightings on 1/1/2010, in the US and that corresponding to spherical shape UFO as shown below

![Figure1](/Images/UFO_filter_data.png)


## Summary
- While the webpage is able to filter the data according to user defined criteria quite well, the filter needs to be manually cleared for every new search. Also, the filter takes search criteria only in lower cases. These are some of the drawbacks of this webpage.
- It would be advantageous to develop the webpage further by including the followings:
  1. Having a drop down menu for the user to select the range of criteria for each filters.
  2. Having an "all clear" button that would clear the older entries for the users to enter new ones for the next search.

