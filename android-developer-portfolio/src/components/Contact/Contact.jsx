import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me !</h1>
      <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed cumque similique vitae reprehenderit dicta error facere voluptatem quis suscipit debitis corporis temporibus fuga ipsa, odit consequatur eum aperiam dolorem ratione!</p>
    </div>
    <div className="card w-full shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="" placeholder='message' className="textarea textarea-bordered" id="" cols="30" rows="5"></textarea>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;