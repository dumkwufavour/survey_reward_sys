import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/') {
        auth0.handleRedirectCallback().then((user) => {
          // Redirect to dashboard after login
          router.push('/dashboard');
        }).catch(() => {
          // Not logged in, redirect to login
          router.push('/login');
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
