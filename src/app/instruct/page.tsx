export default function Page() {
  const huongDanVideos = [
    {
      id: 1,
      title: "Hướng dẫn kỹ thuật cầu lông",
      videoSrc: "/videos/huong-dan-co-ban.mp4",
    },
    {
      id: 2,
      title: "hướng dẫn di chuyển",
      videoSrc: "/videos/huong-dan-di-chuyen.mp4",
    },
    {
      id: 3,
      title: "cách đập cầu cho người mới",
      videoSrc: "/videos/huong-dan-dap-cau.mp4",
    },
    // Thêm bao nhiêu cũng được nha!
  ];

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
