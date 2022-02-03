# BudgeThov
A web-based platform for day-to-day budgeting needs

**User** :( -> **Frontend** -*requests*-> **API** -*requests*-> **Backend** -*responds*-> **API** -*responds*-> **Frontend** -> **User** :)

## Dev Setup
Firstly, make sure that you have GoLang and NodeJS installed on your machine.

Then, in whatever directory you choose...

    git clone https://github.com/PyThov/BudgeThov.git
    cd BudgeThov

Then, in separate terminals for backend and frontend:
 - Backend
    
        cd api
        go run .

 - Frontend

        cd frontend
        npm i
        npm run dev

## Goals

---

- Replace the modern static spreadsheets with a dynamic money management application.
- Track spending, saving, and goals
- Forecast future financials

## Requirements

---

### Login
- Email / Password
- Secure authentication

### Dashboard
- Overview of expenses, savings, recreation

### Sections
(*All sections should be optional*)
- Saving
- Investments
- Expenses
    - Necessities
    - Recreational
- Goals
- Income
- Allocation

### Variability
- Data should update in real time as the user updates fields
- Everything should be adjustable to view by day, week, month, or year

## Structure

---

### Database - *PostgreSQL*
- Probably split into tables for each primary section


### Backend - *GoLang*
- Format information and return through API
- Update and fetch data from database/datastore


### API - *GoLang*
- REST
- Handle requests for information and coordinate with backend
- Serve information to frontend


### Frontend - *Vite(React - Typescript)*
- UI
    - Should use Material UI: https://mui.com/
- Make API requests
