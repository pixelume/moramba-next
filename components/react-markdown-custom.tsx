import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface ReactMarkdownCustomProps {
  children: string;
}

export const ReactMarkdownCustom = ({ children }:ReactMarkdownCustomProps) => {
  return (
    <ReactMarkdown
        components={{
            h3: ({node, ...props}) => <h3 className="text-xl font-bold" {...props} />,
        }}
    >
        {children}
    </ReactMarkdown>
  );
};