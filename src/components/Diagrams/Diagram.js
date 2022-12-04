import DiagramBar from './DiagramBar';
import './Diagram.css';
const Diagram = (props) => {
    const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);
    const maxMonthCosts = Math.max(...dataSetsValues);

    console.log(maxMonthCosts)


    return (
        <div className='diagram'>
            {props.dataSets.map((dataSet) => {
                return (<DiagramBar 
                key={dataSet.label}
                value={dataSet.value} 
                label={dataSet.label}
                maxValue={maxMonthCosts}
                />)
            })}
        </div>
    )
}


export default Diagram