// Dependencies
import { FC } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Types
import { ErrorProps } from "@/interfaces/global/pages/Error";

const Error: FC<ErrorProps> = ({ error = "404", reason = "Page not found", previous = true }) => {
  const navigate = useNavigate();

  return (
    <section className="w-screen h-screen bg-gradient-to-tr from-dark to-slate-900 flex justify-center items-center flex-col">
      <h1 className="text-white font-medium text-8xl">{error}</h1>
      <h4 className="text-white font-medium text-3xl mt-10">{reason}</h4>
      {
        previous &&
        <button className="bg-gradient-to-tr from-sky-800 to-blue-900 text-white py-2 px-5 rounded mt-3 shadow uppercase text-sm font-semibold transition hover:-translate-y-2 hover:shadow-md" onClick={() => navigate(-1)}>Previous</button>
      }
    </section>
  )
}

export default Error;