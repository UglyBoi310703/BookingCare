import React, { useState } from 'react';
import ServicesData from './ServicesData';
// Component cho từng dịch vụ xét nghiệm
const Service = ({ service }) => (
  <div>
    <img src={service.img} alt={service.name} />
    <h3>{service.name}</h3>
    <p>Giá: {service.price}</p>
    <p>Giới tính: {service.gender}</p>
    <p>Độ tuổi: {service.age}</p>
    <p>Địa điểm: {service.location}</p>
    <service.Description />
  </div>
);

// Component bộ lọc
const Filter = ({ onFilter, options }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');

  const handleSearch = () => {
    onFilter({ age, gender, price });
  };

  const handleReset = () => {
    setAge('');
    setGender('');
    setPrice('');
    onFilter({ age: '', gender: '', price: '' });
  };

  return (
    <div>
      <h2>Bộ Lọc</h2>
      <div>
        <label>Độ tuổi: </label>
        <select value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="">Tất cả</option>
          {options.ages.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Giới tính: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Tất cả</option>
          {options.genders.map((gender, index) => (
            <option key={index} value={gender}>{gender}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Giá gói khám: </label>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">Tất cả</option>
          {options.prices.map((price, index) => (
            <option key={index} value={price}>{price}</option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch}>Tìm kiếm</button>
      <button onClick={handleReset}>Bỏ lọc</button>
    </div>
  );
};

// Component chính
const App = ({ services }) => {
  const [filteredServices, setFilteredServices] = useState(services);

  // Lấy các tùy chọn duy nhất từ dữ liệu
  const options = {
    ages: [...new Set(services.map(service => service.age))],
    genders: [...new Set(services.map(service => service.gender))],
    prices: [...new Set(services.map(service => service.price))]
  };

  const handleFilter = ({ age, gender, price }) => {
    const filtered = services.filter((service) => {
      return (
        (age === '' || service.age === age) &&
        (gender === '' || service.gender === gender) &&
        (price === '' || service.price === price)
      );
    });
    setFilteredServices(filtered);
  };

  return (
    <div>
      <Filter onFilter={handleFilter} options={options} />
      <div>
        {filteredServices.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

// Giả sử bạn truyền dữ liệu dịch vụ vào component App dưới dạng prop
const services = [
  // Dữ liệu dịch vụ của bạn ở đây
];

export default function MainApp() {
  return <App services={ServicesData} />;
}