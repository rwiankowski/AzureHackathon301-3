# Challenge 2 - Design an Azure Environment

This is a group exercise, which is split into two parts:

* 1 - 1,5 h for the design part ( teams of 2-4 )
* 1,5 - 2 h for presentations and discussions ( 30 min per team)

Scenario:
A certain company is implementing a new modular ERP platform. The platform comprises of the following components:

* order tracking module
* financial module
* warehouse module
* purchase requisitions module

Each module is deployed as a separate web application which exposes a set of APIs. Next to that, there is a front-end web application used by end-users to interact with the ERP system.

Workflow:

* the order tracking module ingests orders from an external e-commerce platform
* when a new order is received, the order tracking module inform all other modules about the event
* all modules exchange data between themselves
* the financial module is developed by a separate team, members of other teams cannot have access to the resources supporting the module
* the front-end portal is access both externally and internally
* the APIs of warehouse module must be made available to partners who require stock information
* the warehouse module ingests large amounts of data from handheld devices used by the floor crew, especially during peek sales periods

Requirements:

* access to all APIs must be as secure as possible
* performance must remain stable even during peek sales periods
* the system must be designed for maximal availability
* an issue with any of the modules should not impact operations of other modules
* keep security as tight as possible
* pricing is not the key factor, however, the board of directors is cautious about excessive spending

Task:

Create an Azure environment design. Wherever requirements are not specify suggest a solution which you find best suited and provide reasoning. Work in groups. Be ready to present your solution to others.
