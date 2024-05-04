import React from "react";
import python from "../img/pythonbook.jpeg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function SingleBooks() {
  return (
    <div className="flex">
      <div className="details md:w-2/4 sm:w-full md:ml-32 md:mt-20 sm:mt-10 sm:ml-1 items-center">
        <div className="title">
          <h1 className="text-3xl text-center ">Book Title</h1>
        </div>
        <div className="images md:ml-2 sm:ml-1">
          <img src={python} alt="" className="h-auto md:w-full md:pl-20" />
          <div className="flex justify-between">
            <div>
              <p>Ganga Ram Jaisi / Auther</p>
            </div>
            <div>
              <p>Rs 500.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description md:mt-28 sm:mt-5 md:ml-10 md:w-[60%]">
        <p className="w-[70%] items-start">
          Description about book Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Soluta magni officiis, omnis unde modi at in rerum
          harum repellendus qui nulla voluptatibus fugiat dolorum placeat
          deleniti ducimus. Aliquid, fuga dicta?
        </p>

        <div className="btn mt-5 md:ml-40">
          <Link to="/cart">
            <Button
              gradientDuoTone="purpleToPink"
              className="rounded-lg button111"
            >
              Add to Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleBooks;
