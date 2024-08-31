// eslint-disable-next-line no-unused-vars
import React from 'react';
import LatestJobCard from './LatestJobCard';

const LatestJob = () => {
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            location: 'Mountain View, CA',
            salary: '$150,000 - $200,000',
            description: 'Google is looking for a software engineer to work on the next big thing.',
            date: '2021-09-01',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Facebook',
            location: 'Menlo Park, CA',
            salary: '$120,000 - $150,000',
            description: 'Facebook is looking for a product manager to work on the next big thing.',
            date: '2021-09-02',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Amazon',
            location: 'Seattle, WA',
            salary: '$100,000 - $120,000',
            description: 'Amazon is looking for a data scientist to work on the next big thing.',
            date: '2021-09-03',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            location: 'Mountain View, CA',
            salary: '$150,000 - $200,000',
            description: 'Google is looking for a software engineer to work on the next big thing.',
            date: '2021-09-01',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Facebook',
            location: 'Menlo Park, CA',
            salary: '$120,000 - $150,000',
            description: 'Facebook is looking for a product manager to work on the next big thing.',
            date: '2021-09-02',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Amazon',
            location: 'Seattle, WA',
            salary: '$100,000 - $120,000',
            description: 'Amazon is looking for a data scientist to work on the next big thing.',
            date: '2021-09-03',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            location: 'Mountain View, CA',
            salary: '$150,000 - $200,000',
            description: 'Google is looking for a software engineer to work on the next big thing.',
            date: '2021-09-01',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Facebook',
            location: 'Menlo Park, CA',
            salary: '$120,000 - $150,000',
            description: 'Facebook is looking for a product manager to work on the next big thing.',
            date: '2021-09-02',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Amazon',
            location: 'Seattle, WA',
            salary: '$100,000 - $120,000',
            description: 'Amazon is looking for a data scientist to work on the next big thing.',
            date: '2021-09-03',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            location: 'Mountain View, CA',
            salary: '$150,000 - $200,000',
            description: 'Google is looking for a software engineer to work on the next big thing.',
            date: '2021-09-01',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Facebook',
            location: 'Menlo Park, CA',
            salary: '$120,000 - $150,000',
            description: 'Facebook is looking for a product manager to work on the next big thing.',
            date: '2021-09-02',
            type: 'Full-time',
            vacancies: 5,
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Amazon',
            location: 'Seattle, WA',
            salary: '$100,000 - $120,000',
            description: 'Amazon is looking for a data scientist to work on the next big thing.',
            date: '2021-09-03',
            type: 'Full-time',
            vacancies: 5,
        },
    ];
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'>Latest <span className='text-[#6A38C2]'>Jobs</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {jobs.map((job) => (
                    <LatestJobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default LatestJob;