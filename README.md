# Auto-Suggest POC

*Analysts:* Gene Bland and Ashleigh Cline

## Business Case
The following analysis is to create a POC for improving the accuracy of Tech/Subtech/ProblemCode selection at case opening. The goal is to create a model that can predict T/S/PC based on serial number, case title, and case description all of which are required fields in the SCM. 

## Hypthesis 
We believe this will be a 2-step process. First, we hope to identify Tech/Subtech from serial number and then once that is achieved get Problem Code from case title and description.

### Step 1: Tech/Subtech Analysis
In order to identify Tech/Subtech we plan on utilizing the serial to PID mapping service. We then hope to map PID to a subtech. Subtechs only align to one technology so as long as we can map PID to a subtech we will get Tech free in the process. We hope that the overall mapping from serial to Subtech/Tech will provide us with at least 90% accuracy. 

### Step 2: Problem Code Analysis
Problem Codes are the exact same no matter what Tech/Subtech. There are 32 Problem Codes but only 13 seem to be used often. The goal here would be to use the Tech/Subtech result from step 1, as well as case title and description to predict the Problem Code of the case. The final combination of all 3 will be the resulting keyword for case routing. 

## Brainstorming

### Programming Language
For now we aren't going to limit ourselves to 1 language but see which works best (R or Python) as we further decide on the methodology. 

### Possible Methods
- Word2Vec similarity
- Decision Tree
- Clustering approaches
- Random Forest
- Ensemble Methods

