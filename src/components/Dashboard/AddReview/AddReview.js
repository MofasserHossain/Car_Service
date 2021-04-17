import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './AddReview.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
const axios = require('axios');

const AddReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [ratingValue, setRatingValue] = useState(4);
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  console.log(loggedInUser);
  const onSubmit = (data) => {
    const serviceInfo = {
      name: data.name,
      companyName: data.companyName,
      review: data.review,
      userImg: loggedInUser.photo,
      rating: ratingValue,
    };
    const url = `http://localhost:5000/addReviews`;
    axios
      .post(url, serviceInfo)
      .then((res) => {
        if (res) {
          history.push('/');
        }
        // console.log('response', res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const error = {
    color: 'red',
    display: 'block',
  };
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Add Review</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="addReview sidebar__right p-3">
        <div className="reviewForm form pl-4">
          <form onSubmit={handleSubmit(onSubmit)} className="from">
            <div className="form_group">
              <label>Your Name</label>
              <input
                readOnly
                defaultValue={loggedInUser.displayName}
                name="name"
                placeholder="Enter Your Name"
                ref={register({ required: true })}
              />
              {errors.name && <span style={error}>This field is required</span>}
            </div>
            <div className="form_group">
              <label>Company Name</label>
              <input
                name="companyName"
                type="text"
                placeholder="Company's Name. Designation"
                ref={register({ required: true })}
              />
              {errors.weight && (
                <span style={error}>This field is required</span>
              )}
            </div>
            <div className="form_group">
              <label>Give Review</label>
              <textarea
                rows="4"
                cols="38"
                className="text__area"
                name="review"
                type="text"
                placeholder="Share Your Thought"
                ref={register({ required: true })}
              ></textarea>
              {errors.price && (
                <span style={error}>This field is required</span>
              )}
            </div>
            <label htmlFor="" className="mt-4">
              Give Star Rating
            </label>
            <div className="rating">
              <Box component="fieldset" mb={1} borderColor="transparent">
                <Rating
                  name="simple-controlled"
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
              </Box>
            </div>
            <input
              className="btn button btn__link"
              style={{
                padding: '10px 20px',
                margin: '10px',
              }}
              type="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddReview;
