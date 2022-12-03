import routes from "../navigation/routes";
import colors from "./colors";

export default  [
    {
      title: "Your Basic Details",
      subtitle:
        "Make a great first impression by presenting yourself in few sentences.",
      icon: {
        name: "account",
        backgroundColor: colors.accent,
      },
      targetScreen: routes.editBasicDetailScreen,
    },
    {
      title: "Professional Summary",
      subtitle:
        "Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly\
         - your biggest achievements, best qualities and skills.",
      icon: {
        name: "account-hard-hat",
        backgroundColor: colors.accent,
      },
      targetScreen: routes.editSummaryScreen,
    },
    {
      title: "Education",
      subtitle:
        "Show off your primary education, college degrees & exchange semesters.",
      icon: {
        name: "bank",
        backgroundColor: colors.accent,
      },
      targetScreen: routes.editEducationScreen,
    },
    {
      title: "Skills",
      subtitle: "List your technical, managerial or soft skills in this section.",
      icon: {
        name: "radar",
        backgroundColor: colors.accent,
      },
      targetScreen: routes.editSkillScreen,
    },
    {
      title: "Experience",
      subtitle:
        "A place to highlight your professional experience - including internships.",
      icon: {
        name: "purse",
        backgroundColor: colors.accent,
      },
      targetScreen: routes.editExprienceScreen,
    },
    {
      title: "Project",
      subtitle:
        "Worked on a particular challenging project in the past? Mention it here.",
      icon: {
        name: "folder-check",
        backgroundColor: colors.accent,
      },
      targetScreen: routes.editProjectScreen,
    },
  
    {
      title: "Awards",
      subtitle:
        "Awards like student competitions or industry accolades belong here.",
      icon: {
        name: "certificate",
        backgroundColor: colors.accent,
      },
      targetScreen: routes.editAwardScreen,
    },

    {
      title: "Courses",
      subtitle:
        "Did you complete MOOCs or an evening course? Show them off in this section.",
      icon: {
        name: "book-check",
        backgroundColor: colors.accent,
      },
      // targetScreen: routes.MESSAGES,
    },
    {
      title: "References",
      subtitle:
        "If you have former colleagues or bosses that vouch for you, list them.",
      icon: {
        name: "account-hard-hat",
        backgroundColor: colors.accent,
      },
      // targetScreen: routes.MESSAGES,
    },
  ];