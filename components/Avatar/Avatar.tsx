import styles from "./Avatar.module.css"

interface AvatarProps {
  name: string
  size?: "sm" | "md" | "lg"
}

export default function Avatar({ name, size = "md" }: AvatarProps) {
  const getInitials = (name: string): string => {
    // Check if it's PascalCase (no spaces, has uppercase letters)
    if (!name.includes(" ") && /[a-z]/.test(name) && /[A-Z]/.test(name)) {
      // PascalCase: extract first 2 uppercase letters
      const uppercase = name.match(/[A-Z]/g)
      if (uppercase && uppercase.length >= 2) {
        return uppercase.slice(0, 2).join("")
      }
    }

    // Multi-word name: first letter of each word
    if (name.includes(" ")) {
      return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }

    // Single word: first letter
    return name.charAt(0).toUpperCase()
  }

  const initials = getInitials(name)

  return (
    <div className={`${styles.avatar} ${styles[size]}`} role="img" aria-label={name}>
      {initials}
    </div>
  )
}
