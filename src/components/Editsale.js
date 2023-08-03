import React from 'react'

export default function Editsale() {
    return (
        <>
            <section className='Editsales-Section'>
                <form>
                    <div className='details-section'>
                        <h3>Edit Sale Return</h3>
                    </div>

                    <div className='Editsales-details'>
                        <div className='main-box d-flex'>
                            <div className='editsales-box'>
                                <h6>Edit Sale Return</h6>
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
                            <div className='editsales-box'>
                                <h6>SALE RETURN DETAILS</h6>
                                <div class="row">
                                    <div class="col-6">
                                        <label for="InvoiceNumber" class="form-label">Sale Return Number</label>
                                        <input type="number" class="form-control" placeholder="Sale Return Number" name="invoicenumber" />
                                    </div>
                                    <div class="col-6">
                                        <label for="InvoiceDate" class="form-label">Sale Return Number</label>
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
                        <div className='editsales-boxs d-flex'>
                            <label>INVOICE SETTLED AGAINST</label>
                            <input type="text" class="form-control" placeholder="18" name="stateofsupply" disabled />
                        </div>
                    </div>

                </form>
            </section>
        </>
    )
}
