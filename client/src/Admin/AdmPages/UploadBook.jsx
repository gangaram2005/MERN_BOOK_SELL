import React from "react";
import AdmSidebar from "../Sidebar/AdmSidebar";
import { Button } from "flowbite-react";

import { Label, TextInput, Textarea } from "flowbite-react";

export default function UploadBook() {
  return (
    <div>
      <div className="flex">
        <div className="sidebar md:flex">
          <AdmSidebar />
        </div>
        <div className="content-page md:mt-10 w-[95%]">
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
                <div className="flex flex-row xm:flex-col gap-10 mb-7">
                  <div className="md:w-[40%] xm:w-full md:ml-10">
                    <div className="mb-1 block">
                      <Label htmlFor="small" value="Book Title" />
                    </div>
                    <TextInput
                      id="small"
                      type="text"
                      sizing="sm"
                      placeholder="Book Name"
                    />
                  </div>
                  <div className="md:w-[40%] md:ml-10 xm:w-full">
                    <div className="mb-1 block">
                      <Label htmlFor="base" value="Auther Name" />
                    </div>
                    <TextInput
                      id="base"
                      type="text"
                      sizing="sm"
                      placeholder="Auther Name"
                    />
                  </div>
                </div>

                {/* second column */}
                <div className="flex flex-row xm:flex-col gap-10 mb-7">
                  <div className="w-[40%] md:ml-10 xm:w-full xm:mr-4">
                    <div className="mb-1 block">
                      <Label
                        htmlFor="small"
                        value="Book Image"
                        className="text-bold"
                      />
                    </div>
                    <TextInput
                      id="small"
                      type="text"
                      sizing="sm"
                      placeholder="Book Image"
                      className="border-solid border-3"
                    />
                  </div>
                  <div className="w-[40%] md:ml-10 xm:w-full xm:mr-4">
                    <div className="mb-1 block">
                      <Label htmlFor="base" value="Book Category" />
                    </div>
                    <TextInput
                      id="base"
                      type="text"
                      sizing="sm"
                      placeholder="Auther Name"
                    />
                  </div>
                </div>

                {/* Third column */}
                <div className="flex gap-10 mb-7">
                  <div className="w-[87%] md:ml-10 xm:w-full">
                    <div className="mb-1 block">
                      <Label htmlFor="base" value="Book Description" />
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Book Description..."
                      required
                      rows={4}
                      className="border-solid border-2"
                    />
                  </div>
                </div>

                {/* Fouth Column */}
                <div className="flex gap-10 mb-7">
                  <div className="w-[87%] md:ml-10 xm:w-full">
                    <div className="mb-1 block">
                      <Label htmlFor="base" value="Book Pdf links" />
                    </div>
                    <TextInput id="large" type="text" sizing="lg" />
                  </div>
                </div>

                {/* submit button fifth column */}
                <div className="flex gap-10 mb-7">
                  <div className="w-[87%] ml-10">
                    <Button gradientDuoTone="pinkToOrange" className="w-full">
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
