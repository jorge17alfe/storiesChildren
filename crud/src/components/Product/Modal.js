import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditProduct(props) {
  // console.log(props.id)
  // let store= ()=>{};
  let update;
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(null)
  const [stock, setStock] = useState(null)
  const id = props.id;
  const endpoint = 'http://localhost:8000/api/product/'
  // const navigate = useNavigate(); 

  useEffect(() => {

    // if (id === null) {
    // store = async (e) => {
    //   e.preventDefault();
    //   await axios.post(endpoint, { description: description, price: price, stock: stock })
    //   // navigate('/show')
    // }
    // }




    // if (id != null) {

    const getProductId = async () => {
      const response = await axios.get(endpoint + id);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
    }
    getProductId();


    const update = async (e) => {
      e.preventDefault();
      await axios.put(endpoint + id, { description: description, price: price, stock: stock })
      console.log("dfghj")
      // navigate('/show')
    }
    // }

  },[])

  return (
    <div>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={update}>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="hidden"
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    value={id}
                  ></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                  <input
                    type="text"
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Price</span>
                  <input
                    type="number"
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Stock</span>
                  <input t
                    ype="number"
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}

                  ></input>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EditProduct