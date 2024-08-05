import bannerImage from "../public/assets/Vector_image.png";
import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="background flex items-center justify-center min-h-screen bg-cover bg-center bg-Desktop">
      {/* Mobile View Section Start */}
      <div className="sm:hidden flex flex-col items-center">
        <Image src={bannerImage} width={465} height={465} />
        <h1 className="text-white text-6xl mr-20 mt-10">Feeling Stuck?</h1>
        <br />
        <h1 className="text-white">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - -{" "}
        </h1>
        <h2 className="text-white text-2xl mr-5">Don't worry</h2>
      </div>
      {/* Mobile View Section End */}

      {/* Tablet View Section Start */}
      <div className="hidden md:block md:flex md:flex-col md:items-center">
        {/* Place content for tablet view here */}
      </div>
      {/* Tablet View Section End */}

      {/* Desktop View Section Start */}
      <div className="hidden lg:block lg:flex lg:flex-row lg:items-center lg:justify-between">
        {/* Place content for desktop view here */}
      </div>
      {/* Desktop View Section End */}

      <div className="form-container justify-center items-center h-full">
        <ContactForm />
      </div>
    </div>
  );
}
