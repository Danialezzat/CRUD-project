import { useState } from "react";
import axios from 'axios';
import style from './App.module.css'
import GetProducts from "./components/GetProducts";
import AddProducts from "./components/AddProducts";
import PutProducts from "./components/PutProducts";
import DeleteProduct from "./components/DeleteProduct";



// Axios config
axios.defaults.baseURL = 'https://fakestoreapi.com';
axios.interceptors.request.use((request) => {
  console.log(request)
  return request;
})
axios.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
})





function App() {
  const [showComponent, setShowComponent] = useState({
    get: false,
    add: false,
    put: false,
    delete: false,
  });

  const btnHandler = (event) => {
    setShowComponent({
      ...showComponent,
      [event.target.name]: !showComponent[event.target.name],
    });
  };

  return (
    <div className={style.maincontainer}>
      <div className={style.btnComponentcontroller}>
        <button name="get" onClick={btnHandler}>
          All Products
        </button>
        <button name="add" onClick={btnHandler}>
          Add Pruducts
        </button>
        <button name="put" onClick={btnHandler}>
          Edit Products
        </button>
        <button name="delete" onClick={btnHandler}>
          Delete Products
        </button>
      </div>
      {showComponent.get && <GetProducts />}
      {showComponent.add && <AddProducts />}
      {showComponent.put && <PutProducts />}
      {showComponent.delete && <DeleteProduct />}
    </div>
  );
}

export default App;
