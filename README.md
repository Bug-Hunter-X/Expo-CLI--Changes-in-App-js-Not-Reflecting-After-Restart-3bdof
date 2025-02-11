# Expo CLI: App.js Changes Not Reflecting After Restart

This repository demonstrates a bug where changes made to `App.js` are not reflected in the running Expo application, even after restarting the app or the device.  The issue seems to be related to the Expo CLI's handling of file updates.

## Bug Report

When modifications are made to `App.js`, the Expo Go app does not update to display the changes.  The application continues running with the previous code.  This can be frustrating during development, requiring frequent full restarts of the project.

## Steps to Reproduce

1. Clone this repository.
2. Run `expo start`.
3. Open the Expo Go app.
4. Make a simple change to `App.js` (e.g., change the text). 
5. Save the file.
6. Restart the Expo Go app or even restart the entire device. 
7. The changes are not reflected. 

## Solution

The solution is provided in `bugSolution.js`