import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  tag?: string;
}

export function PageHeader({ title, subtitle, tag }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
      {tag && (
        <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
          {tag}
        </span>
      )}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
