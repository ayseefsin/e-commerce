import { AboutPageTeamMember } from "./AboutPageTeamMember";

export const AboutPageTeam = () => {
  return (
    <div className="flex flex-col gap-[10vw] md:gap-[20vw] md:mt-[30vw]">
      <div className="md:text-center  flex flex-col gap-[3vw] md:gap-[20vw] items-center">
        <h2 className="font-bold text-5xl mt-[8vw] ">Meet Our Team</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex md:flex-col md:gap-[10vw] justify-center ">
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
      </div>
    </div>
  );
};
