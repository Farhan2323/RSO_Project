UIUC Registered Student Organization Web Application

Students need an all in one platform to connect with RSOs at their school. With our UIUC Registered Student Organization site, RSOs can register their own clubs with the most up to date information while potential members can discover RSOs that best fit their schedules and interests.

Functionality:

Users can register as either an organization or as a student
Organization users can make an RSO page that contains the description of their RSO, contact information for officers, scheduling, regular meeting spots, announcements, and events
Student users can view all RSOs and search for RSOs by name


![image](https://github.com/user-attachments/assets/1e2c46e5-0a86-4f06-9135-0e6a44b08894)

User Input

The user is able to search for RSOs that they would be interested in and is able to login
Databases

User, Organizations, members, and events are all databases that store information respectively
Each of the databases have their respective attributes that are shown in the wireframe
Built using Python (SQLAlchemy, Pandas)
Web Parser

The parser was used to acquire data from the UIUC’s RSO page
Information acquired was added to its respective database
Built using Python (Flask, CSV library)



How It Works
This is a hybrid Next.js + Python app that uses Next.js as the frontend and Flask as the API backend.

The Python/Flask server is mapped into to Next.js app under /api/.

This is implemented using next.config.js rewrites to map any request to /api/:path* to the Flask API, which is hosted in the /api folder.

On localhost, the rewrite will be made to the 127.0.0.1:5328 port, which is where the Flask server is running.

In production, the Flask server is hosted as Python serverless functions on Vercel.



The link for the website is currently:

https://group-project-team-66.vercel.app/
