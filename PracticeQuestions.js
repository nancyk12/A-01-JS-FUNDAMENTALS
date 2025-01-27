
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////
//nancy

const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

      function sumAndX(num1, num2) {
        const sum = num1 + num2;
        return {
          sum: sum,
          x: x
        };
      }

      const result = sumAndX(4, 5);
      console.log('!@-------question 1-------@!')
      console.log(result.sum); // Output: 9
      console.log(result.x);   // Output: 6


// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

         const sumAndXArrow = (num1, num2) => {
           const sumArrow = num1 + num2;
           return {
             sumArrow,
             x
           };
         }

        // const x = 6;
         const resultArrow = sumAndXArrow(4, 5);
         console.log('!@-------question 2-------@!')
         console.log(resultArrow.sumArrow); // Output: 9
         console.log(resultArrow.x);   // Output: 6


// 3. Write a function that returns another function. (use arrow functions please)

        const outerFunction = () => {
          const innerFunction = () => {
            console.log("Inner function is executed!");
          };

          return innerFunction;
        };

        const returnedFunction = outerFunction();
        returnedFunction(); // Output: "Inner function is executed!"


// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


          const getFunction = () => {
            const y = 5;

            const insideFunc = (a) => y + a;

            return insideFunc;
          };
          console.log('!@-------question 4-------@!')
          console.log(getFunction()(2))

// I used ChatGPT to help me with this answer. I'm still reviewing and learning these concepts so I can explain them. 

//This is the answer ChatGPT gave me:
// The function returned from getFunction still has access to the variable y because of the concept of lexical scoping in JavaScript.
// In JavaScript, functions are not only standalone entities but also carry with them the scope in which they were defined. This means that functions have access to variables defined in their outer (enclosing) scopes.
//In the given code, the function insideFunc is defined inside getFunction. Therefore, it forms a closure, capturing the environment in which it was created, including the variable y. This environment, including the variable y, is preserved even after getFunction finishes executing.
// When we call getFunction(), it returns the insideFunc. The returned function retains the reference to the y variable, allowing it to access and use the value of y even though it is not a global variable.
// In the console.log(getFunction()(2)) statement, the returned function is invoked with an argument of 2. Inside the returned function, y (with a value of 5) is added to the argument 2, resulting in the output of 7 to the console.



// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

      // //Nancy's callback function: I got help form ChatGPT:

      // const callbackFunction = (callback) => {
      //   try {
      //     const result = callback();
      //     console.log(result);
      //   } catch (error) {
      //     console.log("Sorry, there was an error");
      //   }
      // };

      // const couldThrowError = () => {
      //   if (Math.ceil(Math.random() * 2) < 2) {
      //     throw new Error("Error was thrown");
      //   }
        
      //   return 'success';
      // };

      // callbackFunction(couldThrowError);

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

        //Nancy's answer:
        const favoriteFoodsCount = userData.map((user) => {
          const { id, favorites } = user;
          const favoriteFoodsCount = favorites.food.length;

          return { id, favoriteFoods: favoriteFoodsCount };
        });
        console.log('!@-------question 5-------@!')
        console.log(favoriteFoodsCount);


// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

        const pizzaLovers = userData.reduce((accumulator, user) => {
          const { name, favorites } = user;
          const { food } = favorites;

          if (food.includes('pizza')) {
            accumulator.push(name);
          }

          return accumulator;
        }, []);

        console.log('!@-------question 6-------@!')
        console.log(pizzaLovers);


// 7. Show an an example of a switch statement being used

        const getDayOfWeek = (dayNumber) => {
          let day;

          switch (dayNumber) {
            case 0:
              day = 'Sunday';
              break;
            case 1:
              day = 'Monday';
              break;
            case 2:
              day = 'Tuesday';
              break;
            case 3:
              day = 'Wednesday';
              break;
            case 4:
              day = 'Thursday';
              break;
            case 5:
              day = 'Friday';
              break;
            case 6:
              day = 'Saturday';
              break;
            default:
              day = 'Invalid day';
          }

          return day;
        };

        console.log('!@-------question 7-------@!')
        console.log(getDayOfWeek(3)); // Output: Wednesday
        console.log(getDayOfWeek(6)); // Output: Saturday
        console.log(getDayOfWeek(8)); // Output: Invalid day


////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

        const gamer= {
          ...userPersonalData,
          ...userGameData
        };
        console.log('!@-------question 8-------@!')
        console.log(gamer);





// 9. Make a copy of your new user object but override the birthday to december 31st

          const updatedUser = {
            ...gamer,
            birthday: 'December 31st'
          };
          console.log('!@-------question 9-------@!')
          console.log(updatedUser);
 

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

            const accomplishmentsCopy = [...gamer.accomplishments];

            console.log('!@-------question 10-------@!')
            console.log(accomplishmentsCopy);


//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

        // Nancy's answer to question 11:
        const { favoriteThings: { food } } = user;
        console.log('!@-------question 11-------@!')
            console.log(food);
 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

        const { favoriteThings: { food: [firstFood, secondFood] } } = user;

        console.log('!@-------question 12-------@!')
          console.log(firstFood);
          console.log(secondFood);


// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

        const [name, age, ...food13] = data;

        console.log('!@-------question 13-------@!')
          console.log(name);
          console.log(age);
          console.log(food13);


// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

            //Nancy's code for question 14:

            const { name: userName, 
              favorites: { 
                needs: { 
                  food: favoriteFood }, 
                  wants: { 
                    things: [favoriteThing, secondFavoriteThing] }, 
                  }
                } = userInfo;

                console.log('!@-------question 14-------@!')
                console.log(userName);
                console.log(favoriteFood);
                console.log(favoriteThing);
                console.log(secondFavoriteThing);



var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
      // Nancy's code for question 15: It fetched data from {name: 'john', age:42}

      console.log('!@-------question 15-------@!')

        fetchData().then((data) => {
            
            console.log(data);
          }).catch((error) => {
            console.log('Sorry, there was an error:', error);
          });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Nancy's code for question 16: It fetched data from {name: 'john', age:42}

        console.log('!@-------question 16-------@!')

          async function fetchDataAsync() {
            try {
              const data = await fetchData();
              
              console.log(data);
            } catch (error) {
              console.log('Sorry, there was an error:', error);
            }
          }
     
          fetchDataAsync();