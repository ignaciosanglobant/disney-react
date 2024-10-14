# React interview instructions:
![image](https://github.com/user-attachments/assets/4d0de0c8-4d94-4579-b54e-85c6eb467f22)

1. From `App.jsx`, make a call to the url [https://rickandmortyapi.com/api/character/?page=1](https://rickandmortyapi.com/api/character/?page=1) and store the data in a state. You can check more info in the [Docs](https://rickandmortyapi.com/documentation#info-and-pagination).
2. Make the Card component (`components/Card.jsx`) to receive props, such as `name`, `location` (location.name), `type` and `image`.
3. Use the props received in step 1 to populate the `Card` component.
4. Uncomment the `Chevron` component commented on line 21. This is a button that receives an `onClick` function as a prop. It should show the next character in the list saved in state from step 1.
> [!IMPORTANT]
> The state with all the character should ALWAYS be in `App.jsx`. Card should ALWAYS receive only **one** character.

5. Enable the first `Chevron` from line 7. This one should change the displayed character to the previous one. Validate that if we are standing on the first character of the list, the chevron on the left should dissapear.
6. By default, the API on page 1 returns 20 characters. If we click the right chevron 20 times, it should do another fetch to the next page.
7. Implement a loading state whenever we are fetching data. Add a loader instead of the Card component.

## Extra Points
8. Implement React Context to the app, so the characters are saved into a general context instead a state.
9. Fill the card with all the info coming from the API. Also, add Routing to the app with [React Router](https://reactrouter.com/en/main) for example, so you can navigate through each component, like location or episodes.
10. Add a search filter at the top, and search for a specific card. Add the scenario for character not found.
11. Add [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) so the coverage of the app goes to *at least* 90%
