import React, { useEffect, useState } from 'react';
import { FaUserLarge } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState({ mobileNo: false, address: false });
    const [editedValues, setEditedValues] = useState({ mobileNo: '', address: '' });

    useEffect(() => {
        fetch("http://localhost:3000/user/getUser", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => setUser(data.user))
            .catch((error) => console.error('Error fetching user:', error));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
    };

    const handleEditClick = (field) => {
        setIsEditing((prevState) => ({ ...prevState, [field]: !prevState[field] }));
        if (field === 'mobileNo') {
            setEditedValues((prevState) => ({ ...prevState, mobileNo: user.mobileNo || '' }));
        } else if (field === 'address') {
            setEditedValues((prevState) => ({ ...prevState, address: user.address || '' }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSaveClick = (field) => {
        const updatedUser = { ...user, [field]: editedValues[field] };

        // Update the user details in the database
        fetch("http://localhost:3000/user/updateUser", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({ [field]: editedValues[field] })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                setUser(updatedUser);
                setIsEditing((prevState) => ({ ...prevState, [field]: false }));
            } else {
                console.error('Error updating user:', data.message);
            }
        })
        .catch((error) => console.error('Error updating user:', error));
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-1/2 border h-96 block text-lg leading-tight font-medium text-black shadow-lg shadow-stone-800 rounded-lg p-6 bg-white'>
                <div className='flex justify-center items-center'>
                    <FaUserLarge className='w-20 h-12 border border-black rounded-3xl p-2' />
                </div>
                <table cellPadding={10} align='center' className='w-full'>
                    <tbody>
                        <tr className='border-b'>
                            <td className='font-semibold'>User Name:</td>
                            <td className='uppercase'>{user.fullName}</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='font-semibold'>Email:</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='font-semibold'>Mobile No:</td>
                            <td>
                                {isEditing.mobileNo ? (
                                    <input
                                        type='text'
                                        name='mobileNo'
                                        value={editedValues.mobileNo}
                                        onChange={handleInputChange}
                                        className='border p-1'
                                    />
                                ) : (
                                    user.mobileNo || 'N/A'
                                )}
                                <FaRegEdit onClick={() => handleEditClick('mobileNo')} className='inline-block ml-2 cursor-pointer' />
                                {isEditing.mobileNo && (
                                    <button
                                        onClick={() => handleSaveClick('mobileNo')}
                                        className='ml-2 text-sm text-blue-500'
                                    >
                                        Save
                                    </button>
                                )}
                            </td>
                        </tr>
                        <tr className='border-b'>
                            <td className='font-semibold'>Address:</td>
                            <td>
                                {isEditing.address ? (
                                    <input
                                        type='text'
                                        name='address'
                                        value={editedValues.address}
                                        onChange={handleInputChange}
                                        className='border p-1'
                                    />
                                ) : (
                                    user.address || 'N/A'
                                )}
                                <FaRegEdit onClick={() => handleEditClick('address')} className='inline-block ml-2 cursor-pointer' />
                                {isEditing.address && (
                                    <button
                                        onClick={() => handleSaveClick('address')}
                                        className='ml-2 text-sm text-blue-500'
                                    >
                                        Save
                                    </button>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={handleLogout}
                    className='mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-200'
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserProfile;




// import React, { useEffect, useState } from 'react';
// import { FaUserLarge } from "react-icons/fa6";
// import { FaRegEdit } from "react-icons/fa";

// const UserProfile = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         fetch("http://localhost:3000/user/getUser", {
//             method: "GET",
//             headers: {
//                 Authorization: "Bearer " + localStorage.getItem("token"),
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => setUser(data.user))
//             .catch((error) => console.error('Error fetching user:', error));
//     }, []);

//     const handleLogout = () => {
//         // Clear authentication tokens or user data
//         localStorage.removeItem('authToken');
//         localStorage.removeItem('userData');
//         // Optionally, you might want to redirect the user or update the state
//     };

//     if (!user) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className='flex justify-center items-center h-screen'>
//             <div className='w-1/2 border  h-96 block text-lg leading-tight font-medium text-black shadow-lg shadow-stone-800  rounded-lg p-6 bg-white'>
//             <div  className='flex justify-center items-center '>
//             <FaUserLarge className='w-20 h-12 border border-black rounded-3xl p-2'/>
//             </div>
            
//                 <table cellPadding={10} align='center' className='w-full'>
//                     <tbody>
//                         <tr className='border-b'>
//                             <td className='font-semibold'>User Name:</td>
//                             <td className='uppercase'>{user.fullName}</td>
//                         </tr>
//                         <tr className='border-b'>
//                             <td className='font-semibold'>Email:</td>
//                             <td>{user.email}</td>
//                         </tr>
//                         <tr className='border-b'>
//                             <td className='font-semibold'>Mobile No:</td>
//                             <td></td><FaRegEdit />
//                         </tr>
//                         <tr className='border-b'>
//                             <td className='font-semibold'>Address:</td>
//                             <td></td><FaRegEdit />
//                         </tr>
//                     </tbody>
//                 </table>
//                 <button
//                     onClick={handleLogout}
//                     className='mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-200'
//                 >
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;
