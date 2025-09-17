import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
// scrolls to start on change of path.
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname]
  );

  return null;
}