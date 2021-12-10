# UFO Sightings: Fact or Fancy?

## Overview
This project was undertaken to develop a html webpage for an article on UFO sightings, containing a table of all known sightings. The webpage also contains multiple filters which provides the user with an opportunity to dynamically filter and view the data. The user can filter the table based on:
- Date
- City
- State
- Country
- Shape

The webpage was built using html, supplemented by Javascript and has a custom style sheet.

## Results
The table contains a total of 111 records. Considering that it would be tedious to scroll through make inferences from them, 5 filters were added to narrow down and analyse the records. Below is a short guide on how to use the filters.

**Filter based on any single criteria**
To do so, simply navigate to the criteria of interst and input the value to filter on and **press 'Enter'**. Note that the value entered has to follow the same pattern as the reference value provided in the input box. For example, date has to be entered in the format d/m/yyyy. If any of the other formats such as dd/mm/yyyy,dd-mm-yyyy, d-m-yyyy etc., are used, the data will not be displayed. Below are the formats for reference:
- Date : d/m/yyyy
- City: full name in lower case, correct spacing (E.g: _st. louis_)
- State: two letter format in lower case (E.g: _ca_ for california, _nj_ for New Jersey)
- Country: two letter format in lower case (E.g: _us_ for United States). Currently, only 'US' data is available
- Shape: single word descriptions (E.g: _circle_). Available shapes: ['circle', 'light', 'triangle', 'unknown', 'fireball',             'formation', 'other', 'sphere', 'disk', 'chevron', 'rectangle', 'cross', 'flash', 'changing', 'oval', 'cigar', 'teardrop', 'cylinder']

**Note:** Data will be displayed when 'Enter' is pressed on the keyboard

![Single criteria filter](images/Temperature_statistics.png?raw=true "Single criteria filter")

**Filter based on multiple criteria**
Filtering on multiple criteria follows the same principle as single criteria filters. It can approached via two ways: 
- Navigate to the criteria of interest, input the value, press enter; navigate to the second criteria of interest, input the value and press enter. Add as many criteria as required
- Navigate to each criteria of interest, input the corresponding value and then finally press enter.
It is not necessary to enter data in each criteria

![Multiple criteria filter](images/Temperature_statistics.png?raw=true "Multiple criteria filter")

**Clear filters**
To clear filters, click on **UFO Sightings** at the top of the page.

![Clear filter](images/Temperature_statistics.png?raw=true "Clear filter")

## Summary
A webpage containing a table with the captacity to the filtered based on multiple criteria was created. Despite the presence of dynamic filters, there a few drawbacks to the current design:
- The absence of a 'Filter' button might be confusing for a few users. Also, there is no explicit way to clear filters in the table which might again be confusing
- The data in the filter needs to exactly match the data in the table for it be filtered. This is not the most user-friendly approach since there are high chances of user errors

**Recommendations for future development:**
- Provide a 'clear filters' button, and also a 'filter' button, if required
- Provide the user with a date picker, and update code to make the date in the table compatible with datetime format for filtering
- Provide dropdowns/autofill for the other filters based on available data. This will reduce chance of user-error





