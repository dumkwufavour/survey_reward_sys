import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
});

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    auth0.getSession().then((session) => {
      if (!session.user) {
        router.push('/');
      } else {
        setUser(session.user);
      }
    });
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <p>Welcome, {user.name}</p>}
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
