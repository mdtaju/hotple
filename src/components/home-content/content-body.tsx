import { dataArray } from "@/utils/demo-data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "../ui/card/card";

// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
export default function ContentBody() {
  return (
    <div className="w-full" style={{ marginTop: "1rem" }}>
      {/* <div className="w-fit mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 2xl:columns-5 gap-x-2 gap-y-4 px-0 sm:px-4"> */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          200: 1,
          320: 2,
          560: 3,
          900: 3,
          1124: 4,
          1440: 5,
        }}>
        <Masonry gutter="10px">
          {dataArray.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {/* </div> */}
    </div>
  );
}
