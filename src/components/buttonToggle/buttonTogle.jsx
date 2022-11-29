import styled from 'styled-components';

const Button = styled.button`
    color: rgba(183, 183, 183, 0.5);
    cursor: pointer;
    `;

const ButtonToggle = styled(Button)`
    ${({ active }) =>
      active &&
      `
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      color: #A78466;
    `}
  `;

  export default ButtonToggle;