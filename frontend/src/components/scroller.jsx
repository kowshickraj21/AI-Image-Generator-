import React from 'react';
import images from '../assets/index.js';
import '../styles/scroller.css';
import { useState,useRef,useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

const Scroller = () => {
  
  const [lefthover,setLefthover] = useState({img: images.left});
  const [righthover,setRighthover] = useState({img: images.right}); 
  const [slider,slide1,slide2,slide3,slide4,slide5] = useRef();

  function useIsVisible(ref){
    const [inpage,setInpage] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
      setInpage(entry.isIntersecting)
      );
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
    return inpage;
  }

  function left(){
    slider.current.scrollLeft -= 1320;
  }
  function right(){
    slider.current.scrollLeft += 1320;
  }
  let page1 = useIsVisible(slide1);
  let page2 = useIsVisible(slide2);
  let page3 = useIsVisible(slide3);
  let page4 = useIsVisible(slide4);
  let page5 = useIsVisible(slide5);

  return (
    <>
    <div className="carosal">
    <div className='container'>
      <button className='prev-btn' onClick={left}><img src={lefthover.img} alt='left' className='scroll-btn left' onMouseOver={e=>(setLefthover({img: images.leftblue}))} onMouseLeave={e=>(setLefthover({img: images.left}))}/></button>
      <ul className='scroller' ref={slider}>
     <li> <img src={images.img1} id='img1' className='scroll-img first' alt="" ref={slide1}/> </li>
     <li> <img src={images.img2} id='img2' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img3} id='img3' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img4} id='img4' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img5} id='img5' className='scroll-img' alt="" ref={slide2}/> </li>
     <li> <img src={images.img6} id='img6' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img7} id='img7' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img8} id='img8' className='scroll-img' alt="" ref={slide3}/> </li>
     <li> <img src={images.img9} id='img9' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img10} id='img10' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img11} id='img11' className='scroll-img' alt="" ref={slide4}/> </li>
     <li> <img src={images.img12} id='img12' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img14} id='img13' className='scroll-img' alt="" /> </li>
     <li> <img src={images.img15} id='img14' className='scroll-img' alt="" ref={slide5}/> </li>
     <li> <img src={images.img16} id='img15' className='scroll-img last' alt="" /> </li>
      </ul>
      <button className='next-btn' onClick={right}> <img src={righthover.img} alt='right' className='scroll-btn right' onMouseOver={e=>(setRighthover({img: images.rightblue}))} onMouseLeave={e=>(setRighthover({img: images.right}))} /> </button>
    </div>
    <div className='indicators'>
    <RxDotFilled className={`dots ${page1? 'active': ''}`}/>
    <RxDotFilled className={`dots ${page2? 'active': ''}`} />
    <RxDotFilled className={`dots ${page3? 'active': ''}`}/>
    <RxDotFilled className={`dots ${page4? 'active': ''}`}/>
    <RxDotFilled className={`dots ${page5? 'active': ''}`}/>

    </div>
    </div>
    </>
  )
}

export default Scroller;
