import { useEffect } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then((res) => res.text())
            .then(console.log);
    }, []);

    return (
        <>
            <h1>Works</h1>
        </>
    );
}

export default App;
