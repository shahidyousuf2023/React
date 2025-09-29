import { useState, useEffect } from 'react';

function UseEffectExamples() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // 1. useEffect with no dependencies - runs on every render
    useEffect(() => {
        console.log('This runs on every render');
    });

    // 2. useEffect with empty dependency array - runs only once on mount
    useEffect(() => {
        console.log('Component mounted - runs only once');
        
        // Simulate API call
        setTimeout(() => {
            setUsers([
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' },
                { id: 3, name: 'Bob' }
            ]);
        }, 1000);
    }, []);

    // 3. useEffect with dependencies - runs when count changes
    useEffect(() => {
        console.log(`Count changed to: ${count}`);
        document.title = `Count: ${count}`;
    }, [count]);

    // 4. useEffect with multiple dependencies - runs when name or count changes
    useEffect(() => {
        console.log(`Name: ${name}, Count: ${count}`);
    }, [name, count]);

    // 5. useEffect with cleanup - for event listeners and timers
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 6. useEffect for API calls with cleanup
    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                // Simulate API call
                const response = await new Promise(resolve => 
                    setTimeout(() => resolve({ data: 'API Data' }), 2000)
                );
                
                if (!isCancelled) {
                    console.log('API Data:', response.data);
                }
            } catch (error) {
                if (!isCancelled) {
                    console.error('Error:', error);
                }
            }
        };

        fetchData();

        // Cleanup function to cancel request if component unmounts
        return () => {
            isCancelled = true;
        };
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>useEffect Examples</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <h2>Counter Example</h2>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Name Input</h2>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <p>Hello, {name || 'Anonymous'}!</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Users (Simulated API)</h2>
                {users.length === 0 ? (
                    <p>Loading users...</p>
                ) : (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Window Width</h2>
                <p>Current window width: {windowWidth}px</p>
                <p>Try resizing your browser window!</p>
            </div>

            <div>
                <h2>Check Console</h2>
                <p>Open browser console to see useEffect logs</p>
            </div>
        </div>
    );
}

export default UseEffectExamples;
