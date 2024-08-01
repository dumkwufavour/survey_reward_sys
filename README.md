survey-system/
├── auth-service/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
├── user-service/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
├── survey-service/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
├── api-gateway/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── node_modules/
    ├── .env
    ├── package.json
    ├── next.config.js
    ├── pages/
    │   ├── _app.js
    │   ├── index.js
    │   ├── dashboard.js
    │   └── surveys.js
    └── public/





Users{
    sign-up{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        PhoneNumber: string;
    }
    sign-up{
      email: string;
      password: string;
    }

    dashboard{
      done_surveyLink: string;
      active_surveyLink: string;
      settings
    }
}


### Users (Respondents)
1. **Sign-up**: New users can create an account.
2. **Sign-in**: Existing users can log in.
3. **Dashboard**:
   - **Survey Link**: A list of surveys they can participate in.
   - **Settings**: User settings for profile management.
   - **Sign Out**: Log out from the system.
   - **Completed Survey**: List of surveys they have completed.
   - **Active Survey**: List of ongoing surveys they are participating in.
   - **Pending Survey**: List of surveys they have been invited to but have not started yet.
4. **sign-out**: Logout from the system

### Admin
1. **Sign-in**: Admin can log in.
2. **Dashboard**:
   - **Manage Survey Links**:
     - **Create Survey Link to Users (Respondents)**: Assign new surveys to users.
     - **Delete All Survey Links to Users (Respondents)**: Remove all survey links for users.
     - **Delete One Survey Link to Users (Respondents)**: Remove a specific survey link for a user.
     - **Update All Survey Links to Users (Respondents)**: Update all survey links.
     - **Update One Survey Link to Users (Respondents)**: Update a specific survey link.
   - **Manage Survey Notifications**:
     - **Send Survey Notifications to Users (Respondents) Emails**: Notify users about new surveys or reminders.
   - **Manage Users (Respondents)**:
     - **Deactivate All Users (Respondents)**: Temporarily disable all user accounts.
     - **Deactivate One User (Respondent)**: Temporarily disable a specific user account.
     - **Activate All Users (Respondents)**: Reactivate all user accounts.
     - **Activate One User (Respondent)**: Reactivate a specific user account.
3. **Sign-out**: Log out from the system.

