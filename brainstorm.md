#### MVP: Users can find an activity to do based on some criteria/s or other.

#### Stretch Goals:
- Users can input their own activities and have those available
- Users can filter activities by amount of available time, type, etc. [sort of part of the mvp]
- 

Person enters amount of time available & our app with give them suggestions of things to do that will fill that amount of time
-- I like the idea of it also being able to factor in things like: energy level, weather, how stressed out you are, activity level, budget


Imminent:
- Basic HTML Framework
- Database of activities [objects with properties??]/structure for user to input activities/tasks they've been wanting to do
-  How do we save user data?
- What external services/resources do we need [& for what, specifically?]
- What categories do we need for activities?
- Reverse app: option to waste time instead of complete activities
- Inspirational and non-inspirational quotes
- How does a user remove/mark done an activity/task?
-- is there an API for to do list things? Is that even api stuff? >[
- 

Eventual:
- What is the name of our app?
- CSS styling

---

##### Notes on Local Storage of User Objects
_https://blog.logrocket.com/localstorage-javascript-complete-guide/#sessionstoragevslocalstorage_
* 
* User can reset their list of tasks/activities with a button that does this: window.localStorage.clear(); [Pop up warning that this cannot be undone]


Inspirational or uninspirational quote depending on productive mode/unproductive mode
    
    form for inputting your to-dos/activities:
- activity name
- how long does it take?
- energy level
- activity level
- weather dependent?
- stay at home or go out [into the danger zone]
-- What are our example/pre-builts here?
--- Take a hike, buddy! 
--- Exercise! [cultivate mass]
--- Journal 15m-1h
--- Read a chapter of a book
--- Meditate
--- Clean something
--- Take care of your plants and/or pets and/or children, you bum

  form for selecting something from the user-made to do list
  - how much time do you have rn?
  - what's your energy level?
  - how active do you want to be?
  - do you want to leave the house?
  - what's the weather like?
  -- Just give me a random item from my list

  form for find a random activity
  - this will be api dependent

  reverse app form to find a way to waste time
    - how much time do you have rn?
  - what's your energy level?
  - how active do you want to be?
  - do you want to leave the house?
  - what's the weather like?
  -- Just give me a random item from the list