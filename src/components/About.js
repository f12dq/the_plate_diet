import React from 'react';
 
const About = () => {
    return (
         <div className = "mainContent"> 
            <h1>TDumitru's App</h1>
            <div className="info black">
               <p>I promote a healthy food recipes for diet </p>

               <p>The platform allows users to search their favorite meals and save them for latter coocking. </p>
                  
               <p>Once the user has found a recipe of his/her liking, the user is able to 'favorite' this item and save it to a personal
                  Recipe Book. The Recipe Book can be found by navigating to the user's Profile page. Each food item also displays a calorie counter and diet label 
                  in order to track overall nutrition. Additionally, the recipes include ingredients and links to external recipe websites  
               to provide a quick way to make the item. Each user is required to create a personal profile before using the Plate Diet application. The user's personal data 
               and relevant information is saved within the  Firebase database. </p>

            </div>

            <h1>Dietary ideas</h1>
            <div className="info">
               <p>The idea was to create an app for all users, so they can afford to search for recipes to meet their dietarry needs.</p>
            </div>

            <h1>Presented BY</h1>
            <div className="info black">
               <h3>Dumitru Malic</h3>
              
               <p> Dumitru Malic -Solent University.</p>
               
               
            </div>
          </div>
       
    );
}
 
export default About;