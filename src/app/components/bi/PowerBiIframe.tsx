import { IframeHTMLAttributes } from "react";

export default function PowerBiIframe({
  iframeAttr,
  title,
  src,
}: {
  iframeAttr?: IframeHTMLAttributes<HTMLIFrameElement>;
  title: string;
  src: string;
}) {
  // to-do: alterar depois
  return (
    <iframe
      title={title}
      {...iframeAttr}
      src={src}
      frameBorder="0"
      allowFullScreen={true}
      className="embed-container"
    />
  );
}
