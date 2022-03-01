import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form(props) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const formref = useRef();
const onSubmit = (data) =>{
  (JSON.stringify(data))
  console.log(data);
alert(JSON.stringify(data))
formref.current.reset();
}
const [clear, setClear] = useState("");
  return (
    <>
    <div>
    <div className='app-head'>
    <header className="background">
        <form ref={formref} onSubmit={handleSubmit(onSubmit)}>
        <h1>SUBMIT COMMENT<hr/></h1>
        <div>       
            <div className='bold'>
                    <label>Rating:</label></div>
                <select className='drop my-1'{...register('Rating', { required: {value: true, message: 'Rating is required' }})}>
                    <option value=''>Select</option>
                    <option value='rating1'>1</option>
                    <option value='rating2'>2</option>
                    <option value='rating3'>3</option>
                    <option value='rating4'>4</option>
                    <option value='rating5'>5</option>
                </select>
                {errors.Rating && (<p className='red'>{errors.Rating.message}</p>)}
            </div>
            <div>
            <div className='bold1'>
            <label>Your Name:</label></div>
          <input className='name' type="text" className="form-control" {...register('authorname', {
           required: { value: true, message: 'Name is required'}, 
           minLength: { value: 2, message: 'Length should be greater than 2' },
           maxLength: { value: 15, message: 'Length should be lesser than 15' }})} placeholder= 'Enter your name'  />
          {errors.authorname && (<p className='red'>{errors.authorname.message}</p>)}
          </div>
          <div>
          <div className='bold2'>
            <label>Comment:</label></div>
          <textarea className='comment' className="form-control" rows="6" {...register("comment", { required: { value: true, message: 'Comment is required' }})}
          placeholder= 'Enter your comment' />
          {errors.comment && (<p className='red'>{errors.comment.message}</p>)}
            </div><br/>
            <div>
        <button className="btn btn-primary" type="submit">Submit</button></div>
        </form>
        </header>
        </div>
        </div>
    </>)
};
