"use client";

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useTheme } from './ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientMDXContent({ source }) {
  const { theme } = useTheme();
  
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 
            className={`text-3xl font-bold mt-8 mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2 
            className={`text-2xl font-bold mt-8 mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3 
            className={`text-xl font-bold mt-6 mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p 
            className={`my-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            {...props}
          />
        ),
        a: ({ node, href, children, ...props }) => (
          <Link 
            href={href || ''}
            className={`${theme === "dark" ? "text-amber-400 hover:text-amber-300" : "text-amber-600 hover:text-amber-800"}`}
            {...props}
          >
            {children}
          </Link>
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 my-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 my-4" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li 
            className={`mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            {...props}
          />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline ? (
            <pre className={`p-4 my-6 overflow-x-auto rounded-lg text-sm ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
              <code 
                className={className}
                {...props}
              >
                {children}
              </code>
            </pre>
          ) : (
            <code 
              className={`px-1 py-0.5 rounded-sm text-sm font-mono ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}
              {...props}
            >
              {children}
            </code>
          )
        },
        img: ({ node, src, alt, ...props }) => (
          <div className="my-6">
            <Image 
              src={src || ''}
              alt={alt || ''} 
              width={800} 
              height={500} 
              className="rounded-lg mx-auto"
              {...props}
            />
          </div>
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote 
            className={`border-l-4 pl-4 italic my-6 ${theme === "dark" ? "border-amber-500 text-gray-400" : "border-amber-600 text-gray-600"}`}
            {...props}
          />
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  );
}