import "./App.css";
import WallOfShame from "./components/wallOfShame-styledCompos/MainTableWrapper";

const users = [
    {
        id: 1,
        name: "Brad Simmons",
        excuse: "Remember when you were young you shone like the sun. Shine on you",
        count: 1,
    },
    {
        id: 2,
        name: "Brad Simmons",
        excuse: "Remember when you were young you shone like the sun. Shine on you",
        count: 1,
    },
];

function App() {
    return (
        <>
            <WallOfShame users={users} />
        </>
    );
}

export default App;
