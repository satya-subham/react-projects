import React from 'react'

export function List({people}) {
  return (
    <>
    {people.map((person) => {
      const {id, name, age, img} = person;
      return <article>
        <img src={img}/>
        <div>
          <h3>{name}</h3>
          <p>{age} years</p>
        </div>
      </article>
    })}
    </>
  )
}
