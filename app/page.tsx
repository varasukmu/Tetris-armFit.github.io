import Image from "next/image";

const features = [
  { icon: '🎮', title: 'เล่นเกม',       text: 'TetrisArmFit นำเกม Tetris มาทำใหม่'},
  { icon: '💪', title: 'ออกกำลังกาย',  text: 'เล่นเกมไปพร้อมกับออกกำลังกาย'},
  { icon: '🕹️', title: 'การควบคุมแบบใหม่',    text: 'การควบคุมแบบใหม่ เคลื่อนไหวแขนและลำตัวเพื่อควบคุมบล็อก'},
];

const members = [
  { imageSrc: '/profile/pitchaya.jpg', name: 'พิชญ บาศรี', stdID: '67070114'},
  { imageSrc: '/profile/peerawit.jpg', name: 'พีรวิชญ์ นันท์จันทึก ', stdID: '67070122'},
  { imageSrc: '/profile/meswadee.jpg', name: 'เมษ์วดี สีดา', stdID: '67070144'},
  { imageSrc: '/profile/varaporn.jpg', name: 'วราภรณ์ สุขม่วง', stdID: '67070159'}
];

const resources = [
  {
    title: 'Poster',    text: 'Dowload PDF',
    action: 'Download', color: 'blue',
    link: '/resource/poster.pdf',
  },
  {
    title: 'Video Presentation',  text: 'Youtube link',
    action: 'Watch Video',        color: 'red',
    link: 'https://youtu.be/dQw4w9WgXcQ?si=XbHqUFwK3qcvnhiQ',
  },
  {
    title: 'Source Code', text: 'Github Repository',
    action: 'View Code',  color: 'green',
    link: 'https://github.com/Mstxz/tetris-armfit',
  },
];

const getColorClasses = (color: 'blue' | 'red' | 'green') => {
  switch (color) {
    case 'blue':  return {  title: 'text-blue-700', buttonBg: 'bg-blue-600 hover:bg-blue-700'  };
    case 'red':   return {  title: 'text-red-700',  buttonBg: 'bg-red-600 hover:bg-red-700'    };
    case 'green': return {  title: 'text-green-700',buttonBg: 'bg-green-600 hover:bg-green-700'};
  }
};

export default function Home() {
  return (
    <div className="relative font-sans">

      <div className="relative z-10 flex items-center justify-center pt-40">
        <div id="content-container" className="w-full max-w-6xl mx-auto p-4 md:p-8">
          <div id="welcome" className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-black">When Your Arms</h1>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-5 text-blue-800">Are the Controller</h1>
          </div>

          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 sm:p-8 bg-sky-50 rounded-xl shadow-lg flex-1 transition duration-300 hover:shadow-xl hover:scale-[1.05]"
              >
                
                <div className="text-5xl mb-4 text-blue-700">{feature.icon}</div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                  <p className="text-base text-gray-700">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center p-4">
        <div id="content-container" className="w-full max-w-8xl mx-auto p-4 md:p-8">
          <h1 className="text-3xl md:text-7xl font-extrabold mb-4 pb-4 text-black text-center border-b border-gray-300">Resource</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 pb-20">
            {resources.map((resource, index) => {
              const { title, text, link, action, color } = resource;
              const { title: titleColor, buttonBg } = getColorClasses(color as 'blue' | 'red' | 'green');
              const isDownload = title === 'Poster';

              return (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl flex flex-col justify-between"
                >
                  <div className="flex-grow mb-6">
                    <h3 className={`text-3xl font-bold mb-2 ${titleColor}`}>{title}</h3>
                    <p className="text-gray-600">{text}</p>
                  </div>
                  <div className="flex justify-start">
                    <a
                      href={link}
                      target={isDownload ? '_self' : '_blank'}
                      rel={!isDownload ? 'noopener noreferrer' : undefined}
                      download={isDownload ? true : undefined}
                      className={`
                        w-full 
                        text-center
                        px-6 py-2 text-white font-semibold rounded-lg shadow-md transition duration-200 ${buttonBg} transform hover:scale-[1.05] flex-shrink-0
                      `}
                    >
                      {action}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Our Team Section */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div id="content-container" className="w-full max-w-8xl mx-auto p-4 md:p-8">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 pb-4 text-black text-center border-b border-gray-300">Our Team</h1>
          
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-8 pt-8 pb-20 space-y-8 lg:space-y-0">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex flex-row lg:flex-col items-center sm:items-start lg:items-center p-6 sm:p-8 bg-sky-50 rounded-xl shadow-lg flex-1 transition duration-300 hover:shadow-xl hover:scale-[1.05]"
              >
                <div className="
                  w-40 h-40 lg:w-40 lg:h-40 sm:w-32 sm:h-32 
                  mb-0 lg:mb-4 
                  mr-4 lg:mr-0 
                  rounded-full                      
                  flex-shrink-0"
                >
                  <img
                    src={member.imageSrc}
                    alt={`Picture of ${member.name}`}
                    className="w-full h-full object-cover bg-yellow-400 rounded-inherit"
                    style={{
                        borderRadius: 'inherit',
                        backgroundColor: '#facc15'
                    }}
                  />
                </div>
                <div className="text-left lg:text-center"> 
                  <h3 className="text-xl font-bold mb-1 text-black">{member.name}</h3>
                  <p className="text-base text-gray-700">{member.stdID}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    
  );
}