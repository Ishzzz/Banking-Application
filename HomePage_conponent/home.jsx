import React, { useState, useRef } from "react";
import bg from "../assets/anthem-june24-home3.mp4";
import Nav from "./navbar"
import KeyFeatureCard from "./card";
import FileCard from "./file";

export const Home = () => {

  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const targetRef = useRef(null);

  const handleScrollToComponent = () => {
    setIsTargetVisible(true);
    setTimeout(() => {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  const [clickedFiles, setClickedFiles] = useState({
    file1: false,
    file2: false,
    file3: false,
    file4: false,
  });
  const [clickCount, setClickCount] = useState(0);

  const handleFileClick = (file) => {
    if (!clickedFiles[file]) {
      setClickedFiles((prevClickedFiles) => ({
        ...prevClickedFiles,
        [file]: true,
      }));
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  const handleStartApplicationClick = () => {
    if (clickCount === 4) {
      //call the next comonent for application start
    }
  };

  return (
    <div className="h-full w-full font-akatab">
     <Nav/>

      {/* main content */}
      <div className="relative">
        <video
          src={bg}
          autoPlay
          loop
          playsInline
          muted
          className="mb-10 xl:h-[90vh] w-full object-cover"
        />
        <div className="absolute md:top-32 top-10 left-4 lg:px-16 px-6 rounded-lg flex flex-col">
          <div className="flex flex-col">
            <span className="text-white xl:text-[4.75rem] md:text-6xl font-semibold font-akatab">
              INTRODUCING
            </span>
            <span className="text-[#63dfbb] xl:text-[4.75rem] md:text-6xl font-semibold font-akatab max-xl:-mt-2">
              NeuBank
            </span>
          </div>
          <span className="w-4/6 md:mt-8 mt-4 xl:mb-5 mb-3 text-white xl:text-lg md:text-sm text-xs">
            No matter what the future brings, we'll be ready and we'll be
            working. Making money work for the world.
          </span>

          <button
            onClick={handleScrollToComponent}
            className=" xl:w-1/5 w-1/6 text-[0.5rem] relative xl:py-2 py-1 px-2 text-white text-base font-bold nded-full overflow-hidden border border-white rounded-3xl transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#00243d] before:to-[#4e90c0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-3xl hover:border-transparent hover:before:left-0"
          >
            Apply Now!
          </button>
        </div>
      </div>

      {/* features component */}
      {isTargetVisible && (
        <div ref={targetRef} className=" h-[80%] mb-4">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#309779] ">
            Key Features
          </h2>
          <div className="flex flex-wrap justify-around mb-16">
            <KeyFeatureCard
              title="Secure Banking"
              description="Your transactions are safe and secure with our state-of-the-art encryption. We use the latest security measures to protect your."
            />
            <KeyFeatureCard
              title="Bill Pay and Transfer Services"
              description=" Easily pay bills and transfer money between accounts or to other users with our convenient online services."
            />
            <KeyFeatureCard
              title="Personalized Support"
              description="Get dedicated support from our team of experts. We're here to help you with any banking needs, providing personalized solutions."
            />
          </div>

          {/* File Display Component */}
          <div>
            <h2 className="text-3xl mb-4 text-center font-bold text-[#309779]">
              Important documents to review
            </h2>
            <div className="text-center w-1/2 flex m-auto mb-5">
              Please open and read the following important documents-you won't
              be able to apply until you've done so. Please also save or print
              copies of these documents for future reference. If you have any
              questions about the contents of these documents please contact us
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%] mx-auto ">

              <FileCard
                pdflink="https://www.fscs.org.uk/globalassets/badge-assets/shared/fscs_thb_online_aug2020.pdf"
                title="FSCS Information"
                description="Read and review"
                onClick={() => handleFileClick("file1")}
                isClicked={clickedFiles.file1}
              />
              <FileCard
                pdflink="https://www.sec.gov/Archives/edgar/data/1047127/000119312512129942/d321123dex102.htm#:~:text=The%20General%20Terms%20and%20Conditions,by%20promissory%20notes%2C%20discounting%20of"
                title="Terms & Conditions"
                description="Read and review"
                onClick={() => handleFileClick("file2")}
                isClicked={clickedFiles.file2}
              />
              <FileCard
              pdflink="https://bankofindia.co.in/documents/20121/135579/BOIPD30082021.pdf"
                title="Key Features & Summary Box"
                description="Read and review"
                onClick={() => handleFileClick("file3")}
                isClicked={clickedFiles.file3}
              />
              <FileCard
                pdflink="https://bankofindia.co.in/documents/20121/22636310/Privacy+Policy.pdf/310c27e0-9ac8-eb1e-f794-1db984b5ca13?t=1688732382141#:~:text=Bank%20can%20stop%20sharing%20of,interest%20of%20its%20affiliate%20companies.&text=If%20your%20Bank%20account%20relationship,permitted%20or%20required%20by%20law."
                title="Privacy Policy"
                description="Read and review"
                onClick={() => handleFileClick("file4")}
                isClicked={clickedFiles.file4}
              />
            </div>
            <div className="text-center mt-6">
              <button
                className={`text-white px-6 py-2 rounded-lg ${
                  clickCount === 4
                    ? "bg-[#63dfbb] cursor-pointer"
                    : "bg-gray-700 cursor-not-allowed"
                }`}
                disabled={clickCount !== 4}
                onClick={handleStartApplicationClick}
              >
                Start Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
