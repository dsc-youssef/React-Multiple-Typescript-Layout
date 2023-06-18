// Dependencies
import { FC } from "react";

// Types
import { ErrorProps } from "@/interfaces/global/pages/Error";

const Error: FC<ErrorProps> = ({ error, reason }) => {
  return (
    <>
      {error + reason}
    </>
  )
}

export default Error;