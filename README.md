# Covid Questionnaire

#### Author: [Davit Shkubuliani](https://www.linkedin.com/in/davit-shkubuliani/)

---

The Covid Questionnaire is a Vue-based application designed for new employees of Redberry. It serves as a platform for
employees to provide feedback on their experiences and thoughts regarding the Covid situation. The questionnaire helps
Redberry understand employee sentiments and enables them to improve and support the company's internal Covid policy.

The application utilizes local storage to ensure that users do not lose their filled inputs even when the page is
refreshed.

The Covid Questionnaire consists of six pages, each serving a specific purpose. The home page serves as the starting
point of the questionnaire, followed by the personal information page, where users can provide relevant details. The
next page focuses on the user's current Covid condition, allowing them to share their health status. The fourth page
inquires about the user's vaccination status. The subsequent page invites users to express their desired Covid policies
within the company. Finally, the questionnaire concludes with a thank-you page.

To manage the state of the questionnaire across different pages, the application utilizes Vuex, a state management
pattern and library for Vue.js. Also, to ensure the validity of user input, the Covid Questionnaire utilizes
Vee-Validate, a powerful package for form validations in Vue.js.

The application supports only the Georgian language.

#

## Table of Contents

* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Development](#development)
* [Live Deployment](#live-deployment)

#

## Prerequisites

* <img src="src/assets/readme/assets/node-js.png" width="35" style="position: relative; top: 5px" />&nbsp;&nbsp;*Node JS @12.X and up*
* <img src="src/assets/readme/assets/npm.png" width="35" style="position: relative; top: 4px" />&nbsp;&nbsp;*npm@6 and up*

#

## Tech Stack

- <img src="src/assets/readme/assets/vue.png" height="18" style="position: relative; top: 5px" />&nbsp;[Vue @3.2.47 and up](https://vuejs.org/) - front-end framework
- <img src="src/assets/readme/assets/vee-validate.png" height="19" style="position: relative; top: 4px" />&nbsp;[Vee-Validate @4.9.3 end up](https://vee-validate.logaretm.com/v4/) - package for form validations
- <img src="src/assets/readme/assets/vue.png" height="19" style="position: relative; top: 4px" />&nbsp;[Vuex @4.0.2 end up](https://vuex.vuejs.org/) - state management tool
- <img src="src/assets/readme/assets/tailwind.png" height="18" style="position: relative; top: 5px" />&nbsp;[TailwindCSS](https://tailwindcss.com/) - css framework for styles

#

## Getting Started

1. First of all you need to clone repository from GitHub:
    ```sh
    git clone https://github.com/RedberryInternship/data-shkubuliani-covid-questionnaire.git
    ```

2. Next step requires you to run *npm install* in order to install all the dependencies.
    ```sh
    npm install
    ```

3. Now we need to set our env file. Go to the root of your project and execute this command.
    ```sh
    cp .env.example .env
    ```

#

## Development

You need to start Vite server:

```shell
npm run dev
```

#

## Live Deployment

https://covid-questionnaire.data-shkubuliani.redberryinternship.ge/
