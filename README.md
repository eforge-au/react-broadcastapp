# Lesson 1: Introduction to React - A simple localstorage app.

Welcome to **Lesson 1** of the eforge learning series! In this lesson, you will learn the basics of React by building a simple **broadcasting system** that allows users to input and display broadcast messages.

---

### 📘 Lesson Overview:

In this lesson, you will be introduced to the following key React concepts:

- **useState Hook**: For managing component state.
- **useEffect Hook**: To handle side effects, such as loading and saving data.
- **Forms in React**: Handling user input with forms and controlling form submissions.

This repository contains the code for a broadcasting system where users can input a message that is stored in the browser's local storage and displayed on the screen.

---

### 📂 Repository Contents:

- **/src**: Contains the React source code files.
  - `App.js`: The main React component where all the logic is implemented.
  - `App.css`: Styles for the application.
- **/public**: Public assets such as HTML and CSS files.
- **package.json**: Contains the project’s dependencies and scripts.

---

### 🚀 How to Download and Run the Project:

To get started with this React project, follow these steps:

1. **Clone the repository** to your local machine using the following command:

   ```bash
   git clone https://github.com/eforge-au/react-broadcastapp.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd react-broadcastapp
   ```

3. **Install the project dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

4. **Start the React project**:

   To launch the project in your local development environment, run:

   ```bash
   npm run start
   ```

5. **Open your browser** and navigate to `http://localhost:3000` to view the project.

---

### 📝 What You Will Learn:

By the end of this lesson, you will have a better understanding of:

- How to manage state with the **useState** hook.
- How to handle side effects using the **useEffect** hook.
- How to create and manage forms in React to handle user input.
- How to use local storage to persist data across browser sessions.

---

### 📄 Code Walkthrough:

1. **State Management**:
   - The broadcast message is stored in a state variable using the `useState` hook.
   - The form input updates this state when submitted.

2. **Handling Side Effects**:
   - The `useEffect` hook loads the broadcast message from local storage when the component mounts.
   - Another `useEffect` is used to save the broadcast message to local storage whenever it changes.

3. **Form Handling**:
   - A simple form is used to submit a new broadcast message, with the form submission being handled by a custom `handleSubmit` function.

---

### 🤝 Contributing:

If you find any issues or have suggestions for improvements, feel free to open a pull request or create an issue in this repository.

---

### 📧 Get in Touch:

For any questions regarding this lesson or the platform, you can reach us at **orders@eforge.online**.

---

**Happy Coding!**