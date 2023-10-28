export type NavItem = {
  title: string;
  items?: NavItem[];
};

export const navItems: NavItem[] = [
  { title: "Funding" },
  { title: "Success Stories" },
  { title: "Partners" },
  {
    title: "About",
    items: [{ title: "About Us" }, { title: "Press" }, { title: "Career" }],
  },
  {
    title: "Resources",
    items: [{ title: "Blog" }, { title: "Founder Perks" }, { title: "FAQs" }],
  },
  { title: "Login" },
];
