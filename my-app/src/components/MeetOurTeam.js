import { AboutPageTeamMember } from "./AboutPageTeamMember";

export const MeetOurTeam = () => {
  return (
    <div className="text-center my-[12vw] ">
      <h2 className="text-5xl md:text-[10vw] ">Meet Our Team</h2>
      <div className="grid grid-cols-3 md:grid-cols-1 gap-[6vw] my-[6vw] ">
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
        <AboutPageTeamMember />
      </div>
    </div>
  );
};
