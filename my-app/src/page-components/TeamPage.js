import { MeetOurTeam } from "../components/MeetOurTeam";
import { Trial } from "../components/Trial";

export const TeamPage = () => {
  return (
    <div className="font-navText text-[#252B42]">
      <div className="flex flex-col items-center gap-[3vw] mb-[6vw] ">
        <h5 className="text-lg font-bold ">WHAT WE DO</h5>
        <h2 className="text-[6vw] font-bold">Innovation tailored for you</h2>
        <div className="flex items-center gap-[1vw]">
          <h6>Home</h6>
          <i class="fa-solid fa-chevron-right"></i>
          <h6>Team</h6>
        </div>
      </div>

      <div className="flex gap-0 md:flex-col md:items-center ">
        <div className="flex-1">
          <img src="/pics/redwoman.png" />
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-col mt-[ ] flex-1 gap-[.6vw]">
          <div>
            <img src="/pics/team2white.png" />
          </div>
          <div>
            <img src="/pics/teamjean.png" />
          </div>
          <div>
            <img src="/pics/blackwhite.png" />
          </div>
          <div>
            <img src="/pics/blonde.png" />
          </div>
        </div>
      </div>

      <MeetOurTeam />
      <Trial />
    </div>
  );
};
