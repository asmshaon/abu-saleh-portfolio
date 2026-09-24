import { Fragment } from "react";

export function SlashList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-baseline gap-x-2 ${className}`}>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && (
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">
              /
            </span>
          )}
          <span>{item}</span>
        </Fragment>
      ))}
    </div>
  );
}
