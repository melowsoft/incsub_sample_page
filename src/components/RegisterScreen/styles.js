import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;

  .right-col {
    width: 65%;
    background: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .form-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .info {
        height: 20px;
        width: 439px;
        color: #777777;
        font-family: Roboto;
        font-size: 12px;
        letter-spacing: 0.26px;
        line-height: 20px;
        margin-top: 10px;
        margin-bottom: 30px;
      }

      .terms {
        width: 510px;
        margin-top: 40px;
        height: 50px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0.26px;
        line-height: 25px;
        color: #777777;
      }

      .link-style {
        color: #286efa;
        cursor: pointer;
      }
    }

    .form-title {
      height: 38px;
      width: 480px;
      color: #333333;
      font-family: Roboto;
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 0.26px;
      line-height: 38px;
      margin-bottom: 20px;
    }

    .signin-info {
      height: 30px;
      width: 233px;
      font-family: Roboto;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 0.26px;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .signin-link {
      color: #286efa;
      cursor: pointer;
    }
  }

  .left-col {
    width: 35%;
    background: #286efa;
    display: flex;
    justify-content: center;
    align-items: center;

    .dummy-heading {
      height: 28px;
      width: 340px;
      color: #ffffff;
      font-family: Roboto;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 0.26px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 40px;
    }
  
    .dummy-desc {
      height: 149px;
      width: 340px;
      color: #ffffff;
      font-family: Roboto;
      font-size: 15px;
      letter-spacing: 0.26px;
      line-height: 28px;
    }
  }

  
`;
