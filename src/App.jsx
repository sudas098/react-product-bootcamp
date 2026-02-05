
import { useState } from "react";
import Header from "./components/Header";
import SubTitle from "./components/SubTitle";

function App() {

  const [ count, setCount ] = useState(0);
  const [ name, setName ] = useState("");

  const features = [

    "Fast UI updates",
    "Reusable components",
    "State-driven rendering",
    "Startup-ready patterns",
  ];

  return (

    <div>
      <Header title = "React Product Engineer Bootcamp" />
      <SubTitle text = {count ===0 ? "No clicks yet": `Clicked ${count} times` } />

      { count >= 5 && <p>🔥 Power user unlocked</p> }

      { count >= 3 && (
       <ul>
          { features.slice(0, count).map((feature, index) => (

            <li key={index}> { feature } </li>
          ))}
        </ul>
      )}

      <button onClick={() => setCount( prev => prev+1)}>
        ➕ Increase
      </button>

      <button  onClick={() => setCount( prev => prev-1)} disabled = { count === 0 }>
        ➖ Decrease
      </button>

      <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("")} disabled={!name}>
  Clear name
</button>
      {name && <p>Hello, { name } 👋 </p>}
    </div>
  )
}

export default App