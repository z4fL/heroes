import SkillsHero from "@/components/Heroes/id/SkillsHero";
import TopSectionHero from "@/components/Heroes/id/TopSectionHero";
import { getDataHero } from "@/libs/api-libs";

const Hero = async ({ params: { id } }) => {
  const { data } = await getDataHero(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/heroes/${id}`
  );

  return (
    <main className="relative w-full mt-16">
      <TopSectionHero data={data} />
      <div className="relative z-10 -mt-16 py-20 w-full bg-color-dark min-h-[400px]:">
        <div className="h-screen flex flex-col items-center">
          <h1 className="pb-5 text-5xl text-color-accent text-center font-tungsten uppercase">
            Skill introduction
          </h1>
          <div className="w-full max-w-screen-xl min-h-[542px] flex">
            <SkillsHero
              skillsResource={{
                name: data.skillsResources,
                color: data.skillsResourcesColor,
                alterName: data.skillsResourcesAlternateNames,
              }}
              skills={data.skills}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
