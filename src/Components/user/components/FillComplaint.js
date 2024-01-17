import React from 'react'
import  {doc, setDoc} from "firebase/firestore" 
import {db} from '../../../firebaseconfig';

export const FillComplaint = () => {
  const [title,setTitle] =React.useState('');
  const submit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'complain', title), {
        title: document.getElementById('title').value,
        roomNumber: document.getElementById('roomNumber').value,
        requestedBy: document.getElementById('requestedBy').value,
        description: document.getElementById('description').value,
      });
    } catch (error) {
      console.error("Error submitting complaint:", error);
      
    }
  };
  
  
  return (
    <div className="container mt-4">
    <h2 className="text-center">Fill Your Complaint</h2>
    <div className="card p-4 shadow">
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="roomNumber">Room Number</label>
            <input type="number" className="form-control" id="roomNumber" placeholder="Enter room number"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="requestedBy">Requested By</label>
            <input type="text" className="form-control" id="requestedBy" placeholder="Enter the requester's name"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="4" placeholder="Enter the complaint description"></textarea>
        </div>
        <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  )
}
