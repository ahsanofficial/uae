import styles from "./style.module.css";
import Image from "next/image";
import img1 from "../../../public/services/servicesclassification/Rectangle 185.png"
import img2 from "../../../public/services/servicesclassification/Rectangle 186.png"

export const ServicesClassification = () => {
  return (
    <div className="flex justify-center items-center mb-14 px-6">
      <div className="w-full max-w-screen-lg bg-white">
        <div className="flex flex-col mb-4 md:flex-row">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-medium leading-tight text-left mb-4">
              Classification of Licenses
            </h2>
            <p className="text-base font-medium leading-6 text-left mb-10">
              There are three types of licenses in the UAE mainland company
              formation:
            </p>
            <div className="space-y-4 ">
              <p className="text-base font-medium leading-6 text-left mb-4">
                <span className="text-gray-600">Professional licenses</span> are required for craftsmen, artisans,
                professions, and services.
              </p>
              <p className="text-base font-medium leading-6 text-left mb-4">
              Individuals who want to start an industrial or manufacturing enterprise must obtain an <span className="text-gray-600">Industrial Licensce.</span> 
              </p>
              <p className="text-base font-medium leading-6 text-left mb-4">
                <span className="text-gray-600">Commercial licenses</span> are essential for any trading firm.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <div className={`${styles.container}`}>
              <div className="relative w-3/5">
                <Image
                  src={img1}
                alt=""
                //   width={300}
                //   height={300}
                />
                <Image
                  src={img2}
                  alt=""
                //   width={300}
                //   height={300}
                  className={`${styles.image} absolute top-20 left-52`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
