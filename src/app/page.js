
"use client"
import { useState } from "react";

export default function Home() {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [shake, setShake]=useState(false);
  const [open,setOpen]=useState(false);

    const widths = [
        '25%', '20%', '27%', '22%', '15%', '21%', '22%', '18%', '20%', '25%',
        '22%', '23%', '16%', '18%', '20%', '20%', '22%', '17%', '16%', '22%',
        '22%', '14%', '16%', '25%', '20%', '27%', '22%', '15%', '21%', '22%', 
        '18%', '20%', '25%', '22%', '23%', '16%', '18%', '20%', '20%', '22%', 
        '17%', '16%', '22%', '22%', '14%', '16%'
    ];

    const handleCloverClick = (index) => {
        setClickedIndex(index);
        if(index === 4 || index === 12 || index === 23 || index === 42){
            setTimeout(() => {
                setShake(true);
                setTimeout(() => setShake(false), 900); 
            }, 900); // 클로버가 흔들리는 시간
        }else{
            setTimeout(() => setClickedIndex(null), 1600); 
        }
    };

    return(
        <div className="grass">
            <div className="clover">
                {widths.map((width, index) => (
                    <img
                        key={index}
                        src={index === 4 || index === 12 || index === 23 || index === 42 ? "/four.PNG" : "/three.PNG"}
                        style={{ width }}
                        className={`${clickedIndex === index ? 'clicked' : ''} ${shake?'shake-all':''}`}
                        onClick={() => handleCloverClick(index)}
                    />
                ))}
                <img src="/grass.png" alt="grass" />
            </div>
            <div className="gift-1" onClick={()=>setOpen(true)}>
                <img src="/gift.png" className={`${clickedIndex===4 ? 'giftopen':''}`}/>
            </div>
            <div className="gift-2" onClick={()=>setOpen(true)}>
                <img src="/gift.png" className={`${clickedIndex===12 ? 'giftopen':''}`}/>
            </div>
            <div className="gift-3" onClick={()=>setOpen(true)}>
                <img src="/gift.png" className={`${clickedIndex===23 ? 'giftopen':''}`}/>
            </div>
            <div className="gift-4" onClick={()=>setOpen(true)}>
                <img src="/gift.png" className={`${clickedIndex===42 ? 'giftopen':''}`}/>
            </div>
            <img className="grass2-1" src="/grass2.png"/>
            <img className="grass2-2" src="/grass2.png"/>
            <img className="grass2-3" src="/grass2.png"/>
            <img className="grass2-4" src="/grass2.png"/>
            <div className="title">
                <img src="/title2.png"/>
            </div>
            <div className={`coupon ${open ? 'open':'off'}`}>
                <img src="/coupon.png" />
                <button onClick={()=>setOpen(false)}>X닫기</button>
            </div>
        </div>
    );
}
