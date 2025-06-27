import MyAwesomeComponent from './components/MyAwesomeComponent';

const App = () => {
	return (
		<div>
			<MyAwesomeComponent onButtonClick={() => alert('Button clicked')} />
		</div>
	);
};

export default App;
