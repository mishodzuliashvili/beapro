import { GeminiEffectHero } from "@/_components/gemini-effect-hero";
import Hero from "@/_components/marketing/hero";
import { BackgroundBeams } from "@/_components/ui/background-beams";
import { TracingBeam } from "@/_components/ui/tracing-beam";
import getCurrentUser from "@/actions/user/current/get";
import { Image } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { BsBarChartSteps } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { MdCenterFocusWeak, MdOutlineGamepad } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { TfiTarget } from "react-icons/tfi";

type HomePageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamic = "force-dynamic";

export default async function HomePage({
  params,
  searchParams,
}: HomePageProps) {
  const user = await getCurrentUser();
  if (user) {
    return redirect("/dashboard");
  }
  return (
    <>
      <>
        <div className="antialiased pt-4 relative">
          <Hero />

          <div className="mt-20 container">
            <h3 className="text-4xl text-center mb-4 font-semibold">
              Features
            </h3>
            <p className="max-w-screen-sm text-center text-gray-600 mx-auto mb-10">
              Enter your big project, and our AI will automatically split it
              into smaller, more manageable tasks to help you stay on track.
            </p>
            <nav
              className="max-w-6xl mx-auto grid sm:flex gap-y-4 sm:gap-y-0 sm:gap-x-4"
              aria-label="Tabs"
              role="tablist"
            >
              <div
                className="text-center hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col items-center bg-gray-100 p-3 py-10 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 active"
                id="tabs-with-card-item-1"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <FaTasks size={25} className="text-primary" />
                <span className="mt-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Task Breakdown
                  </span>
                  <span className="mt-2 text-gray-600 dark:text-neutral-200">
                    Enter your big project, and our AI will split it into
                    smaller, manageable tasks.
                  </span>
                </span>
              </div>

              <div
                className="text-center hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col items-center bg-gray-100 p-3 py-10 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800"
                id="tabs-with-card-item-2"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <TbReportAnalytics size={25} className="text-primary" />
                <span className="mt-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Reports and Check-ins
                  </span>
                  <span className="mt-2 text-gray-600 dark:text-neutral-200">
                    Submit reports for each deadline and receive regular
                    reminders.
                  </span>
                </span>
              </div>

              <div
                className="text-center hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col items-center bg-gray-100 p-3 py-10 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800"
                id="tabs-with-card-item-3"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <MdOutlineGamepad size={25} className="text-primary" />
                <span className="mt-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Gamification
                  </span>
                  <span className="mt-2 text-gray-600 dark:text-neutral-200">
                    Earn rewards and badges for completing tasks and staying on
                    track.
                  </span>
                </span>
              </div>
            </nav>
          </div>
          <section className="relative py-10 sm:py-16 lg:py-24 container">
            <div>
              <div className="max-w-2xl mx-auto text-center ">
                <h2 className="text-4xl text-foreground font-semibold mx-auto">
                  How it works?
                </h2>
                <p className="max-w-2xl mx-auto mt-4 text-base opacity-60 leading-relaxed">
                  Create an account and add information about yourself. Submit
                  reports for each deadline and receive regular reminders.
                </p>
              </div>

              <div className="relative mt-12 lg:mt-20">
                <div className="absolute  inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                  <img
                    alt=""
                    loading="lazy"
                    width="1000"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-full z-50"
                    // style="color:transparent"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                  />
                </div>
                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12 ">
                  <div className="">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary text-white rounded-full">
                      <span className="font-semibold">1</span>
                    </div>
                    <h3 className="mt-6 font-semibold leading-tight md:mt-10">
                      Create account
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Create an account and add information about yourself.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-full">
                      <span className="font-semibold">2</span>
                    </div>
                    <h3 className="mt-6 text font-semibold leading-tight md:mt-10">
                      Ask AI for Project
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Enter your big project, and our AI will split it into
                      smaller, manageable tasks.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-full">
                      <span className="font-semibold">3</span>
                    </div>
                    <h3 className="mt-6 font-semibold leading-tight md:mt-10">
                      Make Progress
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Submit reports for each deadline and receive regular
                      reminders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"></div>
          </section>

          <div className="container mt-20">
            <div className=" py-10 lg:py-14 bg-gray-100 text-center rounded-lg px-6">
              {" "}
              <h2 className="text-4xl text-gray-800 font-bold dark:text-neutral-200">
                Why It Works
              </h2>
              <p className="max-w-screen-sm text-center mt-5 text-gray-600 mx-auto mb-10">
                Smaller steps make tasks less daunting, reducing
                procrastination. Tackles stress and anxiety by encouraging
                action.
              </p>
              <nav
                className="grid md:grid-cols-3 gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <div>
                  <span className="flex flex-col items-center gap-4">
                    <BsBarChartSteps size={25} className="text-primary" />
                    <span className="grow ms-6">
                      <span className="block font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Reduces Overwhelm
                      </span>
                      <span className="block mt-1 text-gray-600 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Smaller steps make tasks less daunting, reducing
                        procrastination.
                      </span>
                    </span>
                  </span>
                </div>

                <div>
                  <span className="flex flex-col items-center gap-4">
                    <MdCenterFocusWeak size={25} className="text-primary" />
                    <span className="grow ms-6">
                      <span className="block font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Maintains Focus
                      </span>
                      <span className="block mt-1 text-gray-600 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Regular check-ins keep you accountable and focused.
                      </span>
                    </span>
                  </span>
                </div>

                <div>
                  <span className="flex flex-col items-center gap-4">
                    <TfiTarget size={25} className="text-primary" />
                    <span className="grow ms-6">
                      <span className="block font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Addresses Procrastination Causes
                      </span>
                      <span className="block mt-1 text-gray-600 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Tackles stress and anxiety by encouraging action.
                      </span>
                    </span>
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
