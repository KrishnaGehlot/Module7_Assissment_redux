import React from "react";
import "./Home.css";
import useForm from "../useForm";
import validateInfo from "../validateInfo";
function Home() {
  const { values, errors, handleChange, handleSubmit } = useForm(validateInfo);
  return (
    <>
      <div className="registration-container">
        <h2>User Registration</h2>
        <p style={{color : 'red'}}s>
          Fields marked <span className="">*</span> are .
        </p>
        <form  onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email <span className="">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
          />
          {errors.email && <p style={{color : 'red'}}>{errors.email}</p>}
          <label htmlFor="first-name">
            First Name <span className="">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={values.firstName || ""}
            onChange={handleChange}
          />
          {errors.firstName && <p style={{color : 'red'}}>{errors.firstName}</p>}
          <label htmlFor="last-name">
            Last Name <span className="">*</span>
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={values.lastName || ""}
            onChange={handleChange}
          />
          {errors.lastName && <p style={{color : 'red'}}>{errors.lastName}</p>}
          <label htmlFor="password">
            Password <span className="">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
          />
          {errors.password && <p style={{color : 'red'}}>{errors.password}</p>}
         
          <label htmlFor="phone-number">
            Phone Number <span className="">*</span>
          </label>
          <input
            type="tel"
            id="phone-number"
            name="phoneNumber"
            value={values.phoneNumber || ""}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p style={{color : 'red'}}>{errors.phoneNumber}</p>}
          <label htmlFor="address">
            Address <span className="">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={values.address || ""}
            onChange={handleChange}
          />
          {errors.address && <p style={{color : 'red'}}>{errors.address}</p>}
          {/* <label htmlFor="town">Town</label>
          <input
            type="text"
            id="town"
            name="town"
            value={values.town || ""}
            onChange={handleChange}
          /> */}
          <label htmlFor="region">
            Region <span className="">*</span>
          </label>
          <input
            type="text"
            id="region"
            name="region"
            value={values.region || ""}
            onChange={handleChange}
          />
          {errors.region && <p style={{color : 'red'}}>{errors.region}</p>}
          <label htmlFor="postcode">
            Postcode / Zip <span className="">*</span>
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={values.postcode || ""}
            onChange={handleChange}
          />
          {errors.postcode && <p style={{color : 'red'}}>{errors.postcode}</p>}
          <label htmlFor="country">
            Country <span className="">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={values.country || "United Kingdom"}
            onChange={handleChange}
          >
            <option value="United Kingdom">United Kingdom</option>
            <option value="United Kingdom">India</option>

            {/* Add more country options as needed */}
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Home;
