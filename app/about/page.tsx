"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";
export default function AboutPage() {
  let facts: string[] = [
    "The frequency that a cat's purr emits has healing properties.",
    "In a whole Chess game, there are more possible iterations (positions) of chess games than there are atoms in the observable universe.",
    "Although dogs have roughly double the number of neurons than cats, cats are smarter because they are smaller and don't require as many neurons to perform physical movement.",
    "Ice is frozen water.",
    "Chess is better than checkers.",
    "Chicken jockey is zombie on a chicken",
    "a Cats meow is not speaking with other cats, they developed it when humans domesticated them. They use it to attract attention.",
    "Homework fries my brain.",
    "Humans rely too much on the internet.",
    "A platyus is the only mammal that lays eggs.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me Images</h1>
      {/*images*/} {/*images*/}
      <div className="flex border">
        <div className="border">
          <p>My cat sitting at a fire place.</p>
          <img
            alt="cat at fireplace"
            height="300"
            src="/cat.jpeg"
            width="500"
          />
          <p>Was taken during a power outage in November.</p>
        </div>
        <div className="border">
          <p>snowy night in my yard.</p>
          <img alt="snowy night" height={300} src="/snow.jpeg" width="500" />
          <p>School was canceled this day 🙌</p>
        </div>
        <div className="border">
          <p>Rabbit at a art museum</p>
          <img
            alt="rabbit at an art exhibit"
            height={300}
            src="/rabbit.jpeg"
            width="500"
          />
        </div>
        <div className="border">
          <p>My cat on my bed.</p>
          <img alt="sleepy cat" height={300} src="/mew.jpeg" width="500" />
        </div>
        {/* Image of a relaxing image - Jacob */}
        <div className="border">
          <p>Relaxing image to look at</p>
          <img
            alt="relaxing"
            height={300}
            src="https://tse1.mm.bing.net/th/id/OIP.qeXol5vCr98lOo2fREfaIwHaFW?rs=1&pid=ImgDetMain"
            width={500}
          />
          {/*I tried fixing you're image size but it caused your website to glitch- Ankkitha*/}
        </div>
        {/* My code ends here - Jacob */} {/*My code ends here-Ankkitha*/}
      </div>
      <div className="flex-wrap">
        {/*links*/}
        <h4 className={title()}>Links</h4>
        <div className="border">
          <div className="underline text-red-300">
            <a href="https://store.steampowered.com/">steam</a>
          </div>
          <p>Steam is a platform that is used for gaming.</p>
        </div>
        <div className="underline text-yellow-300 border">
          <a href="https://m365.cloud.microsoft/?auth=2">office 365</a>
        </div>
        <div className="underline text-blue-200 border">
          <a href="https://www.nytimes.com/crosswords">nytimes games</a>
        </div>
        <div className="underline text-green-300 border">
          <a href="https://issaquah.instructure.com/courses">canvas</a>
        </div>
      </div>
      <Button
        className="bg-green-800 text-white"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 fact
      </Button>
      <p>{fact}</p>
    </div>
  );
}
