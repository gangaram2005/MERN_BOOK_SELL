import React from "react";
import AdmSidebar from "../Sidebar/AdmSidebar";
import { Button } from "flowbite-react";

import { Label, TextInput, Textarea } from "flowbite-react";
function AdmCategory() {
  return (
    <div>
      <div className="flex">
        <div className="sidebar md:flex">
          <AdmSidebar />
        </div>
        <div className="content-page md:mt-10 w-[95%]">
          <div className="heading-section">
            <h1 className="text-4xl text-black font-bold ml-7">
              Book Category
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
                      <Label htmlFor="small" value="Book Category" />
                    </div>
                    <TextInput
                      id="small"
                      type="text"
                      sizing="sm"
                      placeholder="Book Name"
                    />
                  </div>
                </div>

                {/* submit button fifth column */}
                <div className="flex gap-10 mb-7">
                  <div className="w-[87%] ml-10">
                    <Button gradientDuoTone="pinkToOrange" className="w-36">
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

export default AdmCategory;
