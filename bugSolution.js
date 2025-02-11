Ensure that the Metro Bundler is correctly configured and restarting it during development.  You might consider clearing the cache and restarting the Metro Bundler.  In some cases, a complete project rebuild might be necessary. In this specific example, the problem was not within the code itself. It was a misconfiguration of the Metro Bundler. To resolve this, follow these steps:
1. Stop the Expo development server
2. Clear the Metro Bundler cache by running `expo start --clear` 
3. Restart the Expo development server. Then, Expo should properly reflect the changes made to App.js.