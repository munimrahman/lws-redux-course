import React from "react";

const SubmittedModal = ({ open, control, submission }) => {
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-[#0A1121]/60 cursor-pointer"
        ></div>
        <div className="border rounded-md w-[400px] lg:w-[600px] space-y-8 bg-[#0A1121] p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-center text-3xl font-extrabold text-white">
            আপনি এসাইনমেন্ট এ যা{" "}
            <span className="text-sky-400">জমা দিয়েছেন</span>
          </h2>
          <p>রিপোসিটরি লিঙ্ক</p>
          <p>{submission?.repo_link}</p>
          <div className="text-end">
            <button
              onClick={control}
              className="bg-sky-500 px-4 py-2 rounded-md text-black"
            >
              Close
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default SubmittedModal;
