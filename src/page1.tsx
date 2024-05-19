// "use client";
// import TLink from "@/_components/t-link";
// import { ContainerScroll } from "@/_components/ui/container-scroll-animation";
// import {
//   Avatar,
//   AvatarGroup,
//   Button,
//   Card,
//   CardBody,
//   Image,
// } from "@nextui-org/react";
// import { motion } from "framer-motion";
// import { FcGoogle } from "react-icons/fc";
// export default function Home() {
//   return (
//     <div>
//       <div
//         className="container text-center pt-20 pb-12 md:pb-16 flex items-center flex-col"
//         text-center
//       >
//         <h1 className="text-5xl sm:text-6xl font-semibold mb-4">
//           სიყვარული რომელიც გრძელდება
//         </h1>
//         <p className="text-lg sm:text-xl opacity-60 mb-8">
//           შემოუერთდი ჩვენ ქომუნითის და შეიძინე ახალი მეგობრები, უსაფრთხო,
//           მარტივი და ღირებული სერვისი.
//         </p>
//         <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-fit">
//           <Button color="primary" size="lg">
//             რეგისტრაცია
//           </Button>
//           <Button variant="bordered" size="lg">
//             დაგვეკონტაქტე{" "}
//           </Button>
//         </div>
//         <p className="text-sm opacity-60 mt-2">
//           თუ გსურს რეგისტრაციის გავლა.{" "}
//           <a className="underline font-semibold" href="/pricing">
//             ნახე ჩვენი წესები →
//           </a>
//         </p>
//       </div>
//       <div className="container relative">
//         <div className="hidden md:block absolute translate-y-[-130px] left-[95%] translate-x-[-100%] z-10 text-foreground">
//           <p className="">ნახე დემო</p>
//           <svg
//             viewBox="0 0 120 124"
//             focusable="false"
//             className="h-[70px] fill-none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M53.5 106.5C79.3333 81 78.8935 57.3316 77 49.0001C74.5 38.0001 71 22.5001 42.5 17.5001"
//               // stroke="white"
//               className="stroke-foreground"
//               strokeWidth="2"
//             ></path>
//             <path
//               d="M55.5 87.5C56.5 91 52 108.5 52 108.5C52 108.5 61.7329 102.589 66.5 101C68 100.5 72 100 74.5 101"
//               // stroke="white"
//               className="stroke-foreground"
//               strokeWidth="2"
//             ></path>
//           </svg>
//         </div>
//         <img
//           src="https://www.southernliving.com/thmb/XOCPpFwcsQBZ7eYnSAD5h3NuALI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-735896407-2000-50ed94160ae543f3af9b378b6ef0656c.jpg"
//           // src="https://media.discordapp.net/attachments/1034362489896452147/1240659322837667900/PXL_20240516_130956264.PORTRAIT.jpg?ex=6648af08&is=66475d88&hm=d078cb48ee53ad67cf068f24fbeccf7d0dec5fa64ead6726d9f609e41de3ebf6&=&format=webp&width=468&height=622"
//           // src="https://tbiliselebi.ge/files/2024/03/27/10205/zura-gorgadze_w_h.jpeg"
//           alt=""
//           className="w-full rounded-lg object-cover h-[700px]"
//         />
//       </div>

// <section className="relative py-10 sm:py-16 lg:py-24 container">
//   <div className="">
//     <div className="max-w-2xl mx-auto text-center">
//       <h2 className="text-4xl text-foreground font-extrabold mx-auto md:text-6xl lg:text-5xl">
//         როგორ მუშაობს?
//       </h2>
//       <p className="max-w-2xl mx-auto mt-4 text-base opacity-60 leading-relaxed md:text-2xl">
//         გაიცაინი როგორ მუშაობს წებსაიტი
//       </p>
//     </div>

//     <div className="relative mt-12 lg:mt-20">
//       <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
//         <img
//           alt=""
//           loading="lazy"
//           width="1000"
//           height="500"
//           decoding="async"
//           data-nimg="1"
//           className="w-full"
//           // style="color:transparent"
//           src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
//         />
//       </div>
//       <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
//         <div>
//           <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary text-white rounded-full">
//             <span className="text-xl font-semibold">1</span>
//           </div>
//           <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
//             შექმენი აქაუნთი
//           </h3>
//           <p className="mt-4 text-base opacity-60 md:text-lg">
//             შექმენი პროფილი და დაამატე ინფორმაცია შენს შესახებ.
//           </p>
//         </div>
//         <div>
//           <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-primary rounded-full">
//             <span className="text-xl font-semibold">2</span>
//           </div>
//           <h3 className="mt-6 text-xl text font-semibold leading-tight md:mt-10">
//             გააკეთე ქვიზი
//           </h3>
//           <p className="mt-4 text-base opacity-60 md:text-lg">
//             შეავსე ფორმა რომელიც მოგვაწვდის შესაბამის მაგალითს.
//           </p>
//         </div>
//         <div>
//           <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-primary rounded-full">
//             <span className="text-xl font-semibold">3</span>
//           </div>
//           <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
//             დაიწყე კონტაქტი
//           </h3>
//           <p className="mt-4 text-base opacity-60 md:text-lg">
//             შენ შეგიძლია გქონდეს კონტაქტი მხოლოდ ერთ ადამიანთან.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"></div>
// </section>
//       {/* <section cla></section> */}
//       {/* <section className="py-24 ">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
//             <div className="relative w-full text-center lg:w-2/4 mx-auto">
//               <h2 className="text-4xl font-bold leading-[3.25rem] lg:mb-6">
//                 რას გთავაზობთ საიტზე?
//               </h2>
//             </div>

//           </div>
//           <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
//             <div className="group text-center flex flex-col items-center relative w-full  rounded-2xl p-4 transition-all duration-300 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
//               <div className="bg-primary rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
//                 <svg
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="stroke-white"
//                 >
//                   <path
//                     d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
//                     stroke-width="2"
//                   ></path>
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold mb-3 capitalize transition-all duration-300 group-hover:text-white">
//                 Easy Payment
//               </h4>
//               <p className="text-sm font-normal opacity-60 transition-all duration-300 leading-5 group-hover:opacity-100">
//                 We Provide Various Methods For You To Carry Out All Transactions
//                 Related To Your Finances
//               </p>
//             </div>
//             <div className="group text-center flex flex-col items-center relative w-full  rounded-2xl p-4 transition-all duration-300 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
//               <div className="bg-primary rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
//                 <svg
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                   className="stroke-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold mb-3 capitalize transition-all duration-300 group-hover:text-white">
//                 უსაფრთხო გარემო
//               </h4>
//               <p className="text-sm font-normal opacity-60 transition-all duration-300 leading-5 group-hover:opacity-100">
//                 ჩვენ გვყავს ვერფიცირებული და სანდო მომხმარებლები.
//               </p>
//             </div>
//             <div className="group text-center flex flex-col items-center relative w-full  rounded-2xl p-4 transition-all duration-300 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
//               <div className="bg-primary rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
//                 <svg
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="stroke-white"
//                 >
//                   <path
//                     d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold mb-3 capitalize transition-all duration-300 group-hover:text-white">
//                 Fast Customer Service{" "}
//               </h4>
//               <p className="text-sm font-normal opacity-60 transition-all duration-300 leading-5 group-hover:opacity-100">
//                 Provide Customer Service For Those Of You Who Have Problems 24
//                 Hours A Week
//               </p>
//             </div>
//             <div className="group text-center flex flex-col items-center relative w-full  rounded-2xl p-4 transition-all duration-300 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
//               <div className="bg-primary rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
//                 <svg
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="stroke-white"
//                 >
//                   <path
//                     d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </div>
//               <h4 className="text-xl font-semibold mb-3 capitalize transition-all duration-300 group-hover:text-white">
//                 Quick Transaction
//               </h4>
//               <p className="text-sm font-normal opacity-60 transition-all duration-300 leading-5 group-hover:opacity-100">
//                 We provide faster transaction speeds than competitors, so money
//                 arrives and is received faster.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// }
