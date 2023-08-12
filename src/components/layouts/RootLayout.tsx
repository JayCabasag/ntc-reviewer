import { Outlet } from "react-router-dom";
import Navbar from "../compositions/navbar/navbar";

export default function Root() {
    return (
      <main className="h-screen">
        <Navbar />
        <section>
            <Outlet />
        </section>
      </main>
    );
  }