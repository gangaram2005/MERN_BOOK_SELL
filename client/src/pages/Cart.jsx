import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Book from "../img/demobkimg.jpg";
import { Link } from "react-router-dom";
import "./Cart.css";
export default function Cart() {
  return (
    <>
      <div className="main bg-white text-black">
        <div className="heading-1 text-center text-2xl">
          <p>Home/Cart</p>
        </div>

        {/* show product item as a table using flex property */}
        <div className="table w-full  md:mt-28 xm:mt-20 mb-20">
          {/* <table class="table-auto w-[80%] bg-red-500 ml-20">
            <thead>
              <tr>
                <th className="w-[45%]">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-[45%]">
                <td className="text-center flex items-center">
                  <img src={Book} alt="Images" className="w-[50%]" />
                </td>
              </tr>
              <tr>
                <td>Rs 500</td>
              </tr>
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>Rs.500</td>
              </tr>
            </tbody>
          </table> */}
          <table className="w-[80%] bg-white md:ml-20 table-fixed">
            <thead className="pt-5 mb-5 pb-5">
              <tr className="text-2xl font-bold bg-[#ededed]">
                <th>Book Image</th>
                <th>Book Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={Book}
                    alt="Book_Image"
                    className="items-center md:ml-5 w-1/2 object-contain mt-3"
                  />
                </td>
                <td className="text-center">Python Programming</td>
                <td className="text-center">Rs.500</td>
                <td className="text-center">
                  <input type="number" />
                </td>
                <td className="text-center">Rs. 500</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-baseline mt-5">
            <div className="mt-5 md:ml-12">
              <Link to="/product" className="button11">
                Continue to Shopping
              </Link>
            </div>
            <div className="align-content-end mr-12">
              <h2 className="font-bold">SubTotal: Rs 500</h2>
              <p>Taxes and shipping calculated at checkout</p>
              <div className="mt-5">
                <Link to="/checkout" className="button11 mt-3">
                  CheckOut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
