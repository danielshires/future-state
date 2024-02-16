import { Link } from 'react-router-dom';
import Goals from '../assets/data';

const LinkGroup = () => {

	return (
		<div className='flex flex-col'>
			{Goals.map((goalData) => (
				<Link className="font-mono text-2xl underline underline-offset-4 hover:text-blue-600 mt-2" to={goalData.route}>0{goalData.goalNumber} {goalData.name}</Link>
			))}
		</div>
	);
};

export default LinkGroup;
