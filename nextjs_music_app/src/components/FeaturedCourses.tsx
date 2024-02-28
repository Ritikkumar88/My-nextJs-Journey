'use client'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Courses {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Courses) => course.isFeatured)


  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center text-white'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide'>Featured Section</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best!</p>
        </div>
      </div>

      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredCourses.map((course: Courses) => (
            <div key={course.id} className='flex justify-center text-white'>
              <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm p-4'>
                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>

                <Link href={`/courses/${course.slug}`}>
                  Learn More
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-20 text-center'>
        <Link href={"/Courses"} className='px-4 py-2 rounded-2xl border-netutral-400 text-nutral-700 bg-slate-600 hover:bg-gray-100 transition duration-200'>
          View All Courses
        </Link>
      </div>

    </div>
  )
}

export default FeaturedCourses