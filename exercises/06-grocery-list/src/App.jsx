import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {
  
  const [actionItems, setActionItems] = useState([]);

  const newItem = (accumulator) => {
    if(!Number.isNaN(parseFloat(accumulator[1])) && accumulator[0] !== "")
    setActionItems([...actionItems, accumulator]);
    else{
      window.alert("Put in item and cost")
    }
  }

  const deleteItem = index => {
    setActionItems(
      actionItems.filter((item, currentIndex) => currentIndex !== index)
    );
  };

  const clearItems = () => {
    setActionItems([]);
  }

  const handleSubmit = e => {
    e.preventDefault(); 
  }

  const total = (actionItems) =>(
    <p>{actionItems.reduce((sum, i) => (
      sum += parseFloat(i[1])
    ), 0)}</p>
  )

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form id="form" className="form-inline" onSubmit={handleSubmit}>
          <input
            id="item"
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
          />
          <input
            id="cost"
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
          />
          <div>
            <button type="reset" className="btn btn-success" onClick={()=>newItem([document.getElementById("item").value, document.getElementById("cost").value])}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              actionItems.map((item, index) => {
                if(item[0] !== "" && item[1] !== ""){
                  return(
                  <>
                      <tr>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>
                          <button aria-label="Delete" title="Delete" onClick={() => deleteItem(index)}>Delete</button>
                        </td>
                      </tr>
                  </>
                )}
                return(
                  <>
                  </>
                )
            })
            }
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {total(actionItems)}</strong>
        </p>
        <div className="text-right">
          <button type="button" className="btn btn-outline-success" onClick={clearItems}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
