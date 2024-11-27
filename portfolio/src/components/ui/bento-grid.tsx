import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[18rem]",
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
  background,
  linkTo,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  background?: string | React.ReactNode;
  linkTo?: string;
}) => {
  const router = useRouter();

  const nav = (link: string) => {
    router.push(link);
  };

  return (
    <motion.div
      onClick={() => {
        if (linkTo) {
          nav(linkTo);
        }
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 300,
        },
      }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-neutral-900 dark:border-white/[0.1] bg-white border border-neutral-200 justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
      style={{
        position: "relative",
      }}
    >
      {typeof background === "string" ? (
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
      ) : (
        <div className="absolute inset-0 z-0">{background}</div>
      )}

      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300 space-y-2 ">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4 ">
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileHover={{
                rotate: 360,
                scale: 1.1,
                transition: {
                  duration: 0.5,
                  type: "spring",
                },
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                },
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-14 h-14"
            >
              <div className="text-neutral-700 dark:text-neutral-300">
                {icon}
              </div>
            </motion.div>
          )}
          <div className="space-y-1 z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.3,
                },
              }}
            >
              <div className="font-sans font-bold text-neutral-800 dark:text-neutral-100 text-base leading-tight">
                {title}
              </div>
              <div className="font-sans text-neutral-700 dark:text-neutral-200 text-sm leading-tight">
                {description}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
