import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct(props) {


    const [description, setDescription] = useState('Product Name')
    const [price, setPrice] = useState(250)
    const [stock, setStock] = useState(10)
    const endpoint = 'http://localhost:8000/api/product/'
    const navigate = useNavigate();
    

    
    
    const store = async (e) => {
        // console.log(description,price, stock)
        e.preventDefault();
        await axios.post(endpoint, { description: description, price: price, stock: stock })
        navigate('/show')
    }

    return (
        <div className='container w-50 my-5'>
          <div className='my-5'>
            <h1>Create your product</h1>
          </div>
            <form onSubmit={store}>
            
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                    <input
                        type="text"
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        placeholder={description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Price</span>
                    <input
                        type="number"
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        placeholder={price}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Stock</span>
                    <input t
                        ype="number"
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        placeholder={stock}
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}

                    ></input>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={()=> navigate("/show")} className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Store</button>
                </div>
            </form></div>
    )
}
