import React, { useState } from 'react';
// import Canvas from './Canvas';
import { motion } from 'framer-motion';
import variants from '../variants/Vriants';

const Contact = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    textArea: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!input.name.trim()) newErrors.name = 'Name is required.';
    if (!input.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!input.textArea.trim()) newErrors.textArea = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setSuccess(null);
    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          textArea: input.textArea
        })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setSuccess('Your message has been sent!');
      setInput({ name: '', email: '', textArea: '' });
      setErrors({});
    } catch (err) {
      setSuccess('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-black-100 to-black p-4 lg:p-8 gap-8"
    >
      {/* Form Section */}
      <motion.div
        variants={variants("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="w-full max-w-lg bg-gradient-to-br from-purple-900/80 to-black-800/80 shadow-2xl rounded-3xl p-8 md:p-12 border border-purple-800 backdrop-blur-lg"
      >
        <h4 className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-2">Get in touch</h4>
        <h2 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg">Contact<span className="text-purple-500">.</span></h2>
        <form className="space-y-7" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-purple-200 mb-1">Your Name</label>
            <input
              id="name"
              value={input.name}
              onChange={handleChange}
              name="name"
              type="text"
              className={`w-full px-4 py-3 rounded-xl bg-purple-900/60 border ${errors.name ? 'border-red-500' : 'border-purple-700'} text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-purple-900/80 transition-all duration-200 shadow-inner`}
              placeholder="What's your good name?"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              disabled={loading}
              autoComplete="off"
            />
            {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-purple-200 mb-1">Your Email</label>
            <input
              id="email"
              value={input.email}
              onChange={handleChange}
              name="email"
              type="email"
              className={`w-full px-4 py-3 rounded-xl bg-purple-900/60 border ${errors.email ? 'border-red-500' : 'border-purple-700'} text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-purple-900/80 transition-all duration-200 shadow-inner`}
              placeholder="What's your web address?"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={loading}
              autoComplete="off"
            />
            {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="textArea" className="block text-sm font-semibold text-purple-200 mb-1">Your Message</label>
            <textarea
              id="textArea"
              value={input.textArea}
              onChange={handleChange}
              name="textArea"
              rows="4"
              className={`w-full px-4 py-3 rounded-xl bg-purple-900/60 border ${errors.textArea ? 'border-red-500' : 'border-purple-700'} text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-purple-900/80 transition-all duration-200 shadow-inner resize-none`}
              placeholder="What you want to say?"
              aria-invalid={!!errors.textArea}
              aria-describedby={errors.textArea ? 'textArea-error' : undefined}
              disabled={loading}
            ></textarea>
            {errors.textArea && <p id="textArea-error" className="text-red-400 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.textArea}</p>}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-4 rounded-xl font-bold text-lg shadow-lg hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
            aria-busy={loading}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            ) : (
              <>
                <span>Send</span>
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </>
            )}
          </motion.button>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center text-base mt-4 px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 ${success.includes('sent') ? 'bg-green-900/60 text-green-300 border border-green-700' : 'bg-red-900/60 text-red-300 border border-red-700'}`}
            >
              {success.includes('sent') ? (
                <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              ) : (
                <svg className="h-5 w-5 text-red-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
              <span>{success}</span>
            </motion.div>
          )}
        </form>
      </motion.div>
      {/* 3D Canvas Section (optional) */}
      {/* <motion.div
        variants={variants("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="w-full max-w-md h-[600px]">
        <Canvas />
      </motion.div> */}
    </div>
  );
};

export default Contact;
