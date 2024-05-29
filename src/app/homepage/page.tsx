import Image from "next/image";
import { Button, buttonVariants } from "../../components/ui/button";
import Home from "../page";
import Navbar2 from "../(component)/navbar2";
import NavbarHome from "..//(component)/navbarhome";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Homepage() {
  return (
    <main className="justify-between">
      <img
        src="gym_bro2.png"
        className="background-image"
        alt="Background Image"
      />
      <NavbarHome />
      <div className="flex flex-col m-20 space-y-4">
        <h1 className="text-3xl font-bold font-sans">Program Offers</h1>
        <div className="flex justify-between">
          <Button
            className={buttonVariants({ size: "categ", variant: "category" })}
          >
            <div className="flex items-center space-x-2">
              <img
                src="body_building.png"
                className="h-5 w-5"
                alt="Body Building"
              />
              <h3>Body Building</h3>
            </div>
          </Button>
        </div>
        <div className="">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-11/12 h-11/12"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="flex bg-customGray2 rounded-3xl">
                    <img src="gananwo.png" className="w-52 h-72 mt-4" />
                    <CardContent className="flex">
                      <div className=" text-gray-300 mt-10 text-3xl font-bold">
                        Gananwo
                        <div className="text-sm font-normal ml-0.5 mt-0.5">
                          Personal Trainer
                          <div className="text-xs font-normal mt-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati quibusdam saepe optio odit dicta
                            quod facilis blanditiis, eaque veritatis eos
                            repudiandae sint ex a odio animi. Sit doloribus
                            accusantium at?
                            <div className="ml-72 mt-8 font-normal">
                              <Button
                                className={buttonVariants({
                                  size: "book",
                                  variant: "book_button",
                                })}
                              >
                                Book
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col m-20 space-y-4">
        <div className="flex justify-between -mt-6">
          <Button
            className={buttonVariants({ size: "categ", variant: "category" })}
          >
            <div className="flex items-center space-x-2">
              <img
                src="weight_loss.png"
                className="h-5 w-5"
                alt="Weight Loss Image"
              />
              <h3>Weight Loss</h3>
            </div>
          </Button>
        </div>
        <div className="">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-11/12"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="flex bg-customGray2 rounded-3xl">
                    <img src="gananwo.png" className="w-52 h-72 mt-4" />
                    <CardContent className="flex">
                      <div className=" text-gray-300 mt-10 text-3xl font-bold">
                        Gananwo
                        <div className="text-sm font-normal ml-0.5 mt-0.5">
                          Personal Trainer
                          <div className="text-xs font-normal mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati quibusdam saepe optio odit dicta
                            quod facilis blanditiis, eaque veritatis eos
                            repudiandae sint ex a odio animi. Sit doloribus
                            accusantium at?
                            <div className="ml-72 mt-12 font-normal">
                              <Button
                                className={buttonVariants({
                                  size: "book",
                                  variant: "book_button",
                                })}
                              >
                                Book
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col m-20 space-y-4">
        <div className="flex justify-between -mt-6">
          <Button
            className={buttonVariants({ size: "categ", variant: "category" })}
          >
            <div className="flex items-center space-x-2">
              <img
                src="yoga_class.png"
                className="h-5 w-5"
                alt="Yoga Class Image"
              />
              <h3>Yoga Class</h3>
            </div>
          </Button>
        </div>
        <div className="">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-11/12"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="flex bg-customGray2 rounded-3xl">
                    <img src="gananwo.png" className="w-52 h-72 mt-4" />
                    <CardContent className="flex">
                      <div className=" text-gray-300 mt-10 text-3xl font-bold">
                        Gananwo
                        <div className="text-sm font-normal ml-0.5 mt-0.5">
                          Personal Trainer
                          <div className="text-xs font-normal mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati quibusdam saepe optio odit dicta
                            quod facilis blanditiis, eaque veritatis eos
                            repudiandae sint ex a odio animi. Sit doloribus
                            accusantium at?
                            <div className="ml-72 mt-12 font-normal">
                              <Button
                                className={buttonVariants({
                                  size: "book",
                                  variant: "book_button",
                                })}
                              >
                                Book
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
