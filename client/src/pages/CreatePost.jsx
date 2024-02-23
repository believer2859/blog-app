import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
      <div className='p-3 max-w-3xl mx-auto min-h-screen'>
          <h1 className='text-center text-3xl my-7 font-semibold'>
              Create a Post
          </h1>
          <form action="" className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                  <TextInput type='text' placeholder='Title' required id='title' className='flex-1' />
                  <Select >
                        <option value="uncategorized">Select a category</option>
                        <option value="personal">Personal</option>
                        <option value="technology">Technology</option>
                        <option value="health">Health</option>
                        <option value="business">Business</option>
                        <option value="politics">Politics</option>
                  </Select>
              </div>
              <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                  <FileInput type='file' accepts='image/*' />
                  <Button types='button' gradientDuoTone='purpleToBlue' outline size='sm'>
                      Upload Image
                  </Button>
              </div>
            <ReactQuill theme="snow" placeholder='Write something...' className='h-72 mb-12' required/>
            <Button gradientDuoTone='purpleToPink' type='submit' >
                  Publish
            </Button>
          </form>
      </div>
  )
}

export default CreatePost