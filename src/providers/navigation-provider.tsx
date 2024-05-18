"use client";

// import LoaderSpinnerDemo from "@/app/LoaderSpinnerDemo";
import NavigationContext from "@/contexts/navigation-context";
import { useEffect, useTransition } from "react";
// import { usePathname, useRouter } from "@/lib/i18n";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { reuleaux } from "ldrs";
import { useTheme } from "next-themes";

reuleaux.register();

type NavigationProviderProps = {
  children?: React.ReactNode;
};

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    if (!isPending) {
      inAnimation();
    }
  }, [isPending]);

  return (
    <NavigationContext.Provider
      value={{
        almightyPush: (url: string) => {
          let myUrl = url.replace(/^\/+/, "");

          outAnimation().then(() => {
            window.location.href = `/${myUrl}`;
          });
        },
        push: (url: string) => {
          let myUrl = url.replace(/^\/+/, "");
          let myPathname = pathname.replace(/^\/+/, "");
          if (myPathname === myUrl) return;

          outAnimation().then(() => {
            startTransition(() => {
              router.push(`/${myUrl}`);
            });
          });
        },
      }}
    >
      <div className="pointer-events-none flex items-center justify-center w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-[9999]">
        <div id="spinner" className="z-[1000000] text-white">
          {/* <LoaderSpinnerDemo /> */}
          <l-reuleaux
            size="45"
            stroke="5"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.2"
            color={theme === "dark" ? "black" : "white"}
          ></l-reuleaux>
        </div>
        <div
          id="banner-1"
          className="min-h-screen bg-foreground z-10 fixed top-0 left-0 w-full"
        />
        {/* <div
          id="banner-2"
          className="min-h-screen bg-foreground z-10 fixed top-0 left-1/4 w-1/4"
        />
        <div
          id="banner-3"
          className="min-h-screen bg-foreground z-10 fixed top-0 left-2/4 w-1/4"
        />
        <div
          id="banner-4"
          className="min-h-screen bg-foreground z-10 fixed top-0 left-3/4 w-1/4"
        /> */}
      </div>
      <div>{children}</div>
    </NavigationContext.Provider>
  );
}

function outAnimation() {
  return new Promise((resolve) => {
    document.body.classList.add("stop-scrolling");
    const spinner = document.getElementById("spinner");
    const tl = gsap.timeline();
    tl.fromTo(
      spinner,
      {
        duration: 0.3,
        opacity: 0,
      },
      { duration: 0.3, opacity: 1, ease: "power2.in" }
    );
    const bannerOne = document.getElementById("banner-1");
    // const bannerTwo = document.getElementById("banner-2");
    // const bannerThree = document.getElementById("banner-3");
    // const bannerFour = document.getElementById("banner-4");

    if (bannerOne) {
      const tl = gsap.timeline();

      tl.set([bannerOne], {
        yPercent: -100,
      }).to([bannerOne], {
        yPercent: 0,
        stagger: 0.2,
        onComplete: () => {
          resolve("done");
        },
      });
    }
  });
}

function inAnimation() {
  document.body.classList.add("stop-scrolling");
  const spinner = document.getElementById("spinner");
  const tl = gsap.timeline();
  tl.fromTo(
    spinner,
    {
      duration: 0.3,
      opacity: 1,
    },
    { duration: 0.3, opacity: 0, ease: "power2.out" }
  );
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set([bannerOne], {
      yPercent: 0,
    }).to([bannerOne], {
      yPercent: -100,
      stagger: 0.2,
      onComplete: () => {
        document.body.classList.remove("stop-scrolling");
      },
    });
  }
}
