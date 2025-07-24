# research


Frontend: React
backend: Flask
User authentication: Firebase 
Database: MongoDb 
Media storage: Amazon S3



then the struc


# Goal structure 

clone/
├── frontend/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # Reusable UI components (e.g., PostCard, NavBar)
│   │   ├── pages/             # Pages like Feed, Profile, Login, Signup
│   │   ├── services/          # API calls, auth utilities (Firebase here)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json           # Frontend dependencies

├── backend/                   # Flask backend
│   ├── auth/                  # Auth-related routes and logic
│   │   └── routes.py
│   ├── db/                    # Database models or helper functions
│   │   └── mongo.py
│   ├── routes/                # Main app routes (e.g., journal posts)
│   │   └── journal.py
│   ├── utils/                 # Helpers (e.g., auth middleware, validators)
│   ├── config.py              # App config (e.g., Mongo URI, secrets)
│   └── server.py              # Main Flask app entry

├── .gitignore
├── README.md

# How to create a react app