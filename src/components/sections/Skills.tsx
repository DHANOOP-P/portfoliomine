import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { SectionWrapper } from "../../hoc"
import { config } from "../../constants/config";

// ─── Types ────────────────────────────────────────────────────────────────────

type TSkillItem = {
  name: string;
  color?: string;
};

type TSkillCategory = {
  category: string;
  icon: string;
  accent: string;
  skills: TSkillItem[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const skillCategories: TSkillCategory[] = [
  {
    category: "Languages",
    icon: "{ }",
    accent: "#915EFF",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "CSS-tailwind" },
      
    ],
  },
  {
    category: "Frameworks & Technologies",
    icon: "⚙",
    accent: "#00cea8",
    skills: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "Redis" },
    ],
  },
  {
    category: "Developer Tools",
    icon: "◈",
    accent: "#f5a623",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "PyCharm" },
    ],
  },
  {
    category: "Libraries & Tools",
    icon: "◉",
    accent: "#ff6b6b",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Tailwind CSS" },
      { name: "Figma" },
    ],
  },
];

// ─── Skill Pill ───────────────────────────────────────────────────────────────

const SkillPill: React.FC<{ name: string; accent: string; delay: number }> = ({
  name,
  accent,
  delay,
}) => (
  <motion.span
    variants={fadeIn("up", "spring", delay, 0.5)}
    whileHover={{ scale: 1.06, y: -2 }}
    className="inline-flex cursor-default items-center rounded-full border px-4 py-1.5 text-[13px] font-medium text-white transition-all duration-200"
    style={{
      borderColor: `${accent}40`,
      backgroundColor: `${accent}12`,
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = `${accent}90`;
      (e.currentTarget as HTMLElement).style.backgroundColor = `${accent}22`;
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`;
      (e.currentTarget as HTMLElement).style.backgroundColor = `${accent}12`;
    }}
  >
    {name}
  </motion.span>
);

// ─── Category Card ────────────────────────────────────────────────────────────

const CategoryCard: React.FC<{ item: TSkillCategory; index: number }> = ({
  item,
  index,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-black-200 flex w-full flex-col gap-5 rounded-2xl p-7"
  >
    {/* Header row */}
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-[16px] font-black"
        style={{
          backgroundColor: `${item.accent}18`,
          color: item.accent,
          border: `1px solid ${item.accent}35`,
        }}
      >
        {item.icon}
      </div>
      <div>
        <p
          className="text-[13px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: item.accent }}
        >
          {item.category}
        </p>
        <p className="text-secondary text-[11px]">
          {item.skills.length} technologies
        </p>
      </div>
    </div>

    {/* Divider */}
    <div
      className="h-px w-full"
      style={{ backgroundColor: `${item.accent}20` }}
    />

    {/* Pills */}
    <div className="flex flex-wrap gap-2">
      {item.skills.map((skill, i) => (
        <SkillPill
          key={skill.name}
          name={skill.name}
          accent={item.accent}
          delay={index * 0.1 + i * 0.05}
        />
      ))}
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

const Skills = () => {
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <div className={`${styles.padding} mt-12`} id="skills">
      {/* Section header */}
      <motion.div variants={textVariant()}>
        <Header useMotion={true} {...config.sections.skills} />
      </motion.div>

      {/* Stats bar */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.8)}
        className="bg-black-200 mt-10 border flex flex-wrap items-center justify-around gap-6 rounded-2xl px-8 py-5"
      >
        {skillCategories.map((cat) => (
          <div key={cat.category} className="flex flex-col  items-center gap-1">
            <span
              className="text-[28px] font-black leading-none"
              style={{ color: cat.accent }}
            >
              {cat.skills.length}
            </span>
            <span className="text-secondary text-[11px] uppercase tracking-widest">
              {cat.category.split(" ")[0]}
            </span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[28px] font-black leading-none text-white">
            {totalSkills}
          </span>
          <span className="text-secondary text-[11px] uppercase tracking-widest">
            Total
          </span>
        </div>
      </motion.div>

      {/* Category cards grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((item, index) => (
            <div className="p-[2px] rounded-xl bg-gradient-to-b from-blue-500 to-purple-500">
  <div className="bg-black rounded-xl p-6">
          <CategoryCard key={item.category} item={item} index={index} />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills,"skills");