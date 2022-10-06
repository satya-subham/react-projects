import React, { useState } from 'react'
import { List } from './List'
import  Data  from "./Data"

export function Main() {
    const [people, setPeople] = useState(Data);
  return (
    <>
    <main>
        <section>
            <h2>{people.length} birthday today</h2>
            <List people={people}/>
            <button onClick={() => setPeople([])}>Clear All</button>
        </section>
    </main>
    </>
  )
}
