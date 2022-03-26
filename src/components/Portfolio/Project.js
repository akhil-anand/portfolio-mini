import React from 'react';
import {FiExternalLink} from 'react-icons/fi';
import {AiFillGithub} from 'react-icons/ai';

const Project = ({img, name, title, tags, gitHub, hostingLink}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
    <div className="h-48 w-96 bg-white relative">
                <div className="absolute inset-0 bg-cover bg-center z-0"> 
                    <img src={img} />                   
                </div>
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 p-3 z-10 flex justify-center items-center text-xl bg-blue-200 font-semibold overflow-hidden">
                    {title}
                </div>
    </div>
    <div className="px-6 pt-4 pb-2">
    <p className="text-2xl pb-3">{name}</p>
        {tags.map(tag => 
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            )}
            
           </div>     
    <div className="text-right mr-3 pb-2 text-2xl">
    {
    gitHub && 
        <a href={gitHub}>
    <AiFillGithub className="inline mr-2 cursor-pointer" title="Click to open github code"/>
    </a>
    }
    <a href={hostingLink}>
    <FiExternalLink className="inline cursor-pointer" title="go to website"/>
    </a>
    </div>
</div>
  )
}

export default Project