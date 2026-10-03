const fastChargingRate = 4500;
const waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99'];

// 1. Sửa lỗi điều phối: Dùng shift() thay vì pop() để lấy xe đầu tiên vào sạc (FIFO)
const nextVehicle = waitingQueue.shift();
console.log('Xe được điều phối vào sạc:', nextVehicle);

const completedSessionsKwh = [45.2, 30.5, 62.8, 28.0];
let totalKwh = 0;

// 2. Sửa lỗi mảng: Đổi <= thành < để tránh truy cập vượt giới hạn gây lỗi NaN
for (let i = 0; i < completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}

const totalRevenue = totalKwh * fastChargingRate;
console.log('Tổng sản lượng:', totalKwh, 'kWh');
console.log('Tổng doanh thu:', totalRevenue, 'VNĐ');
