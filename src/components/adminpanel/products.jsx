import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, updateProduct, deleteProduct, } from './productslice';
import Panelnavbar from './adminbar';
import AdminNavbar from './adminbar';

const Products = () => {
    const dispatch = useDispatch();
    const { products = [], loading } = useSelector((state) => state.products);
    const [form, setForm] = useState({ title: '', price: '', image: '', id: null });
    const [showaddproduct, setShowaddproduct] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.id) {
            dispatch(updateProduct(form));
        } else {
            dispatch(addProduct({ ...form }));
        }
        setForm({ title: '', price: '', image: '', id: null });
        setShowaddproduct(false);
    };

    const handleEdit = (product) => {
        setForm({ title: product.title, price: product.price, image: product.image, id: product.id });
        setShowaddproduct(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <div className="flex h-screen ">
            <AdminNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div
                className={`flex-1 m-4 sm:m-10 transition-all duration-300 ${isMenuOpen ? 'sm:ml-60' : 'ml-0'
                    }`}
            >                <h1 className="text-2xl font-bold mb-6">Product Dashboard</h1>
                <button
                    onClick={() => {
                        setForm({ title: '', price: '', image: '', id: null });
                        setShowaddproduct(true);
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded mb-6"
                >
                    Add Product
                </button>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="border p-4 rounded shadow text-center">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-contain mb-3"
                                />
                                <h2 className="font-semibold text-lg">{product.title}</h2>
                                <p className="text-gray-600">${product.price}</p>
                                <div className="mt-3 flex justify-center gap-4">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="text-blue-500"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="text-red-500"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {showaddproduct && (
                    <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
                            <h2 className="text-xl font-bold mb-4">
                                {form.id ? 'Edit Product' : 'Add Product'}
                            </h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className="border px-3 py-2 rounded"
                                    required
                                />
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    value={form.price}
                                    onChange={handleChange}
                                    className="border px-3 py-2 rounded"
                                    required
                                />
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Image URL"
                                    value={form.image}
                                    onChange={handleChange}
                                    className="border px-3 py-2 rounded"
                                    required
                                />
                                <div className="flex justify-end gap-4 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowaddproduct(false)}
                                        className="px-4 py-2 bg-gray-300 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                    >
                                        {form.id ? 'Update' : 'Add'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
