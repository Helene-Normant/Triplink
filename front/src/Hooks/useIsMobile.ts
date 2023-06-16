import { useEffect, useState } from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  const updateSize = (): void => {
    setIsMobile(window.innerWidth <= 430);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);

    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;






