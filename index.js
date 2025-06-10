import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Pomodoro Task Manager</h1>
      <p>Welcome to your productivity booster!</p>
      <nav>
        <ul>
          <li><Link href="/timer">Go to Timer</Link></li>
          <li><Link href="/tasks">View Tasks</Link></li>
          <li><Link href="/about">About Project</Link></li>
        </ul>
      </nav>
    </div>
  );
}
