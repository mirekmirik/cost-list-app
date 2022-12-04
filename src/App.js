import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from 'react'

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 8, 7),
    description: "iPhone",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2020, 12, 12),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2019, 7, 30),
    description: "Холодильник",
    amount: 499.99,
  },
];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    });
    console.log(cost);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
