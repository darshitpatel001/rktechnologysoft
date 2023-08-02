import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Addsale() {
    return (
        <>
            <section className='Addsale-Section'>
                <form>
                    <div className='details-section'>
                        <h3>Create Sale</h3>
                    </div>

                    <div className='Addsale-details'>
                        <div className='main-box d-flex'>
                            <div className='Addsale-box'>
                                <h6>PARTY DETAILS</h6>
                                <div class="row">
                                    <div class="col-6">
                                        <label for="partyname" class="form-label">Party Name</label>
                                        <input type="text" class="form-control" placeholder="Party Name" name="partyname" />
                                    </div>
                                    <div class="col-6">
                                        <label for="PNumber" class="form-label">Phone Number</label>
                                        <input type="number" class="form-control" placeholder="Enter the phone number" name="pnumber" />
                                    </div>
                                    <div class="col-6">
                                        <label for="address" class="form-label">Party Address</label>
                                        <input type="text" class="form-control" placeholder="Enter their address here" name="   " />
                                    </div>
                                    <div class="col-6">
                                        <label for="gst" class="form-label">GSTIN (optional)</label>
                                        <input type="text" class="form-control" placeholder="Enter their party's GSTIN" name="gst" />
                                    </div>
                                </div>
                            </div>
                            <div className='Addsale-box'>
                                <h6>INVOICE DETAILS</h6>
                                <div class="row">
                                    <div class="col-6">
                                        <label for="InvoiceNumber" class="form-label">Invoice Number</label>
                                        <input type="number" class="form-control" placeholder="Invoice Number" name="invoicenumber" />
                                    </div>
                                    <div class="col-6">
                                        <label for="InvoiceDate" class="form-label">Invoice Date</label>
                                        <input type="date" class="form-control" name="invoicedate" />
                                    </div>
                                    <div class="col-6">
                                        <label for="GSTIN" class="form-label">Your GSTIN</label>
                                        <input type="text" class="form-control" placeholder="Enter Your GSTIN" name="GSTIN" />
                                    </div>
                                    <div class="col-6">
                                        <label for="StateofSupply" class="form-label">State of Supply</label>
                                        <input type="text" class="form-control" placeholder="Enter Your State" name="stateofsupply" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='addsale-boxs'>
                            <h6>ITEMS ON THE INVOICE</h6>
                            <table class="table">
    <thead class="table-dark">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
                        </div>
                    </div>

                </form>
            </section>
        </>
    )
}
