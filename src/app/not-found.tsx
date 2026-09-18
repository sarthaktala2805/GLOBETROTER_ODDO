import Link from "next/link";
export default function NotFound() { return <main><div className="app-status"><span>◌</span><h2>This route isn’t on the map.</h2><p>It may have moved, or the trip link may no longer exist.</p><Link className="button" href="/">Return home</Link></div></main>; }
