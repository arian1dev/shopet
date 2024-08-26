import Image from "next/image";
import React from "react";
import banner from "../public/pics/banner.png"
import fishIcon from "../public/icons/fish.svg"
import catIcon from "../public/icons/cat.svg"
import dogIcon from "../public/icons/dog.svg"
export default function Home({children}) {
  return (
    <>
      {children}
      <div>
      <Image src={banner} className="[height:461px] [width:1240px] [margin-right:170px] [margin-top:41px]"></Image>
      <h1 className="[font-family:peyda] [margin-top:-380px] [margin-right:300px] [font-size:37px]">
        <span>بهترین و جدیدترین</span>
        <br/>
        <p>لوازم سگ خانگی</p>
      </h1>
      <p className="[width:339px] [margin-right:300px] [margin-top:11px] [font-family:yb-reg]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
      <br/>
      <button className="[width:138px] [height:45px] bg-[#5124C4] [border-radius:54px] [margin-right:300px] [box-sizing:border-box] [padding-left:30px]
      text-white [font-family:yb-bold]"><p className="[margin-top:0px]">خرید کنید </p><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="[margin-right:100px] [margin-top:-27px] [position:absolute]">
<path d="M15 30C6.7275 30 0 23.271 0 15C0 6.729 6.7275 0 15 0C23.271 0 30 6.729 30 15C30 23.271 23.271 30 15 30Z" fill="white"/>
<path d="M17.164 21.3314C16.8775 21.3314 16.5895 21.2219 16.3705 21.0029L11.14 15.7979C10.9285 15.5864 10.81 15.2999 10.81 14.9999C10.81 14.7014 10.9285 14.4149 11.14 14.2034L16.3705 8.99536C16.81 8.55736 17.521 8.55736 17.9605 8.99836C18.3985 9.43936 18.397 10.1519 17.9575 10.5899L13.528 14.9999L17.9575 19.4099C18.397 19.8479 18.3985 20.5589 17.9605 20.9999C17.7415 21.2219 17.452 21.3314 17.164 21.3314Z" fill="#5124C4"/>
</svg>
</button>
      </div>
      <br/>
        <button className="category c1 bg-[#F8F6FD] [box-sizing:border-box] [padding-left:100px]"><Image src={fishIcon} className="[position:absolute] [margin-top:-30px]"></Image><p>غذای
        ماهی</p><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="[margin-right:330px] [margin-top:-30px] [position:absolute]">
<path d="M20 0L20.5595 0.00768842C31.3412 0.304326 40 9.14712 40 20C40 31.02 31.04 40 20 40C8.98 40 0 31.02 0 20C0 8.96 8.98 0 20 0ZM23.96 12C23.36 11.4 22.42 11.4 21.84 12L14.86 18.94C14.58 19.22 14.42 19.6 14.42 20C14.42 20.4 14.58 20.78 14.86 21.06L21.84 28C22.12 28.3 22.5 28.44 22.88 28.44C23.28 28.44 23.66 28.3 23.96 28C24.54 27.4 24.54 26.46 23.94 25.88L18.04 20L23.94 14.12C24.54 13.54 24.54 12.58 23.96 12Z" fill="#5124C4"/>
</svg>
</button>
        <button className="category c2 bg-[#F5FCFF]"><Image src={catIcon} className="[height:70px] [width:70px] [margin-right:10px] [margin-top:-20px] [position:absolute]"></Image><p className="[margin-right:-90px]">غذا و لوازم گربه</p><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="[margin-right:330px] [margin-top:-30px] [position:absolute]">
<path d="M20 0L20.5595 0.00768842C31.3412 0.304326 40 9.14712 40 20C40 31.02 31.04 40 20 40C8.98 40 0 31.02 0 20C0 8.96 8.98 0 20 0ZM23.96 12C23.36 11.4 22.42 11.4 21.84 12L14.86 18.94C14.58 19.22 14.42 19.6 14.42 20C14.42 20.4 14.58 20.78 14.86 21.06L21.84 28C22.12 28.3 22.5 28.44 22.88 28.44C23.28 28.44 23.66 28.3 23.96 28C24.54 27.4 24.54 26.46 23.94 25.88L18.04 20L23.94 14.12C24.54 13.54 24.54 12.58 23.96 12Z" fill="#519BC2"/>
</svg>
</button>
        <button className="category c3 bg-[#FEEDE6]"><Image src={dogIcon} className="[height:90px] [width:90px] [position:absolute] [margin-top:-25px]"></Image><p className="[margin-right:-70px] [margin-top:10px]">غذا و لوازم سگ</p><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="[margin-right:330px] [margin-top:-35px]">
<path d="M24 4L24.5595 4.00769C35.3412 4.30433 44 13.1471 44 24C44 35.02 35.04 44 24 44C12.98 44 4 35.02 4 24C4 12.96 12.98 4 24 4ZM27.96 16C27.36 15.4 26.42 15.4 25.84 16L18.86 22.94C18.58 23.22 18.42 23.6 18.42 24C18.42 24.4 18.58 24.78 18.86 25.06L25.84 32C26.12 32.3 26.5 32.44 26.88 32.44C27.28 32.44 27.66 32.3 27.96 32C28.54 31.4 28.54 30.46 27.94 29.88L22.04 24L27.94 18.12C28.54 17.54 28.54 16.58 27.96 16Z" fill="#F7763D"/>
</svg>
</button>
    </>
  );
}
