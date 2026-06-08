# Expense Tracker

A simple and responsive Expense Tracker built using **HTML, CSS, and JavaScript**. It allows users to add income and expense transactions, calculate the current balance, and store data in the browser using Local Storage.

---

## Features

- Add income and expense transactions
- Real-time balance calculation
- Separate income and expense tracking
- Delete transactions
- Persistent data using Local Storage
- Responsive design for mobile and desktop
- Modern glassmorphism UI

---

## Preview

### Dashboard
- Current Balance
- Total Income
- Total Expense
- Transaction History

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

---

## Project Structure

```text
Expense-Tracker/
│
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## How It Works

### Adding a Transaction

1. Enter a description.
2. Enter an amount.
3. Click **Add Transaction**.

> Positive Amount → Income  
> Negative Amount → Expense

Examples:

| Description | Amount |
|------------|---------|
| Salary | 50000 |
| Freelance Work | 10000 |
| Food | -500 |
| Shopping | -2000 |

---

### Balance Calculation

```javascript
Balance = Total Income - Total Expense
```

The balance automatically updates whenever a transaction is added or deleted.

---

### Data Storage

All transactions are stored in the browser's Local Storage:

```javascript
localStorage.setItem(
  "transactions",
  JSON.stringify(transactions)
);
```

This ensures data remains available even after refreshing the page.

---

## UI Features

- Dark gradient background
- Glassmorphism card design
- Smooth hover animations
- Responsive layout
- Color indicators:
  -  Green → Income
  -  Red → Expense

---

## Responsive Design

The application adapts to:

- Desktop
- Tablet
- Mobile Devices

---

## Future Improvements

- Edit transaction feature
- Transaction categories
- Expense charts and analytics
- Monthly reports
- Export to CSV/PDF
- Search and filter transactions
- Dark/Light mode toggle

---

## Running the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/expense-tracker.git
```

2. Open the project folder.

3. Run `index.html` in your browser.

No additional setup or dependencies are required.

---

## Learning Concepts Used

This project demonstrates:

- DOM Manipulation
- Event Handling
- Array Methods (`forEach`, `push`, `splice`)
- Local Storage
- Dynamic Element Creation
- Responsive CSS
- JavaScript Functions

---

## Author

Created as a JavaScript practice project to learn:

- Frontend Development
- State Management
- Browser Storage
- UI Design Principles

---

## 📄 License

This project is open source and available under the MIT License.
