import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Book from "../img/demobkimg.jpg";
import { Button } from "flowbite-react";
export default function CheckOut() {
  // const [selects, setSelects] = useState();
  // shipping address adding start
  const [formData, setFormData] = useState({
    username: "",
    country: "",
    firstname: "",
    lastname: "",
    address: "",
    contactNumber: "",
    address2: "",
    state: "",
    city: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData); // input box ma type gareko console ma print hunxa

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/shipping/shipping", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      console.log("Successfully submit shipping details");
      if (res.status === 201) {
        console.log("success");
      }
      if (res.status === 500) {
        console.log("Can not send data to the server");
      }
    } catch (error) {
      console.log("Can not connect to the server");
    }
  };

  // shipping address adding end
  return (
    <div>
      <div className="heading-part mt-5 mb-4">
        <h1 className="text-center text-xl">Home/Cart/Checkout</h1>
      </div>

      <div className="content-page bg-[#ededed]">
        <div className="md:flex md:pl-28 sm:pl-3 xm:mr-0">
          {/* left part */}
          <div className="left-part md:w-[50%] xm:ml-0">
            <div className="headings mt-10 xm:mr-0">
              <h4 className="text-3xl font-bold mb-2">Books Selling</h4>
              <p className="mb-2">
                <span>Cart/Information/Shipping/Payment</span>
              </p>
            </div>
            <div className="headings mt-3">
              <h1 className="text-2xl font-bold mb-1">Contact Information</h1>
              <p>
                Kamal pd Sharma <span>(thekappu7@gmail.com)</span>
              </p>
            </div>

            <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5">Shipping Address</h1>
              {/* form part started */}
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="country w-full mb-3">
                  <select
                    name="country"
                    id="country"
                    onChange={handleChange}
                    value={FormData.country}
                    className="md:w-[660px] xm:w-[330px] csinput"
                  >
                    <option>Select Country</option>
                    <option value="Nepal">Nepal</option>
                  </select>
                </div>

                <div className="md:flex">
                  <div className="first-name">
                    <input
                      type="text"
                      name="firstname"
                      className="mt-2 md:w-[310px] xm:w-[330px] csinput"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="last-name gap-5 xm:mt-3">
                    <input
                      type="text"
                      name="lastname"
                      className="mt-2 md:ml-5 md:w-[330px] xm:w-[330px]  csinput"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="address w-full mb-3 mt-5">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    className="md:w-[660px] xm:w-[330px] csinput"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="address w-full mb-3 mt-5">
                  <input
                    type="number"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="Contact Number"
                    value={FormData.contactNumber}
                    onChange={handleChange}
                    className="md:w-[660px] xm:w-[330px] csinput"
                  />
                </div>

                <div className="address2 w-full mb-3 mt-5">
                  <input
                    type="text"
                    name="address2"
                    id="address2"
                    placeholder="Address 2"
                    value={FormData.address2}
                    onChange={handleChange}
                    className="md:w-[660px] xm:w-[330px] csinput"
                  />
                </div>

                <div className="md:flex">
                  <div className="state gap-5">
                    <select
                      name="state"
                      id="state"
                      onChange={handleChange}
                      value={FormData.state}
                      className="csinput md:w-[200px] xm:w-[330px] mt-2 md:ml-6 md:mr-6"
                    >
                      <option value="Koshi">Select State</option>
                      <option value="Koshi">Koshi</option>
                      <option value="Madhesh">Madhesh</option>
                      <option value="Bagmati">Bagmati</option>
                      <option value="Gandaki">Gandaki</option>
                      <option value="lumbini">Lumbini</option>
                      <option value="Karnali">Karnali</option>
                      <option value="Sudhurpachhim">Sudhurpachhim</option>
                    </select>
                  </div>
                  <div className="City">
                    <input
                      type="text"
                      name="city"
                      className="mt-2 md:w-[200px] xm:w-[330px] csinput"
                      placeholder="city"
                      value={FormData.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="Provience">
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      value={FormData.zipcode}
                      onChange={handleChange}
                      className="mt-2 md:w-[200px] xm:w-[330px] csinput"
                      placeholder="Zipcode"
                    />
                  </div>
                </div>
                <Button
                  gradientDuoTone="purpleToPink"
                  className="rounded-lg w-[90%] h-7 mt-4 md:ml-8"
                  type="submit"
                >
                  Register
                </Button>
              </form>
              <div className="w-100 mt-10 mb-14">
                <div className="flex justify-between items-center">
                  <Link to="/cart" className="text-dark">
                    <BiArrowBack className="me-2" /> Return to Cart
                  </Link>
                  <Link to="/shop" type="submit" className="button11 mr-10">
                    Continue Shipping
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right part */}
          <div className="right-part ml-5  md:w-[50%] mb-3">
            <div className="flex justify-between">
              <div className="flex">
                <div className="img">
                  <span className="ml-48 mt-5 text-2xl logoss">1</span>
                  <div>
                    <img
                      src={Book}
                      alt=""
                      className="w-[200px] border-white ml-2 bg-cover obcvr"
                    />
                  </div>
                </div>
                <div className="title mt-10">
                  <h1 className="mb-5">Python Programming</h1>
                  <p>Description about the book</p>
                </div>
              </div>

              <div className="price mt-16 mr-20">
                <h1>Rs. 500</h1>
              </div>
            </div>

            <hr className="mt-5 border-solid border-1 border-gray-400" />

            <div className="price-part">
              <div className="border-bottom py-4">
                <div className="flex justify-between items-center mb-3 mt-2">
                  <p className="total">SubTotal</p>
                  <p className="total-price md:mr-36">Rs 500</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price md:mr-36">Rs 0</p>
                </div>
              </div>
              <hr className="mt-5 border-solid border-1 border-gray-400" />
              <div className="flex justify-between items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price md:mr-36">Rs 500</h5>
              </div>
              <hr className="mt-5 border-solid border-1 border-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
