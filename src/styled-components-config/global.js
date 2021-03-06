import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


.blog-wrapper {
  background: ${({ theme }) => theme.body};
}
.wrapper {
  background: ${({ theme }) => theme.body};
}

.link {
  color: ${({ theme }) => theme.text} !important;
  text-decoration: none !important;
}

.homepage-header {
  color: ${({ theme }) => theme.text} !important;
}
.post-body {
  color: ${({ theme }) => theme.text} !important;
}
.blog-add-post{
  color: ${({ theme }) => theme.text} !important;
}
.homepage-body {
  color: ${({ theme }) => theme.text} !important;
}

.card-text {
  color: ${({ theme }) => theme.text} !important;
}

.card-header {
  color: ${({ theme }) => theme.text} !important;
}

.blog-footer-header {
  color: ${({ theme }) => theme.text} !important;
}
.blog-featured {
  color: ${({ theme }) => theme.text} !important;
}
.sidebar-text {
  color: ${({ theme }) => theme.text} !important;
}
.sidebar-header {
  color: ${({ theme }) => theme.text} !important;
}

.form-area {
  background: ${({ theme }) => theme.body};
}

.blog-landing-root {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text} !important;
}

body {
    background: ${({ theme }) => theme.body};
    transition: all 0.15s linear;
}
`;
