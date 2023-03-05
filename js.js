const posts = [
  {
    id: 30,
    title:
      "Tailwind CSS 3 tutorial - Upgrade to Tailwind 3 | Tailwind CSS Bangla Tutorial",
    description:
      "Tailwind CSS v3.0 came with incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features. In this tutorial - I have tried to explain different new features of Tailwind CSS version 3, how to install tailwind css 3, how to upgrade from tailwind v2 to v3 etc.",
    author: "Learn with Sumit",
    avatar: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "March 11, 2022",
    duration: "10:12",
    views: "7.3k",
    link: "https://www.youtube-nocookie.com/embed/4M7D3O2XX4o",
    thumbnail: "https://i3.ytimg.com/vi/4M7D3O2XX4o/maxresdefault.jpg",
    tags: ["tailwind", "css"],
    likes: 0,
    unlikes: 0,
  },
  {
    id: 15,
    title: "SASS Tutorial in English - Overview of SASS",
    description:
      "In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS & JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.",
    author: "Learn with Sumit",
    avatar: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "Nov 22, 2021",
    duration: "10:12",
    views: "1.5k",
    link: "https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA",
    thumbnail: "https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg",
    tags: ["sass", "css", "ui"],
    likes: 0,
    unlikes: 0,
  },
  {
    id: 70,
    title: "Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS",
    description:
      "Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I have explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways.",
    author: "Learn with Sumit",
    avatar: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "Oct 15, 2021",
    duration: "10:12",
    views: "1.2k",
    link: "https://www.youtube-nocookie.com/embed/smDa6hoxLKI",
    thumbnail: "https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg",
    tags: ["tailwind", "css", "ui"],
    likes: 0,
    unlikes: 0,
  },
];

posts.sort(
  (a, b) =>
    parseFloat(a.views.replace("k", "")) - parseFloat(b.views.replace("k", ""))
);

console.log(posts);
