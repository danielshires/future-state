import Breadcrumb from '../Components/breadcrumb';
import LinkGroup from '../Components/LinkGroup';

const FutureState = () => {

	return (
		<div className='flex flex-col h-screen p-4 md:p-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50'>
			<div className='flex row gap-4 items-center'>
				<Breadcrumb name={'Home'} route={'/'}/> /
				<Breadcrumb name={'Future state'} route={'/future-state'} />
			</div>
			<div className='mt-4'>
				<LinkGroup />
			</div>
		</div>
	);
};

export default FutureState;
