import Link from 'next/link';
import { fruits } from '../../database/fruits';
import { getCookie } from '../../util/cookies';

// const fruits = [
//   { id: 1, name: 'Apple', icon: '🍎' },
//   { id: 2, name: 'Banana', icon: '🍌' },
//   { id: 3, name: 'Kiwi', icon: '🥝' },
//   { id: 4, name: 'Strawberry', icon: '🍓' },
//   { id: 5, name: 'Orange', icon: '🍊' },
// ]

// const cookie = [
//   { id: 1, comment: 'asdasd' },
//   { id: 4, comment: 'qweqwe' },
// ];

// Combine fruits with comments from cookies
// [
//   { id: 1, name: 'Apple', icon: '🍎', comment: 'asdasd' },
//   { id: 2, name: 'Banana', icon: '🍌', comment: undefined },
//   { id: 3, name: 'Kiwi', icon: '🥝', comment: undefined },
//   { id: 4, name: 'Strawberry', icon: '🍓', comment: 'qweqwe' },
//   { id: 5, name: 'Orange', icon: '🍊', comment: undefined },
// ]

export default function FruitsPage() {
  // get cookie and parse it!
  const fruitsCommentsCookie = getCookie('fruitComments');

  const fruitComments = JSON.parse(fruitsCommentsCookie);

  const fruitsWithComments = fruits.map((fruit) => {
    const matchingWithFruitFromCookie = fruitComments.find(
      (fruitObject) => fruit.id === fruitObject.id,
    );
    // ? Optional Chaining, means if matchingWithFruitFromCookie === undefined, return undefined, else return comment
    return { ...fruit, comment: matchingWithFruitFromCookie?.comment };
  });

  console.log(fruitsWithComments);

  return (
    <>
      <h1>Fruits</h1>
      {fruitsWithComments.map((fruit) => {
        return (
          <div key={`fruit-${fruit.id}`}>
            <Link href={`/fruits/${fruit.id}`}>
              <h2>
                {fruit.icon} {fruit.name}
              </h2>
            </Link>
            <div>{fruit.comment}</div>
          </div>
        );
      })}
    </>
  );
}
