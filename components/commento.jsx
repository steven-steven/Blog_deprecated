// -----------------------------------------    Commento is currently disabled

// import React, { useEffect } from 'react';
// import styled from 'styled-components';

// import H2 from './elements/h2';

// const StyledContainer = styled.div`
//     margin-top: 5em;
// `;

// // Helper to add scripts to our page
// const insertScript = (src, id, parentElement) => {
//     const script = window.document.createElement('script');
//     script.async = true;
//     script.src = src;
//     script.id = id;
//     parentElement.appendChild(script);
//     return script;
// };

// // Helper to remove scripts from our page
// const removeScript = (id, parentElement) => {
//     const script = window.document.getElementById(id);
//     if (script) {
//         parentElement.removeChild(script);
//     }
// };

// // The actual component
// const Commento = ({ id }) => {
//     useEffect(() => {
//         // If there's no window there's nothing to do for us
//         if (!window) {
//             return;
//         }
//         const { document } = window;
//         // In case our #commento container exists we can add our commento script
//         if (document.getElementById('commento')) {
//             insertScript(
//                 `https://cdn.commento.io/js/commento.js`,
//                 `commento-script`,
//                 document.body
//             );
//         }

//         // Cleanup; remove the script from the page
//         // eslint-disable-next-line consistent-return
//         return () => removeScript(`commento-script`, document.body);
//     }, [id]);

//     return (
//         <StyledContainer>
//             <hr />
//             <H2>Drop Me Comments:</H2>
//             <div id={`commento`} />
//         </StyledContainer>
//     );
// };
// export default Commento;
