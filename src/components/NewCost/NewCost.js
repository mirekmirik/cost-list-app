import React, {useState} from 'react'
import CostForm from './CostForm';
import './NewCost.css';


const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };
        props.onAddCost(costData);
        setIsFormVisible(false)
    };

    const inputCostData = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }


    return (
      <div className="new-cost">
        {!isFormVisible && (
          <button onClick={inputCostData}>Добавить Новый Расход</button>
        )}
          {isFormVisible && <CostForm
            onCancel={cancelCostHandler}
            onSaveCostData={saveCostDataHandler}
          />}
      </div>
    );
};


export default NewCost;