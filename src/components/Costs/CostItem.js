import "./CostItem.css";
import CostDescription from "./CostDescription";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem(props) {
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <CostDescription description={props.description} amount={props.amount} />
    </Card>
  );
}

export default CostItem;
