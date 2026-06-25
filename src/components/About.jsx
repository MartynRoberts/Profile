import profileImage from "../assets/me.jpg";
import { H2 } from "./UI/Header";
import Section from "./UI/Section";

export default function About() {
  return (
    <Section
      id="about"
      className="grid sm:grid-cols-[3fr_2fr] md:grid-cols-[7fr_3fr] gap-12 relative"
    >
      <H2 className="order-2 sm:order-none sm:col-span-2 sm:row-start-1">
        About Me
      </H2>
      <div className="order-3 sm:order-none sm:col-start-1 sm:row-start-2 space-y-6 text-lg leading-8 text-slate-600">
        <p>
          Hey, my name is <b>Martyn</b>, an experienced developer with a history
          of delivering high-quality, performative web experiences.
        </p>

        <p>
          After a long productive career with the JD Outdoor retail team in Bury
          working on leading brands such as GO Outdoors, Blacks and Millets, I
          am now seeking new opportunities to leverage my skills and experience
          in a dynamic environment. My years of work have covered UI/UX design,
          development, and content management, and I am passionate about
          creating user-friendly interfaces that drive engagement and
          conversion. I enjoy working with React, Vite, and other cutting-edge
          technologies to create engaging solutions that deliver exceptional
          user experiences.
        </p>

        <p>
          Outside of coding I'm a busy parent, avid football fan and F1
          enthusiast and I do my best to keep active and enjoy running round my
          local area — more often than not in the rain and mud. I'm also on a
          side quest to help sustain our local hedgehog population, monitored
          with a slowly increasing number of feeding stations, hog houses and
          wildlife cameras.
        </p>
        <p>
          I have a track record of delivering results and was the trusted
          backbone of a successful ecommerce front-end development team for 10+
          years (with the references to back it up).
        </p>
        <p>
          If you are looking for someone that takes pride in the quality of
          their finished product, is a strong communicator, professional and
          easy going (we've all worked with developers who like to bring a{" "}
          <i>lot</i> of drama) then I might just be the new team member you're
          looking for.
        </p>
      </div>
      <img
        src={profileImage}
        alt="Profile"
        className="order-1 sm:order-none sm:col-start-2 sm:row-start-2 m-auto w-full  max-w-60 md:max-w-90 sm:m-0"
      />
    </Section>
  );
}
