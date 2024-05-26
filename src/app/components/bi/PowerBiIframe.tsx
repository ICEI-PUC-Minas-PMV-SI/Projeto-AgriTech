import { IframeHTMLAttributes } from "react";

export default function PowerBiIframe(props: IframeHTMLAttributes<HTMLIFrameElement>) {
  // to-do: alterar depois
  return (
    <iframe
      title="FORNECEDOR COMPRAS SET A DEZ 2023 ATT"
      {...props}
      src="https://app.powerbi.com/view?r=eyJrIjoiY2RlMWMzOTEtYTNkYi00MGZkLTlkOWItNDlmMGIzOWY2ZGYzIiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9"
      frameBorder="0"
      allowFullScreen={true}
      className="embed-container"
    />
  );
}
