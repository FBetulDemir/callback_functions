const displayFAvoriteTakeoutFood = (callback) => {
  console.log("Fetching data ...");
  setTimeout(() => {
    const data = "My favorite takeout food is sushi.";
    console.log("After 2 seconds");
    callback(data);
  }, 2000);
};

const displayFAvoriteMovie = (callback) => {
  console.log("Fetching data ...");
  setTimeout(() => {
    const data = "My favorite movie is Into The Wild.";
    console.log("After 2.5 seconds");
    callback(data);
  }, 2500);
};

const displayDreamDestination = (callback) => {
  console.log("Fetching data ...");
  setTimeout(() => {
    const data = "I dream of visiting Japan.";
    console.log("After 3 seconds");
    callback(data);
  }, 3000);
};

const displayMyHobbies = (callback) => {
  console.log("Fetching data ...");
  setTimeout(() => {
    const data = "I enjoy reading, hiking, and coding.";
    console.log("After 3.5 seconds");
    callback(data);
  }, 3500);
};

const displayData = (data) => {
  console.log(data);
};

// displayFAvoriteTakeoutFood(displayData);
// displayFAvoriteMovie(displayData);
// displayDreamDestination(displayData);

displayFAvoriteTakeoutFood((data) => {
  displayData(data);
  displayFAvoriteMovie((data) => {
    displayData(data);
    displayDreamDestination((data) => {
      displayData(data);
      displayMyHobbies((data) => {
        displayData(data);
      });
    });
  });
});
