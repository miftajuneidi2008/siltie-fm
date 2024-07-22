import Image from "next/image";
import lg from "../assets/images/p1.png"
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import SiltieNews from "@/components/siltie/Siltie";
import Region from "@/components/Region/Region";
import Africa from "@/components/africa/Africa";
import World from "@/components/world/World";
export default function Home() {
  return (
    <section className=" mt-[110px] min-h-screen max-w-[1400px] mx-auto">
      <div className="flex justify-center max-md:flex-col items-center gap-2 md:h-[60vh] ">
        <div className="relative bg-red-400 max-md:w-full  md:w-3/6 h-full">
          <Image
            src={lg}
            width={500}
            height={500}
            alt="Image"
            className="w-full object-cover inset-10 hover:opacity-90 h-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-[150px] mx-auto bg-black/70 text-white flex justify-center items-center cursor-pointer">
            <p>Ethiopia daily news website</p>
          </div>
        </div>
        <div className="max-md:w-full md:w-3/6  grid sm:grid-cols-2 gap-2 h-full">
          <div className="relative">
            <Image
              src={p2}
              width={500}
              height={500}
              alt="Image"
              className="object- max-sm:w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-[100px] mx-auto bg-black/70 text-white flex justify-center items-center cursor-pointer">
              <p className="px-2">
                Addabaabayyii naannoo Imgireeshniitti ijaarameefi paarkii
                Addabaabayyiitif Ebbaa Tasifamee.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={p3}
              width={500}
              height={500}
              alt="Image"
              className="object-cover max-sm:w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-[100px] mx-auto bg-black/70 text-white flex justify-center items-center cursor-pointer">
              <p>Ethiopia daily news website</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={p4}
              width={500}
              height={500}
              alt="Image"
              className="object-cover max-sm:w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-[100px] mx-auto bg-black/70 text-white flex justify-center items-center cursor-pointer">
              <p>Ethiopia daily news website</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={p4}
              width={500}
              height={500}
              alt="Image"
              className="object-cover max-sm:w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-[100px] mx-auto bg-black/70 text-white flex justify-center items-center cursor-pointer">
              <p>Ethiopia daily news website</p>
            </div>
          </div>
        </div>
      </div>
      <SiltieNews/>
      <Region/>
      <Africa/>
      <World/>
     
    </section>
  );
}
