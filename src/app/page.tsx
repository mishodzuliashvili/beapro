import Hero from "@/_components/marketing/hero";
import { TracingBeam } from "@/_components/ui/tracing-beam";
import getCurrentUser from "@/actions/user/current/get";
import db from "@/lib/db";
import { Button, Image } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { BsBarChartSteps } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdCenterFocusWeak, MdOutlineGamepad } from "react-icons/md";
import { PiShootingStarThin } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { TfiTarget } from "react-icons/tfi";
import { WiStars } from "react-icons/wi";

type HomePageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function HomePage({
  params,
  searchParams,
}: HomePageProps) {
  const user = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <>
      <TracingBeam>
        <div className="antialiased pt-4 relative">
          <Hero />
          <div className="container relative mt-20">
            <div className="hidden md:block absolute translate-y-[-130px] left-[95%] translate-x-[-100%] z-10 text-foreground">
              <p className="">Demo</p>
              <svg
                viewBox="0 0 120 124"
                focusable="false"
                className="h-[70px] fill-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.5 106.5C79.3333 81 78.8935 57.3316 77 49.0001C74.5 38.0001 71 22.5001 42.5 17.5001"
                  // stroke="white"
                  className="stroke-foreground"
                  strokeWidth="2"
                ></path>
                <path
                  d="M55.5 87.5C56.5 91 52 108.5 52 108.5C52 108.5 61.7329 102.589 66.5 101C68 100.5 72 100 74.5 101"
                  // stroke="white"
                  className="stroke-foreground"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <img
              src="https://cdn.dribbble.com/users/1615584/screenshots/15016610/media/9550ad96f999b83dc6ca7aa75ce23f02.jpg"
              // src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/333285651/original/56024d63ace9244123b471379f9fb58f0d953e63/make-website-for-you.png"
              // src="https://cdn.dribbble.com/userupload/4260168/file/original-129e8cf04b9070d7859613ce26b5b413.jpg?resize=400x0"
              // src="https://www.southernliving.com/thmb/XOCPpFwcsQBZ7eYnSAD5h3NuALI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-735896407-2000-50ed94160ae543f3af9b378b6ef0656c.jpg"
              // src="https://media.discordapp.net/attachments/1034362489896452147/1240659322837667900/PXL_20240516_130956264.PORTRAIT.jpg?ex=6648af08&is=66475d88&hm=d078cb48ee53ad67cf068f24fbeccf7d0dec5fa64ead6726d9f609e41de3ebf6&=&format=webp&width=468&height=622"
              // src="https://tbiliselebi.ge/files/2024/03/27/10205/zura-gorgadze_w_h.jpeg"
              alt=""
              className="w-full rounded-lg object-cover h-[700px]"
            />
          </div>
          <div className="mt-20 container">
            <h3 className="text-4xl text-center mb-1 font-semibold">
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

          <div className="container mt-20 py-10 lg:py-14">
            <div className="relative p-3 sm:p-6 md:p-16">
              <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                  <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                    Why It Works
                  </h2>

                  <nav
                    className="grid gap-4 mt-5 md:mt-10"
                    aria-label="Tabs"
                    role="tablist"
                  >
                    <button
                      type="button"
                      className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active"
                      id="tabs-with-card-item-1"
                      data-hs-tab="#tabs-with-card-1"
                      aria-controls="tabs-with-card-1"
                      role="tab"
                    >
                      <span className="flex">
                        <BsBarChartSteps size={25} />
                        <span className="grow ms-6">
                          <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                            Reduces Overwhelm
                          </span>
                          <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                            Smaller steps make tasks less daunting, reducing
                            procrastination.
                          </span>
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
                      id="tabs-with-card-item-2"
                      data-hs-tab="#tabs-with-card-2"
                      aria-controls="tabs-with-card-2"
                      role="tab"
                    >
                      <span className="flex">
                        <MdCenterFocusWeak size={25} />
                        <span className="grow ms-6">
                          <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                            Maintains Focus
                          </span>
                          <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                            Regular check-ins keep you accountable and focused.
                          </span>
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
                      id="tabs-with-card-item-3"
                      data-hs-tab="#tabs-with-card-3"
                      aria-controls="tabs-with-card-3"
                      role="tab"
                    >
                      <span className="flex">
                        <TfiTarget size={25} />
                        <span className="grow ms-6">
                          <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                            Addresses Procrastination Causes
                          </span>
                          <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                            Tackles stress and anxiety by encouraging action.
                          </span>
                        </span>
                      </span>
                    </button>
                  </nav>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative">
                    <div>
                      <div
                        id="tabs-with-card-1"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-1"
                      >
                        <img
                          className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                          src="https://media.istockphoto.com/id/1291215867/vector/megaphone-with-speech-bubble-vector-illustration-template-for-business-promotion-advertising.jpg?s=612x612&w=0&k=20&c=ZrvOn_W_c4odDpwQ1Qt7ksRy8SIK65wKLsnoBVsKgGk="
                          // src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                          alt="Image Description"
                        />
                      </div>

                      <div
                        id="tabs-with-card-2"
                        className="hidden"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-2"
                      >
                        <img
                          className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                          src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                          alt="Image Description"
                        />
                      </div>

                      <div
                        id="tabs-with-card-3"
                        className="hidden"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-3"
                      >
                        <img
                          className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                          src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                          alt="Image Description"
                        />
                      </div>
                    </div>

                    <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                      <svg
                        className="w-16 h-auto text-primary"
                        width="121"
                        height="135"
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                          stroke="currentColor"
                          stroke-width="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                          stroke="currentColor"
                          stroke-width="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                          stroke="currentColor"
                          stroke-width="10"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 grid grid-cols-12 size-full">
                <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
              </div>
            </div>
          </div>

          <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <blockquote className="text-center lg:mx-auto lg:w-3/5">
              <span className="text-4xl font-semibold">What Our Users Say</span>

              <div className="mt-6 lg:mt-10">
                <p className="relative text-2xl md:leading-normal font-medium text-gray-800">
                  <svg
                    className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-neutral-700"
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="relative z-10 italic text-gray-800 dark:text-neutral-200">
                    As a software engineer, I often face complex tasks that can
                    easily lead to procrastination. Beapro turned my
                    overwhelming projects into smaller, manageable tasks with
                    realistic deadlines.
                  </span>
                </p>
              </div>

              <footer className="mt-6">
                <div className="font-semibold text-gray-800 dark:text-neutral-200">
                  Luka Gorgadze
                </div>
                <div className="text-sm text-gray-500 dark:text-neutral-500">
                  Software Engineer | Qunatori
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </TracingBeam>
    </>
  );
}
