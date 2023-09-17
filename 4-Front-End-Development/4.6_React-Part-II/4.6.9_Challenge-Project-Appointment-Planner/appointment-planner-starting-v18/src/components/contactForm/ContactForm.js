import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name: </label>
          <input
            id="fullName"
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={({ target }) => setName(target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number: </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            placeholder="###-###-####"
            onChange={({ target }) => setPhone(target.value)}
            pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Your Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="your@email.com"
            onChange={({ target }) => setEmail(target.value)}
            required
            autoComplete="off"
          />
        </div>
        <input type="submit" value="Add Contact" />
      </form>
    </>
  );
};
