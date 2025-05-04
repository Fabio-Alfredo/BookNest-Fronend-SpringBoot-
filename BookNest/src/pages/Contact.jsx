import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUsPanel from "../components/contact/ContactUsPanel";
import FormContact from "../components/contact/FormContact";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-col sm:mt-10">
        <ContactUsPanel />
        <FormContact />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
