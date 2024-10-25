export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  tags: string[];
  salary: string;
  description: string;
  applications: string;
  jobType: string;
  experience: string;
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "UX/UI Designer",
    company: "Google",
    location: "Mountain View, California",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt. Nullam ut lacinia mauris. Nullam in nunc nec nunc ultricies fermentum. Nullam nec libero at odio ultricies lacinia. Nullam nec libero at odio ultricies lacinia. Nullam nec libero at odio ultricies lacinia.",
    applications: "1000+ Applications",
    jobType: "Full-time",
    experience: "5+ years",
    postedDate: "5min ago",
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Facebook",
    location: "Menlo Park, California",
    tags: ["On-site", "Full-time", "3+ years"],
    salary: "$110k - $140k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt. Nullam ut lacinia mauris. Nullam in nunc nec nunc ultricies fermentum.",
    applications: "500+ Applications",
    jobType: "Full-time",
    experience: "3+ years",
    postedDate: "1hr ago",
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "Amazon",
    location: "Seattle, Washington",
    tags: ["On-site", "Full-time", "4+ years"],
    salary: "$120k - $150k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "300+ Applications",
    jobType: "Full-time",
    experience: "4+ years",
    postedDate: "2hrs ago",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "Microsoft",
    location: "Redmond, Washington",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$130k - $160k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "800+ Applications",
    jobType: "Full-time",
    experience: "5+ years",
    postedDate: "3hrs ago",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: "Apple",
    location: "Cupertino, California",
    tags: ["On-site", "Full-time", "2+ years"],
    salary: "$90k - $110k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "200+ Applications",
    jobType: "Full-time",
    experience: "2+ years",
    postedDate: "4hrs ago",
  },
  {
    id: "6",
    title: "Sales Manager",
    company: "Salesforce",
    location: "San Francisco, California",
    tags: ["Remote", "Full-time", "6+ years"],
    salary: "$140k - $170k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "600+ Applications",
    jobType: "Full-time",
    experience: "6+ years",
    postedDate: "5hrs ago",
  },
  {
    id: "7",
    title: "Graphic Designer",
    company: "Adobe",
    location: "San Jose, California",
    tags: ["Remote", "Full-time", "3+ years"],
    salary: "$80k - $100k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "400+ Applications",
    jobType: "Full-time",
    experience: "3+ years",
    postedDate: "6hrs ago",
  },
  {
    id: "8",
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Los Gatos, California",
    tags: ["On-site", "Full-time", "4+ years"],
    salary: "$110k - $130k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "300+ Applications",
    jobType: "Full-time",
    experience: "4+ years",
    postedDate: "7hrs ago",
  },
  {
    id: "9",
    title: "IT Support Specialist",
    company: "Twitter",
    location: "San Francisco, California",
    tags: ["Remote", "Full-time", "2+ years"],
    salary: "$70k - $90k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "500+ Applications",
    jobType: "Full-time",
    experience: "2+ years",
    postedDate: "8hrs ago",
  },
  {
    id: "10",
    title: "Business Analyst",
    company: "Oracle",
    location: "Redwood City, California",
    tags: ["On-site", "Full-time", "3+ years"],
    salary: "$100k - $130k/yr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt.",
    applications: "350+ Applications",
    jobType: "Full-time",
    experience: "3+ years",
    postedDate: "9hrs ago",
  },
];
