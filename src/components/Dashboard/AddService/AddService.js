import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddService.css';
const axios = require('axios');

const AddService = () => {
  const history = useHistory();
  // const [loadImage, setLoadImage] = useState(false);
  // const [imageUrl, setImageUrl] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      // imageUrl: imageUrl,
    };
    // console.log(productData);
    const url = `https://obscure-fortress-09030.herokuapp.com/addProduct`;
    axios
      .post(url, productData)
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
        <h3>Add Service</h3>
        <h3>User Name</h3>
      </div>
      <div className="sidebar__right p-3">
        <div className="form"></div>
      </div>
    </>
  );
};

export default AddService;
