import { Paper } from "@mui/material";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

function SkillsPage() {
  return (
    <div className="mt-10">
      <h1 className="font-bold text-5xl w-full text-center">Experience</h1>

      <div className="timeline">
        <div className="exp-container exp-left">
          <Paper>
            <div className="content">
              <Details
                position="Sofware Developer"
                company="Digitize"
                companyLink="www.digitize.com.au"
                time="2022-Present"
                address="Adelaide, South Australia"
                work="Develop software"
              />
            </div>
          </Paper>
        </div>
        <div className="exp-container exp-right">
          <Paper>
            <div className="content">
              <Details
                position="Sofware Developer"
                company="Digitize"
                companyLink="www.digitize.com.au"
                time="2022-Present"
                address="Adelaide, South Australia"
                work="Develop software"
              />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
