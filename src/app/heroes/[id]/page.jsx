import DisclosureHero from "@/components/Heroes/id/DisclosureHero";
import SkillsHero from "@/components/Heroes/id/SkillsHero";
import SliderHero from "@/components/Heroes/id/SliderHero";
import { getDataHero } from "@/libs/api-libs";

const Page = async ({ params: { id } }) => {
  const { data } = await getDataHero(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/heroes/${id}`
  );

  return (
    <main className="relative w-full mt-14 ">
      <div className="relative w-full overflow-hidden">
        <SliderHero skins={data.skins} />
        <DisclosureHero
          data={{
            skinName: data.skins[0].name,
            heroName: data.name,
            roles: data.roles,
            positions: data.positions,
            specialities: data.specialities.map(
              (speciality) => speciality.name
            ),
            ratings: data.ratings,
          }}
        />
      </div>
      <div className="relative z-10 -mt-16 py-20 w-full bg-color-dark min-h-[400px]:">
        <div className="h-screen flex flex-col items-center">
          <h1 className="pb-5 text-5xl text-color-accent text-center font-tungsten uppercase">
            Skill introduction
          </h1>
          <div className="w-full max-w-screen-xl min-h-[542px] flex">
            <SkillsHero skills={data.skills} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
