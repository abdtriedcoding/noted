import { useEffect, useState } from "react";

export function useOrigin() {
  const [mounted, setMounted] = useState(false);
  const origin = window?.location.origin
    ? window.location.origin
    : '';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return '';
  }

  return origin;
}
