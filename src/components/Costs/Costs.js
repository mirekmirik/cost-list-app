import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react'
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';


function Costs(props) {
  const [selectedYear, setSelectedYear] = useState('2021')

  const changeYearHandler = (year) => {
    console.log(year)
    setSelectedYear(year)
  }

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear
  });
  console.log(filteredCosts);

  
  return (
    <li>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts}/>
        {/* && Возвращает вторую часть, если первая часть == true */}
        {/* {filteredCosts.length === 0 && costsContent}
        {/* && Если есть filteredCost (true) вернёт вторую часть */}
        {/* {filteredCosts.length > 0 &&  (
          filteredCosts.map((cost) => {
            return (
              <CostItem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
              />
            );
          })
        )}  */}
      </Card>
    </li>
  );
  }


export default Costs




















  
  // console.log(props.costs.map((el) => {
  //     return <CostItem 
  //         date={el.date}
  //         description={el.description}
  //         amount={el.amount}
  //         />
  // }))










  // {[<CostItem/>, <CostItem/>, <CostItem/>]}
  /* <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      />
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      />
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      /> */