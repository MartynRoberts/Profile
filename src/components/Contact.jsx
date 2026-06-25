import Input from "./UI/Input";
import { H2 } from "./UI/Header";
import Section from "./UI/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <H2 className="mb-12">Contact</H2>
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-lg leading-8 text-slate-600">
            Feel free to reach out if you would like to discuss an opportunity,
            ask a question, or find out more about my work.
          </p>
        </div>

        <form>
          <div className="space-y-5">
            <Input type="text" id="name" label="Name" placeholder="Your name" />
            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="your.email@example.com"
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-lg font-semibold text-slate-900"
              >
                Message
              </label>
              <textarea
                className="w-full resize-none px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 text-slate-900 bg-slate-100 px-4 py-3 rounded-xl"
                id="message"
                name="message"
                rows="5"
                placeholder="How can I help?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:underline focus:outline-none focus:ring-4 focus:ring-blue-400/30 hover:cursor-pointer"
            >
              Send Message
            </button>
            <h1>
              NEED TO PROCESS THE
              FORM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </h1>
          </div>
        </form>
      </div>
    </Section>
  );
}
