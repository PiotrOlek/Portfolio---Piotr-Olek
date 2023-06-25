import React from 'react'
import IgImg1 from '../public/ig-img-1.jpg';
import IgImg2 from '../public/IMG_0100.jpg';
import IgImg3 from '../public/IMG_184.jpg';
import IgImg4 from '../public/IMG_0184.jpg';
import IgImg5 from '../public/IMG_2819.jpg';
import IgImg6 from '../public/IMG_8806-_1_.jpg';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Obserwuj nas na Instagram</p>
        <p className='pb-4'>@ShotsIP</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} link='https://www.instagram.com/p/Ct6ptH3tff3/?utm_source=ig_web_copy_link&igshid=MjAxZDBhZDhlNA=='/>
            <InstagramImg socialImg={IgImg2} link='https://www.instagram.com/p/Ct69qjJNH8p/?utm_source=ig_web_copy_link&igshid=MjAxZDBhZDhlNA=='/>
            <InstagramImg socialImg={IgImg3} link='https://www.instagram.com/p/Ct694rgt7vN/?utm_source=ig_web_copy_link&igshid=MjAxZDBhZDhlNA=='/>
            <InstagramImg socialImg={IgImg4} link='https://www.instagram.com/shotsip/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'/>
            <InstagramImg socialImg={IgImg5} link='https://www.instagram.com/p/Ct6-AnmNiEg/?utm_source=ig_web_copy_link&igshid=MjAxZDBhZDhlNA=='/>
            <InstagramImg socialImg={IgImg6} link='https://www.instagram.com/p/Ct69w-vNT2d/?utm_source=ig_web_copy_link&igshid=MjAxZDBhZDhlNA=='/>
        </div>
    </div>
  )
}

export default Instagram