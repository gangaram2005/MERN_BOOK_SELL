import React, { useEffect, useState } from "react";
import AdmSidebar from "../Sidebar/AdmSidebar";
import { Label, TextInput, Textarea, Select, Button } from "flowbite-react";
import axios from "axios";

export default function UploadBook() {
  const [bookcat, setBookcat] = useState([]); // this is for book category

  // category fetch garna ko lagi api call gareko start
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "http://localhost:5000/api/book-category/addcategory"
    ).then((response) => response.json());
    setBookcat(response);
  };
  //console.log(bookcat.books);
  const bcat = bookcat.books;
  console.log(bcat);
  // category fetch garna ko lagi api call gareko end

  const [pdf, setPdf] = useState("");
  const [image, setImage] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [autherName, setAuthorName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  console.log(image);
  console.log(pdf);
  console.log(bookTitle);
  console.log(autherName);
  console.log(description);
  console.log(category);

  // onchange function of every
  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleAutherChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  const handlecatchange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = (e) => {
    const formData = new FormData();
    formData.append("bookTitle", bookTitle);
    formData.append("autherName", autherName);
    formData.append("category", bookcat);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("pdf", pdf);

    axios.post("http://localhost:5000/api/books/", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <div className="flex">
        <div className="sidebar md:flex">
          <AdmSidebar />
        </div>
        <div className="content-page md:mt-10 w-[90%]">
          <div className="heading-section">
            <h1 className="text-4xl text-black font-bold ml-7">
              Upload A Book
            </h1>
          </div>

          {/* form section */}
          <section id="form" className="mt-12  w-full ">
            <div className="form max-w-full mb-20">
              <form>
                {/* first column */}
                <div className="grid md:grid-cols-2 xm:grid-flow-row gap-10 mb-7 xm:ml-3">
                  <div className="md:w-[80%] xm:w-full md:ml-10">
                    <div className="mb-1 block">
                      <Label htmlFor="booktitle" value="Book Title" />
                    </div>
                    <TextInput
                      id="booktitle"
                      type="text"
                      sizing="sm"
                      name="booktitle"
                      value={bookTitle}
                      onChange={handleTitleChange}
                      placeholder="Book Name"
                    />
                  </div>
                  <div className="md:w-[80%] md:ml-10 xm:w-full">
                    <div className="mb-1 block">
                      <Label htmlFor="authername" value="Auther Name" />
                    </div>
                    <TextInput
                      id="authername"
                      type="text"
                      sizing="sm"
                      name="authername"
                      value={autherName}
                      onChange={handleAutherChange}
                      placeholder="Auther Name"
                    />
                  </div>
                </div>

                {/* second column */}
                <div className="grid md:grid-cols-2 xm:grid-flow-row gap-10 mb-7 xm:ml-3">
                  <div className="w-[40%] md:w-[80%] md:ml-10 xm:w-full xm:mr-4">
                    <div className="mb-1 block">
                      <Label
                        htmlFor="image"
                        value="Book Image"
                        className="text-bold"
                      />
                    </div>
                    <TextInput
                      id="image"
                      type="file"
                      sizing="sm"
                      name="image"
                      placeholder="Book Image"
                      className="border-solid border-3"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div className="w-[40%] md:w-[80%] md:ml-10 xm:w-full xm:mr-4">
                    <div className="mb-1 block">
                      <Label
                        htmlFor="category"
                        value="Select your Book Category"
                      />
                    </div>
                    <Select
                      id="category"
                      name="category"
                      value={category}
                      onChange={handlecatchange}
                      required
                      className="xm:w-[75%]"
                    >
                      <option>Select Your Category</option>
                      {bcat &&
                        bcat.map((cate, index) => (
                          <option key={cate._id} id={cate._id}>
                            {cate.title}
                          </option>
                        ))}
                    </Select>
                  </div>
                </div>

                {/* Third column */}
                <div className="flex gap-10 mb-7 xm:ml-3">
                  <div className="w-[87%] md:w-[70%] md:ml-10 xm:w-full">
                    <div className="mb-1 block">
                      <Label htmlFor="description" />
                    </div>
                    <Textarea
                      id="description"
                      placeholder="Book Description..."
                      required
                      name="description"
                      rows={4}
                      value={description}
                      onChange={handleDescChange}
                      className="border-solid border-2"
                    />
                  </div>
                </div>

                {/* Fouth Column */}
                <div className="flex gap-10 mb-7 xm:ml-3">
                  <div className="w-[87%] md:w-[70%] md:ml-10 xm:w-full">
                    <div className="mb-1 block">
                      <Label htmlFor="bookpdf" value="Book Pdf links" />
                    </div>
                    <TextInput
                      id="bookpdf"
                      type="file"
                      sizing="lg"
                      name="bookpdf"
                      className="bg-white"
                      onChange={(e) => setPdf(e.target.files[0])}
                    />
                  </div>
                </div>

                {/* submit button fifth column */}
                <div className="flex gap-10 mb-7">
                  <div className="w-[87%] ml-10">
                    <Button
                      gradientDuoTone="pinkToOrange"
                      className="w-full"
                      onClick={handleClick}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
