import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useInput, useSubmit } from '../../hooks';
import { createListing } from '../../store/listings'
import { FormErrors, Input, TextArea } from '../Forms';
import { SessionModal } from '../LoginForms';
import ListingFormPage from './ListingFormPage.css'

function ListingForm() {
    const sessionUser = useSelector(state => state.session.user);
    // const location = useLocation();
    const history = useHistory();

    const [title, onTitleChange] = useInput('');
    const [price, onPriceChange] = useInput(50);
    const [description, onDescriptionChange] = useInput('');
    const [address, onAddressChange] = useInput('');
    const [city, onCityChange] = useInput('');
    const [state, onStateChange] = useInput('');
    const [zipCode, onZipCodeChange] = useInput('');
    const [photoFile, setPhotoFile] = useState([]);
    const [photoUrl, setPhotoUrl] = useState([]);

    const [errors, onSubmit] = useSubmit({
        createAction: () => {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('address', address);
            formData.append('city', city);
            formData.append('state', state);
            formData.append('zip_code', zipCode);
            if (photoFile) {
                formData.append('photos[]', photoFile);
            }

            return createListing(formData);
        },
        onSuccess: () => history.push('/listings')
    });

    const handleFileChange = e => {
        const file = e.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setPhotoFile((prev) => ([...prev, file]));
                setPhotoUrl((prev) => ([...prev, fileReader.result]));
            };
        }
    }
    const attachedphotos =
        (
            <div className="image-preview">
                <h2>Image preview{photoUrl}</h2>
                <img width="200px" src={photoUrl} alt="Preview" />
            </div>
        )


    return (
        <>
            {!sessionUser && <SessionModal />}
            <div>
                <h4 class="mb-3" style={{ fontWeight: 'bold'}} >Post Home</h4>

                <form onSubmit={onSubmit} className="form">
                    <FormErrors errors={errors} />


                    <Input 
                        label="Title"
                        value={title}
                        onChange={onTitleChange}
                        required />



                    <Input
                        label="Price"
                        min="10"
                        max="1000"
                        type="number"
                        value={price}
                        onChange={onPriceChange}
                        required
                    />

                    <TextArea
                        label="Description"
                        cols="50"
                        rows="8"
                        value={description}
                        onChange={onDescriptionChange}
                        required
                    />

                    <Input
                        label="Address"
                        value={address}
                        onChange={onAddressChange}
                        required
                    />
                    <div class="row g 3">
                        <div class="col-sm-6">
                            <Input
                                label="City"
                                value={city}
                                onChange={onCityChange}
                                required
                            />
                        </div>
                        <div class="col-sm-6">
                            <Input
                                label="State"
                                value={state}
                                onChange={onStateChange}
                                required
                            />
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <Input
                            label="ZIPCODE"
                            value={zipCode}
                            onChange={onZipCodeChange}
                            required
                        />
                    </div>


                    {photoUrl.length < 6 && (
                        <>
                            <div class="col-sm-6">
                                <Input
                                    label="Add a Picture"
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </div>
                            <h5>Image preview</h5>
                            <div className="image-preview">
                                {photoUrl.map(purl => {
                                    return (
                                        <img width="200px" src={purl} alt="Preview" />)
                                })}
                            </div>
                        </>
                    )}
                    {photoUrl.length > 5 && (
                        <h1>Maximum photo is 5</h1>
                    )}

                    <div>                        
                        <button style={{ backgroundColor:'#ffe135', borderRadius: '20px', marginBottom:'20px'}} className="banana-button button">Create Banana</button>
                        <Link className="button" to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ListingForm;
