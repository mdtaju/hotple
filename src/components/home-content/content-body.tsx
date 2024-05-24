import { dataArray } from "@/utils/demo-data";
import Image from "next/legacy/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
            <div key={i} className="home_content_list_item_container">
              {/* image container */}
              <div className="list_item_img_container">
                <Image
                  src={item.img_url}
                  alt={item.title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={item.img_url}
                  className="list_img"
                />
              </div>
              {/* info container */}
              <div
                style={{ padding: "0.5rem", paddingBottom: "0px" }}
                className="home_content_info_container">
                <h2>{item.title}</h2>
                {item.inclusions.length !== 0 && (
                  <div className="content_info_inclusions">
                    {item.inclusions.map((inc, i) => (
                      <span key={i}>✔ {inc}</span>
                    ))}
                  </div>
                )}
                <p>가격: {item.price}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {/* </div> */}
    </div>
  );
}
