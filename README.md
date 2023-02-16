# gas-template

## Links related to this template
- Clasp guide: https://developers.google.com/apps-script/guides/clasp
- Requires Node.js version 4.7.4 or later: https://nodejs.org/en/download/
- Google Apps Script (GAS) home: https://script.google.com/

## Create a project in GAS

1. From your google account access GAS here: https://script.google.com/
2. Click "+ New Project" in the upper left
3. Name the project - click in the "Untitled project" area to bring up the rename dialog

## Testing requires QUnitGS2

This template uses QUnitGS2 for its testing environment. Steps for setting this up in your GAS PROJECT
1. From your GAS project, click the Libraries + (on the left side of your project from the editor)
2. Enter this in the search area that says "Script ID*": 1tXPhZmIyYiA_EMpTRJw0QpVGT5Pdb02PpOHCi9A9FFidblOc9CY_VLgG
3. Click "Lookup"
4. This should bring up the QUnitGS2 library as an option. Click "Add" to add it to the libraries for this project

## Deploy the project
This needs to be done before installing/pushing in clasp

1. I suggest deleting the default "Code.gs" file now. Click on the three dots menu next to the file name and choose delete. You will get a failed to save message, but this won't affect the project.
2. Deploy the project
    - Click the "Deploy" button in the upper right.
    - Select "New Deployment" (If this spins awhile, I suggest cancel and reload the page then try again)
    - Click the settings gear next to "select type"
    - Choose "web app"
    - Add a description if you'd like
    - For development, you can leave the options as execute as me, and Who has access as only myself. This can be changed for deploying a production instance
    - click deploy 
    - you can open the link for the new deployment, but it will give a doGet function not found error. You can now close this dialog.
    
## Create project in Github
1. Choose use this template and enter a user and project name (I suggest using the same name as you created in GAS)
2. Clone this new repo into your local dev space (eg. Projects)
3. After cloning this template project, cd to that directory and run "npm install @google/clasp -g"
4. Then run clasp login, and chose the account you wish to use (ie the account which created the new project in GAS).
5. Click "Allow" so that your local instance will be able to push/pull to GAS via clasp
6. get the GAS id from the project. 
        - from the GAS project environment get the id from the url
        - it will be the string beteen /projects/ and /edit
9. run clasp clone "{id you copied}"
10. run clasp push -w (this will push changes in real time to the GAS project)

## Running the newly pushed project in GAS
1. From the GAS project click "Deploy"
2. Choose "test deployments"
3. Click the Web App url link. This will open a working web app that displays "My Site"
4. you can close the test deployments dialog in the GAS environment

## Work in your local environment
When you save changes in your local dev environment, the changes will be pushed to the GAS project via clasp (If you ran clasp push -w). Otherwise you can run clasp push manually when you want to push and test your changes in the GAS test instance.

## After current work
1. ctrl C to stop watching for changed files
2. clasp logout
3. add and push your changes to github


