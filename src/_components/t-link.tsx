"use client";
import useNavigation from "@/hooks/use-navigation";
import { Link, cn } from "@nextui-org/react";
import { ComponentProps, forwardRef } from "react";
// import
type TLinkProps = ComponentProps<typeof Link>;

const TLink = forwardRef<HTMLAnchorElement, TLinkProps>((props, ref) => {
  const { push } = useNavigation();
  const { href, className } = props;
  const handleClick = () => push(href || "");

  return (
    <Link
      {...props}
      ref={ref}
      className={cn(className, "cursor-pointer")}
      href={undefined}
      onClick={handleClick}
    />
  );
});

TLink.displayName = "TLink";

export default TLink;
