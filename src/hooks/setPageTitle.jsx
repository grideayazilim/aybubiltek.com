import { useEffect } from 'react';

const setPageTitle = (title) => {
  useEffect(() => {
    // Derlemede üretilen sayfa başlıklarıyla aynı biçim (vite.config.js)
    document.title =
      !title || title === "AYBÜ BİLTEK" ? "AYBÜ BİLTEK" : `${title} | AYBÜ BİLTEK`;
  }, [title]);
};

export default setPageTitle;