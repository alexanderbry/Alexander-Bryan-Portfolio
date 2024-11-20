import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-neutral-900 dark:border-white/[0.1] bg-white border border-neutral-200 justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300 space-y-2">
        <div className="flex items-center space-x-2">
          {icon && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ rotate: 360 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
          )}
          <div className="flex-1">
            <div className="font-sans font-bold text-neutral-800 dark:text-neutral-100 mb-1">
              {title}
            </div>
            <div className="font-sans text-neutral-600 text-sm dark:text-neutral-400">
              {description}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};