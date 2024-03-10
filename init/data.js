const sampleListings = [
    {
    title:"Backend Developer Internship",
    description:"Ratham | Hyderabad, India",
    image:"https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6472db72a5eeb48484425051/logo.jpg?d=1685249056541",
    price:"10K - 10K",
    location:"Hyderabad, India",
    duration:"5 Months",
    skills:"React.js | Angular | NodeJs | Golang | Redux",
    companyUrl:"https://www.linkedin.com/company/ratham/jobs/"
    },
      {
    title:"Frontend Developer Internship",
    description:"Ratham | Hyderabad, India",
    image:"https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6472db72a5eeb48484425051/logo.jpg?d=1685249056541",
    price:"10K - 10K",
    location:"Hyderabad, India",
    duration:"5 Months",
    skills:"React.js | Angular | NodeJs | Golang | Redux",
    companyUrl:"https://www.linkedin.com/company/ratham/jobs/"
    },
    {
    title:"Software Developer Internship",
    description:"EPVI | Gurugram, India",
    image:"https://media.licdn.com/dms/image/D4D0BAQHpVDkAKF9sxg/company-logo_100_100/0/1700292581878/epviindia_logo?e=1709769600&v=beta&t=O6Y17kOJvSsEHHUDHQiNvrq9NtXIacyhnSR73BnqxGA",
    price:" 5K - 5.5K",
    location:"Gurugram, India",
    duration:"2 Months",
    skills:"Elixir",
    companyUrl:"https://www.linkedin.com/company/epviindia/jobs/"
    },
    {
    title:"Fullstack Developer Internship",
    description:"Justmove.fun | Bangalore, India",
    image:"https://static.justmove.fun/media/icon/logo.webp",
    price:"25K - 35K",
    location:"Bangalore, India",
    duration:"2 Months",
    skills:"Javascript | Django | Computer Vision | Machine Learning | AWS",
    companyUrl:"https://www.linkedin.com/company/justmove-fun/jobs/"
    },
    {
    title:"Backend Developer Internship",
    description:"Secure Blink | India",
    image:"https://www.secureblink.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompany-logo.46a002dc.png&w=1080&q=75",
    price:"10K - 14K",
    location:"India",
    duration:"3-6 Months",
    skills:"ExpressJs | AWS | Docker | REST",
    companyUrl:"https://www.secureblink.com/careers"
    },
    {
    title:"Frontend Developer Internship",
    description:"eFeed | Pune, India",
    image:"https://www.efeed.in/static/media/logoFull_orange.01ce8f91aee2decbba6a6ca90acf97b6.svg",
    price:" 10K - 20K",
    location:"Pune, India",
    duration:"3 Months",
    skills:"Angular ",
    companyUrl:"https://www.efeed.in/job"
    },
    {
    title:"Software Development Engineer in Test (SDET) Internship",
    description:"Eight Network | Bangalore, India",
    image:"https://production-cuvette.s3.ap-south-1.amazonaws.com/company/613fa44683c4f428bad699db/logo.jpg?d=1673847737191",
    price:"25K - 25K",
    location:"Bangalore, India",
    duration:"6 Months",
    skills:"Kotlin | API | Android Studio | API testing",
    companyUrl:"https://www.eight.network/careers"
    },
    {
      title: "Technical Content Writer",
      description:
        "Ylytic",
      image:
        "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6299df285064709bd9c4365f/logo.jpg?d=1654278739536",
      price: "15K-20K",
      location: "pune,India",
      duration: "7 months",
      skills:" Canva | Content Marketing | Copywriting | Search Engine Optimization (SEO) ",
      companyUrl:"https://www.optiq.ai/careers"
    },
    {
      title: "Backend Developer Internship",
      description:
        "OptIQ.AI | Bangalore, India",
      image:
        "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/63e0a8eb1ec3c5cee2f77521/logo.jpg?d=1675667851931",
      price: "10K-20K",
      location: "Bangalore,India",
      duration: "3 months",
      skills:" JAVA | Python ",
      companyUrl:"https://www.optiq.ai/careers"
    },
    {
      title: "Machine Learning Internship",
      description:
        "C4Scale | Chennai, India",
      image:
        "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/61f0d48a596f0a35ef5fa51b/logo.jpg?d=1643173564378",
      price: " 5K - 5K",
      location: "Bangalore,India",
      duration: "3 months",
      skills:"Python | ComputerVision | Machine Learning | API",
      companyUrl:"https://www.optiq.ai/careers"
    },
    {
      title: "Fullstack Developer Internship",
      description:
        "Parinata Services Pvt Ltd | Bangalore",
      image:
        "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/64eed730135e16f8a19fa1bc/logo.jpg?d=1693374937508",
      price: " 7K - 10K",
      location: "Bangalore,India",
      duration: "6 months",
      skills: "HTML | CSS | JavaScript | React | Node.js | MongoDB",
      companyUrl:"https://www.optiq.ai/careers"
    },
    {
      title: "Mobile App Developer Internship",
      description:
        "Shivangani Logistics ",
      image:
        "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/64522f1b36833a699f47d4eb/logo.jpg?d=1683109130443",
      price: "12K-15K",
      location: "Kanpur Nagar, India",
      duration: "3 months",
      skills:" Javascript | HTML | CSS | Tailwind ",
      companyUrl:"https://www.optiq.ai/careers"
    },
    {
      title: "Wordpress Developer Internship",
        description:
          "IELTS Proficiency ",
        image:
          "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6436410e073da576d9c0ccf6/logo.jpg?d=1692356275131",
        price: " 5K - 5K",
        location: "  Amritsar, India",
        duration: "1 months",
        skills:" Wordpress" ,        
        companyUrl:"https://www.ieltsidpindia.com/information/careers"
      },
      {
      title:"Backend Developer Internship",
      description:"PeerXP | Bangalore, India",
      image:"https://production-cuvette.s3.ap-south-1.amazonaws.com/company/633c447c44248d525bc6cbb2/logo.jpg?d=1665001926102",
      price:"8K - 10K",
      location:"Bangalore, India",
      duration:"6 Months",
      skills:"Django | Python | PostgreSQL | REST API",
      companyUrl:"https://peerxp.com/careers/"
      },
      {
      title:"Fullstack Developer Internship",
      description:"Levitation | Noida, India",
      image:"https://production-cuvette.s3.ap-south-1.amazonaws.com/company/63ea4c54db33cd57dc92d72e/logo.jpg?d=1676299712154",
      price:" 12K - 15K",
      location:" Noida, India",
      duration:"4 Months",
      skills:"React.js | Javascript | Tailwind | NodeJs | Typescript",
      companyUrl:"https://www.linkedin.com/company/levitationinfotech/jobs/"
      },
         {
      title:"UI/UX Designer Internship",
      description:"bytebeam.io  | India",
      image:"https://assets-global.website-files.com/633ad33d5209928137088916/63901fe2c2a607773f1d62fe_Logo.svg",
      price:" 20K - 30K",
      location:"India",
      duration:"6 Months",
      skills:"Figma | Interaction design | Responsive Design",
      companyUrl:"https://bytebeam.io/careers"
      },
    {
      title:"Data Engineer Internship",
      description:"LT Partners | United States of America, USA",
      image:"https://production-cuvette.s3.ap-south-1.amazonaws.com/company/613fa45c83c4f428bad69c09/logo.jpg?d=1662459452041",
      price:" 80K - 83K",
      location:"United States of America, USA",
      duration:"6 Months",
      skills:"Python | SQL | Data Collection | Data Management | Data Modeling",
      companyUrl:"https://lt.partners/join-the-team/"
      },
  
];
  
  module.exports = { data: sampleListings };
  
  