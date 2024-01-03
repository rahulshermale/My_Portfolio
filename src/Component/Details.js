import React from 'react';

export default function Details() {
  return (
    <div className=" mt-5  p-3 mb-2  text-emphasis-info" style={{ fontFamily:'serif',backgroundColor: '', textAlign:'center',margin:'5px', padding: '5px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 10, 0.5, 0.1)' }}>
      <h1 className="text-info p-3 mb-2  text-emphasis-primary"style={{ backgroundColor: '',color: '#fff', fontSize: '3rem', margin:'10px', padding: '5px',marginBottom: '2px' , borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 1, 0, 0.1)'}}>HOME ADDRESS</h1>
      <p style={{ textDecorationColor:'GrayText', color: '#555', lineHeight: '1.6', marginBottom: '' ,margin:'10px', padding: '1px',}}>
       <div className=' p-3 mb-2 text-dark border border-white' style={{textAlign:'center', fontSize: '2rem', margin:'10px', padding: '',marginBottom: '1px' , borderRadius: '1px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'}}> Rahul Shermale<br/>
        Manmad Taluka -Nandgaon<br/>
        Nashik - 423 104<br/>
        Maharashtra (India)<br/>
        Phone: +91-8975730556<br/>
        Email: rahulshermale50@gmail.com
      </div>
      </p>
      <div style={{ width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden' }}>
        <iframe
          title="CDAC Location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15071.898828466444!2d73.76331817844233!3d18.555416355882594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0eb25f2c16f%3A0x442c198810ad4a74!2sCDAC%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1645956309875!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
