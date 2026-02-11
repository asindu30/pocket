import styles from "./Skeleton.module.css";

interface SkeletonProps {
  variant?: "card" | "avatar" | "text" | "line";
  width?: string;
  height?: string;
  className?: string;
}

export default function Skeleton({
  variant = "text",
  width = "100%",
  height = "16px",
  className = "",
}: SkeletonProps) {
  const baseClasses = `${styles.skeleton} ${className}`;

  switch (variant) {
    case "avatar":
      return <div className={`${baseClasses} ${styles.avatar}`} />;
    case "card":
      return (
        <div className={`${styles.skeletonCard}`}>
          <div className={`${styles.avatar}`} />
          <div className={styles.content}>
            <div className={`${baseClasses} ${styles.line}`} style={{ width: "70%", height: "20px" }} />
            <div className={`${baseClasses} ${styles.line}`} style={{ width: "90%", height: "16px" }} />
          </div>
          <div className={`${baseClasses} ${styles.line}`} style={{ width: "100%", height: "16px" }} />
          <div className={`${baseClasses} ${styles.line}`} style={{ width: "100%", height: "16px" }} />
          <div className={`${baseClasses} ${styles.line}`} style={{ width: "60%", height: "16px" }} />
        </div>
      );
    case "line":
      return (
        <div className={`${baseClasses} ${styles.line}`} style={{ width, height }} />
      );
    default:
      return <div className={baseClasses} style={{ width, height }} />;
  }
}
