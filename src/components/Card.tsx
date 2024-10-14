import '../index.css';

export type CardItem = {
  title: string;
  subTitle: string;
  image: string;
  sizes: string[];
  price: number;
};
type CardProp = {
  item: CardItem;
};

export const Card = ({ item }: CardProp) => {
  const priceCalc = (ogPrice: number): number => {
    const profit = ogPrice < 13 ? 1000 : 1100;
    return roundToNearestHundred(ogPrice * 142) + profit;
  };

  const roundToNearestHundred = (num: number): number => {
    return Math.round(num / 100) * 100;
  };
  return (
    <div className='card'>
      <h1>{item.title}</h1>
      <h3>{item.subTitle}</h3>
      <img src={item.image}></img>
      <br />
      {item.sizes.map((size: string) => {
        return <button>{size}</button>
      })}
      <h3>{priceCalc(item.price)} dinara</h3>
    </div>
  );
};
