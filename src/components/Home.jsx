import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import InputForm from "./InputForm";
import PreviewData from "./PreviewData";

const Home = () => {
  const state = useSelector((state) => state.booking);
  console.log(state);
  return (
    <>
      <div>
        <Header />
        <section>
          {/* <!-- Input Data --> */}
          <InputForm />

          {/* <!-- Preview Data --> */}
          {state.booking.length > 0 && <PreviewData />}
        </section>
      </div>
    </>
  );
};

export default Home;
