import { huongDanVideos } from "@/lib/data/product";

export default function Page() {
  return (
    <div className="flex flex-col gap-12 items-center mt-8">
      {huongDanVideos.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-start gap-8 w-full max-w-6xl"
        >
          <div className="w-full md:w-1/2">
            <video
              src={item.videoSrc}
              controls
              className="rounded-lg shadow-lg w-full h-max object-cover"
            ></video>
          </div>

          <div className="flex items-start justify-start w-full md:w-1/2 text-justify flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold whitespace-pre-wrap">
              {item.title}
            </h1>
            <p className="text-base md:text-xl whitespace-pre-wrap">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
