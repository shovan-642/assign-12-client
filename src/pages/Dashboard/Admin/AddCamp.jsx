import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddCamp = () => {

    
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [dateTime, setDateTime]=useState(new Date());


  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_url, imageFile, {
        headers: {
            "content-type":"multipart/form-data"
        }
    });
    if(res.data.success){
        const campData = {
            ...data, 
            date_time: dateTime.toISOString(),
            participant_count: 0,
            image: res.data.data.display_url
        }

    const campDataRes = await axiosSecure.post('/add-camp', campData);
    console.log(campDataRes.data)
    if(campDataRes.data.insertedId){
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Camp has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }   
    }

  };

  return (
    <div>
      <h1>Add A Camp</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Camp Name</label>
            <input type="text" {...register("camp_name", { required: true })} />
            </div>
            <div>
            <label>Image URL</label>
            <input type="file" className="file-input w-full max-w-xs" {...register("image", { required: true })} />
            </div>
            <div>
            <label>Camp Fees</label>
            <input type="number" {...register("camp_fees", { required: true })} />
            </div>

            <div>
            <label>Date & Time</label>
            <DateTimePicker onChange={setDateTime} value={dateTime} required={true} />
            </div>
            <div>
            <label>Location</label>
            <input type="text" {...register("location", { required: true })} />
            </div>
            <div>
            <label>Health Care Professional Name</label>
            <input type="text" {...register("healthcare_professional_name", { required: true })} />
            </div>
            <div>
            <label>Camp Description</label>
            <textarea type="text" {...register("description", { required: true })} />
            </div>

          
          

          <button type="submit" className="btn btn-ghost">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddCamp;
