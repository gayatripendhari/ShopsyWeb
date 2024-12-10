import React from 'react'
import Product from "./Product.jsx";
import l1 from "./assets/L1.webp";
import l2 from "./assets/L2.webp";
import l3 from "./assets/L3.webp";
import l4 from "./assets/L4.webp";
import style from "./PW.module.css";
const ProductWrapper = () => {
  return (
    <div>
        <div className={style.head}>
            <h1>Product Section</h1>
        </div>
        <div className={style.item}>
            <Product
            id={1} 
            Img={l1}
            name="Lenovo IdeaPad 1 AMD Ryzen 5 5500U 15.6 HD Thin and Light Laptop."
            description = "Processor: AMD Ryzen 5 5500U | Speed: 2.1GHz (Base) - 4.0GHz (Max) | 6 Cores | 12 Threads Display: 15.6 FHD (1920x1080) | TN | 250Nits Brightness | Anti GlarGraphics: Integrated AMD Radeon Graphics | Memory: 16GB DDR4-3200 | Storage: 512GB SSD OS and Software: Windows 11 Home | Office Home & Student 2021 | Xbox GamePass Ultimate 3-month subscription
Design: 4 side narrow bezel | 1.79 cm Ultra Thin & 1.61 kg Light || Smart Learning Features : Lenovo Aware | Whisper Voice | Eye Care"
        />
        </div>

        <div className={style.item}>
        <Product
            id={2} 
            Img={l2}
            name="Asus Vivobook 15 Intel Core I5 12th Gen 1235u."
            description = "Processor: 12th Gen IntelCore i5-1235U, 1.3 GHz base speed, Up to 4.4 GHz Turbo Max Speed, 10MB Cache, 10 cores
Memory: 8GB (4GB onboard + 4GB SO-DIMM) DDR4 3200MHz Upgradeable Up to 12GB with | Storage: 512GB M.2 NVMe PCIe 3.0 SSD Upgradeable Up to 1TB SSD"
        />
        </div>

        <div className={style.item}>
        <Product
            id={3} 
            Img={l3}
            name="Dell Inspiron 3520 Notebook Laptop (12th Gen Intel Core i3-1215U/8 GB/512 GB SSD ."
            description = "Dell Inspiron 3520 is a regular use Laptop suitable for beginners, general purpose, and students. It is a 15.6-inch laptop that comes with a stylish and compact design. With the latest Gen Intel processor, adequate RAM, storage, and Windows 11 Home this laptop delivers a satisfactory experience. The Dell Inspiron 3520 Laptop features a 15.6-inch full-HD display with a 1920×1080 pixel"
        />
        </div>

        <div className={style.item}>
        <Product
            id={4} 
            Img={l4}
            name="Hp Pavilion 15 Ec2150ax Laptop."
            description = "HP Pavilion 15 EC2150AX Laptop,, The HP Pavilion 15 EC2150AX Laptop is a specific model of a laptop offered by HP, typically features a 15.6-inch Full HD (1920x1080) display, providing a vibrant and detailed visual experience. The HP Pavilion 15 EC2150AX is equipped with an AMD Ryzen processor, offering reliable performance for both everyday computing tasks and more demanding applications. It commonly comes with 8GB or 16GB of RAM, allowing for smooth multitasking, and a 512GB or 1TB solid-state drive (SSD) for fast data access and system responsiveness."
        />
        </div>

        <div className={style.item}>
        <Product
            id={5} 
            Img={l3}
            name="Hp Pavilion 15 Ec2150ax Laptop."
            description = "HP Pavilion 15 EC2150AX Laptop,, The HP Pavilion 15 EC2150AX Laptop is a specific model of a laptop offered by HP, typically features a 15.6-inch Full HD (1920x1080) display, providing a vibrant and detailed visual experience. The HP Pavilion 15 EC2150AX is equipped with an AMD Ryzen processor, offering reliable performance for both everyday computing tasks and more demanding applications. It commonly comes with 8GB or 16GB of RAM, allowing for smooth multitasking, and a 512GB or 1TB solid-state drive (SSD) for fast data access and system responsiveness."
        />
        </div>

        <div className={style.footer}>
          <h3>Contact Us @Shopsy.com</h3>
        </div>
    </div>
    
  )
}

export default ProductWrapper