import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const newsItems = [
  {
    id: 1,
    title: "INFOGRAPHIC: What is the True Cost of Hiring?",
    image: "https://insightglobal.com/wp-content/uploads/2024/08/What-is-the-True-Cost-of-Hiring-1.png",
    author: {
      name: "Emilie Skaug",
      avatar: "https://insightglobal.com/wp-content/uploads/2024/08/about-me-picture-e1722610903938-150x150.jpg"
    },
    excerpt: "Learn more about the true cost of hiring as we provide a detailed breakdown of our infographic, which discusses hard and soft costs while providing tips on mitigating these expenses.",
    link: "https://insightglobal.com/blog/true-cost-of-hiring/"
  },
  {
    id: 2,
    title: "Staffing vs. Talent Solutions: Which is Right for You?",
    image: "https://insightglobal.com/wp-content/uploads/2024/07/Blog-Cover-Icon-no-Text-1-2.png",
    author: {
      name: "Anna Morelock",
      avatar: "https://insightglobal.com/wp-content/uploads/2023/01/author-150x150.jpg"
    },
    excerpt: "Recruiting, hiring, productivity, and retention are challenges every business faces. A staffing agency like Insight Global can help with all of them. The right approach depends on where your organization…",
    link: "https://insightglobal.com/blog/staffing-vs-talent-solutions/"
  },
  {
    id: 3,
    title: "How to Find Employees: The Complete Guide",
    image: "https://insightglobal.com/wp-content/uploads/2023/09/find-employee-guide-cover-3.png",
    author: {
      name: "Patrick Glynn",
      avatar: "https://insightglobal.com/wp-content/uploads/2024/12/IGLogoPFP.png"
    },
    excerpt: "With over 20 years in staffing, we've compiled tips and tricks to guide you on how to find the best employees for your business!",
    link: "https://insightglobal.com/guide/finding-employees-for-your-business/"
  },
  {
    id: 4,
    title: "Insight Global Recognized as 5th Largest US Staffing Firm in 2024",
    image: "https://insightglobal.com/wp-content/uploads/2024/07/Blog-Cover.png",
    author: {
      name: "Charlotte Pinckney",
      avatar: "https://insightglobal.com/wp-content/uploads/2021/11/logo.png"
    },
    excerpt: "The Atlanta-based firm continues to grow despite a challenging year for the staffing industry. Atlanta, GA – July 16, 2024 – Insight Global, an international staffing and professional services provider,…",
    link: "https://insightglobal.com/press-release/insight-global-recognized-as-5th-largest-us-staffing-firm-in-2024/"
  }
];

const News = () => {
  return (
    <section id="News-Feed" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">News</h2>
        <h3 className="text-2xl font-semibold mb-8 pl-5">Featured Stories</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="h-[250px] w-full overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                <div className="flex items-center space-x-2 mt-2">
                  <Avatar>
                    <img src={item.author.avatar} alt={item.author.name} />
                  </Avatar>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">By</span>
                    <span className="ml-1 text-sm font-medium">{item.author.name}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription>{item.excerpt}</CardDescription>
              </CardContent>
              
              <CardFooter className="mt-auto">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Read More →</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="/resources/" className="inline-block">
            <Button variant="outline" size="lg">View More</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;