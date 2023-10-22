import { useEffect, useState } from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 26.875em)').matches);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 26.875em)');

    const updateSize = (e: MediaQueryListEvent | MediaQueryList): void => {
      setIsMobile(e.matches);
    };

    // Mettre à jour l'état initial
    updateSize(mq);

    // Ajouter un écouteur pour les changements
    mq.addListener(updateSize);

    return (): void => {
      // Retirer l'écouteur lors du démontage
      mq.removeListener(updateSize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;




