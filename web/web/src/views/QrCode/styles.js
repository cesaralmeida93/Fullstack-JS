import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  h1 {
    color: #ee6b26;
  }

  p {
    color: #20295f;
  }
`

export const QrCodeArea = styled.div`
  width: 100%;
  height: 400px;
  background: red;
`
