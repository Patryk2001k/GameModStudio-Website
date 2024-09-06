import { useCallback } from 'react';

const useScrollToSection = () => {
  const scrollTo = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollTo;
};

export default useScrollToSection;
