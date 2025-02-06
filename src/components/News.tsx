import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const newsItems = [
  {
    id: 1,
    title: "INFOGRAPHIC: What is the True Cost of Hiring?",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: {
      name: "Emilie Skaug",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    },
    excerpt: "Learn more about the true cost of hiring as we provide a detailed breakdown of our infographic, which discusses hard and soft costs while providing tips on mitigating these expenses.",
    link: "/blog/true-cost-of-hiring/"
  },
  {
    id: 2,
    title: "Staffing vs. Talent Solutions: Which is Right for You?",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: {
      name: "Anna Morelock",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    excerpt: "Recruiting, hiring, productivity, and retention are challenges every business faces. A staffing agency like Workist For IT can help with all of them. The right approach depends on where your organization…",
    link: "/blog/staffing-vs-talent-solutions/"
  },
  {
    id: 3,
    title: "How to Find Employees: The Complete Guide",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    author: {
      name: "Patrick Glynn",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    },
    excerpt: "With over 20 years in staffing, we've compiled tips and tricks to guide you on how to find the best employees for your business!",
    link: "/guide/finding-employees-for-your-business/"
  },
  {
    id: 4,
    title: "Workist For IT Recognized as Leading IT Staffing Firm in 2024",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    author: {
      name: "Charlotte Pinckney",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150"
    },
    excerpt: "The tech-focused firm continues to grow despite a challenging year for the IT staffing industry. Workist For IT, a leading IT staffing and professional services provider, has been recognized...",
    link: "/press-release/workist-for-it-recognized-2024/"
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
              
              <CardContent className="bg-white">
                <CardDescription className="text-[#040842]">{item.excerpt}</CardDescription>
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