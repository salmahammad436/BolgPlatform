📜 Simple Blog Platform
A full-stack blog application where users can create and view posts.

🛠️ Tech Stack
Frontend
React.js (with TypeScript)
Tailwind CSS (for styling)
React Router (for navigation)
Axios (for API calls)

Backend
NestJS (for scalable backend)
MongoDB (database)
Mongoose (ORM)

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-repo.git](https://github.com/salmahammad436/BolgPlatform.git

2️⃣ Backend Setup
cd backend
npm install
Create a .env file in backend/
and add this 
MONGODB_URL=mongodb+srv://sayabammad:0W3g54bUVRH33Ott@cluster0.gxeh7.mongodb.net/
PORT=3000
then run the backend: npm start

3️⃣ Frontend Setup
cd frontend
npm install
then run the frontend: npm start




📌 API Endpoints
Method	Endpoint	Description
GET	/posts	Fetch all blog posts
GET	/posts/:id	Fetch a single post
POST	/posts	Create a new blog post
PATCH	/posts/:id	Update an existing post
DELETE	/posts/:id	Delete a blog post



