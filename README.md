<p align="center">
  <a href="https://eye-in-the-ski.vercel.app">
    <img src="public/logo.png" height="200" style="border-radius: 20px;">
  </a>
  <h3 align="center">
    <a href="https://eye-in-the-ski.vercel.app">Eye in the Ski</a>
  </h3>
</p>

<br/>

## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![FastAPI][FastAPI]][FastAPI-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]


## Getting Started

First, create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Then, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Frontend (Next.js) Environment Variables
NEXT_PUBLIC_API_URL=          # Your API URL (e.g., http://localhost:8000)

# Backend (FastAPI) Environment Variables
AUTH_SECRET_KEY=              # Your JWT secret key
AUTH_ALGORITHM=               # JWT algorithm (e.g., HS256)
DATABASE_URL=                 # PostgreSQL connection string
```

For development, you can also create a `.env.local` file with your local values. Make sure to add `.env` and `.env.local` to your `.gitignore`.

Then, run the development server (python dependencies will be installed automatically here):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

## Roadmap

- [x] 1. Initial setup and deployment
- [x] 2. Authentication system
- [x] 3. Sidebar navigation
  - [x] Main dashboard
  - [x] Image Model
  - [x] Video Model
  - [x] Profile
- [ ] 4. Login persistence
- [ ] 5. User profile page
  - [ ] Basic info
  - [ ] Settings
  - [ ] History
- [ ] 6. Ski analysis features
  - [ ] Image analysis
    - [ ] Pose detection
    - [ ] Form analysis
    - [ ] Score generation
  - [ ] Video analysis
    - [ ] Real-time tracking
    - [ ] Performance metrics
    - [ ] Movement patterns
  - [ ] Analytics dashboard
    - [ ] Progress tracking
    - [ ] Comparison tools
    - [ ] Improvement suggestions


[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[FastAPI]: https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi
[FastAPI-url]: https://fastapi.tiangolo.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/