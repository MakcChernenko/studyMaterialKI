import { useState } from 'react';
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
    setFiltr(formValue);
    if (formValue === '') {
      alert('Введіть матеріал, який Вас цікавить');
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
        {filtr !== '' && filtrArray.length !== 0 && (
          <FilterResult renderArray={filtrArray} />
        )}
        {filtrArray.length === 0 && <p>Співпадінь не знайдено</p>}
        <Materials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
