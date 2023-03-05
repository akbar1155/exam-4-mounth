import React from 'react';

const Modal = () => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" ariaLabelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="">Name</label>
                        <input className='form-control' type="text" placeholder="Name" />
                        <label for="">Role</label>
                        <input className='form-control' type="text" placeholder="Role" />
                        <label for="">Password</label>
                        <input className='form-control' type="text" placeholder="Password" />
                        <label for="">Email</label>
                        <input className='form-control' type="text" placeholder="Email" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
