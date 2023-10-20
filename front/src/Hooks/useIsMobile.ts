import { useEffect, useState } from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 26.875em)').matches);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 26.875em)');

    const updateSize = (mq: MediaQueryListEvent): void => {
      setIsMobile(mq.matches);
    };

    // Mettre à jour l'état initial
    updateSize(mq);

    // Ajouter un écouteur pour les changements
    mq.addEventListener('change', updateSize);

    return (): void => {
      // Retirer l'écouteur lors du démontage
      mq.removeEventListener('change', updateSize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
