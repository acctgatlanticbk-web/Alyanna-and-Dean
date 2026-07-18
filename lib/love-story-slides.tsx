import React from "react"

export type LoveStorySlide = {
  theme: "light" | "light"
  layout: "image-left" | "image-right"
  title: string
  imageSrc: string
  text: React.ReactNode
}

export const LOVE_STORY_SLIDES: LoveStorySlide[] = [
  {
    theme: "light",
    layout: "image-left",
    title: "The Spark That Started It All",
    imageSrc: "/LoveStory/2018 Feb.JPG",
    text: (
      <>
        <p className="mb-4">
        Every great love story starts with a single moment that changes everything.

        <br />
For Alyanna & Dean, it all started with a simple hello in law school back in 2017.
What began as two classmates crossing paths soon became countless conversations, shared laughter, and a connection neither of them expected.
That quiet spark slowly grew into something extraordinary-the beginning of a love story that would last a lifetime.
        </p>
     
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "From Strangers to Sweethearts",
    imageSrc: "/LoveStory/2019 Jan.webp",
    text: (
      <>
        <p className="mb-4">
          Little by little, strangers became friends, and friends became something far more special.
        </p>
        <p className="mb-4">
          With every conversation and every shared laugh, Alyanna and Dean grew closer, building a
          bond that felt easy, warm, and undeniably right.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "Wanderlust and Warm Hearts",
    imageSrc: "/LoveStory/2019 July.webp",
    text: (
      <>
        <p>
          Some of the sweetest memories are made far from home, exploring new places side by side.
        </p>
        <p className="mb-4">
          For Alyanna and Dean, every trip became an adventure worth remembering, proof that home is
          simply wherever they are together.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "A Bond That Only Grew Deeper",
    imageSrc: "/LoveStory/2020 Jan.webp",
    text: (
      <>
        <p>Through the years, their love did not just last, it flourished.</p>
        <p className="mb-4">
          Every new season brought fresh adventures and quiet, steady moments that pulled Alyanna
          and Dean even closer together.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "A Sweet Glimpse of Forever",
    imageSrc: "/LoveStory/fake proposal 2020.webp",
    text: (
      <>
        <p>Long before the real question was asked, forever was already on their minds.</p>
        <p className="mb-4">
          Alyanna and Dean often pictured the day they would promise a lifetime to each other, a
          dream slowly taking shape with every year that passed.
        </p>
      </>
    ),
  },
  // {
  //   theme: "light",
  //   layout: "image-right",
  //   title: "Celebrating Every Beautiful Milestone",
  //   imageSrc: "/LoveStory/2021 Jan.webp",
  //   text: (
  //     <>
  //       <p>Life feels a little brighter when its biggest moments are shared with the right person.</p>
  //       <p className="mb-4">
  //         Alyanna and Dean made it a habit to celebrate every win together, no achievement ever felt
  //         small when the other was cheering nearby.
  //       </p>
  //     </>
  //   ),
  // },
  {
    theme: "light",
    layout: "image-left",
    title: "Proud of Every Step, Alyanna",
    imageSrc: "/LoveStory/Alyanna graduation 2021.webp",
    text: (
      <>
        <p>Hard work and quiet dedication finally paid off.</p>
        <p className="mb-4">
          Dean stood proudly beside Alyanna on this well earned day, one more memory added to the
          story they were building together.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "Another Milestone Achieved",
    imageSrc: "/LoveStory/Alyanna roll signing 2022.webp",
    text: (
      <>
        <p className="mb-4">
        A dream became reality as Dean officially joined the legal profession. Together, they celebrated another milestone in the life they were building side by side.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "Falling Deeper, One Day at a Time",
    imageSrc: "/LoveStory/2022 Dec.webp",
    text: (
      <>
        <p className="mb-4">
          What began as easy conversations slowly turned into something they both looked forward to
          every single day.
        </p>
        <p className="mb-4">
          Alyanna and Dean found comfort in each other, a quiet certainty that this connection was
          rare and worth holding on to.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "New Places, Same Sweet Company",
    imageSrc: "/LoveStory/2023 Dec.webp",
    text: (
      <>
        <p>No matter the destination, the best part of every journey was always each other.</p>
        <p className="mb-4">
          Alyanna and Dean chased new sights and cherished simple moments, learning that adventure
          is always sweeter when shared.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "Steady, Strong, and Still Growing",
    imageSrc: "/LoveStory/2024 Jan.webp",
    text: (
      <>
        <p>Their love was never rushed, it grew steadily, season after season.</p>
        <p className="mb-4">
          Every challenge faced together only proved to Alyanna and Dean how strong their bond truly
          was.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "Celebrating a Dream Fulfilled",
    imageSrc: "/LoveStory/Dean graduation 2024.JPG",
    text: (
      <>
        <p>Alyanna stood proudly beside Dean,
          celebrating the dedication, perseverance,
           and heart that made this achievement possible.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "Cheering Each Other On",
    imageSrc: "/LoveStory/2024 Oct.webp",
    text: (
      <>
        <p>Life feels a little brighter when its biggest moments are shared with the right person.</p>
        <p className="mb-4">
          Alyanna and Dean made it a habit to celebrate every win together, no achievement ever
          felt small when the other was cheering nearby.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "A New Year, A Deeper Love",
    imageSrc: "/LoveStory/2025 Jan.webp",
    text: (
      <>
        <p>Each new year brought its own quiet reminder of how far they had come.</p>
        <p className="mb-4">
          Alyanna and Dean welcomed every season with hope, growing more certain that they had found
          their forever person.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "Another Chapter, Another Dream Realized",
    imageSrc: "/LoveStory/Dean roll signing 2025.webp",
    text: (
      <>
        <p>A new page turned, and a dream became real.</p>
        <p className="mb-4">
          With Alyanna by his side, Dean took another confident step toward the future they had long
          imagined together.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "Milestones Made Sweeter Together",
    imageSrc: "/LoveStory/2025 Oct.png",
    text: (
      <>
        <p>Life feels a little brighter when its biggest moments are shared with the right person.</p>
        <p className="mb-4">
          Alyanna and Dean carried this belief through every season, celebrating one another with
          open hearts.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "Still Choosing Each Other",
    imageSrc: "/LoveStory/2026 Jan.webp",
    text: (
      <>
        <p className="mb-4">
          Years later, the spark that started it all had only grown warmer.
        </p>
        <p className="mb-4">
          Alyanna and Dean kept choosing each other, day after day, certain there was no one else
          they would rather share life with.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-right",
    title: "Together, Always the Better Adventure",
    imageSrc: "/LoveStory/2026 March.webp",
    text: (
      <>
        <p>No matter the destination, the best part of every journey was always each other.</p>
        <p className="mb-4">
          Alyanna and Dean continued to explore the world hand in hand, grateful that every road led
          them closer together.
        </p>
      </>
    ),
  },
  {
    theme: "light",
    layout: "image-left",
    title: "Yes, To Forever",
    imageSrc: "/LoveStory/real proposal 2026.webp",
    text: (
      <>
        <p>After years of love, laughter, and countless adventures, the moment finally arrived.</p>
        <p className="mb-4">
          Dean got down on one knee, and Alyanna said yes, sealing their promise to spend a lifetime
          together.
        </p>
      </>
    ),
  },
]
