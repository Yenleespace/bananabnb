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

                    {photoUrl.length < 6 && (
                        <>
                            <Input
                                label="Add a Picture"
                                type="file"
                                multiple
                                onChange={handleFileChange}
                            />
                            <h2>Image preview</h2>
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
                        <Link className="button" to="/">Cancel</Link>
                        <button className="button">Create Banana</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ListingForm;
