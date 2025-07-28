import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from './userslice';
import AdminNavbar from './adminbar';

const Users = () => {
    const dispatch = useDispatch();
    const { users = [], loading } = useSelector((state) => state.users);
    const [form, setForm] = useState({ name: '', username: '', image: '', id: null });
    const [showadduser, setShowadduser] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.id) {
            dispatch(updateUser(form));
        } else {
            dispatch(addUser({ ...form }));
        }
        setForm({ name: '', username: '', image: '', id: null });
        setShowadduser(false);
    };

    const handleEdit = (user) => {
        setForm({
            name: user.name || '',
            username: user.username || '',
            image: user.image || '',
            id: user.id || ''
        });
        setShowadduser(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <AdminNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className={`flex-1 mt-20 px-4 transition-all duration-300 ${isMenuOpen ? 'lg:ml-60' : 'ml-0'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                    <h1 className="text-2xl font-bold">All Users</h1>
                    <button
                        onClick={() => {
                            setForm({ name: '', username: '', image: '', id: null });
                            setShowadduser(true);
                        }}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Add User
                    </button>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="overflow-x-auto bg-white shadow rounded-lg">
                        <table className="min-w-full text-left text-sm">
                            <thead className="bg-[#0097b2] text-white">
                                <tr>
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Username</th>
                                    <th className="px-4 py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <img
                                                src={user.image}
                                                alt={user.name}
                                                className="w-10 h-10 rounded-full object-cover border"
                                            />
                                        </td>
                                        <td className="px-4 py-3">{user.name}</td>
                                        <td className="px-4 py-3">@{user.username}</td>
                                        <td className="px-4 py-3 text-center">
                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Add/Edit user */}
                {showadduser && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-2">
                        <div className="bg-white w-full max-w-md rounded shadow-lg p-6">
                            <h2 className="text-xl font-bold mb-4">
                                {form.id ? 'Edit User' : 'Add User'}
                            </h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="border px-3 py-2 rounded"
                                    required
                                />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={form.username}
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
                                />
                                <div className="flex justify-end gap-4 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowadduser(false)}
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

export default Users;
