import { RiTwitterXLine } from "react-icons/ri";
import TLink from "./t-link";
import { FaGithub } from "react-icons/fa";
import { GITHUB_LINK, TWITTER_LINK } from "@/lib/constants";
type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <>
      <footer className="container py-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          <div>
            <TLink
              className="flex-none text-xl font-semibold text-foreground"
              href=""
              aria-label="Brand"
            >
              Beapro
            </TLink>
          </div>

          <ul className="sm:text-center">
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                href="#features"
              >
                Features
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                href="#howitworks"
              >
                How it works?
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                href="#whyitworks"
              >
                Why it works?
              </a>
            </li>
          </ul>

          <div className="md:text-end space-x-2">
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href={TWITTER_LINK}
              target="_blank"
            >
              <RiTwitterXLine size={16} />
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href={GITHUB_LINK}
              target="_blank"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
