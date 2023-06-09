import './Css/adminForm.css';
import React,{useState} from 'react';
import * as api from "../api"

// TODO: If user not admin

const AdminProduct = () => {

    const [item,setItem] = useState({name: "",
        image: "",
        price: "",
        description: ""
    });

    function handleChange(e) {
        setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
        // console.log(item)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const itemdata = {            
            name: item.name,
            image: item.image,
            price: item.price,
            description: item.description                
        };
        
        //console.log(itemdata);
        
        try {
            api.createProducts(itemdata); // send data to backend            
            console.log(api.fetchProducts());
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="container adminproduct-heading">
                <h3>Sell your products</h3>
            </div>
            <div className="container admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input onChange={handleChange} type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Image(URL)</label>
                        <input onChange={handleChange} type="text" className="form-control" name="image" placeholder='Image image'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Price</label>
                        <input onChange={handleChange}type="text" className="form-control" name="price" placeholder='Rs'/>
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea onChange={handleChange} id="" cols="10" rows="8" name="description" className='product-description' placeholder='Description of product'></textarea>
                    </div>
                    <div className="container adminProduct-btn mb-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default AdminProduct;