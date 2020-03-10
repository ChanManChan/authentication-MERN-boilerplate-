import React, { useEffect } from 'react';
import Layout from '../core/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { isAuth } from '../auth/helpers';

const Admin = () => {
  useEffect(() => {
    toast.success(`Hey ${isAuth().name}, Welcome back!`);
  }, []);
  return (
    <Layout>
      <ToastContainer />
      <h1>Admin page</h1>
    </Layout>
  );
};

export default Admin;
