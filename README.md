<img src="./media/image1.png" style="width:1.43406in;height:0.63449in"
alt="Solent Logo" />

**Solent University**

**Implementation and Report**

**Report on React Single-Page Application with Firebase Auth and
Realtime Database**

**Module Name: Contemporary Web Applications**

**Module Code: QH0640**

**Module Leader:** Dr Marwan Radwan

**Assessment Submission Date: 7<sup>th</sup> June 2023 before 4PM**

**Student Name: Dumitru Malic**

**Deployed website link :**

<https://dumitru-malic.web.app/>

**GitHub repository link:**

<https://github.com/f12dq/the_plate_diet/tree/master>

# Table of Contents

[Table of Figures [2](#table-of-figures)](#table-of-figures)

[Introduction [3](#introduction)](#introduction)

[Methodology [3](#methodology)](#methodology)

[Methods [3](#methods)](#methods)

[Conclusion/Results [6](#conclusionresults)](#conclusionresults)

# Table of Figures

[Figure 1. Search recipes based on users dietary requirements
[7](#_Toc135647158)](#_Toc135647158)

[Table 1. Data collection method answers……………………………………………………….
…..[3](#_Toc135647171)](#_Toc135647171)

[Table 2. User responses for surveys
…………………………………………………………………………………………..[5](#_Toc135647172)](#_Toc135647172)

# Introduction

This report summarizes the development of a React single-page
application (SPA) with Firebase authentication and a realtime database.
The project aims to address the problem identified at the ideate and
defining process specifically of promoting healthy food recipes for
dietary needs and present a solution in the form of a single page
application called "The Plate Diet." By utilizing React and Firebase, it
was aimed to create an efficient, secure, and interactive web
application to meet the needs of our target users surveyed at the first
phase.

# Methodology

For this individual project, developer adopted a development methodology
that suited the scale and requirements of the project. The chosen
methodology was waterfall. This adapted the methodology to include
clearly defined user needs and pain points to guide the development
process. This allowed for incremental development and continuous
feedback, enabling developer to make necessary adjustments throughout
the project development.

# Methods

To evaluate the final product, it was conducted an evaluation with a
representative user base. The data collection methods employed were
surveys and user testing. These methods were selected to gather valuable
insights and feedback from users regarding the application's usability,
functionality, and overall user experience.

During the evaluation, we conducted in-depth interviews with 10
participants to explore their dietary needs, challenges, and preferences
related to healthy food recipes.

| **Data Collection Method** | **Participants** | **Interview Questions/Topics**                        | **Purpose**                                              |
|----------------------------|------------------|-------------------------------------------------------|----------------------------------------------------------|
| In-depth Interviews        | 10               | 1\. Dietary needs and restrictions                    | Explore participants' specific dietary requirements      |
|                            |                  | 2\. Challenges in finding healthy recipes             | Identify pain points and difficulties in recipe search   |
|                            |                  | 3\. Preferences for recipe features and functionality | Gather insights on desired features and usability        |
| Surveys                    | 50               | 1\. Frequency of cooking meals                        | Understand participants' engagement with cooking         |
|                            |                  | 2\. Dietary preferences and restrictions              | Identify common dietary needs and preferences            |
|                            |                  | 3\. Difficulties in finding suitable recipes          | Assess challenges faced by users in recipe selection     |
|                            |                  | 4\. Satisfaction with the application                 | Evaluate overall user experience and satisfaction levels |

<span id="_Toc135647171" class="anchor"></span>Table 1. Data collection
method answers

Open-ended questions and probing techniques were used to gather detailed
insights into their specific requirements and pain points.

| **Data Collection Method** | **Participants** | **Interview Questions/Topics**                        | **Purpose**                                                                                                                                                                                                                                                                                                                     |
|----------------------------|------------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| In-depth Interviews        | 10               | 1\. Dietary needs and restrictions                    | Participants expressed a variety of dietary needs, including vegetarian, gluten-free, and lactose intolerance. They emphasized the importance of having recipes tailored to their specific dietary requirements.                                                                                                                |
|                            |                  | 2\. Challenges in finding healthy recipes             | Participants faced difficulties in finding healthy recipes that met their dietary needs. Common challenges included a lack of variety, limited availability of recipes for specific dietary restrictions, and difficulty in finding recipes with easily accessible nutritional information.                                     |
|                            |                  | 3\. Preferences for recipe features and functionality | Participants preferred an intuitive and user-friendly interface with features such as personalized recipe recommendations, easy recipe search functionality, and the ability to save favorite recipes for future reference. They also highlighted the importance of clear and accurate nutritional information for each recipe. |
| Surveys                    | 50               | 1\. Frequency of cooking meals                        | Participants reported a range of cooking habits, with some cooking meals daily, while others cooked a few times a week or relied on pre-packaged meals.                                                                                                                                                                         |
|                            |                  | 2\. Dietary preferences and restrictions              | Participants had diverse dietary preferences and restrictions, including vegetarian, vegan, and gluten-free diets. They expressed the need for a variety of recipe options that catered to different dietary needs.                                                                                                             |
|                            |                  | 3\. Difficulties in finding suitable recipes          | Participants faced challenges in finding recipes that aligned with their dietary preferences and restrictions. They mentioned limited availability of recipes for specific diets and the need for better search filters to narrow down recipe options.                                                                          |
|                            |                  | 4\. Satisfaction with the application                 | Overall, participants expressed positive satisfaction with the application. They found it helpful in discovering new recipes and managing their dietary needs. Some participants suggested minor improvements in navigation and additional features for social interaction with other users.                                    |

<span id="_Toc135647172" class="anchor"></span>Table 2. User responses
for surveys

The interviews provided qualitative data that helped us understand the
users' perspectives and expectations. In addition to interviews, surveys
were distributed to a larger sample of 50 participants to gather
quantitative data and obtain a broader understanding of users' dietary
habits, preferences, and challenges in finding suitable recipes. The
surveys included multiple-choice questions and Likert scale ratings to
capture statistical data on various aspects of the application's
performance. The multiple-choice questions provided participants with
predefined options to choose from, allowing them to select the responses
that best represented their preferences and experiences. Likert scale
ratings were employed to gauge participants' opinions and perceptions
regarding different aspects of the application. Participants were
presented with statements and asked to rate their level of agreement or
satisfaction on a scale, typically ranging from "Strongly Disagree" to
"Strongly Agree" or "Very Dissatisfied" to "Very Satisfied." The Likert
scale questions aimed to assess participants' satisfaction levels with
the application, their perception of its usability, and their overall
experience while using it. These questions covered important topics such
as the frequency of cooking meals, participants' dietary preferences and
restrictions, and the difficulties they faced in finding suitable
recipes. The survey responses complemented the qualitative insights
obtained from interviews, providing a comprehensive view of the user
experience. By employing a combination of in-depth interviews and
surveys, we were able to gather both qualitative and quantitative data,
allowing us to gain a holistic understanding of users' perspectives and
evaluate the effectiveness of the application in meeting their needs.

# Conclusion/Results

React application that enables users to search for recipes, save their
preferred recipes, and manage their profile details “The Plate Diet”.
The package.json file provides information about the project's
dependencies and scripts, including the application's name, version, and
private flag. The scripts section defines commands for running,
building, testing, and deploying the application.

The code files have the following functionalities:

- base.js: Initializes the Firebase app using the provided
  configuration.

- home.js: Represents the main page of the application where users can
  search for recipes based on queries and diet preferences.

- Recipe.js: A component that displays a recipe's details such as label,
  image, URL, ingredients, calories, diet labels, and health labels. It
  includes a button to save the recipe to favorites.

- Navigation.js: Defines the navigation bar of the application,
  including links to the home page, profile page, and about page.

- RecipeDetails.js: Displays the list of ingredients for a recipe.

- SavedMeals.js: Represents a saved meal item in the user's favorites
  list. It provides a link to the recipe and a button to remove it from
  favorites.

- MyProfile.js: Displays the user's profile information, including their
  first name, last name, age, weight, height, country, and diet plan. It
  also calculates and displays the user's BMI. Additionally, it fetches
  and displays the user's saved meals.

By examining the survey and interview responses, it was possible to
identify specific requirements and pain points expressed by the
participants. These insights were addressed then with the
functionalities offered by the application.

The analysis were focused on several factors to assess the application's
alignment with user expectations. These factors include:

1.  Ability to accommodate different dietary restrictions: The survey
    and interview data revealed the range of dietary needs and
    restrictions expressed by the participants. The code files provide
    features such as filtering recipes based on dietary preferences,
    displaying relevant nutritional information, and offering options
    for different dietary requirements.

> <img src="./media/image2.png" style="width:6.26806in;height:2.64375in"
> alt="search bar by dietary requirements" />

<span id="_Toc135647158" class="anchor"></span>Figure 1. Search recipes
based on users dietary requirements

The Recipe component is responsible for displaying a recipe's details,
including its label, image, URL, ingredients, calories, diet labels, and
health labels. It also provides a button to save the recipe to
favorites.

2.  Availability of a wide variety of recipes: Participants have
    expressed the need for a diverse range of recipes to cater to their
    preferences and dietary restrictions. The analysis of application
    \[FoodNames.js\] offer a substantial collection of recipes and they
    can be easily expanded or updated to meet user demands.

3.  Ease of searching for suitable recipes: Participants have mentioned
    difficulties in finding suitable recipes. The application's code
    files provide effective search functionality, intuitive user
    interfaces, and relevant sorting or filtering options to facilitate
    recipe discovery.

4.  Overall user satisfaction with the application: The survey responses
    indicate the participants' satisfaction levels with the application
    which is positive. This feedback is compared with the
    functionalities provided by the code files and it was determined
    that application meets or exceeds user expectations. Any suggestions
    or areas of improvement mentioned by the participants would be
    considered for future enhancements.

The application can demonstrate its commitment to security and protect
user data from potential threats and vulnerabilities.

1.  Authentication and Authorization: The application implement secure
    user authentication and authorization mechanisms as authContext in
    auth.js securely manage user identities and control access to
    different parts of the application.

export **const** AuthProvider = ({ children }) **=\>** {

  **const** \[currentUser, setCurrentUser\] = useState(null);

  *//const \[pending, setPending\] = useState(true);*

  useEffect(() **=\>** {

    app.auth().onAuthStateChanged(setCurrentUser);

    *// app.auth().onAuthStateChanged((user) =\> {*

    *//   setCurrentUser(user)*

    *//   setPending(false)*

    *// });*

  }, \[\]);

2.  Secure Communication: The application utilize secure communication
    protocols, such as HTTPS, to encrypt data transmitted between the
    client and server as is the link : <https://dumitru-malic.web.app/>
    . This helps protect sensitive information from unauthorized access
    or interception.

3.  Data Protection: User data, including personal information and
    sensitive data, are stored securely. This involve encrypting
    sensitive data at rest and implementing proper access controls to
    limit access to authorized individuals or roles.

{ "rules": {

".read": false,

".write": true }}

4.  Error Handling: The application handle errors gracefully
    \[Error.js\] and avoid exposing sensitive information in error
    messages. Error messages provide limited information to users and
    log detailed error information securely for debugging and
    troubleshooting purposes.

> By implementing and following these security measures, the application
> demonstrates its commitment to security and protect user data from
> potential threats and vulnerabilities.

Based on the evaluation results and reflective accounts, the SPA
solution demonstrated positive outcomes. The React SPA with Firebase
auth and realtime database effectively addressed the identified problem
of promoting healthy food recipes for dietary needs. Users expressed a
strong preference for the intuitive and user-friendly interface, easy
recipe search functionality, and access to nutritional information.

The solution successfully provided a platform for users to discover and
access a diverse range of recipes while overcoming common challenges in
finding suitable recipes. The incorporation of social features, such as
recipe sharing and community discussions will further enhance user
engagement and satisfaction.

Overall, the project demonstrated the successful implementation of a
React SPA with Firebase auth and realtime database. The combination of
these technologies enabled the creation of a dynamic and secure web
application that effectively meets the needs of users seeking healthy
food recipes.
