import {faqs} from './../../assets/data/faqs';
import FaqItem from './FaqItem';

const Faglist = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,index)=>(
        <FaqItem item={item} key={index}/>))}
    </ul>
  );
};

export default Faglist;