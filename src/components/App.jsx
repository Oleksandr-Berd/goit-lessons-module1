import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Posts } from './Posts/Posts';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Header />
      <Hero />
      <Posts />
      <Footer />
    </div>
  );
};

// const Loader = ({ progress = 0.5 }) => {
//   return (
//     <div style={{ width: progress * 100 + '%' }} className="progress">
//       Progress: {progress}
//     </div>
//   );
// };
