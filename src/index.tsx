import 'tailwindcss/tailwind.css';

import App from 'components/App';
import { createRoot } from "react-dom/client";

const container = document.querySelector('#root') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
