import bannerImage from "../public/assets/Vector_image.png";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
// import "../app/styles/custom.css";

export default function Home() {
  return (
    <div className="background flex items-center justify-center min-h-screen bg-cover bg-center bg-Desktop">
      <div className="md:hidden md:flex md:flex-col md:items-center md:justify-center p-4">
        <ContactForm />
      </div>
      <div className="sm:hidden md:hidden md:flex lg:flex flex-col items-center">
        <Image src={bannerImage} width={465} height={465} />
        <h1 className="text-white text-6xl mr-20 mt-10">Feeling Stuck?</h1>
        <br />
        <h1 className="text-white">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
        </h1>
        <h2 className="text-white text-2xl mr-5">Don't worry</h2>
      </div>
      <div className="form-container  justify-center items-center h-full">
        <ContactForm />
      </div>
    </div>
  );
}
