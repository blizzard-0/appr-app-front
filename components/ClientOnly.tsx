import React, { useEffect, useState } from 'react';

/**
 * Helper component to wrap components around with to
 * make sure they only get rendered on the client-side
 */
export const ClientOnly: React.FC<{ children: any }> = (props) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return props.children;
};
