import Image from "next/image";
import "../globals.css";
import { Button } from "../../components/ui/button";

export default function Footers() {
  return (
    <main>
      <footer>
				<div className="flex flex-col items-center">
					<h3 className="mb-2">
						©Fitlink 2024
					</h3>
				</div>
			</footer>
    </main>
  );
}
