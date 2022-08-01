import React from 'react';
// import { nanoid } from 'nanoid'
// import styled from 'styled-components';
import { ContactElement } from './ContactElement';

export const ContactList=({ contacts , onClick }) =>{
    return (
        <>
      <h2>Contacts:</h2>
    <ul>
      {contacts.map(({ id, name, number }) => (
          <ContactElement key={id} name={name} number={number} onClick={() => { onClick(id) }} />
      ))}
            </ul>
            </>
  );
}

// const StyledUl = styled.ul`
//   list-style: none;
//   margin: 0 auto;
//   max-width: fit-content;
//   & li {
//     padding: 0.5rem;
//     border-bottom: 1px solid purple;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     &:nth-child(2n) {
//       background-color: #ffffff4f;
//     }
//   }
//   & span {
//     margin-right: 20px;
//   }
//   & button {
//     padding: 5px 10px;
//     box-shadow: 0px 0px 2px black;
//     &:active {
//       background-color: lightblue;
//       box-shadow: inset 0px 0px 2px black;
//     }
//   }
// `;