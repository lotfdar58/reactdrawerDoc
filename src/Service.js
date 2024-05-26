import { useRef, useState } from 'react';

export default function useService() {
  const abortControllerRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState(null);

  const fetchData = async (apiUrl) => {
    // Helper function to create a delay
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Abort previous request if the URLs are the same
    if (abortControllerRef.current && apiUrl === currentUrl) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setCurrentUrl(apiUrl);

    try {
      // Adding a delay of 2 seconds (2000 milliseconds)
      await sleep(2000);

      const response = await fetch(apiUrl, { signal: abortController.signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error.name !== 'AbortError') {
        throw error;
      }
    } finally {
      if (apiUrl === currentUrl) {
        setCurrentUrl(null);
      }
    }
  };

  return { fetchData };
}
