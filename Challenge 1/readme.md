# Challenge 1 - Deploy a Twitter sentiment monitor

## Part A

Objective - deploy a Logic App which:

* Connects to Twitter and looks for a specific hashtag
* Analyses the sentiment of the Tweet using Cognitive Services
* Save the results to CosmosDB

## Part B

Objective - create an Azure function which:

* Is triggered when a new Tweet is saved to CosmosDB
* Analyses the sentiment score and translates a numerical value into a string
* Saves the result back to CosmosDB

TIP: You can use the attached function.csx or function.js as the base for your code
