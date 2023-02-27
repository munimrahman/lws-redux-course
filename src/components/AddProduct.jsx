import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/actions";

const AddProduct = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const product = {};
    product["id"] = Date.now();
    product["name"] = e.target.name.value;
    product["category"] = e.target.category.value;
    product["image"] = e.target.image.value;
    product["price"] = e.target.price.value;
    product["quantity"] = e.target.quantity.value;
    dispatch(addProduct(product));
    e.target.category.value = "";
    e.target.image.value = "";
    e.target.price.value = "";
    e.target.name.value = "";
    e.target.quantity.value = "";
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleOnSubmit}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="name">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="name"
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
            name="category"
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
            name="image"
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
              name="price"
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
              name="quantity"
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
