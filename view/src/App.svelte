/* Global styles for the body and main layout */
:global(body) {
  background-color: #D8BB6F;
  color: #F5EEE3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 0;
  padding: 0;
}

:global(main) {
  padding: 1rem;
  max-width: 100%;
  overflow-x: hidden;
}

footer {
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
  width: 100%;
}

/* Mobile-friendly styles */
@media (max-width: 768px) {
  :global(main) {
    padding: 0.5rem;
  }
  footer {
    padding: 0.5rem;
  }
}