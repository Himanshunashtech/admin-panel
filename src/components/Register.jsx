// import React from 'react'
// c
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().required().min(8),
//   profileImage: yup.mixed().required(),
// });

// function Register() {


//   const { register, handleSubmit, formState: { errors } } = useForm({
//    resolver:yupResolver(schema)
    
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };



//   return (
//     <div className=' mt-16'>
//         <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto ">
//       <div className="mb-4">
//         <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
//         <input type="text" id="firstName" {...register('firstName')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//         {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
//         <input type="text" id="lastName" {...register('lastName')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//         {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//         <input type="email" id="email" {...register('email')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//         {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//         <input type="password" id="password" {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//         {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
//       </div>
//       <div className="mb-4">
//           <label htmlFor="profileImage" className="block text-gray-700 text-sm font-bold mb-2">Profile Image</label>
//           <input type="file" id="profileImage" {...register('profileImage')} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
//           {errors.profileImage&& <span className="text-red-500 text-sm">{errors.profileImage.message}</span>}
//       </div> 
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
//           </form>
//     </div>
//   )
// }

// export default Register