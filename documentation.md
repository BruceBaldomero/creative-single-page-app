# Web Application Development 

## Bruce Baldomero Q13670174

## https://github.com/brucebonus/creativeappjoe

## Introduction

This application will be supporting Solent University students to be inspired by each other using an application where they can upload their creativity to an image board.

## Methods

1. To develop this application I used React. React is a User Interface JavaScript library. It it used for building UI components which is well suited for this project. To start the app development I created a simple Title.js which is the main page for the app. For styling I made index.css which has all the styling for the single-page.

2. For backend service I used Firebase to create a project which will be dealing with the applications created data using Firebase Storage and Firestore Database. I then grabbed its config syntax from the project I created and inserted it within a firebase file. Firebase Storage will be used for storing the apss images and the Database will be used for storing the information of images such as its URL and when it was created.

3. Next I created the upload form for the page. This is used to upload images from a users computer or device. I used a UploadForm component which is basically a button that can access a users files.

4. I then created a new js file called useStorage which will be the coding for hooking information from firebase.

5. A progress bar was then developed, this is to indicate that an image is being uploaded when a user chooses a file.

6. I coded the output of each image uploaded, styling it to a 4 column grid layout and setting the aspect ratio for each thumbnail to a fixed 1:1. This is so it is nicely organised. Everytime a user uploads an image the image will be posted from newest first then oldest at the bottom.

7. Now the application had its layout set. I then created a modal box view for each image using a clickevent. So when a user clicks on an image it will display a modal view in front of the web application. 

8. Lastly I added some animation to the coding. I animated the modal so is it pops in to view from the top down making the background slightly opaque. I also animated a slide to the right motion when a new image is uploaded.

## Conclusion

I am very happy how this single-page application turned out, It is visually appealing because I have organised the elements very neatly. I have added modal views and animations to give it a dynamic feel when in use. The main purpose is so when a person uses this they can instantly see what other users are posting in real-time. It is essentially an image board in hope of inspiration from each post. 

npm start = run locally

npm build then npm run deply = after changes to update main github site