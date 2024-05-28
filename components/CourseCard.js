import ExportedImage from "next-image-export-optimizer";
import React from "react";
import { useDialog } from "./DialogContext";

const CourseCard = ({ course }) => {
  const { openDialog } = useDialog();
  return (
    <div
      aria-label="View Item"
      className="flex-grow h-full overflow-hidden duration-300 transform bg-white rounded shadow-lg hover:-translate-y-2 border border-slate-300"
    >
      <div className="flex flex-col h-full">
        <ExportedImage
          src={course.courseImg}
          alt={course.courseName}
          title={course.courseName}
          className="object-cover w-full h-32"
        />
        <div className="flex-grow flex flex-col justify-between border border-t-0 rounded-b">
          <div className="p-1 text-left flex items-center bg-deep-orange-50 mx-3 mt-3 rounded text-deep-orange-1000 border border-deep-orange-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
              className="mx-2 "
              fill="#FF6600"
            >
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
            <p className="font-semibold leading-5">{course.courseShortName}</p>
          </div>
          <div className="p-3 text-left">
            <h6 className="mb-2 font-semibold leading-5">
              {course.courseName}
            </h6>
          </div>
          <div className="p-1 text-center flex items-center bg-deep-orange-50 mx-3 mt-3 rounded text-deep-orange-1000 border border-deep-orange-100 mb-3" style={{ justifyContent: "center", background: 'rgb(255, 102, 0, 1)', color: '#fff', cursor: "pointer" }}>
            <button className='font-semibold leading-5' style={{ width: "100%" }} onClick={openDialog}>Apply Now</button>
          </div>
          <div>
            <hr className="border-gray-300" />
            <div className="p-2 flex justify-between">
              <span
                style={{
                  background: "rgb(255, 102, 0, 1)",
                  color: "#fff",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                  borderRadius: "5px",
                }}
              >
                {course.courseDuration}
              </span>
              <span style={{ fontWeight: 700 }}>{course.coursePrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
