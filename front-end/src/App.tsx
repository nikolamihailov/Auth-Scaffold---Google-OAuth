import { useEffect } from "react";

function App() {
    useEffect(() => {
        fetch("http://localhost:8080")
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
