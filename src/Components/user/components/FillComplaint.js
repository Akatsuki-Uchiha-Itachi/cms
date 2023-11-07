import React from 'react'

export const FillComplaint = () => {
  return (
    <div class="container mt-4">
    <h2 class="text-center">Fill Your Complaint</h2>
    <div class="card p-4 shadow">
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Enter the title"/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="roomNumber">Room Number</label>
            <input type="number" class="form-control" id="roomNumber" placeholder="Enter room number"/>
          </div>
          <div class="form-group col-md-6">
            <label for="requestedBy">Requested By</label>
            <input type="text" class="form-control" id="requestedBy" placeholder="Enter the requester's name"/>
          </div>
        </div>
        <div class="form-group">
          <label for="reportedBy">Reported By</label>
          <input type="text" class="form-control" id="reportedBy" placeholder="Enter the reporter's name"/>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="4" placeholder="Enter the complaint description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  )
}
