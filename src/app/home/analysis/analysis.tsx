import React from "react";
import SectionTitle from  "../sharedComponents/sectionTitle"
import { Button1 } from "../hero/buttons";
import {
  fadeUpAnimation,
  SectionTitleAnimation,
} from "../animations/animations";
import AddActiveClassOnHover from "../animations/cursorHover";

interface ArticleCardProps {
  title: string;
  description: string;
  imgSrc: string;
}
const Analysis: React.FC = () => {
  return (
    <div className="container max-w-[1110px] pb-20">
      <SectionTitle
        title="Crypto Market Analysis"
        description="Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        animation={(ref) => SectionTitleAnimation(ref)}
        subAnimation={(ref) => fadeUpAnimation(ref, 0.2)}
      />
      <div className="grid grid-cols-2 gap-6">
        <ArticleCard
          title="How to Invest in Cryptocurrency"
          description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
          imgSrc="bg-happy-man"
        />
        <ArticleCard
          title="Gain the best exchange"
          description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
          imgSrc="bg-happy-man"
        />
        <ArticleCard
          title="Reduce your loosing"
          description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
          imgSrc="bg-happy-man"
        />
        <ArticleCard
          title="Win 50-50 trading strategy"
          description="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
          imgSrc="bg-happy-man"
        />
      </div>

      <div className="flex justify-center mt-[60px]">
        <Button1 label="Enroll Now" outlineColor="web-red" />
      </div>
    </div>
  );
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imgSrc,
}: ArticleCardProps) => {
  return (
    <AddActiveClassOnHover>
    <div className="flex max-w-[540px] max-h-[160px] space-x-[30px] ">
      <div className="overflow-hidden">
      <img src={`/bg/${imgSrc}.png`} alt="happyMan" className=" hover:scale-105 transition-all duration-500 "></img>
      </div>
      <div className="flex flex-col">
        <div>
          <h2 className="text-white text-bold">{title}</h2>

          <p className="text-white text-[18px] opacity-60 mt-[12px]">
            {description}
          </p>
        </div>
        {/*
        <button className="border-none text-web-red text-[18px] mt-auto flex  ">
          Learn more
        </button>
        */}
      </div>
    </div>
    </AddActiveClassOnHover>
  );
};

export default Analysis;
