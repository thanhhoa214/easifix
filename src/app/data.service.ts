import { Injectable } from '@angular/core';
import { Service, User, Category } from './data.model';

const services: Service[] = [
  { name: 'Sửa board', price: 50000 },
  { name: 'Sửa cốt máy giặt', price: 250000 },
  { name: 'Sửa motor xả nước', price: 450000 },
  { name: 'Sửa van nước cấp', price: 240000 },
  { name: 'Sửa phao cảm biến', price: 350000 },
  { name: 'Sửa ty treo', price: 90000 },
  { name: 'Sửa motor', price: 30000 },
  { name: 'Vệ sinh máy', price: 90000 },
  { name: 'Sửa dây curoa ', price: 40000 },
  { name: 'Sửa tụ máy', price: 50000 },
  { name: 'Hư cao áp ', price: 200000 },
  { name: 'Hư nguồn ', price: 250000 },
  { name: 'Hư bo khiển', price: 300000 },
  { name: 'Thay cổng HDMI', price: 350000 },
  { name: 'Thay mắt thần', price: 530000 },
  { name: 'Thay loa tivi', price: 570000 },
  { name: 'Thay phim màn hình', price: 250000 },
  { name: 'Thay đèn LED cho', price: 950000 },
  { name: 'Thay màn hình', price: 650000 },
  { name: 'Vệ sinh tivi', price: 60000 },
  { name: 'Thay ron', price: 580000 },
  { name: 'Vệ sinh tủ lạnh', price: 540000 },
  { name: 'Thay thế các linh kiện', price: 450000 },
  { name: 'Sửa tủ đông', price: 80000 },
  { name: 'Sửa tủ mát', price: 840000 },
  { name: 'Thay quạt dàn nóng', price: 70000 },
  { name: 'Thay block tủ lạnh', price: 70000 },
  { name: 'Hàn dàn + nạp gas', price: 45000 },
  { name: 'Thay điện trở', price: 45000 },
  { name: 'Sửa board', price: 45000 },
  { name: 'Sửa mất nguồn', price: 453000 },
  { name: 'Sửa board dàn lạnh (mono)', price: 730000 },
  { name: 'Sửa board dàn lạnh (inverter)', price: 730000 },
  { name: 'Thay cảm biến to phòng/dàn', price: 73000 },
  { name: 'Thay mắt nhận tín hiệu', price: 710000 },
  { name: 'Thay tụ quạt dàn lạnh', price: 70000 },
  { name: 'Thay mô tơ lá đảo gió', price: 370000 },
  { name: 'Thay tụ quạt dàn nóng', price: 670000 },
  { name: 'Nạp ga', price: 80000 },
  { name: 'Vệ sinh máy lạnh', price: 280000 },
  { name: 'Thay cục sóng', price: 840000 },
  { name: 'Sửa board', price: 82000 },
  { name: 'Thay cầu chì', price: 86000 },
  { name: 'Thay Timer', price: 18000 },
  { name: 'Sơn + xử lý rỉ sét', price: 98000 },
  { name: 'Lá chắn sóng', price: 88000 },
  { name: 'Moter đĩa', price: 84000 },
  { name: 'Đĩa thuỷ tinh lò vi sóng', price: 100000 },
  { name: 'Biến áp', price: 100000 },
  { name: 'Tụ lò vi sóng', price: 150000 },
  { name: 'Không nhận nồi', price: 120000 },
  { name: 'Sửa dây', price: 100000 },
  { name: 'Sửa cảm ứng', price: 80000 },
  { name: 'Thay quạt', price: 80000 },
  { name: 'Vùng nấu không hoạt động', price: 300000 },
  { name: 'Bếp từ kêu to', price: 300000 },
  { name: 'Lỗi treo máy', price: 300000 },
  { name: 'Sửa nguồn', price: 300000 },
  { name: 'Thay thanh nhiệt lò nướng', price: 300000 },
  { name: 'Thay kính lò nướng', price: 50000 },
  { name: 'Sửa nguồn', price: 50000 },
  { name: 'Sửa đèn tín hiệu', price: 450000 },
  { name: 'Sửa đèn trong lò', price: 450000 },
  { name: 'Hệ thống đánh lửa có vấn đề', price: 450000 },
  { name: 'Hệ thống làm nóng bị mài mòn', price: 450000 },
  { name: 'Lò nướng không đạt nhiệt độ cài đặt', price: 450000 },
  { name: 'Vệ sinh lò nướng', price: 50000 },
  { name: 'Vệ sinh quạt ', price: 50000 },
  { name: 'Thay tụ điện', price: 500000 },
  { name: 'Hư cuộn dây đồng', price: 500000 },
  { name: 'Thay dầu', price: 50000 },
  { name: 'Sửa nguồn', price: 650000 },
  { name: 'Sửa điều khiển', price: 650000 },
  { name: 'Thay thế motor', price: 50000 },
  { name: 'Sửa mạch điều khiển', price: 750000 },
  { name: 'Sửa nguồn điện', price: 73000 },
  { name: 'Máy hút bị yếu', price: 350000 },
  { name: 'Máy chạy nhưng không hút', price: 50000 },
];

const categories: Category[] = [
  {
    name: 'Sửa máy giặt',
    thumbnail: 'cate-1.svg',
    services: services.filter((_, index) => index < 10),
  },
  {
    name: 'Sửa tivi',
    thumbnail: 'cate-2.svg',
    services: services.filter((_, index) => index >= 10 && index < 20),
  },
  {
    name: 'Sửa tủ lạnh',
    thumbnail: 'cate-3.svg',
    services: services.filter((_, index) => index >= 20 && index < 30),
  },
  {
    name: 'Sửa máy lạnh',
    thumbnail: 'cate-4.svg',
    services: services.filter((_, index) => index >= 30 && index < 40),
  },
  {
    name: 'Sửa lò vi sóng',
    thumbnail: 'cate-5.svg',
    services: services.filter((_, index) => index >= 40 && index < 50),
  },
  {
    name: 'Sửa máy nướng',
    thumbnail: 'cate-6.svg',
    services: services.filter((_, index) => index >= 50 && index < 58),
  },
  {
    name: 'Sửa lò nướng',
    thumbnail: 'cate-7.svg',
    services: services.filter((_, index) => index >= 58 && index < 67),
  },
  {
    name: 'Sửa quạt trần',
    thumbnail: 'cate-8.svg',
    services: services.filter((_, index) => index >= 67 && index < 73),
  },
  {
    name: 'Sửa máy hút bụi',
    thumbnail: 'cate-9.svg',
    services: services.filter((_, index) => index >= 73 && index < 78),
  },
];

@Injectable({ providedIn: 'root' })
export class DataService {
  getUsers(): User[] {
    return [
      {
        id: '1',
        name: 'Võ Thành Nhân',
        avatar: 'avatar-0.jpg',
        address: '55B Trần Quang Khải',
        province: 'Q1, TP.HCM',
        categories: categories.filter((_, index) => index < 8),
      },
      {
        id: '2',
        name: 'Phạm Thành Long',
        avatar: 'avatar-1.png',
        address: '75B Nguyễn Kiệm',
        province: 'Q2, TP.HCM',
        categories: categories.filter((_, index) => index < 4),
      },
      {
        id: '3',
        name: 'Dương Nguyên',
        avatar: 'avatar-2.jpg',
        address: '32 Dương Lâm',
        province: 'Gò Vấp, TP.HCM',
        categories: categories.filter((_, index) => index < 9),
      },
      {
        id: '3',
        name: 'Đỗ Đạt',
        avatar: 'avatar-3.png',
        address: '32 Nhà Gỗ',
        province: 'Tân Bình, TP.HCM',
        categories: categories.filter((_, index) => index < 6),
      },
      {
        id: '5',
        name: 'Đặng Nhân',
        avatar: 'avatar-4.png',
        address: '32 Phan Tôn',
        province: 'Q4, TP.HCM',
        categories: categories.filter((_, index) => index < 7),
      },
      {
        id: '6',
        name: 'Hà Tâm',
        avatar: 'avatar-5.png',
        address: '32 Võ Văn Ngân',
        province: 'Thủ Đức, TP.HCM',
        categories: categories.filter((_, index) => index < 9),
      },
      {
        id: '7',
        name: 'Lê Văn Đạt',
        avatar: 'avatar-6.png',
        address: '4 Lê Văn Việt',
        province: 'Q9, TP.HCM',
        categories: categories.filter((_, index) => index < 6),
      },
      {
        id: '8',
        name: 'Đỗ Trương Đông',
        avatar: 'avatar-7.png',
        address: '30 Man Thiện',
        province: 'Q9, TP.HCM',
        categories: categories.filter((_, index) => index < 9),
      },
      {
        id: '9',
        name: 'Hà Mẫn Đạt',
        avatar: 'avatar-8.png',
        address: '20 Lã Xuân Oai',
        province: 'Q9, TP.HCM',
        categories: categories.filter((_, index) => index < 5),
      },
    ];
  }

  getServices(): Service[] {
    return services;
  }

  getCategories(): Category[] {
    return categories;
  }

  // getOrders(): Order[] {}
}
