import styled from '@emotion/styled'
export const FormControl = styled.div`
  position: relative;
  width: 100%;
  .icon {
    position: absolute;
    top: 16px;
    left: 10px;
    font-size: 18px;
    color: #969696;
  }
  input {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    &:focus {
      outline: none;
    }
  }
  &:first-of-type {
    input {
      border-radius: 4px 4px 0 0;
    }
  }
  &:last-of-type {
    input {
      border-radius:  0 0 4px 4px;
    }
  }
  &:not(:last-of-type) {
    input {
      border-bottom: none;
    }
  }
`