import { huongDanVideos } from "@/lib/data/product"; 

export default function Page() {
  return (
    <div className="space-y-12">
      {huongDanVideos.map((item) => (
        <div key={item.id} className="text-center">
          <h1 className="text-5xl font-bold mb-6">{item.title}</h1>
          <video
            src={item.videoSrc}
            controls
            className="max-w-3xl mx-auto rounded-lg shadow-lg h-[400px] w-[400px]"
          ></video>
        </div>
      ))}
    </div>
  );
}
