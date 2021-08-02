import styled from "styled-components";

export const Container = styled.div`
position: absolute;
top: 10px;
right: 20px;
display: flex;
align-items: center;

.step-number {
  height: 25px;
  width: 80.7px;
  color: #333333;
  font-family: Roboto;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.26px;
  line-height: 25px;
  text-align: right;
  margin-right: 10px;
}

.step-icons {
    display: flex;

    .step-active {
        width: 4px;
        height: 4px;
        background: black;
        border-radius: 50%;
        border-color: none;
        margin-right: 10px;
    }
    .step {
        width: 4px;
        height: 4px;
        background: grey;
        border-radius: 50%;
        border-color: none;
        margin-right: 10px;
    }
}
`