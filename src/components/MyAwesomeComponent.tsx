import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import React from 'react';

interface MyAwesomeComponentProps {
	title?: string;
	description?: string;
	buttonText?: string;
	onButtonClick?: () => void;
}

const MyAwesomeComponent: React.FC<MyAwesomeComponentProps> = ({
	title = 'My Awesome Component',
	description = 'This is a simple component built with React, Vite, Tailwind CSS, and shadcn/ui.',
	buttonText = 'Click Me',
	onButtonClick,
}) => {
	return (
		<Card className="max-w-md mx-auto my-8 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
					{title}
				</CardTitle>
				<CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-gray-700 dark:text-gray-300">
					This component demonstrates how to integrate different
					technologies for building a reusable React UI library.
				</p>
			</CardContent>
			<CardFooter className="flex justify-end mt-4">
				<Button
					onClick={onButtonClick}
					className="px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
				>
					{buttonText}
				</Button>
			</CardFooter>
		</Card>
	);
};

export default MyAwesomeComponent;
