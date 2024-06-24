'use client'
import React, { useState } from 'react';
import axios from 'axios';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [cookie,setcookie]=useState()
  function getCookie(name: string) {
    const refreshToken = document.cookie
    console.log(refreshToken)
  }
  
  // Example usage
  const cookieName = "my_cookie";
  const cookieValue = getCookie(cookieName);
  console.log(cookieValue);
  
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const userData = {
      otp: otp,
    };

    // Retrieve cookies
    const refreshToken = document?.cookie?.split('; ').find(row => row.startsWith('refresh_token='))?.split('=')[1];
    const acessToken = document?.cookie?.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];

    try {
      const response = await axios.post('http://localhost:8080/auth/verifySignUpOtp', userData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${acessToken}`,
          'refreshtoken':refreshToken
          
        },
        withCredentials:true
      });

      if (response.status === 200) {
        console.log('OTP verification successful:', response.data);
      } else {
        console.error('OTP verification failed:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Verify OTP
        </button>
        
      </form>
      <button className='bg-green-400 p-3 m-3 rounded text-white font-semibold' onClick={()=>{
            getCookie('refreshToken')
        }

        }>Get cookies</button>
        
    </div>
  );
};

export default VerifyOTP;
