"use client";
import React, { useState, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { VscAdd, VscClose } from 'react-icons/vsc'
import { IoIosCloudUpload } from 'react-icons/io'
import Image from 'next/image';

const categoriesList = [
  'Coding',
  'Sports',
  'Education',
  'Others',
  'Club',
  'Music',
  'Cricket',
  'Movies',
];

export default function NewBlog() {
  const [val, setVal] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [headline, setHeadline] = useState('');
  const fileRef = useRef(null);

  const handleCategoryChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(selectedOption)) {
        return prevSelectedCategories.filter((category) => category !== selectedOption);
      } else {
        return [...prevSelectedCategories, selectedOption];
      }
    });
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    fileRef.current = file;
    setFile(file);
  };

  console.log(file)

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link']
      ['clean'],
      ['code-block']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'link', 'image', 'video', 'clean',
  ]

  console.log(val)

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('title', title);
    console.log('file', file);
    console.log('val', val);
    console.log('selectedCategories', selectedCategories);
    console.log("headline", headline)
    alert("fill all fields");
  }


  return (

    <div className='flex flex-col'>
      <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara mb-3 font-bold w-full pb-3">Create a Blog</p>
      <form className='flex gap-2 w-full h-full flex-col items-center' onSubmit={handleSubmit}>

        <div className='w-full h-[50px] mx-2 relative'>
          {/*<p className='text-xs text-gray-400 absolute bottom-4 right-2'>300/300</p>*/}
          <input type='text' placeholder='Title(180 characters)' onChange={e => setTitle(e.target.value)} className='border w-full outline-none p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500' />
        </div>

        <div
          onDrop={handleImageDrop}
          onDragOver={(e) => e.preventDefault()}
          className='w-full h-[220px] mx-2 border rounded-sm border-gray-400 flex items-center justify-center flex-col gap-1 border-dotted relative my-0'>
          <input type='file' id='file' name='file' placeholder='Title' onChange={e => setFile(e.target.files[0])} className='border w-full outline-none p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500 hidden' />
          <IoIosCloudUpload className='text-[#3ddbe4]' size={60} />
          <p className='text-md text-gray-400'>Drag and drop your image here</p>
          <label htmlFor='file' className='text-md border cursor-pointer outline-none p-[4px] px-[7px] rounded-md bg-[#1576DB] text-white border-gray-300 text-md focus:border-gray-500 w-fit'>
            Browse files
            {file && <Image src={URL.createObjectURL(file)} alt='blog image' fill={true} className='rounded-md border box-border' />}
          </label>
        </div>

        <div className='w-full mx-2'>
          <ReactQuill
            value={val}
            onChange={setVal}
            // to include the code editor
            modules={modules}
            formats={formats}


            theme="snow"
            placeholder='Write your blog here...'
            className='h-min-[200px] focus:border-gray-500 text-[1.4rem]'
          />
        </div>

        <div className='w-full h-[50px] my-1'>
          <textarea rows={2} type='text' placeholder='Headline(360 characters)' onChange={e => setHeadline(e.target.value)} className='border w-full outline-none p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500' />
        </div>

        <div className='border w-full outline-none mt-3 p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500'>
          <p className='text-md text-gray-400 px-2'>Add Tags<span className='font-mono'>({selectedCategories.length}/{categoriesList.length})</span></p>
          <div className='flex gap-2 mx-2 mb-1 py-2 flex-wrap'>
            {categoriesList.map((category) => (
              <div
                key={category}
                className={`border px-3 py-1 rounded-full flex items-center gap-1 font-bold ${selectedCategories.includes(category)
                  ? 'bg-[#1576DB] text-white'
                  : 'bg-gray-600 text-white'
                  } cursor-pointer`}
                onClick={() => handleCategoryChange({ target: { value: category } })}
              >
                {selectedCategories.includes(category) ? (
                  <span className='flex items-center justify-center gap-1'>
                    <VscClose />
                    {category}
                  </span>
                ) : (
                  <span className='flex items-center justify-center gap-1'>
                    <VscAdd />
                    {category}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='w-full mx-2 relative flex justify-end h-[33px] my-2'>
          <button className='bg-[#3ddbe4] text-white px-4 py-1 rounded-md shadow-lg' onClick={handleSubmit}>Publish</button>
        </div>
      </form>
    </div>
  )
}
