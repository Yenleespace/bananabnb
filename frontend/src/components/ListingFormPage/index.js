import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useInput, useSubmit } from '../../hooks';
import {createListing} from '../../store/listings'
import { FormErrors, Input, TextArea } from '../Forms';
import { SessionModal } from '../LoginForms';


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
    const [photoFile, setPhotoFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
 
    

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
            

            // if (photoFile) {
            //     formData.append('photo', photoFile);
            // }
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
                setPhotoFile(file);
                setPhotoUrl(fileReader.result);
            };
        }
    }

    return (
        <>
            {!sessionUser && <SessionModal />}
            <div>
                <h1>Post Home</h1>

                <form onSubmit={onSubmit} className="form">
                    <FormErrors errors={errors} />

                    <Input
                        label="Title"
                        value={title}
                        onChange={onTitleChange}
                        required
                    />

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

                    <Input
                        label="City"
                        value={city}
                        onChange={onCityChange}
                        required
                    />
                    <Input
                        label="State"
                        value={state}
                        onChange={onStateChange}
                        required
                    />
                    <Input
                        label="ZIPCODE"
                        value={zipCode}
                        onChange={onZipCodeChange}
                        required
                    />



                    {/* <Input
                        label="Add a Picture"
                        type="file"
                        onChange={handleFileChange}
                    />

                    {photoUrl && (
                        <div className="image-preview">
                            <h2>Image preview</h2>
                            <img height="200px" src={photoUrl} alt="Preview" />
                        </div>
                    )} */}

                    <div>
                        <Link className="button" to="/">Cancel</Link>
                        <button className="button">Create Bench</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ListingForm;
