import { Outlet } from "react-router-dom";
import Navbar from "../compositions/navbar/navbar";

export default function Root() {
    return (
      <main>
        <Navbar />
        <section>
            <Outlet />
        </section>
      </main>
    );
  }