# BudgeThov
A web-based platform for day-to-day budgeting needs

**User** :( -> **Frontend** -*requests*-> **API** -*requests*-> **Backend** -*responds*-> **API** -*responds*-> **Frontend** -> **User** :)

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

### Sections - (*All sections should be optional*)
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

### Backend - *GoLang*
- Format information and return through API


### API - *GoLang*
- Handle requests for information and coordinate with backend
- Serve information to frontend


### Frontend - *Vite(React - Typescript)*
- UI
    - Should use Grommet: https://v2.grommet.io/components
- Make API requests
