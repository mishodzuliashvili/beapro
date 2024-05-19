import getCurrentUser from "@/actions/user/current/get";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { GrProjects } from "react-icons/gr";
import { IoChatboxOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { DateRangePicker } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { RiSendPlane2Line } from "react-icons/ri";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import TLink from "@/_components/t-link";
type AIPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

async function run(formData: FormData) {
  "use server";
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = formData.get("prompt") as string;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  // console.log(text);
  return text;
}

export default async function AIPage({ params, searchParams }: AIPageProps) {
  // const text = await run();
  const user = await getCurrentUser();

  return (
    <>
      <div className="container flex mt-10">
        <TLink
          href="/dashboard"
          className="text-gray-600 group flex items-center gap-2 relative text-lg hover:text-primary"
        >
          <BsArrowLeft
            className="group-hover:translate-x-[-5px] relative duration-200"
            size={22}
          />{" "}
          <span>Back to dashboard</span>
        </TLink>
      </div>
      <div className="container mt-20">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-black via-violet-500 from-15% to-blue-500 inline-block text-transparent bg-clip-text">
            Hello, {user?.name.split(" ")[0]} welcome to your chat
          </h1>
          <p className="mt-4 text-gray-600 text-xl">
            You can enter yout big project here and AI will help you to generate
            the content.
          </p>
        </div>
      </div>
      <div className="container mt-10">
        <ol className="flex items-center max-w-sm w-full mx-auto">
          <li className="flex w-full items-center text-primary dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-primary/10 after:border-4 after:inline-block dark:after:border-blue-800">
            <span className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <IoChatbubbleEllipsesOutline size={22} />
            </span>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <GrProjects />
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <IoMdDoneAll size={22} />
            </span>
          </li>
        </ol>
      </div>
      <form className="container mt-10 flex flex-col items-start gap-5">
        {/* enter duration also we should now something about user from quiz or anything else from bio and etc whenr
         registered he or she should enter his own information */}
        <Textarea
          label="Describe your big project here"
          placeholder="Enter something..."
          size="lg"
        />
        <div className="flex items-center justify-between w-full">
          <DateRangePicker
            size="lg"
            label="Enter your project duration"
            className="max-w-xs"
          />
          <Button isIconOnly color="primary" size="lg">
            <RiSendPlane2Line size={22} />
          </Button>
        </div>
      </form>
      {/* <form action={run}>
        <button type="submit">Submit</button>
        <input type="text" className="bg-green" name="prompt" />
      </form> */}
    </>
  );
}
