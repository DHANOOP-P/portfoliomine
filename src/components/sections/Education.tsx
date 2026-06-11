import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

// ─── Types ────────────────────────────────────────────────────────────────────

type TEducation = {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  scoreLabel?: string;
  icon: string;
  iconBg: string;
};

type TObjective = {
  text: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const educationList: TEducation[] = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Government Engineering college Wayanad",
    duration: "2021 – 2025",
    score: "7",
    scoreLabel: "CGPA",
    icon: "🎓",
    iconBg: "#1d1836",
  },
  {
    degree: "Higher Secondary (12th) – Science",
    institution: "Government Higher Secondary School Vazhakkad",
    duration: "2018 – 2020",
    score: "90%",
    scoreLabel: "Percentage",
    icon: "📘",
    iconBg: "#232631",
  },
  {
    degree: "Secondary (10th)",
    institution: "Government Higher Secondary School Vazhakkad",
    duration: "2018 – 2018",
    score: "98%",
    scoreLabel: "Percentage",
    icon: "🏫",
    iconBg: "#1d1836",
  },
];

const objective: TObjective = {
  text:
    "A motivated and detail-oriented Computer Science undergraduate seeking a challenging role in full-stack development or software engineering. Passionate about building scalable web applications, solving real-world problems through clean code, and continuously growing through collaboration and open-source contribution.",
};

// ─── Education Card ───────────────────────────────────────────────────────────

const EducationCard: React.FC<{ index: number } & TEducation> = ({
  index,
  degree,
  institution,
  duration,
  score,
  scoreLabel = "Score",
  icon,
  iconBg,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-8 flex flex-col gap-4"
  >
    {/* Icon + Score badge */}
    <div className="flex items-center justify-between">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
        style={{ background: iconBg, border: "1.5px solid #aaa2" }}
      >
        {icon}
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[22px] font-black text-white leading-none">
          {score}
        </span>
        <span className="text-secondary text-[11px] uppercase tracking-widest mt-0.5">
          {scoreLabel}
        </span>
      </div>
    </div>

    {/* Degree */}
    <div>
      <p className="text-[17px] font-semibold text-white leading-snug">
        {degree}
      </p>
      <p className="text-secondary mt-1 text-[13px]">{institution}</p>
    </div>

    {/* Duration pill */}
    <div className="mt-auto">
      <span className="inline-block rounded-full bg-tertiary px-3 py-1 text-[12px] text-white tracking-wide">
        {duration}
      </span>
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

const Education = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      {/* Header band — mirrors Feedbacks exactly */}
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px]  rounded-2xl`}
      >
        <Header
          useMotion={true}
          {...config.sections.education}   // add this key to your config
        />

        {/* Career Objective block lives in the coloured band */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.9)}
          className="mt-8 mb-6 max-w-3xl max-w-[100%] rounded-2xl border border-white/10 bg-black-200/60 p-7 backdrop-blur-sm"
        >
          <p className="mb-3 text-[12px] uppercase tracking-[0.2em] text-[#915EFF]">
            Career Objective
          </p>
          <p className="text-[15px] leading-relaxed tracking-wide text-white/80">
            "{objective.text}"
          </p>
        </motion.div>
      </div>

      {/* Cards row — same -mt-20 overlap trick as Feedbacks */}
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {educationList.map((edu, index) => (
          <EducationCard key={edu.institution} index={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
