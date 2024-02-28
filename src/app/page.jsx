import ValoButton from "@/components/ValoButton";
import classNames from "@/libs/classNames";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex flex-col items-center mt-14">
      <section className="relative flex px-36 w-full h-[720px]">
        <div className="absolute z-0 left-0 h-full w-full">
          <div className="absolute backdrop-brightness-[0.75] h-full w-full"></div>
          <Image
            src="/images/projectnext23.jpg"
            alt="project next 2023"
            className="w-full object-cover h-full"
            width={2440}
            height={1020}
          />
        </div>
        <div
          className={classNames(
            "relative z-10 h-auto w-full max-w-screen-2xl mx-auto flex flex-col-reverse",
            "after:absolute after:block after:h-full after:content-[''] after:top-0 after:z-10 after:border-l after:border-color-accent"
          )}
        >
          <div className="relative my-20 mr-6 text-end">
            <h2 className="mb-1 text-9xl uppercase font-tungsten text-color-white">
              heroes
            </h2>
            <p className="text-2xl font-dinnext mb-9 text-color-white">
              Become an expert in mastering heroes
            </p>
            <div className="mb-7">
              <Link href="/heroes" className="btn btn--light min-w-52 text-lg">
                <ValoButton text={"View All"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex px-36 w-full h-[720px] overflow-hidden">
        <div className="absolute z-0 left-0 h-auto w-full ">
          <Image
            src="/images/kugisaki-nobara.png"
            alt="project next 2023"
            className="w-full object-cover h-auto mt-20"
            width={2440}
            height={1020}
          />
        </div>
        <div
          className="relative z-10 w-full max-w-screen-2xl mx-auto
        after:absolute after:block after:h-full after:content-[''] after:top-0 after:z-10 after:border-l after:border-color-accent"
        >
          <div className="relative my-20 ml-6">
            <h2 className="text-9xl uppercase font-tungsten text-color-white">
              Equipment
            </h2>
            <div className="relative mt-32 ">
              <p className="text-2xl font-dinnext text-color-white whitespace-pre">
                Good equipment will make it easier to win{"\n"}
                {"\n"}
                Get recommendations from top players{"\n"}
                Or you can mix it yourself
              </p>
              <p className="text-2xl font-dinnext text-color-white mb-9"></p>
              <div className="mb-7">
                <ValoButton text={"View All Equipment"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex px-36 w-full h-[720px] overflow-hidden">
        <div className="absolute z-0 right-0-0 h-full w-full ">
          {/* <div className="absolute backdrop-brightness-[0.80] h-full w-full"></div> */}
          <Image
            src="/images/mworld_ling.png"
            alt="project next 2023"
            className="w-full object-cover h-auto mt-12"
            width={2440}
            height={1020}
          />
        </div>
        <div
          className="relative z-10 w-full max-w-screen-2xl mx-auto
        after:absolute after:block after:h-full after:content-[''] after:top-0 after:z-10 after:border-l after:border-color-accent"
        >
          <div className="relative my-20 ml-6">
            <h2 className="text-9xl uppercase font-tungsten text-color-white">
              Mode Games
            </h2>
            <div className="relative mt-20">
              <p className="text-2xl font-dinnext text-color-white whitespace-pre mb-4">
                Bored with the same game modes?{"\n"}
                Try different modes and have fun!
              </p>
              <p className="text-xl font-dinnext text-color-white whitespace-pre">
                Starting from the fastest mode to the relaxing one you can try
              </p>
              <div className="my-7">
                <ValoButton text={"View mode games"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
