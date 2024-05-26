import { SVGProps } from "react";

export function LoginIcon(props : SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17"
        stroke={props.color || "#000000"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12H14M14 12L11 9M14 12L11 15"
        stroke={props.color || "#000000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
