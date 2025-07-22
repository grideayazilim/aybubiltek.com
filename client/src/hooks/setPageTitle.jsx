import { useEffect } from 'react';

const setPageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default setPageTitle;