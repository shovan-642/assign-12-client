import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DateTimePicker from "react-datetime-picker";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCamp = () => {
  const camp = useLoaderData();
  const {
    _id,
    camp_name,
    image,
    camp_fees,
    date_time,
    location,
    healthcare_professional_name,
    description,
  } = camp;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [dateTime, setDateTime] = useState(()=> date_time ? new Date(date_time): new Date());

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
            image: res.data.data.display_url
        }

    const campDataRes = await axiosSecure.patch(`/update-camp/${_id}`, campData);
    console.log(campDataRes.data)
    if(campDataRes.data.modifiedCount>0){
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Camp has been Updated",
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
            <input defaultValue={camp_name} type="text" {...register("camp_name", { required: true })} />
            </div>
            <div>
            <label>Image URL</label>
            <input type="file" className="file-input w-full max-w-xs" {...register("image", { required: true })} />
            </div>
            <div>
            <label>Camp Fees</label>
            <input defaultValue={camp_fees} type="number" {...register("camp_fees", { required: true })} />
            </div>

            <div>
            <label>Date & Time</label>
            <DateTimePicker onChange={setDateTime} value={dateTime} required={true} />
            </div>
            <div>
            <label>Location</label>
            <input defaultValue={location} type="text" {...register("location", { required: true })} />
            </div>
            <div>
            <label>Health Care Professional Name</label>
            <input defaultValue={healthcare_professional_name} type="text" {...register("healthcare_professional_name", { required: true })} />
            </div>
            <div>
            <label>Camp Description</label>
            <textarea defaultValue={description} type="text" {...register("description", { required: true })} />
            </div>
            
          <button type="submit" className="btn btn-ghost">Update Camp</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCamp;
