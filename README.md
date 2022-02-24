# UrTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



### Angular App that displays local user data and gets user data from a RestAPI

In this Angular project, **my goal was to get a grasp on Angular and use it to create reusable components as well as successfully display data after sending a get request**. This was my first time using Typescript and Angular, but I have used Vue and React before.

At first I just wanted to display local data (app/sample-user-data.ts). I was able to set up a component that grabbed the data, displayed each one using a ng for statement, and allowed the user to select an individual user and display that in a separate component. While there is no post functionatlity, changing the text in the input field will change the user's name in both components where it is displayed (though again, not permenantly).

Next, I wanted to try and see if I could get data from an API. I used the JSON Placeholder RestAPI to grab and display their users, just as I did the mock data that I created. I was also able to reuse the user-detail component here with JSON Placeholder data. In addition, **the user can search for user based on ID number, which sends another get request using http params and string interpolation to make the get request.**


## More I would have added:

If I was more familiar with Angular and Test Driven Development (a skill I'm currently learning), I would have added tests to this project. I would have tested:
- the input field in the json-users component to make sure
    - the input was a whole number between 1 and 10
    - the input was not blank
    - the input was not a letter or symbol
    - I would have created error messages for any invalid inputs
- that the get request had a valid URL and, if not, an error would appear.
 
Since I was able to figure out how to edit user data, I would have worked on figuring out a way to sent a post or update request to my local data file.

In addition, I would have edited the CSS more to make it a bit more presentable. (I do not like how the user-detail component looks but I wanted to focus more on angular functionality than looks).

The user-detail component stays up once it has been created, and I did not put a "close" button or anything to get rid of it. In addition, I thought about making it a modal so that it was more obvious that an action was happening when you click on a user's name, but again I watned to focus on the angular functionality of this project opposed to looks.

