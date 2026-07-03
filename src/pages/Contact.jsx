import { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [contacts, setContacts] = useState([]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            alert("Please fill all fields!");
            return;
        }

        setContacts([...contacts, form]);

        setForm({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 px-4 md:px-20 pt-10">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Contact System
                </h1>

                {/* ROW CONTAINER */}
                <div className="flex flex-col lg:flex-row gap-6 ">

                    {/* FORM SIDE */}
                    <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-bold mb-4">Contact Form</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border p-3 rounded"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border p-3 rounded"
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border p-3 rounded"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                    {/* TABLE SIDE */}
                    <div className="w-full lg:w-2/3 bg-white p-6 rounded shadow overflow-x-auto">
                        <h2 className="text-xl font-bold mb-4">Submitted Data</h2>

                        <table className="w-full border border-gray-300">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border p-2">#</th>
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Message</th>
                                </tr>
                            </thead>

                            <tbody>
                                {contacts.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center p-4">
                                            No data yet
                                        </td>
                                    </tr>
                                ) : (
                                    contacts.map((item, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="border p-2">{index + 1}</td>
                                            <td className="border p-2">{item.name}</td>
                                            <td className="border p-2">{item.email}</td>
                                            <td className="border p-2">{item.message}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Contact;