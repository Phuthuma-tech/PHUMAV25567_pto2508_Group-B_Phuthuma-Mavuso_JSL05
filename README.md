# JSL05 Project Brief: Task Board with Local Storage Persistence and Task Creation

## Prerequisite

1. Before starting this challenge, ensure that you have **correctly populated your DOM elements** as per the solution in JSL04. Additionally, ensure that clicking a task should **open the modal with the relevant task details** as required in the previous challenge.
2. **Check the project user stories in your student dashboard**, make sure you understand what is required for each feature.

## Overview

In this project, you will implement a task management system where **tasks are persisted in local storage**, ensuring that tasks remain available even after refreshing the page or reopening the application. Users will be able to **add new tasks**, with the task details being **stored in local storage** and displayed in the appropriate **columns** ("To Do", "Doing", "Done"). The application should also include an **Add Task** modal for creating new tasks.

## Key Objectives

### Persistent Task Storage & Retrieval

- **Save tasks to local storage**: On page load, the application should **load tasks** from local storage so that the latest task list is available, even after a refresh.
- Ensure that **tasks are saved in local storage** every time a new task is added so that tasks persist after the page refreshes.
- **Load tasks** from local storage on startup, so users can see the latest tasks without manually re-entering them.
- Tasks should be categorized correctly into their respective columns (e.g., "To Do", "Doing", "Done") based on their **status** when loaded from local storage.

### Task Creation & Modal Interaction

- Provide an **"Add Task" button** that, when clicked, opens a **modal** for creating a new task.
- The modal should include:
  - Fields for entering the **task title** and **description**.
  - A dropdown to select the task **status** ("To Do", "Doing", "Done").
  - A **submit button** to add the new task to the task board immediately.
- After submitting, the task should appear on the board without requiring a page refresh.

## Design & Responsiveness

- The **"Add New Task" modal** should match the [Figma design](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=NNqgDPlU1PNLLh8i-0), including mobile-responsive behavior.
- Ensure that the modal and task board are **fully responsive** and function properly on both desktop and mobile devices.
- The "Add Task" button should **transform** appropriately on mobile devices to match the Figma design.

## Code Structure & Maintainability

- **Modularize your JavaScript code**: Break your code into separate modules, each handling a **single responsibility** (e.g., local storage handling, task rendering, modal management).
- Use **descriptive variable and function names** to ensure the code is clear and easy to maintain.
- Include **JSDoc comments** for every major function and module to describe their functionality, parameters, and return values.

## Expected Outcome

A fully functional task management system where tasks are dynamically loaded from **local storage**, tasks can be **added through a modal**, and the application **remains consistent** after refreshing the page. The code will be modular, well-documented, and easy to maintain, following best practices for JavaScript development.


---

# 📝 Kanban Flow: Persistent Task Management System

A robust, modular Kanban board application engineered for high performance and data persistence. This project (JSL05) builds upon a dynamic DOM foundation to implement **Local Storage synchronization**, ensuring a seamless user experience where task data survives browser refreshes and sessions.

## 🚀 Technical Overview

This application serves as a sophisticated task orchestrator, utilizing a "Mobile-First" design philosophy and a modular JavaScript architecture. It provides a centralized interface for managing project lifecycles through interactive modals and persistent state management.

### Key Technical Implementations:
* **Data Persistence:** Integration with the `window.localStorage` API to serialize and retrieve task states.
* **State-Driven UI:** Automatic synchronization between the underlying data object and the DOM, ensuring real-time updates across the "To Do," "Doing," and "Done" columns.
* **Modular Architecture:** Separation of concerns across distinct JS modules (e.g., storage handlers, UI renderers, and modal controllers).
* **Responsive Modal Logic:** A dynamic "Add Task" modal system that adapts its layout and trigger mechanisms based on device viewport (Desktop vs. Mobile).

## 🛠️ Tech Stack

* **Logic:** JavaScript (ES6+) – Modular Design Pattern
* **Persistence:** LocalStorage API
* **Styling:** CSS3 (Flexbox/Grid) with a focus on Figma-to-Code fidelity
* **Documentation:** JSDoc for comprehensive function and module tracking
* **Structure:** Semantic HTML5

## ✨ Core Features

### 💾 Persistent State Management
The application acts as a "single source of truth." On initialization, it parses stored JSON data to repopulate the board. Every "Add" or "Update" action triggers a synchronous update to the local database, preventing data loss.

### ➕ Dynamic Task Creation
Users can instantly expand their workflow via the "Add Task" interface.
* **Validation:** Ensures title and description fields are processed correctly.
* **Categorization:** Dropdown logic assigns tasks to specific workflow columns upon creation.
* **Instant Injection:** New tasks are rendered to the DOM immediately without requiring a page reload.

### 📱 Responsive Adaptability
The UI undergoes specific transformations to maintain usability on smaller screens:
* **Interactive Modals:** Fully responsive modal overlays following strict Figma specifications.
* **Adaptive Controls:** The "Add Task" button transforms into a mobile-optimized variant to maximize screen real estate.

## 📂 Project Structure

```text
├── src/
│   ├── modules/
│   │   ├── storage.js      # LocalStorage CRUD operations
│   │   ├── render.js       # DOM injection and column management
│   │   └── modal.js        # Event listeners and modal toggling
│   └── app.js              # Main entry point and initialization
├── index.html              # Semantic structure
└── assets/                 # Design assets and global styles
```

## ⚙️ Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/PHUMAV25567_pto2508_Group-B_Phuthuma-Mavuso_JSL05.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd kanban-persistence-system
    ```
3.  **Run locally:**
    Open `index.html` via Live Server or any static file viewer.

---
