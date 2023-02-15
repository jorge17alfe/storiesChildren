import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProdut from './EditProduct'



const endpoint = 'http://localhost:8000/api'

function ShowProducts() {

  const [products, setProducts] = useState([])
  const [id, setId] = useState(null)

  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  }
  
  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    await getAllProducts();
  }
  // const editProduct = async (id) => {
  //   setId(id);
  // }
  // const createProduct = async (id) => {
  //   setId(id);
  // }

  

  return (
    <div className="text-center my-5 ">
      <div className="d-grid gap-2">
      {/* <button onClick={() => createProduct(null)} className="btn btn-warning  my-2 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Create Product</button> */}
      <Link to={"/create"} className="btn btn-warning  my-2 text-white"  >Create Product</Link>
        {/* <Link to="/create" className="btn btn-success ">Create</Link> */}
      </div>

      <table className="table table-striped add-modal">
        <thead className="bg-primary text-white">
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  {/* <button onClick={() => editProduct(product.id)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Edit</button> */}
                  <Link to={"/edit/"+product.id} className="btn btn-warning"  >Edit</Link>
                  
                 
                  <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))

          }
        </tbody>
      </table>
    
    
     
    </div>
  )
}

export default ShowProducts