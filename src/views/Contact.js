import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MuroBlog from "../components/MuroBlog";
import Article from "../components/Article";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { formik, useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
    const [infoContact, setinfoContact] = useState([]);    

    const initialValues = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: ''
      };

    const onSubmit  = async (data) => {
      let baseURL = `http://127.0.0.1:8000/api/v1/contact/create`;
      await axios.post(baseURL, data).then((response) => {
        setinfoContact(response.data);

        console.log(response.data);

        if (response.data.message === 'contact created'){
          toast.success('🦄 Enviamos tu información!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }


        });
    }

    const formik = useFormik({initialValues, onSubmit});

    
    // useEffect( () => {
    //   getDetailArticle();
    // }, [])

  return (
    <>
      <Header />
      {/* <MuroBlog data={detailarticles} /> */}

      <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Contáctanos
          </h2>
          <div class="mt-6 grid">

          <div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">

      <form  onSubmit={formik.handleSubmit}>
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input onChange={formik.handleChange} value={formik.values.first_name} type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Apellido</label>
                <input onChange={formik.handleChange} value={formik.values.last_name} type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                <input onChange={formik.handleChange} value={formik.values.email} type="text" name="email" id="email" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Celular</label>
                <input onChange={formik.handleChange} value={formik.values.phone} type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

        
        

              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea onChange={formik.handleChange} value={formik.values.message} name="message" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
              </div>

           
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />

    </>
  );
};

export default Contact;
