```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: attempts to update count after component unmounts
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```