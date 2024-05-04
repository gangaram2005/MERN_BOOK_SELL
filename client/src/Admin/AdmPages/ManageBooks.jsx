import React from "react";
import AdmSidebar from "../Sidebar/AdmSidebar";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import Python from "../../img/pythonbook.jpeg";
import { MdDelete, MdEdit } from "react-icons/md";
function ManageBooks() {
  return (
    <div>
      <div className="flex">
        <div className="sidebar">
          <AdmSidebar />
        </div>

        <div className="content-page bg-red-500 w-[100%] xm:mt-10 xm:ml-0">
          <div className="heading-part text-2xl fond-bold">
            <h1 className="text-center font-bold">All Books</h1>
          </div>

          <div className="overflow-x-auto bg-green-500">
            <Table hoverable className="w-[90%] items-center">
              <Table.Head>
                <Table.HeadCell>Book Title</Table.HeadCell>
                <Table.HeadCell>Auther Name</Table.HeadCell>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Description</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                  {" "}
                  <span>Edit /Delete</span>{" "}
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Python for beginners</Table.Cell>
                  <Table.Cell>Guido van roaasn</Table.Cell>
                  <Table.Cell>
                    <img src={Python} alt="books_image" className="csimagess" />
                  </Table.Cell>
                  <Table.Cell>Programming</Table.Cell>
                  <Table.Cell>This is very good book</Table.Cell>
                  <Table.Cell>Rs. 500</Table.Cell>
                  <Table.Cell className="flex gap-4 text-center mt-4">
                    <Link
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <MdEdit className="text-2xl font-bold" />
                    </Link>
                    <Link
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <MdDelete className="text-2xl font-bold" />
                    </Link>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Python for beginners</Table.Cell>
                  <Table.Cell>Guido van roaasn</Table.Cell>
                  <Table.Cell>
                    <img src={Python} alt="books_image" className="csimagess" />
                  </Table.Cell>
                  <Table.Cell>Programming</Table.Cell>
                  <Table.Cell>This is very good book</Table.Cell>
                  <Table.Cell>Rs. 500</Table.Cell>
                  <Table.Cell className="flex gap-4 text-center mt-4">
                    <Link
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <MdEdit className="text-2xl font-bold" />
                    </Link>
                    <Link
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <MdDelete className="text-2xl font-bold" />
                    </Link>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Python for beginners</Table.Cell>
                  <Table.Cell>Guido van roaasn</Table.Cell>
                  <Table.Cell>
                    <img src={Python} alt="books_image" className="csimagess" />
                  </Table.Cell>
                  <Table.Cell>Programming</Table.Cell>
                  <Table.Cell>This is very good book</Table.Cell>
                  <Table.Cell>Rs. 500</Table.Cell>
                  <Table.Cell className="flex gap-4 text-center mt-4">
                    <Link
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <MdEdit className="text-2xl font-bold" />
                    </Link>
                    <Link
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <MdDelete className="text-2xl font-bold" />
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageBooks;
