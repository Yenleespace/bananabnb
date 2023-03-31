import React from 'react';
import { useSelector } from 'react-redux';
import { useInput, useSubmit } from '../../hooks';
import { editReview } from '../../store/reviews';
import { FormErrors, Input, TextArea } from '../Forms';
import { SessionModal } from '../LoginForms';

function EditReviewForm({ listing, closeForm, enteredReview }) {
    const sessionUser = useSelector(state => state.session.user);
    const [rating, onRatingChange] = useInput(enteredReview.rating);
    const [review, onReviewChange] = useInput(enteredReview.review);
    const [errors, onSubmit] = useSubmit({
        onSuccess: closeForm,
        action: editReview({ rating, review, id: enteredReview.id })
    });

    return (
        <>
            {!sessionUser && <SessionModal onClose={closeForm} />}
            <div className="review-form">
                <form onSubmit={onSubmit} className="form">
                    <FormErrors errors={errors} />

                    <Input
                        label="Rating"
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={onRatingChange}
                        required
                    />

                    <TextArea
                        label="Comment"
                        cols="30"
                        rows="10"
                        value={review}
                        onChange={onReviewChange}
                        required
                    />

                    <div className="review-form-buttons">
                        <button onClick={closeForm} className="reserve" type="button">Cancel</button>
                        <button className="reserve" type="submit">Submit Review</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditReviewForm;