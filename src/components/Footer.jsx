
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
      <footer className="w-full bg-[#88D66C]">
       <div className='flex flex-row justify-center font-medium pt-4'>
       <h3 className='mr-2'>Created by</h3> 
       <a href="https://anjaszzz.my.id" target="_blank" rel="noopener noreferrer">Anjaszzz</a>
       </div>
        <ul className="flex flex-row gap-8 p-5 justify-center">
          <li><a target='blank' href="https://www.facebook.com/anjasRanii" className='hover:text-[#33559b]'><i className="fa-brands fa-square-facebook fa-xl "></i></a></li>
          <li><a target='blank' href="https://instagram.com/anjaszz_" className='hover:text-[#3572EF]'><i className="fa-brands fa-square-instagram fa-xl"></i></a></li>
          <li><a target='blank' href="https://github.com/Anjaszz" className='hover:text-[#3572EF]'><i className="fa-brands fa-square-github fa-xl"></i></a></li>
          <li><a target='blank' href="https://www.linkedin.com/in/anjas-rani-562396212" className='hover:text-[#3572EF]'><i className="fa-brands fa-linkedin fa-xl"></i></a></li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;
  