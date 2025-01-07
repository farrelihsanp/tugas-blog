import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="flex p-6 flex-col items-center justify-between gap-3 text-sm sm:flex-row">
      <div className="container flex flex-col mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center lg:gap-12">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <div className="lg:max-w-lg pr-8">
            <h1 className="text-3xl font-bold tracking-wide text-black  lg:text-5xl lg:leading-tight">
              Blog About Architecture
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                aliquam accusamus optio quam iste eum tempora ullam hic
                doloribus iusto ipsam, rem error. Voluptate eligendi sit
                officiis dicta dolorum velit?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                laboriosam quibusdam impedit vero assumenda velit et laborum
                consectetur tenetur ullam, omnis itaque numquam alias dolores
                sequi cum eligendi nobis corrupti.
              </p>
            </div>
            <div className="w-full mt-8 bg-transparent rounded-md lg:max-w-sm">
              <Link href="/blog">
                <button className="px-5 py-2 text-sm tracking-wide text-white transition-all duration-300 bg-black hover:scale-105 lg:text-lg">
                  See the Project
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 lg:h-[32rem]">
          <Image
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="glasses photo"
            width={500}
            height={500}
            sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
