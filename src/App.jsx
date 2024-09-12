import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Materials from './Components/Materials/Materials';
import FilterResult from './Components/FilterResult/FilterResult';
import links from './Components/data/links.jsx';

function App() {
  const [filtr, setFiltr] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formValue = form.filtr.value;
    console.log(formValue);
    setFiltr(formValue);
    if (filtr === '') {
      alert('Введіть матеріал, який Вас цікавить');
      return;
    }
    form.reset();
  };
  const filtrArray = links.filter((link) => {
    return link.title.toLowerCase().includes(filtr.toLowerCase());
  });

  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <main>
        <h1 className="title">Наш сайт</h1>

        {filtr !== '' && <FilterResult renderArray={filtrArray} />}
        <Materials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
