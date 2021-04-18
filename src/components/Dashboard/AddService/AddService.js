import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import NotAccess from '../NotAccess/NotAccess';
import './AddService.css';
const axios = require('axios');

const AddService = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(
    UserContext
  );
  const history = useHistory();
  const [loadImage, setLoadImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const serviceInfo = {
      serviceName: data.name,
      servicePrice: data.price,
      serviceDesc: data.desc,
      serviceImage: imageUrl,
    };
    console.log(serviceInfo);
    const url = `https://fierce-falls-59592.herokuapp.com/addService`;
    axios
      .post(url, serviceInfo)
      .then((res) => {
        if (res) {
          history.push('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImageUpload = (e) => {
    // console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', ' 65fc8ae8a7308f953fbf7a8227f54858');
    imageData.append('image', e.target.files[0]);
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        // console.log(response);
        setImageUrl(response.data.data.display_url);
        setLoadImage(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const error = {
    color: 'red',
    display: 'block',
  };
  // npm i react-hook-form@6.x
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Add Service</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="sidebar__right p-3">
        {admin ? (
          <div className="form serviceFrom">
            <form onSubmit={handleSubmit(onSubmit)} className="from">
              <div className="form-top">
                <div className="form_group">
                  <label>Service Title</label>
                  <input
                    name="name"
                    placeholder="Service Name"
                    ref={register({ required: true })}
                  />
                  {errors.name && (
                    <span style={error}>This field is required</span>
                  )}
                </div>
                <div className="form_group">
                  <label>Service Price</label>
                  <input
                    name="price"
                    type="number"
                    placeholder="Service Price"
                    ref={register({ required: true })}
                  />
                  {errors.weight && (
                    <span style={error}>This field is required</span>
                  )}
                </div>
              </div>
              <div className="form-bottom">
                <div className="form_group">
                  <label>Service Description</label>
                  <textarea
                    rows="4"
                    cols="38"
                    className="text__area"
                    name="desc"
                    type="number"
                    placeholder="Service Description"
                    ref={register({ required: true })}
                  ></textarea>
                  {errors.price && (
                    <span style={error}>This field is required</span>
                  )}
                </div>
                <div className="form_group">
                  <label>Upload Image</label>
                  <input
                    className="upload"
                    name="image"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <input
                className={
                  loadImage
                    ? 'btn button btn__link'
                    : 'btn button btn__link disable'
                }
                style={{
                  padding: '10px 20px',
                  margin: '10px',
                }}
                type="Submit"
              />
            </form>
          </div>
        ) : (
          <NotAccess />
        )}
      </div>
    </>
  );
};

export default AddService;
