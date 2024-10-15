import React, { useState, useEffect } from 'react';
import './Myprofile.css'; // Importing CSS for styling
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProfileSettings = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    // Load user data from local storage when the component mounts
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setName(storedUser.name || '');
            setEmail(storedUser.email || '');
            setMobile(storedUser.mobile || '');
            // You might want to set a default gender here or fetch it from user data
            setGender(storedUser.gender || 'male'); // Default gender
        }
    }, []);

    const handleSaveChanges = (e) => {
        e.preventDefault();
        const updatedUser = { name, gender, email, mobile };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        alert('Changes saved successfully!');
    };

    return (
        <div className="flex flex-col w-[80%] mx-auto my-8">
            <div className='flex justify-between'>
               <p> <Link>Home</Link> / <Link className='font-bold text-red-500'>MyProfile</Link></p>
               <p>
                Welcome <span className='text-red-500 font-bold'>Devesh Sharma</span>
               </p>
            </div>
           <div className='container mt-4 bg-white rounded-md'>
           <aside className="sidebar border-0">
               <nav>
                   <ul>
                       <li className='px-3'>My Orders</li>
                       <li className='px-3'>Account Settings</li>
                       <li className='px-3'>Payments</li>
                       <li className='px-3'>My Stuff</li>
                       <li className='px-3'>Logout</li>
                   </ul>
               </nav>
           </aside>

           <section className="content shadow-md rounded-md p-12 border flex flex-col gap-2">
               <h1 className='text-red-500 text-xl font-bold'>Edit Your Profile </h1>
               <div className="account-section border-0">
                   <form onSubmit={handleSaveChanges}>
                       <label htmlFor="name">Name</label>
                       <input
                           type="text"
                           id="name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                       />

                       <label htmlFor="gender">Gender</label>
                       <select
                       className='p-2'
                           id="gender"
                           value={gender}
                           onChange={(e) => setGender(e.target.value)}
                       >
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                       </select>

                       <label htmlFor="email">Email Address</label>
                       <input
                           type="email"
                           id="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                       />

                       <label htmlFor="mobile">Mobile Number</label>
                       <input
                           type="tel"
                           id="mobile"
                           value={mobile}
                           onChange={(e) => setMobile(e.target.value)}
                       />

                       <div>
                        <button className='bg-transparent text-black'>Cancel</button>
                        <button className='bg-red-500' type="submit">Save Changes</button>
                       </div>
                   </form>
               </div>

               <div className="faq-section text-sm">
                   <h2 className='font-bold mb-4 text-lg border-b'>FAQs</h2>
                   <div className="faq">
                       <p className='font-bold'>What happens when I update my email address or mobile number?</p>
                       <p>Your login will change, and all future communication will use the new details.</p>
                   </div>
                   <div className="faq">
                       <p className='font-bold'>When will my updated details reflect?</p>
                       <p>It may take up to 24 hours to update across all systems.</p>
                   </div>
               </div>

               <div className="account-management">
                   <a href="#" className="deactivate bg-transparent text-red-500">Deactivate Account</a>
                   <a href="#" className="delete bg-red-500">Delete Account</a>
               </div>
           </section>
           </div>
        </div>
    );
};

export default ProfileSettings;
