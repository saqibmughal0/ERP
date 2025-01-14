// import React, { useState, useEffect } from 'react';
// import contactImg from '../../images/emailSv.png';
// import {
//   MdOutlineDeleteOutline,
//   MdOutlineModeEditOutline,
//   MdOutlineFolder,
// } from 'react-icons/md';
// import { FaRegStar } from 'react-icons/fa';
// import { IoMailOutline } from 'react-icons/io5';
// import { FiSend } from 'react-icons/fi';
// import { TbBucket } from 'react-icons/tb';

// type Contact = {
//   FirstName: string;
//   LastName: string;
//   Department: string;
//   Company: string;
//   Phone: string;
//   Email: string;
//   Address: string;
//   Notes: string;
//   role: string;
//   category: string;
//   favorite: boolean;
// };

// const AddContact: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [newContact, setNewContact] = useState<Contact>({
//     FirstName: '',
//     LastName: '',
//     Department: '',
//     Company: '',
//     Phone: '',
//     Email: '',
//     Address: '',
//     Notes: '',
//     role: '',
//     category: '',
//     favorite: false,
//   });
//   const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
//   const [editContactIndex, setEditContactIndex] = useState<number | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null); // State to store selected contact

//   // Load contacts from sessionStorage when the component mounts
//   useEffect(() => {
//     const savedContacts = sessionStorage.getItem('contacts');
//     if (savedContacts) {
//       setContacts(JSON.parse(savedContacts));
//     }
//   }, []);

//   // Save contacts to sessionStorage whenever contacts array changes
//   useEffect(() => {
//     sessionStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const filteredContacts = contacts.filter((contact) => {
//     const matchesCategory =
//       selectedCategory === 'All' ||
//       contact.category === selectedCategory ||
//       (selectedCategory === 'Starred' && contact.favorite); // Add this check for Starred
//     const matchesSearch =
//       contact.FirstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       contact.role.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const handleAddContact = () => {
//     const updatedContacts = [...contacts, newContact];
//     setContacts(updatedContacts);
//     setNewContact({
//       FirstName: '',
//       LastName: '',
//       Department: '',
//       Company: '',
//       Phone: '',
//       Email: '',
//       Address: '',
//       Notes: '',
//       role: '',
//       category: '',
//       favorite: false,
//     });
//     setIsModalOpen(false);
//   };

//   const handleEditContact = () => {
//     const updatedContacts = [...contacts];
//     updatedContacts[editContactIndex!] = newContact; // Edit the selected contact
//     setContacts(updatedContacts);
//     setIsEditModalOpen(false);
//     setEditContactIndex(null);
//     setNewContact({
//       FirstName: '',
//       LastName: '',
//       Department: '',
//       Company: '',
//       Phone: '',
//       Email: '',
//       Address: '',
//       Notes: '',
//       role: '',
//       category: '',
//       favorite: false,
//     });
//   };

//   const toggleFavorite = (index: number) => {
//     const updatedContacts = [...contacts];
//     updatedContacts[index].favorite = !updatedContacts[index].favorite;
//     setContacts(updatedContacts);
//   };

//   const handleDelete = (index: number) => {
//     const updatedContacts = contacts.filter((_, i) => i !== index);
//     setContacts(updatedContacts);
//   };

//   const openEditModal = (index: number) => {
//     setEditContactIndex(index);
//     setNewContact(contacts[index]);
//     setIsEditModalOpen(true);
//   };

//   const openContactDetails = (contact: Contact) => {
//     setSelectedContact(contact); // Set the selected contact
//   };

//   return (
//     <div className="flex h-screen bg-white rounded-2xl shadow-4">
//       {/* Sidebar */}
//       <div className="w-1/6 border-r pt-9 px-5">
//         <button
//           className="w-full bg-blue-500 text-white py-1 text-[13px] rounded-3xl mb-4 hover:bg-blue-600"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Add New Contact
//         </button>
//         <ul className="border-b-2 mt-6 pb-6">
//           <li
//             className={`cursor-pointer py-2 ${
//               selectedCategory === 'All' && 'font-semibold text-blue-500'
//             }`}
//             onClick={() => setSelectedCategory('All')}
//           >
//             <span className="flex gap-2 items-center text-[1.20rem]">
//               {' '}
//               <IoMailOutline /> All{' '}
//             </span>
//           </li>
//           <li
//             className={`cursor-pointer py-2 ${
//               selectedCategory === 'Frequent' && 'font-semibold text-blue-500'
//             }`}
//             onClick={() => setSelectedCategory('Frequent')}
//           >
//             <span className="flex gap-2 items-center text-[1.20rem]">
//               {' '}
//               <FiSend /> Frequent{' '}
//             </span>
//           </li>
//           <li
//             className={`cursor-pointer py-2 ${
//               selectedCategory === 'Starred' && 'font-semibold text-blue-500'
//             }`}
//             onClick={() => setSelectedCategory('Starred')}
//           >
//             <span className="flex gap-2 items-center text-[1.20rem]">
//               {' '}
//               <TbBucket /> Starred{' '}
//             </span>
//           </li>
//         </ul>

//         <div className="mt-6">
//           <p className="font-semibold mb-2">Categories</p>
//           <ul>
//             <li
//               className={`cursor-pointer py-2 ${
//                 selectedCategory === 'Engineering' &&
//                 'font-semibold text-blue-500'
//               }`}
//               onClick={() => setSelectedCategory('Engineering')}
//             >
//               <span className="flex gap-2 items-center text-[1.20rem]">
//                 {' '}
//                 <MdOutlineFolder className="text-sky-500" /> Engineering{' '}
//               </span>
//             </li>
//             <li
//               className={`cursor-pointer py-2 ${
//                 selectedCategory === 'Support' && 'font-semibold text-blue-500'
//               }`}
//               onClick={() => setSelectedCategory('Support')}
//             >
//               <span className="flex gap-2 items-center text-[1.20rem]">
//                 {' '}
//                 <MdOutlineFolder className="text-red-500" /> Support{' '}
//               </span>
//             </li>
//             <li
//               className={`cursor-pointer py-2 ${
//                 selectedCategory === 'Sales' && 'font-semibold text-blue-500'
//               }`}
//               onClick={() => setSelectedCategory('Sales')}
//             >
//               <span className="flex gap-2 items-center text-[1.20rem]">
//                 {' '}
//                 <MdOutlineFolder className="text-green-500" /> Sales{' '}
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col py-4">
//         {/* Search Bar */}
//         <div className="p-4 border-b">
//           <input
//             type="text"
//             placeholder="Search Contacts"
//             className="w-full border rounded-3xl p-2"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {/* Contact List */}
//         <div className="flex-1 p-4 overflow-auto">
//           {filteredContacts.map((contact, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between py-2 border-b hover:bg-gray-100 cursor-pointer"
//               onClick={() => openContactDetails(contact)} // Click to show details
//             >
//               <div>
//                 <p className="font-semibold text-[20px]">{contact.FirstName}</p>
//                 <p className="text-[10px]">{contact.category}</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   className={`${
//                     contact.favorite ? 'text-yellow-500' : 'text-gray-400'
//                   } hover:text-yellow-600`}
//                   onClick={() => toggleFavorite(index)}
//                 >
//                   <FaRegStar />
//                 </button>
//                 <button
//                   className="text-red-500 hover:text-red-600"
//                   onClick={() => handleDelete(index)}
//                 >
//                   <MdOutlineDeleteOutline />
//                 </button>
//                 <button
//                   className="text-blue-500 hover:text-blue-600"
//                   onClick={() => openEditModal(index)}
//                 >
//                   <MdOutlineModeEditOutline />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Contact Details */}
//       <div className="flex-1 flex border-l p-6">
//         <div className="w-full text-center">
//           {selectedContact ? (
//             <>
//               <div className="flex flex-col items-center mb-6">
//                 <img
//                   src={contactImg}
//                   alt="Contact Image"
//                   className="w-32 h-32 rounded-full object-cover mb-4"
//                 />
//                 <p className="font-semibold text-xl">{`${selectedContact.FirstName} ${selectedContact.LastName}`}</p>
//                 <p className="text-gray-500">{selectedContact.Department}</p>
//               </div>

//               <div className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="text-left">
//                     <p className="font-semibold">Company:</p>
//                     <p className="text-gray-700">{selectedContact.Company}</p>
//                   </div>
//                   <div className="text-left">
//                     <p className="font-semibold">Role:</p>
//                     <p className="text-gray-700">{selectedContact.role}</p>
//                   </div>
//                   <div className="text-left">
//                     <p className="font-semibold">Phone:</p>
//                     <p className="text-gray-700">{selectedContact.Phone}</p>
//                   </div>
//                   <div className="text-left">
//                     <p className="font-semibold">Email:</p>
//                     <p className="text-gray-700">{selectedContact.Email}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2 mt-4">
//                   <div className="text-left">
//                     <p className="font-semibold">Category:</p>
//                     <p className="text-gray-700">{selectedContact.category}</p>
//                   </div>
//                   <div className="text-left">
//                     <p className="font-semibold">Address:</p>
//                     <p className="text-gray-700">{selectedContact.Address}</p>
//                   </div>
//                   <div className="text-left">
//                     <p className="font-semibold">Notes:</p>
//                     <p className="text-gray-700">{selectedContact.Notes}</p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <p className="text-gray-500 mt-4">Please Select a Contact</p>
//           )}
//         </div>
//       </div>

//       {/* Add Contact Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex mt-16 items-center justify-center">
//           <div className="bg-white p-6 shadow-lg w-1/2 rounded-3xl">
//             <h2 className="text-lg font-semibold mb-4">Add New Contact</h2>
//             {/* Similar form structure as the Add Contact modal */}
//             <div className="flex justify-between">
//               <div className="mb-4 gap-3">
//                 <label className="block text-sm font-medium mb-1">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.FirstName}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, FirstName: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.LastName}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, LastName: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="mb-4 gap-3">
//                 <label className="block text-sm font-medium mb-1">
//                   Department
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Department}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Department: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Company}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Company: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="mb-4 gap-3">
//                 <label className="block text-sm font-medium mb-1">Phone</label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Phone}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Phone: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Email}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Email: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="mb-4 gap-3">
//                 <label className="block text-sm font-medium mb-1">Role</label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.role}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, role: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">
//                   category
//                 </label>
//                 <select
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.category}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, category: e.target.value })
//                   }
//                 >
//                   <option value="">Select Category</option>
//                   <option value="Engineering">Engineering</option>
//                   <option value="Support">Support</option>
//                   <option value="Sales">Sales</option>
//                 </select>
//               </div>
//             </div>
//             <div className="mb-4 gap-3">
//               <label className="block text-sm font-medium mb-1">Address</label>
//               <input
//                 type="text"
//                 className="w-full border rounded-3xl p-2"
//                 value={newContact.Address}
//                 onChange={(e) =>
//                   setNewContact({ ...newContact, Address: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Notes</label>
//               <input
//                 type="text"
//                 className="w-full border rounded-3xl p-2"
//                 value={newContact.Notes}
//                 onChange={(e) =>
//                   setNewContact({ ...newContact, Notes: e.target.value })
//                 }
//               />
//             </div>

//             <div className="flex justify-end space-x-4">
//               <button
//                 className="bg-gray-300 text-black py-2 px-4 rounded-3xl hover:bg-gray-400"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600"
//                 onClick={handleAddContact}
//               >
//                 Add Contact
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Edit Contact Modal */}
//       {isEditModalOpen && editContactIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded mt-16 shadow-lg w-1/2">
//             <h2 className="text-lg font-semibold mb-4">Edit Contact</h2>
//             {/* Similar form structure as the Add Contact modal */}
//             <div className="flex justify-between">
//               <div className="mb-4 gap-3">
//                 <label className="block text-sm font-medium mb-1">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.FirstName}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, FirstName: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.LastName}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, LastName: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="mb-4 gap-3">
//                 <label className="block text-sm font-medium mb-1">
//                   Department
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Department}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Department: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Company}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Company: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="mb-4 gap-3">
//                 <label className="block text-sm font-medium mb-1">Phone</label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Phone}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Phone: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.Email}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, Email: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Role</label>
//                 <input
//                   type="text"
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.role}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, role: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">
//                   category
//                 </label>
//                 <select
//                   className="w-[22rem] border rounded-3xl p-2"
//                   value={newContact.category}
//                   onChange={(e) =>
//                     setNewContact({ ...newContact, category: e.target.value })
//                   }
//                 >
//                   <option value="">Select Category</option>
//                   <option value="Engineering">Engineering</option>
//                   <option value="Support">Support</option>
//                   <option value="Sales">Sales</option>
//                 </select>
//               </div>
//             </div>

//             <div className="mb-4 gap-3">
//               <label className="block text-sm font-medium mb-1">Address</label>
//               <input
//                 type="text"
//                 className="w-full border rounded-3xl p-2"
//                 value={newContact.Address}
//                 onChange={(e) =>
//                   setNewContact({ ...newContact, Address: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Notes</label>
//               <input
//                 type="text"
//                 className="w-full border rounded-3xl p-2"
//                 value={newContact.Notes}
//                 onChange={(e) =>
//                   setNewContact({ ...newContact, Notes: e.target.value })
//                 }
//               />
//             </div>

//             <div className="flex justify-end space-x-4">
//               <button
//                 className="bg-gray-300 text-black py-2 px-4 rounded-3xl hover:bg-gray-400"
//                 onClick={() => setIsEditModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600"
//                 onClick={handleEditContact}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddContact;

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Contact {
//   _id: string;
//   name: string;
//   Email: string;
//   phone: string;
//   address: string;
//   department: string;
//   company: string;
//   notes: string;
//   image: string;
// }

// const AddContact = () => {
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [formVisible, setFormVisible] = useState<boolean>(false);
//   const [formData, setFormData] = useState<{
//     name: string;
//     Email: string;
//     phone: string;
//     address: string;
//     department: string;
//     company: string;
//     notes: string;
//     image: string;
//   }>({
//     name: '',
//     Email: '',
//     phone: '',
//     address: '',
//     department: '',
//     company: '',
//     notes: '',
//     image: '',
//   });

//   // Search State
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   // Fetch Contacts
//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/contacts');
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Error fetching contacts:', error);
//     }
//   };

//   // Handle Form Input Changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Add New Contact
//   const handleAddContact = async () => {
//     try {
//       console.log(formData);
//       const response = await axios.post(
//         'http://localhost:5000/api/contacts',
//         formData,
//       );
//       setContacts([...contacts, response.data]);
//       setFormVisible(false);
//       setFormData({
//         name: '',
//         Email: '',
//         phone: '',
//         address: '',
//         department: '',
//         company: '',
//         notes: '',
//         image: '',
//       });
//     } catch (error) {
//       console.error('Error adding contact:', error);
//     }
//   };

//   // Edit Contact
//   const handleEditContact = async () => {
//     if (selectedContact) {
//       try {
//         const response = await axios.put(
//           `http://localhost:5000/api/contacts/${selectedContact._id}`,
//           formData,
//         );
//         setContacts(
//           contacts.map((contact) =>
//             contact._id === selectedContact._id ? response.data : contact,
//           ),
//         );
//         setSelectedContact(null);
//         setFormVisible(false);
//       } catch (error) {
//         console.error('Error editing contact:', error);
//       }
//     }
//   };

//   // Delete Contact
//   const handleDeleteContact = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/contacts/${id}`);
//       setContacts(contacts.filter((contact) => contact._id !== id));
//     } catch (error) {
//       console.error('Error deleting contact:', error);
//     }
//   };

//   // Handle Search Query Change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter Contacts Based on Search Query
//   const filteredContacts = contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       contact.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       contact.phone.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       setFormData({ ...formData, image: file });
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white p-4 border-r rounded-l-2xl shadow-4">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
//         >
//           Add New Contact
//         </button>
//         <div className="mb-6">
//           <h2 className="text-gray-700 font-bold mb-2">Filters</h2>
//           <ul className="space-y-2">
//             <li className="text-gray-600 cursor-pointer">All</li>
//           </ul>
//         </div>
//       </div>

//       {/* Contacts List */}
//       <div className="w-1/3 bg-white p-4 border-r">
//         <input
//           type="text"
//           placeholder="Search Contacts"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="w-full border px-3 py-2 rounded-lg mb-4"
//         />
//         <ul className="space-y-4">
//           {filteredContacts.map((contact) => (
//             <li
//               key={contact._id}
//               className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
//               onClick={() => setSelectedContact(contact)}
//             >
//               <div>
//                 <h4 className="font-bold text-gray-800">{contact.image}</h4>
//                 <h4 className="font-bold text-gray-800">{contact.name}</h4>
//                 <p className="text-sm text-gray-500">{contact.department}</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   className="text-red-500"
//                   onClick={() => handleDeleteContact(contact._id)}
//                 ></button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Contact Details */}
//       <div className="w-2/5 bg-white p-6 rounded-r-2xl shadow-4">
//         {selectedContact ? (
//           <div>
//             <div className="text-center mb-6">
//               <h2 className="text-xl font-bold">{selectedContact.image}</h2>
//               <h2 className="text-xl font-bold">{selectedContact.name}</h2>
//               <p className="text-gray-500">{selectedContact.department}</p>
//             </div>
//             <div className="space-y-4">
//               <p className="text-gray-700">
//                 <strong>Email:</strong> {selectedContact.Email}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Phone:</strong> {selectedContact.phone}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Address:</strong> {selectedContact.address}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Company:</strong> {selectedContact.company}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Notes:</strong> {selectedContact.notes}
//               </p>
//               <div className="mt-6 flex justify-center space-x-4">
//                 {/* Edit Button */}
//                 <button
//                   onClick={() => {
//                     setFormVisible(true);
//                     setFormData(selectedContact);
//                   }}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                 >
//                   Edit
//                 </button>
//                 {/* Delete Button */}
//                 <button
//                   onClick={() => {
//                     handleDeleteContact(selectedContact._id);
//                     setSelectedContact(null); // Reset selected contact after deletion
//                   }}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>Select a contact to see details</p>
//         )}
//       </div>

//       {/* Add/Edit Contact Form */}
//       {formVisible && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-1/3">
//             <h2 className="text-xl font-bold mb-4">
//               {selectedContact ? 'Edit Contact' : 'Add New Contact'}
//             </h2>
//             <div className="space-y-4">
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleFileChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />
//               <input
//                 type="email"
//                 name="Email"
//                 placeholder="Email"
//                 value={formData.Email}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 name="department"
//                 placeholder="Department"
//                 value={formData.department}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company"
//                 value={formData.company}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 name="notes"
//                 placeholder="Notes"
//                 value={formData.notes}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded-lg"
//               />

//               <button
//                 onClick={selectedContact ? handleEditContact : handleAddContact}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//               >
//                 {selectedContact ? 'Save Changes' : 'Add Contact'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddContact;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete, MdOutlineEmail } from 'react-icons/md';
import { FaRegFolder } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { TbBucket } from "react-icons/tb";

interface Contact {
  _id: string;
  name: string;
  Email: string;
  phone: string;
  address: string;
  department: string;
  company: string;
  notes: string;
  image: string;
  isStarred: boolean; // Added starred property
  category: 'Sales' | 'Support' | 'Engineering'; // Added category property
}

const AddContact = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    name: string;
    Email: string;
    phone: string;
    address: string;
    department: string;
    company: string;
    notes: string;
    image: string;
    category: 'Sales' | 'Support' | 'Engineering'; // Include category in form
  }>({
    name: '',
    Email: '',
    phone: '',
    address: '',
    department: '',
    company: '',
    notes: '',
    image: '',
    category: 'Sales', // Default category
  });

  // Search State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<
    'All' | 'Frequent' | 'Starred' | 'Sales' | 'Support' | 'Engineering'
  >('All'); // Added filter for categories and starred

  // Fetch Contacts
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  // Handle Form Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add New Contact
  const handleAddContact = async () => {
    try {
      console.log(formData);
      const response = await axios.post(
        'http://localhost:5000/api/contacts',
        formData,
      );
      setContacts([...contacts, response.data]);
      setFormVisible(false);
      setFormData({
        name: '',
        Email: '',
        phone: '',
        address: '',
        department: '',
        company: '',
        notes: '',
        image: '',
        category: 'Sales', // Reset category
      });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  // Edit Contact
  const handleEditContact = async () => {
    if (selectedContact) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/contacts/${selectedContact._id}`,
          formData,
        );
        setContacts(
          contacts.map((contact) =>
            contact._id === selectedContact._id ? response.data : contact,
          ),
        );
        setSelectedContact(null);
        setFormVisible(false);
      } catch (error) {
        console.error('Error editing contact:', error);
      }
    }
  };

  // Delete Contact
  const handleDeleteContact = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  // Handle Search Query Change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Toggle Starred Status
  const toggleStarred = (contactId: string) => {
    setContacts(
      contacts.map((contact) =>
        contact._id === contactId
          ? { ...contact, isStarred: !contact.isStarred }
          : contact,
      ),
    );
  };

  // Filter Contacts Based on Search Query and Filter
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filter === 'All' ||
      (filter === 'Starred' && contact.isStarred) ||
      contact.category === filter;

    return matchesSearch && matchesFilter;
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 border-r rounded-l-2xl shadow-4">
        <button
          onClick={() => setFormVisible(true)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
        >
          Add New Contact
        </button>
        <div className="mb-6 mt-5 ml-5 border-b py-5">
          {/* <h2 className="text-gray-700 font-bold mb-2">Filters</h2> */}
          <ul className="space-y-5">
            <li
              className={`text-gray-600 cursor-pointer ${
                filter === 'All' && 'font-bold'
              }`}
              onClick={() => setFilter('All')}
            >
              <span className="flex items-center gap-2 text-[18px]">
                {' '}
                <MdOutlineEmail /> All
              </span>
            </li>
            <li
              className={`text-gray-600 cursor-pointer ${
                filter === 'Starred' && 'font-bold'
              }`}
              onClick={() => setFilter('Starred')}
            >
            <span className="flex items-center gap-2 text-[18px]"> <LuSend />  Starred </span>
            </li>
            <li
              className={`text-gray-600 cursor-pointer ${
                filter === 'Frequent' && 'font-bold'
              }`}
              onClick={() => setFilter('Frequent')}
            >
              <span className="flex items-center gap-2 text-[18px]"> <TbBucket />  Frequent </span>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-gray-700 font-bold mb-6 mt-5 ml-5">Categories</h2>
          <ul className="space-y-2 ml-5">
            <li
              className={`text-gray-600 cursor-pointer ${
                filter === 'Sales' && 'font-bold'
              }`}
              onClick={() => setFilter('Sales')}
            >
               <span className="flex items-center gap-2 text-[18px]"> <FaRegFolder className='text-red' /> Sales </span>
            </li>
            <li
              className={`text-gray-600 cursor-pointer ${
                filter === 'Support' && 'font-bold'
              }`}
              onClick={() => setFilter('Support')}
            >
               <span className="flex items-center gap-2 text-[18px]"> <FaRegFolder className='text-green-500' /> Support </span>
            </li>
            <li
              className={`text-gray-600 cursor-pointer ${
                filter === 'Engineering' && 'font-bold'
              }`}
              onClick={() => setFilter('Engineering')}
            >
               <span className="flex items-center gap-2 text-[18px]"> <FaRegFolder className='text-yellow-400' /> Engineering </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contacts List */}
      <div className="w-1/3 bg-white p-4 border-r">
        <input
          type="text"
          placeholder="Search Contacts"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full border px-3 py-2 rounded-lg mb-4"
        />
        <ul className="space-y-4">
          {filteredContacts.map((contact) => (
            <li
              key={contact._id}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => setSelectedContact(contact)}
            >
              <div>
                <h4 className="font-bold text-gray-800">{contact.name}</h4>
                <p className="text-sm text-gray-500">{contact.department}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className={`text-yellow-500 ${
                    contact.isStarred ? 'font-bold' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStarred(contact._id);
                  }}
                >
                  ☆
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteContact(contact._id)}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Details */}
      <div className="w-2/5 bg-white p-6 rounded-r-2xl shadow-4">
        {selectedContact ? (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold">{selectedContact.name}</h2>
              <p className="text-gray-500">{selectedContact.department}</p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> {selectedContact.Email}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {selectedContact.phone}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {selectedContact.address}
              </p>
              <p className="text-gray-700">
                <strong>Company:</strong> {selectedContact.company}
              </p>
              <p className="text-gray-700">
                <strong>Notes:</strong> {selectedContact.notes}
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                {/* Edit Button */}
                <button
                  onClick={() => {
                    setFormVisible(true);
                    setFormData(selectedContact);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => {
                    handleDeleteContact(selectedContact._id);
                    setSelectedContact(null); // Reset selected contact after deletion
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Select a contact to view details</p>
        )}
      </div>

      {/* Contact Form */}
      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-6">Add Contact</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="Department"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Notes"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg"
              >
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Engineering">Engineering</option>
              </select>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full border px-3 py-2 rounded-lg"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setFormVisible(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={
                    selectedContact ? handleEditContact : handleAddContact
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  {selectedContact ? 'Edit' : 'Add'} Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContact;
