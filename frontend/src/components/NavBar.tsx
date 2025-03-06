import { Link } from "react-router-dom";
import {JSX} from 'react'

export default function NavBar(): JSX.Element {
  return (
    <nav>
      <div className="container flex  items-center justify-between mx-auto mt-2">
        <img src="blog.png" alt="logo" width="80" height="80" />
        <div className="flex justify-between gap-5">
          <button className="rounded bg-green-400 px-4 py-2 text-white transition hover:bg-green-300">
            <Link to="/">View all posts</Link>
          </button>
          <button className="rounded bg-green-400 px-4 py-2 text-white transition hover:bg-green-300">
            <Link to="/create">create new blog</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
