import React from "react";
import app from "./../base";

const SavedMeals = ({ meal }) => {
  const { name, ref } = meal;
  const database = app.database();

  function removeFavorite() {
    const currentUser = app.auth().currentUser;
    const savedMealsRef = database.ref(
      "users-savedmeals/" + currentUser.uid + "/savedMeals"
    );

    savedMealsRef.once("value", (snapshot) => {
      const meals = snapshot.val();

      if (meals === null) {
        return; // Exit early if meals is null
      }

      const mealsArray = Object.entries(meals).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      let removedResult = mealsArray.filter((mealItem) => mealItem.name !== name);
      console.log(removedResult);

      removedResult.push(null);
      console.log(removedResult);

      const updatedMeals = removedResult.reduce((acc, mealItem) => {
        if (mealItem) {
          acc[mealItem.id] = mealItem;
        }
        return acc;
      }, {});

      savedMealsRef.set(updatedMeals);
    });
  }

  return (
    <div className="saved-meal-card">
      <a
        className="recipe-link"
        href={ref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <button
        className="remove-meal-button nbutton"
        onClick={() => removeFavorite()}
      >
        Remove From Favorites
      </button>
    </div>
  );
};

export default SavedMeals;

