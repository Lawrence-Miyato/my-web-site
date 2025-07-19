

import React from 'react';
import { CONTACT_INFO } from '@/lib/data/product';

export default function AboutPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Giới thiệu về chúng tôi 🏸</h1>

      <p className="mb-4">
        Chào mừng bạn đến với <strong>BadmintonStore.vn</strong> – nơi cung cấp đầy đủ các sản phẩm và phụ kiện dành cho người chơi cầu lông chuyên nghiệp và cả những bạn mới bắt đầu!
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🎯 Sứ mệnh của chúng tôi</h2>
      <p className="mb-4">
        Mang đến những sản phẩm chất lượng cao, giá cả hợp lý và dịch vụ tận tâm, giúp khách hàng nâng cao trải nghiệm thể thao và phong cách sống lành mạnh.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🛍️ Sản phẩm chúng tôi cung cấp</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Vợt cầu lông</strong>: Nhiều thương hiệu nổi tiếng như Yonex, Lining, Victor,...</li>
        <li><strong>Quần / Váy thể thao</strong>: Đủ size, thiết kế năng động, thoải mái.</li>
        <li><strong>Áo thể thao</strong>: Chất liệu thấm hút tốt, phong cách hiện đại.</li>
        <li><strong>Giày cầu lông</strong>: Êm ái, bám sân tốt, bảo vệ bàn chân khi thi đấu.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">💬 Liên hệ với chúng tôi</h2>
      <p className="mb-2">
        Nếu bạn cần hỗ trợ hoặc tư vấn sản phẩm, đừng ngần ngại liên hệ với chúng tôi qua:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Email: {CONTACT_INFO.email}</li>
        <li>Hotline: {CONTACT_INFO.hotline}</li>
        <li>Facebook: {CONTACT_INFO.facebook}</li>
      </ul>
    </div>
  );
}
