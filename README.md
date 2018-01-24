# Watching Model changes

## Objectives

- Integrate $scope.$watch to watch Controller properties
- Use a deep $watch to observe deep changes
- Write a $watchCollection method for better shallow performance

## Instructions

In this repo, we've got a few fields to fill out for a user's information: their username and their country's short name (abbreviation), full name, and population.

Using `$scope.$watch`, check whenever the username gets updated.

Deep watch the whole `country` object to see when any value in it changes (including the country's short and full names).

Use `$watchCollection` to see only when the country's full and short names are updated.
