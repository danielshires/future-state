import Breadcrumb from '../Components/breadcrumb';
import Data from '../assets/data';

const BuildProducts = () => {
	const goalData = Data[1];
	const paragraphs = goalData.description
		.split('\n')
		.map((text, index) => <p key={index} className='mb-2'>{text}</p>);

	return (
		<div className='flex flex-col justify-between h-screen p-4 md:p-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50'>
			<div className='flex row gap-4 items-center'>
				<Breadcrumb name={'Home'} route={'/'} /> /
				<Breadcrumb name={'Future state'} route={'/future-state'} /> /
				<Breadcrumb name={`02`} route={''} />
			</div>
			<div className='font-serif text-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<div>
					<h4 className='font-mono text-1xl tracking-widest uppercase'>
						{goalData.goalDuration <= 1
							? `${goalData.goalDuration} Year`
							: `${goalData.goalDuration} Years`}
					</h4>
					<h1 className='font-mono text-3xl mt-4'>
						{goalData.goalNumber < 10
							? `0${goalData.goalNumber}`
							: goalData.goalNumber}{' '}
						{goalData.name}
					</h1>
					<div id='description' className='font-serif mt-8'>
						{paragraphs}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuildProducts
