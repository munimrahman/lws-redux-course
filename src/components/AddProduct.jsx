import React from "react";

const AddProduct = () => {
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="name">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            // id="name"
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="category">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            // id="category"
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            // id="image"
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
