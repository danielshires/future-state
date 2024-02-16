import { Link } from 'react-router-dom';

interface Props {
	name: string;
    route: string
}

const Breadcrumb = ({ name, route }: Props) => {
	return (
		<div className=''>
			<Link
				className='font-mono text-2xl underline underline-offset-4 hover:text-blue-600'
				to={route}>
				{name}
			</Link>
		</div>
	);
};

export default Breadcrumb;
