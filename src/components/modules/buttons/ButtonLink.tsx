
import Button from "./Button";

export default function ButtonLink({ children, path, ...rest }: { path: string, children: string, styles?: string }) {
  return (
    <link href={path}>
      <Button {...rest}>
        {children}
      </Button>
    </link>


  )
}
