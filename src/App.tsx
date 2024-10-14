import { useState, useEffect } from 'react';
import './App.css';
import { Card, CardItem } from './components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://outlet-api.netlify.app/api`);
        if (!response.ok) throw new Error('Network response was not ok');

        const products = await response.json();

        setData(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <FontAwesomeIcon className='loading' icon={faSpinner} />
        </>
      ) : (
        <div className='container__card'>
          {data.length > 0
            ? data.map((item: CardItem, index: number) => {
                return <Card key={index} item={item} />;
              })
            : ''}
        </div>
      )}
    </>
  );
};
