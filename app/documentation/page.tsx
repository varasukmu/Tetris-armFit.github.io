// app/documentation/page.tsx
'use client'; 

import { useState } from 'react';
import Image from 'next/image'; 

const hardwareItems = [
    {   title: 'Microcontroller', name: 'Arduino Uno R3',  imageSrc: '/images/arduino.webp',
        description: 'บอร์ด Microcontroller หลักทึ่ใช้ในงานนี้',
    },{ title: 'Sensor :',  name: 'GY-521 MPU-6050 MPU6050 3 Axis Accelerometer Gyroscope',    imageSrc: '/images/mpu.jpg',
        description: 'Gyroscope , หาความเร่งในแต่ละทิศทาง สำหรับใช้ในการควบคุมทิศทางของ Tetris',
    },{ title: 'Display Result',  name: 'MAX7219 LED Dot Matrix Display',      imageSrc: '/images/led.jpg',
        description: 'ใช้แสดงผลขณะเล่นเกม ',
    },
];

export default function DocumentationPage() {
    const [visibleImage, setVisibleImage] = useState<string | null>(null);

    const toggleImage = (name: string) => {
        setVisibleImage(visibleImage === name ? null : name);
    };
    
    return (
        <div className="relative font-sans min-h-screen">
            
            <div className="relative z-10 flex items-center justify-center p-2 pt-20 md:pt-40">
                <div id="content-container" className="w-full max-w-7xl mx-auto p-4 mt-10 md:p-8 bg-white/70 rounded-xl shadow-lg">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 pb-4 text-gray-800 text-center border-b-4 border-blue-500/50 ">Abstract</h1>
                    <div className="space-y-1 text-center">
                        <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                            <b>TetrisArmFit</b> คือโปรเจกต์ที่จะเปลี่ยนเกมเก่าอย่าง Tetris มาทำให้อยู่ในรูปแบบใหม่
                        </p>
                        <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                            โดยใช้ <b>Microcontroller</b> เข้ามาช่วยทำให้อยู่ในรูปของการเล่นเกมพรัอมกับการออกกำลังกาย.
                        </p>
                        <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                            เราจะเปลี่ยนรูปแบบการเล่นเก่า ที่ใช้จอยสติ๊ก หรือวิธีต่าง ๆ  ในการควบคุม เป็นการใช้<b>แขนและตัวในการควบคุม</b>แทน
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center p-2 py-16">
                <div id="content-container" className="w-full max-w-7xl mx-auto p-4 md:p-8">
                    <h1 className="text-4xl md:text-6xl font-black mb-10 pb-4 text-gray-800 text-center border-b border-gray-300">Hardware Setup</h1>
                    <div className="flex flex-col space-y-8">
                        
                        {hardwareItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-8 rounded-xl shadow-xl border-l-8 border-sky-400 flex flex-col justify-between"
                            >
                                
                                {/* Content Block */}
                                <div className="space-y-4 mb-6">
                                    <h2 className="text-3xl font-bold text-sky-700">{item.title}</h2>
                                    <p className="text-2xl md:text-4xl font-extrabold text-black">
                                        {item.name}
                                    </p>
                                    <p className="text-2xl text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                                
                                {/* ส่วนแสดงรูปภาพ (Conditional Rendering) */}
                                <div 
                                    className={`
                                        mt-4 transition-all duration-500 ease-in-out
                                        ${visibleImage === item.name 
                                            ? 'max-h-[600px] opacity-100 p-4  rounded-lg mb-4' 
                                            : 'max-h-0 opacity-0 overflow-hidden mb-0'
                                        }
                                    `}
                                >
                                    {visibleImage === item.name && (
                                        <div className="w-full h-auto flex justify-center">
                                            <Image
                                                src={item.imageSrc}
                                                alt={`Image of ${item.name}`}
                                                width={500} 
                                                height={300} 
                                                className="rounded-lg shadow-md object-contain"
                                                priority={true} 
                                            />
                                        </div>
                                    )}
                                </div>
                                
                                {/* ปุ่มกดดูรูปภาพ - ย้ายมาอยู่ด้านล่างสุด */}
                                <div className="flex justify-start">
                                    <button
                                        onClick={() => toggleImage(item.name)}
                                        className={`
                                            px-8 py-3 text-xl font-semibold rounded-full shadow-md transition-all duration-300 w-full md:w-auto
                                            ${visibleImage === item.name 
                                                ? 'bg-sky-300 hover:bg-sky-400 text-black' 
                                                : 'bg-sky-500 hover:bg-sky-600 text-white'
                                            }
                                        `}
                                    >
                                        {visibleImage === item.name ? 'Hide Image' : 'View Image'}
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Input - Output Section (No change needed) */}
            <div className="relative z-10 flex items-center justify-center p-2 py-16">
                <div id="content-container" className="w-full max-w-7xl mx-auto p-4 md:p-8"> 
                    
                    <h1 className="text-4xl md:text-6xl font-black mb-10 pb-4 text-gray-800 text-center border-b border-gray-300">Input - Output Flow</h1>
                    <div className="flex flex-col space-y-8">
                        <div className="bg-green-50 p-8 rounded-xl shadow-lg border-l-8 border-green-500">
                            <h2 className="text-3xl font-bold mb-3 text-green-700">Input (การรับข้อมูล)</h2>
                            <p className="text-2xl text-gray-700">รับทิศทางการเคลื่อนไหวของผู้เล่นจาก Gyroscope</p>
                        </div>
                        <div className="bg-yellow-50 p-8 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <h2 className="text-3xl font-bold mb-3 text-yellow-700">Processing (การประมวลผล)</h2>
                            <p className="text-2xl text-gray-700">เปลี่ยนทิศทางการเคลื่อนไหวให้เป็นการควบคุมเกม</p> 
                        </div>
                        <div className="bg-red-50 p-8 rounded-xl shadow-lg border-l-8 border-red-500">
                            <h2 className="text-3xl font-bold mb-3 text-red-700">Output (การแสดงผล)</h2>
                            <p className="text-2xl text-gray-700">แสดงผลเกม Tetris ที่กำลังเล่นอยู่ทาง LED Dot Matrix Display</p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}