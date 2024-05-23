import Image from "next/legacy/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const dataArray: {
  title: string;
  img_url: string;
  price: number;
  inclusions: string[] | [];
}[] = [
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405230040/65339fcb58945ad13e139ba8dc3c0f86/1040g2sg31253et7tkc005noidspg8vubu1qvoj0!nd_dft_wlteh_webp_3",
    price: 1000,
    inclusions: ["Wi-Fi", "Breakfast", "Non-refundable"],
  },
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405231141/2a6c3ca4d6ff3c57eda2d36666435fbb/1040g2sg312g0oogomk0048c7a1f0njt2vic3jng!nd_dft_wlteh_webp_3",
    price: 750,
    inclusions: [],
  },
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405230040/65339fcb58945ad13e139ba8dc3c0f86/1040g2sg31253et7tkc005noidspg8vubu1qvoj0!nd_dft_wlteh_webp_3",
    price: 1200,
    inclusions: [],
  },
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405231157/4351907c7af2c4180de06b3011cc4226/1040g2sg312d7mke3m4005np70lo08c5jitbs2q0!nd_dft_wlteh_webp_3",
    price: 820,
    inclusions: ["Wi-Fi", "Breakfast"],
  },
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405231158/90b39e8d3a31ab3c541483e2186566e7/1040g2sg312rhcnbnk0905ph4v26hojs562i4u5g!nd_dft_wlteh_webp_3",
    price: 950,
    inclusions: ["Wi-Fi", "Breakfast", "Non-refundable"],
  },
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405231159/c7e34c28799b9655364da20bceef1246/1040g008312ri0pj8js105oda0t041omtdtn34s0!nd_dft_wlteh_webp_3",
    price: 1000,
    inclusions: ["Wi-Fi", "Non-refundable"],
  },
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405230040/65339fcb58945ad13e139ba8dc3c0f86/1040g2sg31253et7tkc005noidspg8vubu1qvoj0!nd_dft_wlteh_webp_3",
    price: 1300,
    inclusions: ["Wi-Fi", "Breakfast", "Non-refundable"],
  },
  {
    title: "디럭스룸 - 침대 2개",
    img_url:
      "https://sns-webpic-qc.xhscdn.com/202405231158/90b39e8d3a31ab3c541483e2186566e7/1040g2sg312rhcnbnk0905ph4v26hojs562i4u5g!nd_dft_wlteh_webp_3",
    price: 900,
    inclusions: ["Wi-Fi", "Breakfast", "Non-refundable"],
  },
];
// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
export default function ContentBody() {
  return (
    <div className="w-full">
      {/* <div className="w-fit mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 2xl:columns-5 gap-x-2 gap-y-4 px-0 sm:px-4"> */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 200: 1, 560: 2, 900: 3, 1124: 4, 1440: 5 }}>
        <Masonry>
          {dataArray.map((item, i) => (
            <div key={i} className="w-full max-w-[245px] mx-auto">
              {/* image container */}
              <div className="w-full h-[326px] rounded-[16px] overflow-hidden relative cursor-pointer list_item_img_container">
                <Image
                  src={item.img_url}
                  alt={item.title}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={item.img_url}
                  className="absolute w-full h-full object-cover object-center"
                />
              </div>
              {/* info container */}
              <div className="py-2 space-y-2">
                <h2 className="text-sm font-medium text-gray-800 dark:text-gray-300 line-clamp-2 cursor-pointer">
                  {item.title}
                </h2>
                {item.inclusions.length !== 0 && (
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {item.inclusions.map((inc, i) => (
                      <span key={i} className="text-xs font-medium">
                        ✔ {inc}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                  가격: {item.price}
                </p>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {/* </div> */}
    </div>
  );
}