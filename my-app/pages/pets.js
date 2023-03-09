import Image from "next/image";
import img from "../public/1.jpg";

function PetsPage() {
  return (
    <>
      <Image src={img} placeholder="blur" alt="" width="280" height="420" />

      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="" width="280" height="420" />
          </div>
        );
      })}
    </>
  );
}

export default PetsPage;
