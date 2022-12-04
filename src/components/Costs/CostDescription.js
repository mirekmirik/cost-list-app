function CostDescription(props) {
  return (
    <div className="cost-item__description">
      <h2>{props.description}</h2>
      <div className="cost-item__price">${props.amount}</div>
    </div>
  );
}

export default CostDescription;
