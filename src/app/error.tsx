"use client";
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main><div className="app-status"><span>◌</span><h2>That view took a wrong turn.</h2><p>Your local drafts are safe. Please try again.</p><button className="button" onClick={reset}>Try again</button></div></main>; }
