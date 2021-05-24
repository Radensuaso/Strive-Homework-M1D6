/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

const drawHeader = function (heading) {
  console.log(
    `\n-------------------------< ${heading.toUpperCase()} >-----------------------------\n`
  )
}

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
drawHeader("js basics ex. a")

let test = "This is a test"
console.log(test)

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
drawHeader("js basics ex. b")

let sum = 10 + 20
console.log(sum)

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
drawHeader("js basics ex. c")

let random = Math.floor(Math.random() * 21)
console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
drawHeader("js basics ex. d")

let me = {
  name: "André",
  surname: "Sousa",
  age: 28,
}
console.log(me)

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
drawHeader("js basics ex. e")

delete me.age
console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
drawHeader("js basics ex. f")

me.skills = ["Javascript", "HTML", "CSS"]
console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
drawHeader("js basics ex. g")

me.skills.pop() // pop() method eliminates the last element of an array
console.log(me)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
drawHeader("js functions ex. 1")
const dice = () => Math.ceil(Math.random() * 6) // Math.ceil() to round the dice roll to the nearest top integer

console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
drawHeader("js functions ex. 2")

const whoIsBigger = (num1, num2) => (num1 >= num2 ? num1 : num2) // Used bigger or equal to in case the numbers passed are equal
console.log(whoIsBigger(6, 30))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
drawHeader("js functions ex. 3")

const splitMe = (str) =>
  str
    .replace(",", "")
    .replace(".", "")
    .replace("!", "")
    .replace("?", "")
    .replace(";", "")
    .replace(":", "") // used replace() so the array of words splitted don't have any punctuation
    .split(" ") // split() to divide the string "where a space is" into an array of words

console.log(
  splitMe(
    "My favorite food: cake. Any kind of cake, really! Why wouldn't you love cake?"
  )
)

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
drawHeader("js functions ex. 4")

const deleteOne = (str, bool) =>
  bool ? str.substring(1) : str.substring(0, str.length - 1) // used substring to return a section of the string depending on the boolean

console.log(deleteOne("Strive School", false))
console.log(deleteOne("Strive School", true))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
drawHeader("js functions ex. 5")

const onlyLetters = (str) => str.replace(/[0-9]/g, "") // used a regular expression "/[0-9]g" to replace() any digits from 0 through 9 in a string

console.log(onlyLetters("What's 18 the time 5?"))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
drawHeader("js functions ex. 6")
const isThisAnEmail = (email) => {
  const hasAt = [] //created an array to push booleans into it
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      // I decided to test if the string has a "@" in it to verify if it's an email
      hasAt.push(true) // with the for loop, for every char in the string pushed true if there is a "@" in it
    } else {
      hasAt.push(false)
    }
  }
  return hasAt.includes(true) // used includes() to verify if the array asAt has at least one "@" in it, if so it returns true, otherwise returns false
}
console.log(isThisAnEmail("andre@gmail.com"))
console.log(isThisAnEmail("andregmail.com"))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
drawHeader("js functions ex. 7")

const whatDayIsIt = () => {
  const now = new Date() // with the new Date() we store the date and time at the moment on a now variable
  if (now.getDay() === 0) {
    // with getDay() it returns numbers from 0 to 6 depending on the day of the week, where 0 is sunday and 6 is saturday
    return "Sunday"
  } else if (now.getDay() === 1) {
    return "Monday"
  } else if (now.getDay() === 2) {
    return "Tuesday"
  } else if (now.getDay() === 3) {
    return "Wednesday"
  } else if (now.getDay() === 4) {
    return "Thursday"
  } else if (now.getDay() === 5) {
    return "Friday"
  } else if (now.getDay() === 6) {
    // with an if else statement it will return a string depending on the number
    return "Saturday"
  }
}

console.log(whatDayIsIt())

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
drawHeader("js functions ex. 8")

const rollTheDices = (nDices) => {
  const values = [] // initialized an array to push the dice results
  for (let i = 0; i < nDices; i++) {
    // for loop to roll the dice() function depending on number of dices passed
    values.push(dice())
  }
  const totalDice = {
    // an object factory to fabricate the object to return
    values: values,
    sum: values.reduce((a, b) => a + b), // reduce() with the function (a, b) => a + b passed into it will sum every element in the values array
  }
  return totalDice // in the end I just return the object
}

console.log(rollTheDices(6))

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
drawHeader("js functions ex. 9")

const howManyDays = (date) => {
  const timeStampDate = new Date(date).getTime() // getTime() used on new Date() will get mee the milliseconds from a specific date
  const timeStampNow = new Date().getTime()
  const daysSinceDate = Math.floor((timeStampNow - timeStampDate) / 86400000)
  // the difference between the timestamp from now and the date passed divided for 86400000 floored will get me the days between the two dates
  if (daysSinceDate === 0) {
    return `${date} is today.` // in case the number of days are 0 just return a string saying it is today
  } else if (daysSinceDate < 0) {
    return `${date} still didn't arrive, choose a date before today.` // in case the date passed is more than today, just ask to put a date form before today
  } else {
    return `${daysSinceDate} days have passed since ${date}` // in case the date from before just return the apropriate message
  }
}

console.log(howManyDays("July 4 1776")) // You can confirm if it's correct in this site: https://www.timeanddate.com/date/duration.html

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
drawHeader("js functions ex. 10")
const isTodayMyBirthday = () => {
  const todayDate = new Date().getDate() // new Date().getDate() will get me the number of the day in the month of today
  const todayMonth = new Date().getMonth() // new Date().getMonth() will get me the number of the the month of today // where 0 is January and 11 is December
  return todayDate === 3 && todayMonth === 7 //My birthday is August 3rd
}

console.log(isTodayMyBirthday())

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* This movies array is used throughout the exercises. Please don't change it :)  */
// I replaced The array of movies to appear before the exercises that use it

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
drawHeader("js Arrays / Objs ex. 11")

const deleteProp = (obj, str) => {
  delete obj[str] // to delete a property in an object this way we have to use square brackets
  return obj
}
console.log(deleteProp({ name: "André", age: 28 }, "age"))

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
drawHeader("js Arrays / Objs ex. 12")

const olderMovie = (objArray) => {
  const olderMovieArray = [objArray[0]] // initialized an array to unshift() to the beginning of it the oldest possible movie in the array of movies
  for (let i = 1; i < objArray.length; i++) {
    if (objArray[i].Year < olderMovieArray[0].Year)
      olderMovieArray.unshift(objArray[i])
    // with a for loop we can cycle through all the objects and unshift() into the olderMoviesArray array compared with the oldest at moment by Year
  }

  return olderMovieArray[0] // in the end I just return olderMoviesArray[0] because it will be the oldest possible movie in the olderMovieArray
}

console.log(olderMovie(movies))
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
drawHeader("js Arrays / Objs ex. 13")

const countMovies = (objArray) =>
  `There are ${objArray.length} movies in the movies array`
// we just use the length property to verify the length of the array

console.log(countMovies(movies))

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
drawHeader("js Arrays / Objs ex. 14")

const onlyTheTitles = (objArray) => {
  const titles = [] // initialized array to push the titles into it
  for (const element of objArray) {
    // with for of syntax we can cycle through the entirety of the movies array
    titles.push(element.Title) // just push the Titles
  }
  return titles // return the titles array
}
console.log(onlyTheTitles(movies))

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
drawHeader("js Arrays / Objs ex. 15")

const onlyInThisMillennium = (objArray) => {
  const thisMillenniumArray = [] // Array to push only this millennium movies
  for (const element of objArray) {
    if (element.Year >= 2000) thisMillenniumArray.push(element)
  }
  return thisMillenniumArray // returned thisMillenniumArray resulted of the for loop through all the movies array
}

console.log(onlyInThisMillennium(movies))

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
