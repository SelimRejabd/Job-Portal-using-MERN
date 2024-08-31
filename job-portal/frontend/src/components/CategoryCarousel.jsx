// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const CategoryCarousel = () => {
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Data Scientist",
    "Data Analyst",
    "Business Analyst",
    "Product Manager",
    "DevOps Engineer",
    "Cloud Engineer",
  ];
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-5">
        <CarouselContent>
          {category.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
              <Button variant="outline" className="rounded-full">{category}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
