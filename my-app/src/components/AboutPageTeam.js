import { AboutPageTeamMember } from "./AboutPageTeamMember";

export const AboutPageTeam = () => {
  return (
    <div className="flex flex-col gap-[5vw]">
      <div className="flex flex-col gap-[2vw] items-center">
        <h2 className="font-bold text-5xl mt-[8vw] ">Meet Our Team</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex justify-center ">
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
      </div>
    </div>
  );
};
