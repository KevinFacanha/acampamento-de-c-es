import { useEffect } from 'react';

const ELFSIGHT_SCRIPT_SRC = 'https://elfsightcdn.com/platform.js';
const ELFSIGHT_SCRIPT_ID = 'elfsight-platform-script';

const GoogleReviewsWidget = () => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const existingScript =
      document.getElementById(ELFSIGHT_SCRIPT_ID) ||
      document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`);

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = ELFSIGHT_SCRIPT_ID;
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-full overflow-visible">
      <div
        className="elfsight-app-5971f34d-375c-4f94-8f0b-7c10c06d0be3 w-full max-w-full"
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default GoogleReviewsWidget;
